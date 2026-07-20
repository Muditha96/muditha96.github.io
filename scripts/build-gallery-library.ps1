param(
    [Parameter(Mandatory = $true)]
    [string]$Source,

    [Parameter(Mandatory = $true)]
    [string]$Repository,

    [int]$MaxDimension = 1600,
    [ValidateRange(1, 100)]
    [int]$JpegQuality = 82
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Drawing

$sourceRoot = (Resolve-Path -LiteralPath $Source).Path
$repositoryRoot = (Resolve-Path -LiteralPath $Repository).Path
$outputRoot = Join-Path $repositoryRoot "assets\images\gallery\library"
$manifestPath = Join-Path $repositoryRoot "data\gallery-library.js"

New-Item -ItemType Directory -Path $outputRoot -Force | Out-Null

function Get-SafeSlug {
    param([string]$Value)

    $slug = $Value.ToLowerInvariant()
    $slug = $slug -replace "[^a-z0-9]+", "-"
    $slug = $slug.Trim("-")
    if (-not $slug) {
        return "engineering-image"
    }
    return $slug
}

function Get-DisplayTitle {
    param([string]$Value)

    $title = $Value -replace "[_-]+", " "
    $title = $title -replace "\s+", " "
    $replacements = [ordered]@{
        "(?i)\btatoo?t?\b" = "Tattoo"
        "(?i)\brobor\b" = "Robot"
        "(?i)\blithopane\b" = "Lithophane"
        "(?i)\bmahogani\b" = "Mahogany"
        "(?i)\bcalander\b" = "Calendar"
        "(?i)\bcaltus\b" = "Cactus"
        "(?i)atching" = "Etching"
        "(?i)#d" = "3D"
        "(?i)\buoj\b" = "UOJ"
        "(?i)\bol school\b" = "Old School"
    }
    foreach ($pattern in $replacements.Keys) {
        $title = $title -replace $pattern, $replacements[$pattern]
    }
    $title = (Get-Culture).TextInfo.ToTitleCase($title.ToLowerInvariant())
    $title = $title -replace "\b3d\b", "3D"
    $title = $title -replace "\bCad\b", "CAD"
    $title = $title -replace "\bPetg\b", "PETG"
    $title = $title -replace "\bVs\b", "vs"
    $title = $title -replace "\b3Rd\b", "3rd"
    $title = $title -replace "\bUoj\b", "UOJ"
    $title = $title -replace "\bPlc\b", "PLC"
    $title = $title -replace "\bYgc\b", "YGC"
    return $title.Trim()
}

function Get-GalleryMetadata {
    param([string]$Name)

    if ($Name -match "(?i)laser|engrave|etch|atching|norton") {
        return @{
            category = "gallery / laser work"
            filter = "image library laser machine"
            text = "Gallery evidence of laser-machine development, material trials, engraving setup or finished output."
        }
    }
    if ($Name -match "(?i)robot|battle|combat|line follower") {
        return @{
            category = "gallery / robotics"
            filter = "image library robotics automation"
            text = "Gallery evidence of robotics, mechanism assembly, testing or engineering exhibition work."
        }
    }
    if ($Name -match "(?i)3d|print|petg|caltus|litho|vehicle part") {
        return @{
            category = "gallery / 3D printing"
            filter = "image library printing machine"
            text = "Gallery evidence of 3D printing, part redesign, prototyping, machine setup or finished components."
        }
    }
    if ($Name -match "(?i)screenshot|cad|scada|filling|guard|gripper") {
        return @{
            category = "gallery / CAD & automation"
            filter = "image library cad automation machine"
            text = "Public-safe CAD or automation visual showing mechanism, machine-layout or control-system thinking."
        }
    }
    if ($Name -match "(?i)exhibition|stall|award|degree|course|techno|ygc|festival") {
        return @{
            category = "gallery / achievement"
            filter = "image library achievement"
            text = "Engineering achievement, training, exhibition or public project-presentation evidence."
        }
    }
    return @{
        category = "gallery / project evidence"
        filter = "image library project"
        text = "Additional public-safe engineering project evidence from the complete image gallery collection."
    }
}

function Set-ExifOrientation {
    param([System.Drawing.Image]$Image)

    if ($Image.PropertyIdList -notcontains 274) {
        return
    }
    $orientation = $Image.GetPropertyItem(274).Value[0]
    $rotation = switch ($orientation) {
        2 { [System.Drawing.RotateFlipType]::RotateNoneFlipX }
        3 { [System.Drawing.RotateFlipType]::Rotate180FlipNone }
        4 { [System.Drawing.RotateFlipType]::Rotate180FlipX }
        5 { [System.Drawing.RotateFlipType]::Rotate90FlipX }
        6 { [System.Drawing.RotateFlipType]::Rotate90FlipNone }
        7 { [System.Drawing.RotateFlipType]::Rotate270FlipX }
        8 { [System.Drawing.RotateFlipType]::Rotate270FlipNone }
        default { [System.Drawing.RotateFlipType]::RotateNoneFlipNone }
    }
    if ($rotation -ne [System.Drawing.RotateFlipType]::RotateNoneFlipNone) {
        $Image.RotateFlip($rotation)
    }
}

function Save-OptimizedJpeg {
    param(
        [string]$InputPath,
        [string]$OutputPath
    )

    $sourceImage = [System.Drawing.Image]::FromFile($InputPath)
    try {
        Set-ExifOrientation -Image $sourceImage
        $scale = [Math]::Min(1.0, $MaxDimension / [double][Math]::Max($sourceImage.Width, $sourceImage.Height))
        $width = [Math]::Max(1, [int][Math]::Round($sourceImage.Width * $scale))
        $height = [Math]::Max(1, [int][Math]::Round($sourceImage.Height * $scale))
        $bitmap = New-Object System.Drawing.Bitmap($width, $height, [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
        try {
            $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
            try {
                $graphics.Clear([System.Drawing.Color]::White)
                $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
                $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
                $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
                $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
                $graphics.DrawImage($sourceImage, 0, 0, $width, $height)
            }
            finally {
                $graphics.Dispose()
            }
            $jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
                Where-Object { $_.MimeType -eq "image/jpeg" } |
                Select-Object -First 1
            $encoderParameters = New-Object System.Drawing.Imaging.EncoderParameters(1)
            try {
                $encoderParameters.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
                    [System.Drawing.Imaging.Encoder]::Quality,
                    [long]$JpegQuality
                )
                $bitmap.Save($OutputPath, $jpegCodec, $encoderParameters)
            }
            finally {
                $encoderParameters.Dispose()
            }
        }
        finally {
            $bitmap.Dispose()
        }
    }
    finally {
        $sourceImage.Dispose()
    }
}

$supportedExtensions = @(".jpg", ".jpeg", ".png")
$sourceFiles = Get-ChildItem -LiteralPath $sourceRoot -File -Recurse |
    Where-Object { $supportedExtensions -contains $_.Extension.ToLowerInvariant() } |
    Sort-Object FullName

$slugCounts = @{}
$entries = New-Object System.Collections.Generic.List[object]
$index = 0
foreach ($file in $sourceFiles) {
    $index++
    $baseSlug = Get-SafeSlug -Value $file.BaseName
    if ($slugCounts.ContainsKey($baseSlug)) {
        $slugCounts[$baseSlug]++
        $slug = "$baseSlug-$($slugCounts[$baseSlug])"
    }
    else {
        $slugCounts[$baseSlug] = 1
        $slug = $baseSlug
    }

    $number = $index.ToString("000")
    if ($file.Extension.ToLowerInvariant() -eq ".png") {
        $outputName = "gallery-$number-$slug.png"
        Copy-Item -LiteralPath $file.FullName -Destination (Join-Path $outputRoot $outputName) -Force
    }
    else {
        $outputName = "gallery-$number-$slug.jpg"
        Save-OptimizedJpeg -InputPath $file.FullName -OutputPath (Join-Path $outputRoot $outputName)
    }

    $title = Get-DisplayTitle -Value $file.BaseName
    if ($file.BaseName -match "(?i)^(IMG(?:-|_)?|MIUZ|RPMX|\d{8}|[0-9A-F]{8}-[0-9A-F]{4}-)") {
        $title = "Engineering Project Evidence $number"
    }
    $metadata = Get-GalleryMetadata -Name $file.BaseName
    $entries.Add([ordered]@{
        title = $title
        category = $metadata.category
        filter = $metadata.filter
        image = "assets/images/gallery/library/$outputName"
        alt = $title
        text = $metadata.text
    })
}

$json = $entries | ConvertTo-Json -Depth 4
$manifest = "// Generated by scripts/build-gallery-library.ps1. Edit the source images, then rebuild.`r`nwindow.portfolioGalleryLibrary = $json;`r`n"
[System.IO.File]::WriteAllText($manifestPath, $manifest, (New-Object System.Text.UTF8Encoding($false)))

$outputFiles = Get-ChildItem -LiteralPath $outputRoot -File
[PSCustomObject]@{
    SourceImages = $sourceFiles.Count
    OutputImages = $outputFiles.Count
    OutputSizeMB = [Math]::Round((($outputFiles | Measure-Object Length -Sum).Sum / 1MB), 2)
    Manifest = $manifestPath
}
