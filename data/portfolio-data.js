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
    {
      title: "LED Bulb Assembly Machine Troubleshooting",
      category: "Automation / Troubleshooting",
      filter: "automation",
      summary: "Public-safe summary of reliability support for an LED bulb assembly machine, covering fault isolation, mechanical checks, sensor checks and recovery actions.",
      tools: ["PLC support", "Sensors", "Pneumatics", "Root cause"],
      image: "assets/images/projects/led-bulb.svg",
      page: "project-led-bulb.html",
      featured: true
    },
    {
      title: "Fan Motor Assembly Jig / Fixture",
      category: "Jigs & Fixtures",
      filter: "fixtures",
      summary: "Fixture concept for fan motor assembly work, with attention to nut positioning, shaft oiling, part holding and operator-friendly handling.",
      tools: ["SOLIDWORKS", "3D printing", "Laser cut SS", "Assembly support"],
      image: "assets/images/projects/fan-fixture.svg",
      page: "project-fan-fixture.html",
      featured: true
    },
    {
      title: "Gravity Feed Nut Storage System",
      category: "Small-Part Feeding",
      filter: "fixtures",
      summary: "Low-complexity feed and storage concept for presenting small nuts in a more consistent and ergonomic way for repetitive assembly.",
      tools: ["Gravity feed", "Orientation", "Production support", "3D printing"],
      image: "assets/images/projects/gravity-feed.svg",
      page: "project-gravity-feed.html",
      featured: true
    },
    {
      title: "Plug Testing Fixture",
      category: "Testing / Fixture Design",
      filter: "fixtures",
      summary: "Testing fixture concept for plug-top checking with consistent loading, simple feedback and operator-friendly use.",
      tools: ["Testing", "Fixture design", "Indicators", "Operator safety"],
      image: "assets/images/projects/plug-testing.svg",
      page: "project-plug-testing.html",
      featured: true
    },
    {
      title: "MTone ERP / Engineering Software",
      category: "Software / ERP",
      filter: "software",
      summary: "Engineering software concept for inventory visibility, quotation workflows, KPI thinking and manufacturing information flow.",
      tools: ["ERP thinking", "Power BI", "Workflow design", "Documentation"],
      image: "assets/images/projects/mtone-erp.svg",
      page: "project-mtone-erp.html",
      featured: false
    },
    {
      title: "3D Printed Production Jigs & Fixtures",
      category: "3D Printing / Prototyping",
      filter: "printing fixtures",
      summary: "Practical printed aids for assembly support, fit checking, positioning and rapid iteration before committing to harder tooling.",
      tools: ["FDM printing", "OrcaSlicer", "Cura", "Iteration"],
      image: "assets/images/projects/printed-jigs.svg",
      page: "project-printed-jigs.html",
      featured: false
    },
    {
      title: "Rotary Indexing Calibration",
      category: "Calibration / Reliability",
      filter: "calibration automation",
      summary: "Public-safe calibration support story focused on repeatability, alignment thinking, observation and systematic adjustment.",
      tools: ["Calibration", "Indexing", "Repeatability", "Troubleshooting"],
      image: "assets/images/projects/rotary-indexing.svg",
      page: "project-rotary-indexing.html",
      featured: false
    },
    {
      title: "Cooling Block Design Concept",
      category: "Thermal / Machine Reliability",
      filter: "thermal",
      summary: "Public-safe cooling improvement concept for machine reliability, based on heat path thinking and practical maintenance needs.",
      tools: ["Thermal thinking", "CAD concept", "Maintenance", "Reliability"],
      image: "assets/images/projects/cooling-block.svg",
      page: "project-cooling-block.html",
      featured: false
    },
    {
      slug: "industrial-gripper-design",
      doc: "assets/docs/projects/self-tighten-gripper.pdf",
      title: "Tensile Machine Gripper Mechanism",
      category: "Training Project / Fixture Design",
      filter: "fixtures training",
      summary: "Training-derived fixture project for a tensile testing machine, focused on safe holding, easy loading, fabrication readiness and repeatable use.",
      tools: ["SOLIDWORKS", "2D drawings", "Fabrication support", "Assembly testing"],
            image: "assets/images/projects-gallery/gripper/01.jpg",
      images: [
        "assets/images/projects-gallery/gripper/01.jpg",
        "assets/images/projects-gallery/gripper/02.jpg"
      ],
      videos: [],      page: "project-detail.html?project=industrial-gripper-design",
      featured: false,
      details: {
        problem: "A testing setup needed a practical gripping mechanism that could hold samples reliably while remaining compact, easy to assemble and operator-friendly.",
        role: "Supported the mechanism design workflow from concept sketches and CAD modelling through 2D drawing preparation, fabrication follow-up, assembly checks and correction notes.",
        approach: "Converted the machine requirement into a compact fixture concept, reviewed assembly access, prepared simplified CAD evidence and refined the design after physical fit and usability checks.",
        solution: "A public-safe gripper mechanism concept suitable for fabrication, assembly and repeated testing work, with confidential dimensions and machine drawings removed.",
        result: "Improved understanding of fixture design, design-for-fabrication, tolerance thinking, assembly order and practical testing-machine support.",
        tools: ["SOLIDWORKS", "2D drawings", "Fabrication support", "Assembly review"],
        note: "Simplified from industrial training material. No customer names, exact dimensions, drawings or production information are shown."
      }
    },
    {
      slug: "combustion-chamber-scada",
      doc: "assets/docs/projects/combustion-chamber-scada.pdf",
      title: "Combustion Chamber PLC / SCADA Support",
      category: "Training Project / Automation",
      filter: "automation training software",
      summary: "Automation support for a research-type combustion chamber system, using public-safe wording around PLC, SCADA, sensors and parameter display.",
      tools: ["PLC basics", "Haiwell SCADA", "Sensors", "Electrical wiring"],
            image: "assets/images/projects-gallery/combustion/305.jpg",
      images: [
        "assets/images/projects-gallery/combustion/305.jpg",
        "assets/images/projects-gallery/combustion/307.jpg",
        "assets/images/projects-gallery/combustion/308.jpg",
        "assets/images/projects-gallery/combustion/309.jpg",
        "assets/images/projects-gallery/combustion/311.jpg"
      ],
      videos: [],      page: "project-detail.html?project=combustion-chamber-scada",
      featured: false,
      details: {
        problem: "A research equipment setup needed clear monitoring of process parameters such as temperature, pressure and flow without exposing the actual control files.",
        role: "Assisted with wiring understanding, PLC/SCADA learning, GUI modification and public-safe documentation of the control-system concept.",
        approach: "Studied PLC inputs and outputs, reviewed sensor signals, updated simplified SCADA screen elements and documented the relationship between field signals and operator display.",
        solution: "A safe automation case study showing how PLC and SCADA systems can be used to monitor an industrial research process.",
        result: "Built practical confidence in SCADA interface thinking, machine signal flow, instrumentation and automation documentation.",
        tools: ["PLC I/O understanding", "Haiwell SCADA", "Sensor signals", "Electrical wiring basics"],
        note: "No PLC program, HMI source file, wiring diagram or exact process data is published."
      }
    },
    {
      slug: "liquid-filling-machine",
      title: "Liquid Filling Machine Concept",
      category: "Training Project / Machine Design",
      filter: "automation fixtures training",
      summary: "Concept development for liquid filling equipment, comparing different layouts for bottle positioning, volume control, tray handling and operator access.",
      tools: ["SOLIDWORKS", "Mechanism design", "Pneumatics concept", "Process flow"],
      image: "assets/images/real/liquid-filling.png",
      page: "project-detail.html?project=liquid-filling-machine",
      featured: false,
      details: {
        problem: "A filling process required a concept that could handle liquid transfer more consistently while considering different container sizes and operator workflow.",
        role: "Prepared multiple machine concepts and compared layout, bottle holding, filling sequence, volume control and maintainability.",
        approach: "Explored conveyor-based and compact concepts, reviewed valve and cylinder options at a high level, and converted the strongest ideas into CAD visuals.",
        solution: "A set of public-safe filling-machine concepts showing the design thinking without releasing exact dimensions or customer-specific requirements.",
        result: "Improved concept-generation skill for automation equipment, especially around process sequence, packaging ergonomics and practical manufacturability.",
        tools: ["SOLIDWORKS", "Pneumatic concept", "Conveyor layout", "Valve sequence thinking"],
        note: "Concept images are simplified. No customer data, production numbers or detailed manufacturing drawings are included."
      }
    },
    {
      slug: "screen-printer-mechanism",
      doc: "assets/docs/projects/itl-screen-printer-control.pdf",
      title: "Screen Printer Mechanism Concept",
      category: "Training Project / Automation",
      filter: "automation fixtures training",
      summary: "Machine concept for applying ink to small fabric rolls using pneumatic motion, a controlled print stroke and maintenance-friendly mechanism thinking.",
      tools: ["Pneumatics", "SOLIDWORKS", "Mechanism layout", "Maintenance thinking"],
            image: "assets/images/projects-gallery/screen-printer/210.jpg",
      images: [
        "assets/images/projects-gallery/screen-printer/210.jpg",
        "assets/images/projects-gallery/screen-printer/222.jpg",
        "assets/images/projects-gallery/screen-printer/227.jpg"
      ],
      videos: [],      page: "project-detail.html?project=screen-printer-mechanism",
      featured: false,
      details: {
        problem: "A repetitive printing operation needed a more consistent mechanism for print contact, motion control and operator handling.",
        role: "Supported the mechanical concept and CAD layout for a pneumatic screen-printing mechanism.",
        approach: "Studied the movement sequence, compared cylinder placement options, considered brush/blade contact and prepared a simplified CAD representation.",
        solution: "A public-safe concept for a pneumatic print mechanism with controlled motion and easier maintenance access.",
        result: "Strengthened practical understanding of pneumatic sequencing, operator loading, mechanism packaging and machine maintainability.",
        tools: ["Pneumatic cylinders", "SOLIDWORKS", "Mechanism design", "Maintenance access review"],
        note: "No proprietary machine drawings, customer names, source files or exact settings are shown."
      }
    },
    {
      slug: "oil-dripping-tray",
      doc: "assets/docs/projects/oil-dripping-tray-redesign.pdf",
      title: "Oil Dripping Tray Mechanism",
      category: "Training Project / Process Improvement",
      filter: "fixtures training thermal",
      summary: "Simple mechanical improvement concept for collecting and managing oil flow in a cleaner, safer and easier-to-maintain way.",
      tools: ["CAD concept", "Manufacturing support", "Maintenance", "Process improvement"],
            image: "assets/images/projects-gallery/oil-tray/01.jpg",
      images: [
        "assets/images/projects-gallery/oil-tray/01.jpg"
      ],
      videos: [],      page: "project-detail.html?project=oil-dripping-tray",
      featured: false,
      details: {
        problem: "A machine area needed cleaner handling of oil drips to reduce mess, maintenance time and avoidable process disturbance.",
        role: "Prepared a practical tray/mechanism concept with attention to placement, access and ease of cleaning.",
        approach: "Focused on simple geometry, accessible cleaning points, fit around existing machine constraints and low-complexity fabrication.",
        solution: "A simplified oil-drip management concept that can be adapted around an existing industrial machine.",
        result: "Shows cost-conscious mechanical thinking for small improvements that support safety, cleanliness and maintenance.",
        tools: ["SOLIDWORKS", "Sheet-metal thinking", "Maintenance review", "Process observation"],
        note: "Only simplified concept evidence is shown; no factory layout, production data or internal machine drawing is published."
      }
    },
    {
      slug: "coconut-feeding-mechanism",
      title: "Coconut Piece Feeding Mechanism",
      category: "Training Project / Material Handling",
      filter: "automation fixtures training",
      summary: "Concept for feeding dry coconut pieces into multiple extraction rows with a more controlled and repeatable material-flow arrangement.",
      tools: ["CAD concept", "Belt drive thinking", "Material handling", "Process flow"],
      image: "assets/images/training-extracted/training-report-74.png",
      page: "project-detail.html?project=coconut-feeding-mechanism",
      featured: false,
      details: {
        problem: "A manual feeding process needed a concept for distributing dry coconut pieces more evenly across extraction equipment.",
        role: "Developed a public-safe mechanism concept and CAD visual for material feeding and distribution.",
        approach: "Considered feed direction, belt movement, row distribution, operator access and a layout that could be explained clearly to non-technical stakeholders.",
        solution: "A simplified feeding concept that shows the material-flow idea without exposing machine dimensions or client-specific information.",
        result: "Demonstrates early machine-design thinking for food/process equipment and practical layout communication.",
        tools: ["SOLIDWORKS", "Material-flow mapping", "Belt drive concept", "Presentation visuals"],
        note: "The public page avoids customer names, exact dimensions and production information."
      }
    },
    {
      slug: "ferrous-metal-separator",
      title: "Ferrous Metal Separator Concept",
      category: "Training Project / Machine Concept",
      filter: "automation training",
      summary: "Concept study for separating ferrous particles from a material stream using magnetic separation and rotating-cylinder thinking.",
      tools: ["Magnetic separation", "CAD concept", "Mechanism study", "Process improvement"],
      image: "assets/images/training-extracted/training-report-75.png",
      page: "project-detail.html?project=ferrous-metal-separator",
      featured: false,
      details: {
        problem: "A process needed a safer way to remove ferrous contamination or particles from a material path.",
        role: "Supported concept exploration and visual communication for a magnetic separation approach.",
        approach: "Studied magnetic-field use, rotating-cylinder behavior, material flow and how separated particles could be collected safely.",
        solution: "A public-safe concept page for a ferrous separator, presented as engineering thinking rather than a finished proprietary machine.",
        result: "Shows ability to turn a process problem into a mechanical concept and communicate the operating principle visually.",
        tools: ["CAD concept", "Magnetic separation principle", "Mechanism review", "Process observation"],
        note: "This is a simplified concept summary. It excludes exact dimensions, detailed drawings and customer context."
      }
    },
    {
      slug: "bonding-tape-machine",
      doc: "assets/docs/projects/ottuthal-bonding-tape-machine.pdf",
      title: "Bonding Tape Automation Machine",
      category: "Training Project / Industrial Automation",
      filter: "automation training fixtures",
      summary: "Training-derived automation project for feeding, measuring, cutting and bonding tape onto fabric with pneumatic motion, heating control and safety switches.",
      tools: ["PLC", "PID control", "Pneumatics", "Stepper motor", "Thermocouple"],
            image: "assets/images/projects-gallery/bonding-tape/01.jpg",
      images: [
        "assets/images/projects-gallery/bonding-tape/01.jpg",
        "assets/images/projects-gallery/bonding-tape/03.jpg",
        "assets/images/projects-gallery/bonding-tape/05.jpg",
        "assets/images/projects-gallery/bonding-tape/07.jpg"
      ],
      videos: [{ youtube: "PASTE_YOUTUBE_LINK_OR_ID", title: "Bonding tape machine running" }],      page: "project-detail.html?project=bonding-tape-machine",
      featured: false,
      details: {
        problem: "A manual fabric-bonding operation required repeated measuring, cutting and heat bonding, creating a strong opportunity for automation.",
        role: "Contributed to the machine concept, component understanding, testing observations and documentation of the automation sequence.",
        approach: "Mapped the cycle into tape feeding, length setting, cutting, heated bonding, fabric movement, sensor confirmation and two-hand start safety logic.",
        solution: "A public-safe automation case study showing a machine that combines stepper-based tape feed, pneumatic cutting, heated bonding, PID temperature control and operator safety controls.",
        result: "Built strong practical exposure to industrial automation components, pneumatic sequencing, temperature control, machine testing and safety-minded design.",
        tools: ["PLC concept", "PID controller", "Pneumatic cylinders", "Solenoid valves", "Stepper motor", "Thermocouple"],
        note: "Company names, buyer names, budgets, internal drawings, detailed dimensions and control programs are intentionally excluded."
      }
    },
    {
      title: "CNC Laser Engraving Machine Build",
      category: "Personal Machine Build",
      filter: "machine",
      summary: "Personal CNC laser engraver build and testing work covering motion hardware, controller setup, engraving trials and process tuning.",
      tools: ["Motion system", "LightBurn", "LaserGRBL", "Engraving tests"],
            image: "assets/images/projects-gallery/cnc-laser/IMG_7651.jpg",
      images: [
        "assets/images/projects-gallery/cnc-laser/IMG_7651.jpg",
        "assets/images/projects-gallery/cnc-laser/IMG_7652.jpg",
        "assets/images/projects-gallery/cnc-laser/IMG_7653.jpg",
        "assets/images/projects-gallery/cnc-laser/IMG_7654.jpg"
      ],
      videos: [{ youtube: "PASTE_YOUTUBE_LINK_OR_ID", title: "CNC laser engraving in action" }],      page: "project-cnc-laser.html",
      featured: false
    },
    {
      title: "FDM 3D Printer Build & Upgrade",
      doc: "assets/docs/projects/custom-fdm-3d-printer.pdf",
      category: "3D Printing / Machine Build",
      filter: "printing machine",
      summary: "Personal 3D printer build and upgrade work used to learn motion systems, calibration, slicing, material behavior and iterative prototyping.",
      tools: ["FDM printing", "Machine build", "Calibration", "Slicer workflow"],
            image: "assets/images/projects-gallery/3d-printer/01.jpg",
      images: [
        "assets/images/projects-gallery/3d-printer/01.jpg",
        "assets/images/projects-gallery/3d-printer/02.jpg",
        "assets/images/projects-gallery/3d-printer/03.jpg",
        "assets/images/projects-gallery/3d-printer/04.jpg"
      ],
      videos: [{ youtube: "PASTE_YOUTUBE_LINK_OR_ID", title: "3D printer printing a part" }],      page: "project-3d-printer-build.html",
      featured: false
    },
    {
      title: "Battle Robot & Exhibition Projects",
      category: "Robotics / University Innovation",
      filter: "robotics",
      summary: "University exhibition and battle robot work showing hands-on fabrication, mechanism thinking, teamwork and public engineering presentation.",
      tools: ["Fabrication", "Mechanisms", "Team project", "Exhibition"],
      image: "assets/Achievment/While fabricating battle robot.JPG",
      page: "project-battle-robot.html",
      featured: false
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
    {
      slug: "fiber-laser-machine",
      title: "Fiber Laser Machine",
      image: "assets/images/real/cnc-laser-machine-2.jpg",
      description: "A fiber laser marking machine is used for permanent marking, engraving and traceability work on suitable industrial materials.",
      experience: "Setup observation, marking workflow exposure and production support thinking.",
      technologies: "Marking, fixtures, safety, material behavior",
      contribution: "Add your public-safe contribution here: setup support, fixture work, marking trial support, maintenance checks or process improvement."
    },
    {
      slug: "spot-welder",
      title: "Spot Welder",
      image: "assets/images/projects/spot-welder.svg",
      description: "A spot welder joins sheet-metal or conductive parts using pressure and electrical resistance heating at controlled contact points.",
      experience: "Troubleshooting, cooling improvement concept and electrode/water-cooling review.",
      technologies: "Thermal management, electrodes, cooling, maintenance, reliability",
      contribution: "Add your public-safe contribution here: cooling block concept, fault observation, maintenance support or reliability improvement."
    },
    {
      slug: "screw-feeder-machine",
      title: "Screw Feeder Machine",
      image: "assets/images/machines/screw-feeder.svg",
      description: "A screw feeder machine presents screws or small fasteners in a controlled way to improve repetitive assembly flow.",
      experience: "Maintenance checks, failure behavior review and production support.",
      technologies: "Feeding, vibration, mechanical drive, control logic",
      contribution: "Add your public-safe contribution here: maintenance checks, root cause notes, feeding issue review or operator support."
    },
    {
      slug: "packing-machine",
      title: "Packing Machine",
      image: "assets/images/machines/extracted/packing-machine-06.jpg",
      description: "A continuous packing machine controls film feeding, sealing, cutting, speed, counting and package output through mechanical motion and HMI-controlled settings.",
      experience: "Factory support and troubleshooting exposure using the machine manual and operational screens.",
      technologies: "Sensors, pneumatics, timing, belt speed, HMI settings, production flow",
      contribution: "Add your public-safe contribution here: troubleshooting, operator support, setting checks, sensor checks or downtime-reduction work.",
      sourceNote: "Image extracted from the public-safe packing machine PDF/manual asset."
    },
    {
      slug: "bonding-tape-machine",
      title: "Bonding Tape Automation Machine",
      image: "assets/images/training-extracted/ottuthal-training-50.png",
      description: "A bonding tape automation machine feeds tape, measures length, cuts it and applies heat/pressure to bond the tape to fabric in a repeatable cycle.",
      experience: "Training project exposure to pneumatic sequencing, stepper-based feeding, heating control, testing and safety-minded operation.",
      technologies: "PLC concept, PID temperature control, pneumatics, solenoid valves, stepper motor, sensors",
      contribution: "Add your public-safe contribution here: cycle mapping, component testing, temperature-control support, safety switch logic or documentation.",
      sourceNote: "Image extracted from a public-safe training document; internal names and detailed drawings are not published."
    },
    {
      slug: "assembly-machines",
      title: "Assembly Machines",
      image: "assets/images/machines/extracted/ottuthal-machine-58.jpg",
      description: "Industrial assembly machines combine mechanisms, fixtures, sensors, actuators and control logic to improve repeatability and production flow.",
      experience: "Automation support, commissioning thinking and machine reliability work.",
      technologies: "PLC, HMI, sensors, pneumatics, mechanisms, fixtures",
      contribution: "Add your public-safe contribution here: troubleshooting, fixture support, calibration, sensor checks, cycle improvement or documentation.",
      sourceNote: "Image extracted from a public-safe machine/project PDF asset."
    },
    {
      slug: "testing-fixtures",
      title: "Testing Fixtures",
      image: "assets/images/machines/testing-fixture.svg",
      description: "Testing fixtures help operators check parts consistently by controlling part placement, loading direction, sensing and feedback.",
      experience: "Fixture-based checking concepts with simple feedback and operator-friendly use.",
      technologies: "Sensing, indicators, ergonomics, repeatability",
      contribution: "Add your public-safe contribution here: fixture concept, test sequence, safety check, operator feedback or documentation."
    }
  ],

  industrialTechnologies: ["PLC Systems", "HMI Panels", "Proximity Sensors", "Photoelectric Sensors", "Pneumatic Cylinders", "Solenoid Valves", "Motor Control", "Rotary Indexing", "Jigs & Fixtures", "3D Printing"],

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
