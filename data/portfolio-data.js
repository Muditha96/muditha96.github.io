// Do not upload confidential engineering files to this public website.
// Edit this file to update portfolio content. Use only public-safe wording and media.

window.portfolioData = {
  profile: {
    name: "Muditha Priyasad",
    role: "Mechanical Design, Automation & R&D Engineer",
    credential: "BSc (Hons) in Mechanical Engineering | IESL Associate Member: AM-32795",
    subtitle: "Machine design | Prototyping | Commissioning | Troubleshooting | PLC-based control | Pneumatics | DfMA",
    summary: "Mechanical Design, Automation & R&D Engineer with 2+ years experience across 15+ delivered projects spanning machine design, prototyping, commissioning and troubleshooting of production equipment. Skilled in PLC-based control, pneumatics, DfMA and rapid prototyping, with a track record of delivering low-cost automation and tooling that measurably improve throughput, consistency and operator productivity.",
    status: "Open to Better Opportunities",
    cv: "assets/docs/Muditha-Priyasad-CV.pdf",
    photo: "assets/images/hero/hero-portrait.png",
    email: "muditha00@icloud.com",
    phone: "+94 71 7599 667",
    phoneHref: "tel:+94717599667",
    tagline: "Mechanical Design, Automation & R&D Engineer - low-cost automation, tooling, commissioning and production troubleshooting.",
    github: "",  // optional: paste your GitHub profile URL, e.g. https://github.com/yourname
    linkedin: "https://www.linkedin.com/in/muditha00",
    linkedinLabel: "linkedin.com/in/muditha00",
    whatsapp: "https://wa.me/94717599667",
    whatsappLabel: "+94 71 7599 667",
    location: "Sri Lanka",
    experience: "2+ years experience across 15+ delivered projects | 20+ MTone custom jobs | 4 industrial environments.",
    bestFitRoles: ["Automation Engineer", "Mechatronics Engineer", "Mechanical Design Engineer", "Production Engineer", "Maintenance / Reliability Engineer", "R&D / Machine Development Engineer"],
    openTo: "Automation / Mechatronics / Mechanical Design / Production Engineering roles",
    capabilityHighlights: ["Machine troubleshooting", "Jigs & fixtures", "PLC / HMI support", "3D printed tooling", "Factory improvement"],
    confidentiality: "Some factory projects contain confidential machine details, drawings, PLC logic, wiring and production information. This portfolio shows public-safe summaries only. Detailed technical approach can be discussed during interviews while respecting confidentiality.",
    motto: "No matter how hard the dream, I won't stop until I make it real."
  },

  stats: [
    { value: "15+", label: "Delivered Projects" },
    { value: "2+", label: "Years Experience" },
    { value: "6", label: "CV Certifications" },
    { value: "20+", label: "MTone Custom Jobs" }
  ],

  recruiterQuickView: {
    target: "Mechanical Design, Automation & R&D roles focused on machine design, prototyping, commissioning, production troubleshooting and low-cost automation.",
    strengths: ["Machine design", "Prototyping", "Commissioning", "Production troubleshooting", "PLC-based control", "Pneumatics", "DfMA", "Rapid prototyping"],
    evidence: [
      { label: "Best project evidence", value: "Production machines, jigs, fixtures, pneumatic mechanisms, custom 3D printers, laser machines and training case studies." },
      { label: "Machines exposed to", value: "Spot welding, packing, pad printing, LED cup installation, screen-printer troubleshooting, testing, oil filling and glove-making machine service." },
      { label: "Software and tools", value: "SOLIDWORKS, Siemens STEP 7 Micro/WIN, Delta ISPSoft, Mitsubishi GX Works, Xinje PLC Software, MS Excel, OrcaSlicer, Cura, LightBurn, Inkscape, Arduino IDE, Python, C++, Raspberry Pi. Also familiar with AutoCAD, MATLAB and Power BI." }
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
    {
      slug: "led-bulb-machine",
      title: "1W LED Bulb Assembly Machine",
      category: "R&D Project",
      filter: "automation",
      oneLineProblem: "Needed an automated way to assemble 1W LED bulbs.",
      contribution: "Designed and built a working prototype machine to assemble 1W LED bulbs.",
      tools: ["PLC/HMI", "Sensors", "Pneumatics", "Fault finding"],
      impact: "Demonstrated a working automated assembly concept end to end.",
      summary: "A self-built prototype machine that automates the assembly of 1W LED bulbs — mechanical design, actuation and control in one working build.",
      problem: "1W LED bulb assembly was manual and slow; an automated prototype was needed to prove the concept.",
      role: "I designed and built the prototype machine — mechanical layout, actuation and the assembly sequence.",
      method: "Mechanical design, pneumatic/actuator sequencing and control logic to feed, place and assemble the bulb components in a repeatable cycle.",
      result: "An automated assembly concept that reduces repetitive handling, guides parts correctly and improves production consistency.",
      image: "assets/images/projects/led-bulb.svg",
      images: ["assets/images/projects/led-bulb.svg"],
      videos: [{ youtube: "https://youtu.be/iFlCn68JsZg", title: "1W LED bulb assembling machine" }],
      doc: "",
      page: "project-detail.html?project=led-bulb-machine",
      featured: true
    },
    {
      slug: "fan-motor-fixture",
      title: "Fan Motor Assembly Fixture",
      category: "Jig & Fixture Design",
      filter: "fixtures",
      oneLineProblem: "Assembly support and repeatability needed improvement.",
      contribution: "Developed fixture concepts using mechanical design and rapid prototyping.",
      tools: ["SOLIDWORKS", "Fixtures", "3D Printing", "Assembly"],
      impact: "Improved assembly support and reduced manual handling difficulty.",
      summary: "Assembly fixture concept for fan motor work, focused on repeatability and easier operator handling.",
      problem: "Manual fan motor assembly lacked consistent support, making repeatability and handling harder than needed.",
      role: "I developed the fixture concept — modelling it in SOLIDWORKS and using rapid prototyping to test fit and handling.",
      method: "Mechanical design of the holding/locating features, design-for-3D-printing, and iterative prototype checks for part positioning and operator access.",
      result: "Improved assembly support and reduced manual handling difficulty, supporting more consistent assembly.",
      image: "assets/images/projects/fan-fixture.svg",
      images: ["assets/images/projects/fan-fixture.svg"],
      videos: [{ youtube: "https://youtube.com/shorts/EN6CXNIlDGc", title: "Low-cost motor assembling jig" }],
      doc: "",
      page: "project-detail.html?project=fan-motor-fixture",
      featured: true
    },
    {
      slug: "fan-base-filling",
      title: "Fan Base Filling Machine",
      category: "Industrial Automation",
      filter: "automation",
      oneLineProblem: "Filling fan bases manually was slow and inconsistent.",
      contribution: "Built a production-support machine to fill fan bases in a controlled, repeatable cycle.",
      tools: ["Automation", "Pneumatics", "Production support", "Mechanism design"],
      impact: "Increased output ~400% — from 1 to 6 units per minute.",
      summary: "A guided filling and assembly machine for fan bases — oil application, nut tightening and part alignment in one high-throughput cycle.",
      problem: "Filling fan bases by hand was slow, inconsistent and labour-intensive.",
      role: "I worked on the machine build, filling mechanism and the operating cycle.",
      method: "Mechanism and pneumatic work to control the fill, with a repeatable cycle and operator-friendly handling.",
      result: "Raised throughput from ~1 to ~6 units per minute (about a 400% output increase) by developing and commissioning the guided filling and assembly machine.",
      image: "assets/images/projects/gravity-feed.svg",
      images: ["assets/images/projects/gravity-feed.svg"],
      videos: [{ youtube: "https://youtube.com/shorts/L76piK7CX1Y", title: "Fan base filling machine" }],
      doc: "",
      page: "project-detail.html?project=fan-base-filling",
      featured: true
    },
    {
      slug: "eyelet-puncher",
      title: "Eyelet Puncher Machine",
      category: "Machine Build / Automation",
      filter: "automation",
      oneLineProblem: "Eyelet punching needed a faster, repeatable, operator-safe cycle.",
      contribution: "Worked on the punching mechanism, feeding and a consistent, safe operating cycle.",
      tools: ["Mechanism design", "Pneumatics", "Production support", "Safety"],
      impact: "Increased B22 eyelet punching speed ~3x and reduced operator effort.",
      summary: "An ergonomic automated eyelet puncher with optimised mechanical action for fast, repeatable B22 eyelet work.",
      problem: "Eyelet punching required a faster, more repeatable cycle with safer operator handling.",
      role: "I worked on the punching mechanism, material feeding and the overall operating cycle.",
      method: "Mechanism design, pneumatic actuation and feed/sequence work to make the punch consistent and safe to run.",
      result: "Increased punching speed about 3x and reduced operator effort through an optimised, ergonomic mechanism.",
      image: "assets/images/projects/plug-testing.svg",
      images: ["assets/images/projects/plug-testing.svg"],
      videos: [{ youtube: "https://youtube.com/shorts/rZMN3a7nWfA", title: "Eyelet puncher machine" }],
      doc: "",
      page: "project-detail.html?project=eyelet-puncher",
      featured: true
    },
    {
      slug: "led-cube",
      title: "8×8×8 LED Cube",
      category: "Electronics / Personal Project",
      filter: "software",
      oneLineProblem: "Wanted a hands-on electronics build to learn multiplexing and control.",
      contribution: "Designed, soldered and programmed a 3D LED cube with animated patterns.",
      tools: ["Electronics", "Microcontroller", "Soldering", "Programming"],
      impact: "Demonstrated electronics, control logic and hands-on build skills.",
      summary: "A personal 8×8×8 LED cube build — hardware soldering plus microcontroller programming for animated 3D patterns.",
      problem: "A personal project to practise electronics, multiplexing and embedded control hands-on.",
      role: "I designed the layout, soldered the LED matrix and programmed the control logic and animations.",
      method: "LED multiplexing, microcontroller programming and careful hand-soldering of the 3D matrix.",
      result: "A working animated 3D LED cube — evidence of electronics, control logic and build patience.",
      image: "assets/images/projects/mtone-erp.svg",
      images: ["assets/images/projects/mtone-erp.svg"],
      videos: [{ youtube: "https://youtube.com/shorts/qrtzoQODFzQ", title: "8x8x8 LED cube" }],
      doc: "",
      page: "project-detail.html?project=led-cube",
      featured: true
    },
    {
      slug: "cnc-laser-engraver",
      title: "CNC Laser Engraver",
      category: "Machine Build",
      filter: "machine",
      oneLineProblem: "Needed a low-cost CNC laser for engraving and cutting.",
      contribution: "Designed and built a custom CNC laser engraving machine.",
      tools: ["CNC", "Motion control", "LightBurn", "Fabrication"],
      impact: "A working engraver for wood and other materials.",
      summary: "A self-built CNC laser engraving machine for engraving and light cutting.",
      problem: "A capable but affordable CNC laser engraver was needed for engraving work.",
      role: "I designed the frame, motion system and wiring, and set up the laser control.",
      method: "Mechanical build, stepper/motion setup and laser control via GRBL/LightBurn.",
      result: "A working CNC laser engraver producing clean engravings.",
      image: "assets/images/projects/led-bulb.svg",
      images: ["assets/images/projects/led-bulb.svg"],
      videos: [{ youtube: "PASTE_YOUTUBE_LINK_OR_ID", title: "CNC Laser Engraver" }],
      doc: "",
      page: "project-detail.html?project=cnc-laser-engraver"
    },
    {
      slug: "custom-3d-printer",
      title: "Custom FDM 3D Printer",
      category: "Machine Build",
      filter: "printing machine",
      oneLineProblem: "Wanted a custom 3D printer for prototyping and tooling.",
      contribution: "Designed, built and tuned a custom FDM 3D printer.",
      tools: ["FDM", "Mechanical design", "Slicing", "Calibration"],
      impact: "Reliable prints for jigs, fixtures and prototypes.",
      summary: "A self-built and tuned FDM 3D printer used for prototyping and production tooling.",
      problem: "A reliable, custom 3D printer was needed for low-cost prototyping.",
      role: "I built the frame and motion system, wired the electronics and tuned print quality.",
      method: "Mechanical assembly, electronics wiring, firmware and slicer calibration.",
      result: "A reliable printer producing usable jigs, fixtures and prototypes.",
      image: "assets/images/projects/fan-fixture.svg",
      images: ["assets/images/projects/fan-fixture.svg"],
      videos: [{ youtube: "PASTE_YOUTUBE_LINK_OR_ID", title: "Custom FDM 3D Printer" }],
      doc: "",
      page: "project-detail.html?project=custom-3d-printer"
    },
    {
      slug: "hopping-robot",
      title: "Bio-Inspired Hopping Robot",
      category: "Robotics / R&D",
      filter: "robotics",
      oneLineProblem: "Explore legged hopping locomotion as a research build.",
      contribution: "Designed and built a bio-inspired hopping robot mechanism.",
      tools: ["Robotics", "Mechanism design", "Control", "Prototyping"],
      impact: "Demonstrated a working hopping locomotion concept.",
      summary: "A research robot exploring bio-inspired hopping locomotion.",
      problem: "A hands-on research project to study legged hopping motion.",
      role: "I designed the leg mechanism and worked on the actuation and control.",
      method: "Mechanism design, actuator selection and control tuning for the hop cycle.",
      result: "A working hopping mechanism demonstrating the locomotion concept.",
      image: "assets/images/projects/gravity-feed.svg",
      images: ["assets/images/projects/gravity-feed.svg"],
      videos: [{ youtube: "PASTE_YOUTUBE_LINK_OR_ID", title: "Bio-Inspired Hopping Robot" }],
      doc: "",
      page: "project-detail.html?project=hopping-robot"
    },
    {
      slug: "combat-robots",
      title: "Combat Robots",
      category: "Robotics",
      filter: "robotics",
      oneLineProblem: "Build competitive combat robots for university events.",
      contribution: "Designed, fabricated and tested combat robots.",
      tools: ["Fabrication", "Drivetrain", "Electronics", "Testing"],
      impact: "Hands-on build, drivetrain and durability work.",
      summary: "Competitive combat robots designed and fabricated for university competitions.",
      problem: "Robust, competitive combat robots were needed for events.",
      role: "I worked on fabrication, drivetrain, weapon mounting and testing.",
      method: "Chassis fabrication, drivetrain assembly, electronics and impact testing.",
      result: "Working combat robots tested and entered into competition.",
      image: "assets/images/projects/plug-testing.svg",
      images: ["assets/images/projects/plug-testing.svg"],
      videos: [{ youtube: "PASTE_YOUTUBE_LINK_OR_ID", title: "Combat Robots" }],
      doc: "",
      page: "project-detail.html?project=combat-robots"
    },
    {
      slug: "wire-stripper",
      title: "Pneumatic Wire Stripping Machine",
      category: "Automation",
      filter: "automation",
      oneLineProblem: "Manual wire stripping was slow and inconsistent.",
      contribution: "Built a pneumatic wire stripping machine for a faster cycle.",
      tools: ["Pneumatics", "Mechanism design", "Production support"],
      impact: "Faster, more consistent wire stripping.",
      summary: "A pneumatic machine that strips wire in a controlled, repeatable cycle.",
      problem: "Stripping wire by hand was slow and inconsistent.",
      role: "I worked on the stripping mechanism and the pneumatic cycle.",
      method: "Pneumatic actuation and mechanism design for a repeatable strip cycle.",
      result: "Faster, more consistent wire stripping in production.",
      image: "assets/images/projects/led-bulb.svg",
      images: ["assets/images/projects/led-bulb.svg"],
      videos: [{ youtube: "PASTE_YOUTUBE_LINK_OR_ID", title: "Pneumatic Wire Stripping Machine" }],
      doc: "",
      page: "project-detail.html?project=wire-stripper"
    },
    {
      slug: "pcb-drilling",
      title: "CNC PCB Drilling Machine",
      category: "Machine Build / CNC",
      filter: "machine",
      oneLineProblem: "Needed precise, repeatable drilling for PCBs.",
      contribution: "Built a small CNC machine for PCB drilling.",
      tools: ["CNC", "Motion control", "Electronics", "Precision"],
      impact: "Drills 18 PCB pieces in one setup with better accuracy and repeatability.",
      summary: "A CNC-controlled PCB drilling rig built for NDM Electrical Pvt Ltd — drilling 18 PCB pieces per setup with improved alignment, accuracy and finish.",
      problem: "Drilling PCB holes by hand lacked precision and repeatability.",
      role: "I built the motion system and set up the drilling control.",
      method: "Compact CNC mechanics, stepper control and drilling toolpath setup.",
      result: "Drilled 18 PCB pieces in one setup with improved alignment, accuracy, repeatability and finish quality while reducing manual work (built for NDM Electrical Pvt Ltd).",
      image: "assets/images/projects/mtone-erp.svg",
      images: ["assets/images/projects/mtone-erp.svg"],
      videos: [{ youtube: "PASTE_YOUTUBE_LINK_OR_ID", title: "CNC PCB Drilling Machine" }],
      doc: "",
      page: "project-detail.html?project=pcb-drilling"
    },
    {
      slug: "bonding-tape-machine",
      title: "Bonding Tape Attaching Machine",
      category: "Industrial Automation",
      filter: "automation",
      oneLineProblem: "Tape feeding, cutting and bonding needed automation.",
      contribution: "Worked on feeding, measuring, cutting and heat-bonding tape onto fabric.",
      tools: ["PLC", "PID control", "Pneumatics", "Stepper motor"],
      impact: "Automated, repeatable tape bonding cycle.",
      summary: "An automation machine that feeds, measures, cuts and heat-bonds tape onto fabric in a repeatable cycle.",
      problem: "Bonding tape onto fabric manually was slow and inconsistent.",
      role: "I worked on the pneumatic sequencing, heating control and feed mechanism.",
      method: "PLC sequencing, PID temperature control, pneumatics and stepper-based feeding.",
      result: "A repeatable, automated tape-bonding cycle.",
      image: "assets/images/projects/fan-fixture.svg",
      images: ["assets/images/projects/fan-fixture.svg"],
      videos: [{ youtube: "PASTE_YOUTUBE_LINK_OR_ID", title: "Bonding Tape Attaching Machine" }],
      doc: "",
      page: "project-detail.html?project=bonding-tape-machine"
    }
  ],
  skills: {
    toolMap: ["Mechanical design & DfMA", "Automation & commissioning", "Manufacturing improvement", "Digital fabrication"],
    groups: [
      {
        title: "Mechanical Design",
        level: "Strong / Practical",
        tools: [
          ["SOLIDWORKS", "Parts, assemblies, fixtures"],
          ["Mechanisms", "Jigs, fixtures, 3D CAD and DfMA"],
          ["Jigs & fixtures", "Assembly and test tooling"],
          ["Fabrication support", "Buildable parts, tooling and production aids"]
        ]
      },
      {
        title: "Automation & Controls",
        level: "Practical / Working knowledge",
        tools: [
          ["PLC programming", "Siemens STEP 7 Micro/WIN, Delta ISPSoft, Mitsubishi GX Works, Xinje PLC Software"],
          ["HMI & troubleshooting", "Fault isolation & recovery"],
          ["Sensors", "Detection & alignment"],
          ["Pneumatics", "Sequencing, actuation and commissioning"],
          ["Machine fault finding", "Structured diagnosis"],
          ["Wiring understanding", "Panel & machine support"]
        ]
      },
      {
        title: "Manufacturing & Maintenance",
        level: "Practical",
        tools: [
          ["Root-cause analysis", "Structured production problem solving"],
          ["TPM / 5S / Kaizen", "Manufacturing improvement support"],
          ["SOPs / KPI tracking", "Operational checklists and reporting support"],
          ["Maintenance thinking", "Access & reliability"],
          ["Low-cost automation", "Simple, effective solutions"]
        ]
      },
      {
        title: "Digital Tools",
        level: "Developing / Practical",
        tools: [
          ["MS Excel", "Tracking, analysis and KPI support"],
          ["AutoCAD / MATLAB / Power BI", "Also familiar with"],
          ["LightBurn / Inkscape", "Laser and artwork preparation"],
          ["Python / C++", "Automation, tooling and learning projects"],
          ["Arduino IDE / Raspberry Pi", "Embedded prototyping"]
        ]
      },
      {
        title: "3D Printing / Rapid Prototyping",
        level: "Practical",
        tools: [
          ["FDM 3D printing", "Jigs, fixtures & prototypes"],
          ["PETG / ABS / ASA", "Material selection for tooling"],
          ["Design for printing", "Printable, low-cost parts"],
          ["Slicing & tuning", "OrcaSlicer, Cura"]
        ]
      }
    ],
    strengths: ["Root Cause Analysis", "Machine Troubleshooting", "Fixture Design", "Rapid Prototyping", "DfMA", "TPM / 5S / Kaizen", "Commissioning", "Continuous Improvement"]
  },

  machines: [
    {
      slug: "led-bulb-assembly",
      title: "LED Bulb Assembly Machine",
      image: "assets/images/machines/testing-fixture.svg",
      description: "An automated machine that assembles 1W LED bulbs through a sequenced feed, place and fix cycle.",
      experience: "Built and ran a working prototype; supported troubleshooting of the assembly cycle.",
      technologies: "Pneumatics, sensors, actuators, control logic, mechanical design",
      contribution: "Designed and built the prototype, set up the actuation sequence and resolved cycle faults."
    },
    {
      slug: "fan-base-filling",
      title: "Fan Base Filling Machine",
      image: "assets/images/machines/screw-feeder.svg",
      description: "A production-support machine that fills concrete fan bases in a controlled, repeatable cycle.",
      experience: "Worked on the filling mechanism and the operating cycle for consistent output.",
      technologies: "Pneumatics, mechanism design, production support",
      contribution: "Built the filling mechanism and tuned the cycle for repeatable, lower-effort operation."
    },
    {
      slug: "eyelet-puncher",
      title: "Eyelet Puncher Machine",
      image: "assets/images/machines/fiber-laser.svg",
      description: "A machine that feeds material and punches eyelets in a repeatable, operator-safe cycle.",
      experience: "Worked on the punching mechanism, feeding and a safe operating cycle.",
      technologies: "Mechanism design, pneumatics, safety, production support",
      contribution: "Improved punching repeatability and operator handling through mechanism and feed work."
    },
    {
      slug: "spot-welder",
      title: "Spot Welder",
      image: "assets/images/machines/testing-fixture.svg",
      description: "A spot welder joining sheet-metal parts using pressure and resistance heating at controlled points.",
      experience: "Troubleshooting and cooling/electrode review for reliability.",
      technologies: "Thermal management, electrodes, cooling, maintenance",
      contribution: "Reviewed cooling and electrode wear and supported fault diagnosis and maintenance."
    },
    {
      slug: "bonding-tape",
      title: "Bonding Tape Attaching Machine",
      image: "assets/images/machines/screw-feeder.svg",
      description: "An automation machine that feeds, measures, cuts and heat-bonds tape onto fabric in a repeatable cycle.",
      experience: "Training-project work on pneumatic sequencing, heating control and feeding.",
      technologies: "PLC concept, PID temperature control, pneumatics, stepper motor, sensors",
      contribution: "Worked on the cycle sequencing, temperature control and feed mechanism."
    },
    {
      slug: "cnc-systems",
      title: "CNC Systems (Laser & PCB Drilling)",
      image: "assets/images/machines/fiber-laser.svg",
      description: "Custom CNC machines built for laser engraving/cutting and precise PCB drilling.",
      experience: "Designed, built and set up motion and control for these CNC systems.",
      technologies: "CNC, stepper/motion control, GRBL, LightBurn, electronics",
      contribution: "Built the motion systems and configured control for accurate, repeatable operation."
    }
  ],
  gallery: [
    ...(window.portfolioGalleryLibrary || []),
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
    { title: "Combustion Chamber SCADA", category: "project / SCADA", filter: "image automation cad", image: "assets/images/gallery/project-designs/combustion-chamber-scada.png", alt: "Combustion chamber SCADA interface concept", text: "Control-interface concept showing combustion-process monitoring, status indication and operator control layout." },
    { title: "Mechanical Gripper CAD", category: "project / mechanism", filter: "image cad fixtures robotics", image: "assets/images/gallery/project-designs/gripper-cad.png", alt: "Mechanical gripper CAD assembly", text: "CAD assembly study for a compact gripping mechanism, showing linkage layout and component integration." },
    { title: "Liquid Filling Machine CAD", category: "project / automation", filter: "image cad automation machine", image: "assets/images/gallery/project-designs/liquid-filling-machine-cad.png", alt: "Liquid filling machine CAD concept", text: "Machine concept showing container positioning, multi-nozzle filling layout and production-flow thinking." },
    { title: "Oil Drip Tray Mechanism", category: "project / machine design", filter: "image cad machine", image: "assets/images/gallery/project-designs/oil-drip-tray-cad.png", alt: "Oil drip tray mechanism CAD concept", text: "Mechanical concept developed to guide and collect process drips while supporting cleaner machine operation." },
    { title: "Screen Printer Mechanism", category: "project / machine design", filter: "image cad machine automation", image: "assets/images/gallery/project-designs/screen-printer-cad.png", alt: "Screen printer mechanism CAD concept", text: "CAD concept showing frame, guided motion and mechanism arrangement for a compact screen-printing machine." },
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
    { name: "BSc (Hons) Mechanical Engineering", issuer: "University of Jaffna", detail: "Faculty of Engineering - Oct 2017 to Feb 2024." },
    { name: "IESL Associate Member", issuer: "Institution of Engineers Sri Lanka", detail: "Membership AM-32795." },
    { name: "Certified SOLIDWORKS Associate in Mechanical Design", issuer: "Dassault Systemes SOLIDWORKS", detail: "CSWA - Mechanical Design certification.", image: "assets/certificates/img/Certificate_C-T7NHSLZ59X.jpg", file: "assets/certificates/Certificate_C-T7NHSLZ59X.pdf" },
    { name: "Certified SOLIDWORKS Associate in Additive Manufacturing", issuer: "Dassault Systemes SOLIDWORKS", detail: "CSWA-AM - Additive Manufacturing certification.", image: "assets/certificates/img/Certificate_C-UQGLWM7JCK.jpg", file: "assets/certificates/Certificate_C-UQGLWM7JCK.pdf" },
    { name: "PLC Training", issuer: "University of Moratuwa", detail: "PLC training - Robotics & Control Systems Laboratory, 2025.", image: "assets/certificates/img/plc-moratuwa.jpg" },
    { name: "PLC Programming Course", issuer: "Epic Engineering", detail: "Industrial PLC programming - 2024." },
    { name: "Maintenance of Industrial Plant & Machinery", issuer: "NERDC", detail: "Maintenance of Industrial Plant & Machinery - 2026.", image: "assets/certificates/img/nerdc-maintenance.jpg" },
    { name: "Industrial Motor Operation & Control", issuer: "NERDC", detail: "Industrial Motor Operation & Control - 2025.", image: "assets/certificates/img/nerdc-motor-control.jpg" },
    { name: "Advanced Injection Moulding", issuer: "Industrial Development Board of Ceylon (IDB)", detail: "Advanced Injection Moulding - 2026.", image: "assets/certificates/img/idb-injection-molding.jpg" }
  ],

  availableFor: ["Automation Engineering", "Mechanical Design", "Machine Troubleshooting", "Fixture Design", "3D Printing & Prototyping", "Engineering Documentation"],

  // ====== COMMENTS / TESTIMONIALS ======
  // Paste your free Formspree endpoint here so the "Leave a comment" form works.
  // Get it at https://formspree.io (see HOW-TO-COMMENTS.md). Example: "https://formspree.io/f/xxxxxx"
  commentsEndpoint: "https://formspree.io/f/xojzbjkp",
  // ====== Supabase (feedback with your approval) ======
  supabaseUrl: "https://moavlqmeeaozautstdwo.supabase.co",
  supabaseKey: "sb_publishable_USF5QpA9ILbcwtsBogC5DA_j5iEv0aN",
  // ====== Homepage running project image strip ======
  // Use meaningful public-safe project/artwork images. Title becomes the visible label.
  marquee: [
    { title: "3D Model vs Assembled Part", image: "assets/images/gallery/home/3d-model-vs-assembled-part.jpg", href: "projects.html" },
    { title: "CAD Design vs Printed Part", image: "assets/images/gallery/home/cad-design-vs-printed-part.jpg", href: "projects.html" },
    { title: "3D Printed Gripper", image: "assets/images/gallery/home/3d-printed-gripper.jpg", href: "projects.html" },
    { title: "3D Printed Robot", image: "assets/images/gallery/home/3d-printed-robot.jpg", href: "projects.html" },
    { title: "Redesigned 3D Printed Vehicle Part", image: "assets/images/gallery/home/redesigned-3d-printed-vehicle-part-upper.jpg", href: "projects.html" },
    { title: "Laser Engraver Build", image: "assets/images/gallery/home/laser-engraver-v5.jpg", href: "project-detail.html?project=cnc-laser-engraver" },
    { title: "Laser Engraving on Jack Wood", image: "assets/images/gallery/home/laser-engrave-on-jack-wood.jpg", href: "gallery.html" },
    { title: "Laser Engraving on Mirror", image: "assets/images/gallery/home/laser-engraving-on-mirror.jpg", href: "gallery.html" },
    { title: "Laser Engraving on Leaves", image: "assets/images/gallery/home/laser-engraving-on-leaves.jpg", href: "gallery.html" },
    { title: "Painted Plate Laser Artwork", image: "assets/images/gallery/home/laser-engrave-painted-plate.jpg", href: "gallery.html" },
    { title: "3D Printed Lithophane Artwork", image: "assets/images/gallery/home/3d-printed-lithophane-art.jpg", href: "gallery.html" },
    { title: "Combustion Chamber SCADA", image: "assets/images/gallery/project-designs/combustion-chamber-scada.png", href: "gallery.html" },
    { title: "Liquid Filling Machine CAD", image: "assets/images/gallery/project-designs/liquid-filling-machine-cad.png", href: "gallery.html" },
    { title: "Screen Printer Mechanism", image: "assets/images/gallery/project-designs/screen-printer-cad.png", href: "gallery.html" },
    { title: "Gamunu Combat Robot", image: "assets/images/gallery/home/gamunu-combat-robot.jpg", href: "project-detail.html?project=combat-robots" },
    { title: "Air Tattoo Exhibition Project Stall", image: "assets/images/gallery/home/air-tattoo-exhibition-project-stall.jpg", href: "gallery.html" },
    { title: "Techno 2023 Project Display", image: "assets/images/gallery/home/techno-2023-project-display.jpg", href: "gallery.html" },
    { title: "YGC Innovation Festival 2023", image: "assets/images/gallery/home/ygc-innovation-festival-2023.jpg", href: "gallery.html" }
  ],

  // Only comments YOU add here appear on the site (approval = you paste an approved one in).
  // To add an approved comment: copy a block below, fill it in, keep the comma.
  testimonials: []
};
