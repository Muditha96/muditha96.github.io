// Do not upload confidential engineering files to this public website.
// Edit this file to update portfolio content. Use only public-safe wording and media.

window.portfolioData = {
  profile: {
    name: "Muditha Priyasad",
    role: "Mechanical & Automation Engineer",
    credential: "BSc (Hons) in Mechanical Engineering | IESL Associate Member: AM-32795",
    subtitle: "Machine Design · Factory Automation · PLC/SCADA Commissioning · Rapid Prototyping",
    summary: "I take industrial machines from concept to running line — SolidWorks design, fabrication, electrical wiring, PLC/SCADA control and on-site commissioning. 2+ years, 15+ real builds.",
    status: "Open to Better Opportunities",
    cv: "assets/docs/Muditha-Priyasad-CV.pdf",
    photo: "assets/images/hero/hero-portrait.png",
    email: "muditha00@icloud.com",
    phone: "+94 71 7599 667",
    phoneHref: "tel:+94717599667",
    tagline: "Mechanical & Automation Engineer — I design, build, wire and commission industrial machines (SolidWorks · PLC/SCADA · automation).",
    github: "",  // optional: paste your GitHub profile URL, e.g. https://github.com/yourname
    linkedin: "https://www.linkedin.com/in/muditha00",
    linkedinLabel: "linkedin.com/in/muditha00",
    whatsapp: "https://wa.me/94717599667",
    whatsappLabel: "+94 71 7599 667",
    location: "Sri Lanka",
    motto: "No matter how hard the dream, I won't stop until I make it real."
  },

  stats: [
    { value: "15+", label: "Practical Projects" },
    { value: "2+", label: "Years Experience" },
    { value: "9+", label: "Certifications" },
    { value: "Public", label: "Safe Project Evidence" }
  ],

  recruiterQuickView: {
    target: "Mechanical / Automation Engineering roles focused on machine design, industrial troubleshooting, fixture development and factory automation support.",
    strengths: ["Machine troubleshooting", "Fixture and jig design", "PLC / HMI support", "3D printing and prototyping", "Engineering documentation"],
    evidence: [
      { label: "Best project evidence", value: "LED machine troubleshooting, bonding tape automation, fixture design and training case studies." },
      { label: "Machines exposed to", value: "Assembly machines, packing machines, spot welders, screw feeders, testing fixtures and laser systems." },
      { label: "Software and tools", value: "SOLIDWORKS, AutoCAD, Power BI, MATLAB, PLC/HMI basics, slicers and documentation tools." }
    ],
    links: [
      { label: "Projects", href: "projects.html" },
      { label: "Machines", href: "machines.html" },
      { label: "Certifications", href: "certifications.html" }
    ]
  },

  expertise: [
    { title: "Industrial Automation", text: "PLC support, HMI troubleshooting, sensors, pneumatics, machine diagnostics and production support." },
    { title: "Machine Design", text: "Fixture concepts, assembly tooling, CAD modeling, mechanism thinking and practical manufacturability." },
    { title: "Digital Manufacturing", text: "FDM 3D printing, rapid prototyping, laser systems, printed jigs and low-cost production aids." },
    { title: "Engineering Software", text: "ERP workflow planning, KPI dashboards, inventory thinking, quotation systems and AI-assisted engineering workflows." }
  ],

  projects: [
    // ====== PROJECTS — add your own below ======
    // Copy this block for each project. Keep the comma between blocks.
    // filter options (controls which button shows it): automation, fixtures, printing,
    //   machine, robotics, software, calibration, thermal, training
    // images: rotating photos on the card (first one is the cover). videos: YouTube links.
    // doc: a PDF in assets/docs/projects/. Set featured:true to show it on the homepage.
    {
      title: "Project Title Here",
      category: "Category / Type",
      filter: "automation",
      summary: "One or two sentence public-safe summary of the project and the outcome.",
      tools: ["Tool 1", "Tool 2", "Tool 3"],
      image: "assets/images/projects/fan-fixture.svg",
      images: [
        "assets/images/projects/fan-fixture.svg"
      ],
      videos: [],
      doc: "",
      page: "projects.html",
      featured: true
    }
  ],
  skills: {
    toolMap: ["Design & modelling", "Automation support", "Digital fabrication", "Documentation & analysis"],
    groups: [
      {
        title: "CAD / Design",
        tools: [
          ["SOLIDWORKS", "Fixtures, assemblies and concepts"],
          ["AutoCAD", "2D drafting support"],
          ["Inkscape", "Vector layouts"],
          ["Illustrator", "Technical graphics"],
          ["Photoshop", "Image preparation"]
        ]
      },
      {
        title: "Automation / Industrial",
        tools: [
          ["PLC Systems", "Machine support and diagnostics"],
          ["HMI Troubleshooting", "Operator interface checks"],
          ["Sensors", "Detection and fault finding"],
          ["Pneumatics", "Automation hardware"],
          ["Electrical Wiring Understanding", "Panel and machine support"],
          ["Visio", "Process and workflow diagrams"]
        ]
      },
      {
        title: "Manufacturing / Digital Fabrication",
        tools: [
          ["OrcaSlicer", "FDM print preparation"],
          ["Cura", "Prototype slicing"],
          ["Creality Print", "Printer workflow"],
          ["LightBurn", "Laser engraving workflow"],
          ["LaserGRBL", "CNC laser control"],
          ["3D Printing Workflow", "Jigs, fixtures and trials"]
        ]
      },
      {
        title: "Data / Engineering Software",
        tools: [
          ["Power BI", "Dashboard concepts"],
          ["MATLAB", "Engineering calculation support"],
          ["MS Excel", "Tracking and analysis"],
          ["MS Office", "Reports and documentation"],
          ["AI Assisted Engineering", "Research and workflow planning"]
        ]
      }
    ],
    strengths: ["Root Cause Analysis", "Machine Troubleshooting", "Fixture Design", "Rapid Prototyping", "Manufacturing Support", "Documentation", "Cost-conscious Design", "Continuous Learning"]
  },

  machines: [
    // ====== MACHINES — add your own below ======
    // Copy this block for each machine you have worked with. Keep the comma between blocks.
    {
      slug: "machine-slug-here",
      title: "Machine Name",
      image: "assets/images/machines/testing-fixture.svg",
      description: "What this machine does (public-safe).",
      experience: "Your exposure: setup, troubleshooting, support, maintenance, etc.",
      technologies: "Key systems involved, comma separated",
      contribution: "Your public-safe contribution to this machine."
    }
  ],
  gallery: [
    // ====== VIDEO GALLERY (YouTube) ======
    // To show a video: upload it to YouTube (Unlisted is fine), then paste the link or ID
    // into the "youtube" field below. Optionally set "image" to a custom thumbnail; if left
    // out, the YouTube thumbnail is used automatically. Delete any entry you do not need.
    { title: "CNC Plotter & PCB Drilling Machine", category: "video / automation", filter: "video automation machine", youtube: "PASTE_YOUTUBE_LINK_OR_ID", alt: "CNC plotter and PCB drilling machine in operation", text: "Custom CNC plotter / PCB drilling machine running an automated drilling cycle." },
    { title: "Fan Base Filling Machine", category: "video / automation", filter: "video automation machine", youtube: "PASTE_YOUTUBE_LINK_OR_ID", alt: "Concrete fan base filling machine", text: "Production-support machine for concrete fan base filling, showing the automated cycle." },
    { title: "1W LED Bulb Assembly Machine", category: "video / automation", filter: "video automation machine", youtube: "PASTE_YOUTUBE_LINK_OR_ID", alt: "LED bulb assembly machine running", text: "LED bulb assembly machine performing an automated assembly sequence." },
    { title: "Wire Stripping Machine", category: "video / automation", filter: "video automation machine", youtube: "PASTE_YOUTUBE_LINK_OR_ID", alt: "Pneumatic wire stripping machine", text: "Pneumatic wire stripping machine demonstrating the strip cycle." },
    { title: "Custom 3D Printer Running", category: "video / machine build", filter: "video printing machine", youtube: "PASTE_YOUTUBE_LINK_OR_ID", alt: "Custom FDM 3D printer printing", text: "Personal custom FDM 3D printer build printing a part." },
    { title: "CNC Laser Engraving in Action", category: "video / laser work", filter: "video laser machine", youtube: "PASTE_YOUTUBE_LINK_OR_ID", alt: "CNC laser engraver running", text: "Custom CNC laser engraving machine engraving a design." },
    { title: "3D Printed Mechanism", category: "image / printing", filter: "image printing", image: "assets/images/gallery/real-3d-printed-mechanism.jpg", alt: "3D printed mechanism prototype", text: "Public-safe prototype image showing mechanical fit checks and iterative part development." },
    { title: "CNC Laser Engraving Machine", category: "image / machine", filter: "image machine", image: "assets/images/gallery/real-laser-engraving-machine.jpg", alt: "CNC laser engraving machine build", text: "Personal machine build showing motion hardware, control layout and practical assembly work." },
    { title: "Laser Engraving Trial", category: "image / machine", filter: "image machine", image: "assets/images/gallery/real-laser-engraving-sample.jpg", alt: "Laser engraving sample", text: "Public-safe test output from personal engraving experiments and process tuning." },
    { title: "Fixture Design Diagram", category: "diagram / fixtures", filter: "image fixtures", image: "assets/images/gallery/gallery-02.svg", alt: "Fixture design diagram", text: "Generic diagram used for company-sensitive fixture work where real CAD data must stay private." },
    { title: "Automation Troubleshooting", category: "diagram / automation", filter: "diagram automation", image: "assets/images/gallery/gallery-01.svg", alt: "Automation troubleshooting diagram", text: "Public-safe visual for PLC, sensor, pneumatic and mechanical fault-isolation workflows." },
    { title: "Engineering Workflow Dashboard", category: "diagram / software", filter: "diagram software", image: "assets/images/gallery/gallery-05.svg", alt: "Engineering workflow dashboard diagram", text: "Generic ERP/KPI workflow visual without company databases, source code or private screenshots." },
    { title: "CAD Concept Renders", category: "diagram / cad", filter: "diagram cad", image: "assets/images/gallery/gallery-08.svg", alt: "CAD concept render diagram", text: "Simplified visual language for machine concepts without exact drawings or dimensions." },
    { title: "Rotary Calibration Notes", category: "diagram / calibration", filter: "diagram automation", image: "assets/images/gallery/gallery-07.svg", alt: "Rotary calibration notes diagram", text: "Generic diagram for alignment and repeatability work without exposing production data." },
    { title: "University Engineering Exhibition", category: "achievement / exhibition", filter: "image achievement", image: "assets/Achievment/UOJ Battle ground Exhibition.jpg", alt: "University engineering exhibition display", text: "Public-safe achievement photo from university engineering project exhibition work." },
    { title: "Engineering Project Display Award", category: "achievement / award", filter: "image achievement", image: "assets/Achievment/3rd place for univesity stall with the best display of engineering projects.jpg", alt: "Engineering project display achievement", text: "Achievement evidence for project presentation and engineering exhibition display." },
    { title: "Battle Robot Fabrication", category: "image / robotics", filter: "image robotics", image: "assets/Achievment/While fabricating battle robot.JPG", alt: "Fabricating a battle robot project", text: "Hands-on fabrication work showing mechanism building, assembly and testing mindset." },
    { title: "YGC Innovation Festival", category: "achievement / innovation", filter: "image achievement", image: "assets/Achievment/YGC Innovation Festival 2023.JPG", alt: "YGC Innovation Festival 2023", text: "Public-safe innovation festival evidence connected to engineering presentation and project exposure." },
    { title: "MTone Design Work", category: "image / business", filter: "image printing", image: "assets/images/business/cover.jpg", alt: "MTone Designers business cover", text: "Public-safe visual for personal design, 3D printing and laser engraving work." },
    { title: "3D Printed Lithophane Art", category: "image / 3D printing", filter: "image printing", image: "assets/images/business/lithophane.jpg", alt: "3D printed lithophane art", text: "Example of 3D printing workflow, material preparation and creative product development." },
    { title: "3D Printer Build Evidence", category: "image / machine build", filter: "image printing", image: "assets/images/business/3d-printer-product.jpg", alt: "3D printer build", text: "Personal 3D printer work showing machine assembly, tuning and practical prototyping." },
    { title: "Laser Engraving Product Trial", category: "image / laser work", filter: "image machine", image: "assets/images/business/engraving-painted.jpg", alt: "Laser engraving on painted surface", text: "Public-safe laser engraving trial showing process experimentation and product finishing." },
    { title: "Line Follower Robot", category: "image / electronics", filter: "image automation", image: "assets/images/misc/line-follower.jpg", alt: "Line follower robot project", text: "Public-safe project evidence for electronics, sensors, control thinking and hands-on assembly." },
    { title: "Industrial CAD Concept Screenshot", category: "image / CAD", filter: "image cad", image: "assets/images/misc/chain-guard.jpg", alt: "CAD screenshot for chain guard concept", text: "Public-safe CAD screenshot showing design communication without exposing full drawings." },
    { title: "Training CAD - Feeding Mechanism", category: "training / CAD", filter: "image cad training", image: "assets/images/training-extracted/training-report-74.png", alt: "Public-safe CAD concept for material feeding mechanism", text: "Training-derived visual used to explain material-flow and machine-layout thinking without exact drawings." },
    { title: "Training CAD - Metal Separator", category: "training / machine concept", filter: "image cad training", image: "assets/images/training-extracted/training-report-75.png", alt: "Public-safe CAD concept for ferrous metal separator", text: "Simplified concept visual for magnetic separation and process-improvement thinking." },
    { title: "Training CAD - Filling Machine", category: "training / automation", filter: "image automation training", image: "assets/images/training-extracted/training-report-76.png", alt: "Public-safe CAD concept for liquid filling machine", text: "Public-safe concept image showing layout thinking for filling, bottle positioning and equipment flow." },
    { title: "Bonding Tape Machine Evidence", category: "training / automation", filter: "image automation training", image: "assets/images/training-extracted/ottuthal-training-50.png", alt: "Public-safe bonding tape automation machine evidence", text: "Training-derived machine evidence with sensitive company details removed from the written description." },
    { title: "3D Printer Motion Prototype", category: "curated / machine build", filter: "image curated printing machine", image: "assets/images/gallery/curated/3d-printer-prototype.jpg", alt: "3D printer motion prototype", text: "Curated public-safe evidence showing printer mechanism learning, motion-system assembly and rapid prototyping work." },
    { title: "Machine Frame Build", category: "curated / fabrication", filter: "image curated machine automation", image: "assets/images/gallery/curated/machine-frame-build.jpg", alt: "Machine frame and mechanism build", text: "Public-safe photo evidence of frame assembly, mechanical layout thinking and practical machine-building exposure." },
    { title: "Controller Panel Work", category: "curated / automation", filter: "image curated automation", image: "assets/images/gallery/curated/controller-panel.jpg", alt: "Controller panel and machine electronics", text: "General automation evidence for controller layout, wiring awareness and machine-support learning without publishing diagrams." },
    { title: "Fixture Mechanism Detail", category: "curated / fixtures", filter: "image curated fixtures machine", image: "assets/images/gallery/curated/fixture-mechanism.jpg", alt: "Fixture and mechanism detail", text: "Public-safe detail photo showing mechanism observation, fixture thinking and hands-on assembly experience." },
    { title: "Laser Engraving Work", category: "curated / laser work", filter: "image curated machine laser", image: "assets/images/gallery/curated/laser-engraving-work.jpg", alt: "Laser engraving work evidence", text: "Laser engraving workflow evidence covering setup, material trials and process-tuning practice." },
    { title: "Project Exhibition Machine", category: "curated / exhibition", filter: "image curated achievement machine", image: "assets/images/gallery/curated/project-exhibition-machine.jpg", alt: "Project machine displayed at exhibition", text: "Public-safe exhibition evidence showing engineering communication, machine display and practical project presentation." },
    { title: "Mechanism Detail Study", category: "curated / mechanism", filter: "image curated machine fixtures", image: "assets/images/gallery/curated/mechanism-detail.jpg", alt: "Mechanism detail study", text: "Cropped evidence for mechanism understanding, fit checks and physical problem-solving without sensitive project details." },
    { title: "Wood Engraving Sample", category: "curated / laser sample", filter: "image curated laser", image: "assets/images/gallery/curated/wood-engraving-sample.jpg", alt: "Wood engraving sample", text: "Public-safe laser engraving sample showing process experimentation, material behavior and finishing quality." },
    { title: "Laser Engraving Work", category: "image / laser work", filter: "image curated machine laser", image: "assets/images/gallery/curated/laser-engraving-work.jpg", alt: "Laser engraving work", text: "Public-safe evidence of CNC laser engraving work, showing motion control, material handling and finishing quality." },
    { title: "Personal Sustainability Planting", category: "personal project / sustainability", filter: "image curated personal", image: "assets/images/gallery/curated/personal-sustainability-planting.jpg", alt: "Personal sustainability planting project", text: "Public-safe personal project evidence. Kept separate from industrial machines so recruiters can clearly distinguish engineering work from personal initiatives." },
    { title: "Field Observation Project", category: "personal project / field work", filter: "image curated personal", image: "assets/images/gallery/curated/field-observation-personal-project.jpg", alt: "Field observation for personal project", text: "Personal project visual used as supporting context only, not listed as industrial machine experience." }
  ],

  certifications: [
    { name: "BSc (Hons) Mechanical Engineering", issuer: "University of Jaffna", detail: "Academic foundation in mechanical engineering." },
    { name: "IESL Associate Member", issuer: "AM-32795", detail: "Professional engineering membership." },
    { name: "CSWA - CAD Design", issuer: "SOLIDWORKS", detail: "Certified SOLIDWORKS Associate for CAD design.", file: "assets/certificates/Certificate_C-UQGLWM7JCK.pdf" },
    { name: "CSWA-AM - Additive Manufacturing", issuer: "SOLIDWORKS", detail: "Additive manufacturing certification.", file: "assets/certificates/Certificate_C-T7NHSLZ59X.pdf" },
    { name: "PLC Programming", issuer: "Epic Engineering, 2024", detail: "Industrial PLC programming training." },
    { name: "PLC Training", issuer: "University of Moratuwa", detail: "Automation and PLC fundamentals." },
    { name: "Maintenance of Industrial Plant & Machinery", issuer: "NERDC", detail: "Industrial maintenance training." },
    { name: "Industrial Motor Operation & Control", issuer: "NERDC", detail: "Motor operation and control training." },
    { name: "Advanced Injection Molding", issuer: "IDB", detail: "Manufacturing process training." }
  ],

  availableFor: ["Automation Engineering", "Mechanical Design", "Machine Troubleshooting", "Fixture Design", "3D Printing & Prototyping", "Engineering Documentation"],

  // ====== COMMENTS / TESTIMONIALS ======
  // Paste your free Formspree endpoint here so the "Leave a comment" form works.
  // Get it at https://formspree.io (see HOW-TO-COMMENTS.md). Example: "https://formspree.io/f/xxxxxx"
  commentsEndpoint: "",

  // Only comments YOU add here appear on the site (approval = you paste an approved one in).
  // To add an approved comment: copy a block below, fill it in, keep the comma.
  testimonials: [
    // Example (you can delete or replace):
    { name: "Sample Reviewer", role: "Manager, Example Pvt Ltd", message: "Muditha is a hands-on engineer who takes a machine from concept to a running line. Reliable, practical and quick to troubleshoot.", date: "2026" }
  ]
};
