// Do not upload confidential engineering files to this public website.
// Edit this file to update portfolio content. Use only public-safe wording and media.

window.portfolioData = {
  profile: {
    name: "Muditha Priyasad",
    role: "Mechanical Design | Industrial Automation | R&D Engineer",
    credential: "BSc (Hons) in Mechanical Engineering | SOLIDWORKS Design Professional (CSWP) | IESL Associate Member: AM-32795",
    subtitle: "Machine Design | Factory Automation | PLC/HMI Support | Jigs & Fixtures | Rapid Prototyping",
    summary: "I design, build and troubleshoot factory machines, fixtures and low-cost automation—from mechanical concepts and pneumatics to PLC/HMI support and production commissioning.",
    status: "Open to Engineering Opportunities",
    cv: "assets/docs/Muditha-Priyasad-CV.pdf",
    photo: "assets/images/hero/hero-portrait-web.png",
    email: "muditha00@icloud.com",
    phone: "+94 71 7599 667",
    phoneHref: "tel:+94717599667",
    tagline: "Mechanical Design | Industrial Automation | R&D Engineer focused on practical machine design, production troubleshooting and low-cost factory improvement.",
    github: "",  // optional: paste your GitHub profile URL, e.g. https://github.com/yourname
    linkedin: "https://www.linkedin.com/in/muditha00",
    linkedinLabel: "linkedin.com/in/muditha00",
    whatsapp: "https://wa.me/94717599667",
    whatsappLabel: "+94 71 7599 667",
    location: "Sri Lanka",
    experience: "2+ years professional industry experience | 5+ years combined engineering study, internship and project experience | 20+ MTone custom jobs.",
    bestFitRoles: ["Automation Engineer", "Mechatronics Engineer", "Mechanical Design Engineer", "Production Engineer", "Maintenance / Reliability Engineer", "R&D / Machine Development Engineer"],
    openTo: "Automation / Mechatronics / Mechanical Design / Production Engineering roles",
    capabilityHighlights: ["Machine troubleshooting", "Jigs & fixtures", "PLC / HMI support", "3D printed tooling", "Factory improvement"],
    confidentiality: "Some factory projects contain confidential machine details, drawings, PLC logic, wiring and production information. This portfolio shows public-safe summaries only. Detailed technical approach can be discussed during interviews while respecting confidentiality.",
    motto: "No matter how hard the dream, I won't stop until I make it real."
  },

  stats: [
    { value: "15+", label: "Delivered Projects" },
    { value: "2+", label: "Years Experience" },
    { value: "11", label: "Qualifications & Certifications" },
    { value: "20+", label: "MTone Custom Jobs" }
  ],


  experienceTimeline: [
    {
      period: "Dec 2024 – Present",
      role: "Mechanical Design & Automation Engineer",
      organization: "MARQO Industries",
      summary: "Established the engineering and automation function; designed and commissioned production machines, fixtures and pneumatic mechanisms.",
      highlights: ["Fan-base filling increased from 1 to 6 bases/min", "B22 eyelet punching increased from about 3–4 to 16 pieces/min", "Fan assembly fixture saves about 5 seconds per motor"]
    },
    {
      period: "Jun 2021 – Present",
      role: "Founder",
      organization: "MTone Designers",
      summary: "Delivered 20+ custom design, prototyping and machine-build jobs, including custom 3D printers, laser machines and production aids.",
      highlights: ["Built 3 custom 3D printers and 4 laser machines", "PCB drilling machine handles 18 boards per setup"]
    },
    {
      period: "Apr 2024 – Nov 2024",
      role: "Engineering Intern",
      organization: "MAS Active Shadowline",
      summary: "Supported TPM, 5S, Kaizen, KPI tracking, maintenance standards and workshop-layout improvement.",
      highlights: []
    },
    {
      period: "Apr 2023 – Oct 2023",
      role: "Automation Engineering Intern",
      organization: "Effective Engineering & Automation (Pvt) Ltd",
      summary: "Supported client machine projects, service and troubleshooting; built a custom 3D printer and tensile-test gripper.",
      highlights: []
    },
    {
      period: "Feb 2019 – Apr 2019",
      role: "Autonomation Engineering Intern",
      organization: "MAS Kreeda Vaanavil",
      summary: "Worked with CAD, wiring, pneumatics, Arduino and PLC ladder logic on factory-improvement projects.",
      highlights: []
    }
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
      category: "Personal R&D Project",
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
      preferVideoThumbnail: true,
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
      impact: "Increased output 6× — from 1 to 6 units per minute.",
      summary: "A guided filling and assembly machine for fan bases — oil application, nut tightening and part alignment in one high-throughput cycle.",
      problem: "Filling fan bases by hand was slow, inconsistent and labour-intensive.",
      role: "I worked on the machine build, filling mechanism and the operating cycle.",
      method: "Mechanism and pneumatic work to control the fill, with a repeatable cycle and operator-friendly handling.",
      result: "Raised throughput 6× — from about 1 to 6 units per minute — by developing and commissioning the guided filling and assembly machine.",
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
      impact: "Increased B22 eyelet punching from about 3–4 to 16 pieces per minute and reduced operator effort.",
      summary: "An ergonomic automated eyelet puncher with optimised mechanical action for fast, repeatable B22 eyelet work.",
      problem: "Eyelet punching required a faster, more repeatable cycle with safer operator handling.",
      role: "I worked on the punching mechanism, material feeding and the overall operating cycle.",
      method: "Mechanism design, pneumatic actuation and feed/sequence work to make the punch consistent and safe to run.",
      result: "Increased punching output from about 3–4 to 16 pieces per minute and reduced operator effort through an optimised, ergonomic mechanism.",
      image: "assets/images/projects-gallery/eyelet-puncher/01.jpg",
      images: ["assets/images/projects-gallery/eyelet-puncher/01.jpg"],
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
      image: "",
      images: [],
      preferVideoThumbnail: true,
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
      image: "assets/images/projects-gallery/cnc-laser/IMG_7651.jpg",
      images: ["assets/images/projects-gallery/cnc-laser/IMG_7651.jpg", "assets/images/projects-gallery/cnc-laser/IMG_7652.jpg", "assets/images/projects-gallery/cnc-laser/IMG_7653.jpg", "assets/images/projects-gallery/cnc-laser/IMG_7654.jpg"],
      videos: [{ youtube: "https://youtube.com/shorts/dT-JzzmaO9E", title: "CNC Laser Engraver - Build 1" }, { youtube: "https://youtu.be/UJ3SSoLqgWY", title: "CNC Laser Engraver - Build 2" }],
      doc: "",
      page: "project-detail.html?project=cnc-laser-engraver"
    },
    {
      slug: "custom-3d-printer",
      title: "Custom FDM 3D Printer Builds",
      category: "Machine Build",
      filter: "printing machine",
      oneLineProblem: "Commercial machines did not provide the desired build volume, material flexibility and customization for prototyping work.",
      contribution: "Developed successive custom FDM printer builds and completed the mechanical assembly, electronics, firmware and calibration work.",
      tools: ["Marlin firmware", "BTT SKR V1.4", "TMC2209", "CR Touch", "FDM calibration"],
      impact: "Achieved a 300 x 300 x 300 mm build volume and practical printing of jigs, fixtures, prototypes and flexible materials.",
      summary: "Successive custom FDM printer builds developed for larger-format prototyping, production tooling and hands-on machine development.",
      problem: "A customizable, cost-conscious printer was needed with a larger build area, auto bed levelling and direct extrusion.",
      role: "I built the rigid extrusion frame and motion system, wired the control electronics, configured Marlin and tuned print quality.",
      method: "Integrated an SKR V1.4 controller, TMC2209 drivers, direct extruder, heated bed and CR Touch, then calibrated the firmware and slicer workflow.",
      result: "A documented custom 300 x 300 x 300 mm printer platform capable of producing usable tooling, prototypes and flexible-material parts.",
      image: "assets/images/projects-gallery/3d-printer/05.jpg",
      images: ["assets/images/projects-gallery/3d-printer/05.jpg", "assets/images/projects-gallery/3d-printer/01.jpg", "assets/images/projects-gallery/3d-printer/02.jpg", "assets/images/projects-gallery/3d-printer/03.jpg", "assets/images/projects-gallery/3d-printer/04.jpg"],
      videos: [{ youtube: "https://youtube.com/shorts/izsnT307ZEw", title: "Custom FDM 3D Printer - Build 1" }, { youtube: "https://youtube.com/shorts/CBiKpxUqEH8", title: "Custom FDM 3D Printer - Build 2" }],
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
      image: "assets/images/gallery/home/3d-printed-robot.jpg",
      images: ["assets/images/gallery/home/3d-printed-robot.jpg"],
      videos: [],
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
      image: "assets/images/gallery/home/gamunu-combat-robot.jpg",
      images: ["assets/images/gallery/home/gamunu-combat-robot.jpg"],
      videos: [{ youtube: "https://youtu.be/pMUVJTunHNo", title: "Combat Robot" }, { youtube: "https://youtu.be/8FZF9E3W2Wg", title: "SLT Robot Battle" }, { youtube: "https://youtu.be/nkHy7xbPTJ0", title: "Combat Robot 2" }],
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
      image: "assets/images/gallery/curated/wire-stripping-machine.jpg",
      images: ["assets/images/gallery/curated/wire-stripping-machine.jpg"],
      videos: [],
      doc: "",
      page: "project-detail.html?project=wire-stripper"
    },
    {
      slug: "pcb-drilling",
      title: "CNC Plotter & PCB Drilling Machine",
      category: "Machine Build / CNC",
      filter: "machine",
      oneLineProblem: "PCB preparation needed a compact CNC platform for repeatable plotting and precision drilling.",
      contribution: "Built and configured the compact CNC motion platform for PCB plotting and drilling work.",
      tools: ["CNC", "Motion control", "Electronics", "Precision"],
      impact: "Drills 18 PCB pieces in one setup with better accuracy and repeatability.",
      summary: "A compact CNC plotter and PCB drilling platform built for NDM Electrical Pvt Ltd, supporting 18 PCB pieces per drilling setup.",
      problem: "Manual PCB marking and drilling lacked the alignment, precision and repeatability needed for batch work.",
      role: "I built the motion system and configured the machine for plotting and PCB drilling operations.",
      method: "Compact CNC mechanics, stepper control and drilling toolpath setup.",
      result: "Drilled 18 PCB pieces in one setup with improved alignment, accuracy, repeatability and finish quality while reducing manual work (built for NDM Electrical Pvt Ltd).",
      image: "assets/images/projects/mtone-erp.svg",
      images: ["assets/images/projects/mtone-erp.svg"],
      videos: [{ youtube: "https://youtube.com/shorts/VnyF2VSwVNk", title: "CNC Plotter & PCB Drilling Machine" }],
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
      image: "assets/images/projects-gallery/bonding-tape/01.jpg",
      images: ["assets/images/projects-gallery/bonding-tape/01.jpg", "assets/images/projects-gallery/bonding-tape/03.jpg", "assets/images/projects-gallery/bonding-tape/05.jpg", "assets/images/projects-gallery/bonding-tape/07.jpg"],
      videos: [],
      doc: "",
      page: "project-detail.html?project=bonding-tape-machine"
    },
    {
      slug: "line-follower-robot",
      title: "Line Follower Robot with Gripper",
      category: "Robotics / Automation",
      filter: "robotics automation printing",
      oneLineProblem: "Build an educational robot that could follow a line, identify coloured objects and perform pick-and-place tasks.",
      contribution: "Designed, built and programmed the compact robot, including its 3D-printed chassis and servo gripper.",
      tools: ["Arduino", "PID control", "Sensors", "3D Printing"],
      impact: "Delivered a working school demonstration robot for autonomous navigation and object handling.",
      summary: "A compact autonomous robot combining line following, colour sensing and a two-degree-of-freedom gripper arm.",
      problem: "The school demonstration required one platform that could navigate a marked route and handle small coloured cubes.",
      role: "I designed the mechanical layout, printed the structural parts, assembled the electronics and programmed the control logic.",
      method: "Differential drive with PID steering from a five-channel IR array, plus servo actuation and a colour sensor for pick-and-place decisions.",
      result: "A working robot that follows a black line, identifies object colour and moves 40 mm wooden cubes.",
      image: "assets/images/projects-gallery/line-follower/01.jpg",
      images: ["assets/images/projects-gallery/line-follower/01.jpg", "assets/images/projects-gallery/line-follower/02.jpg", "assets/images/projects-gallery/line-follower/03.jpg"],
      videos: [],
      doc: "",
      page: "project-detail.html?project=line-follower-robot"
    },
    {
      slug: "self-tightening-gripper",
      title: "Self-Tightening Tensile-Test Gripper",
      category: "Mechanical Design",
      filter: "fixtures machine",
      oneLineProblem: "Manual screw clamping slowed tensile-test sample changes and produced inconsistent grip force.",
      contribution: "Designed and fabricated an eccentric self-tightening gripper to replace the screw-actuated clamp.",
      tools: ["SOLIDWORKS", "Mechanism design", "Fabrication", "Testing"],
      impact: "Reduced the gripper footprint by 20 mm and simplified repeatable specimen loading.",
      summary: "A compact eccentric-pin gripper that increases clamping force automatically as tensile load rises.",
      problem: "The original clamp required manual tightening for every test and created operator fatigue and cycle-time variation.",
      role: "I completed the mechanism design, fabrication support, assembly and performance checks.",
      method: "Eccentric-pin kinematics converted tensile load into additional clamping force while preserving fast sample insertion.",
      result: "A smaller, self-tightening fixture with repeatable clamping across the required low-force test range.",
      image: "assets/images/projects-gallery/gripper/01.jpg",
      images: ["assets/images/projects-gallery/gripper/01.jpg", "assets/images/projects-gallery/gripper/02.jpg", "assets/images/gallery/project-designs/gripper-cad.png"],
      videos: [],
      doc: "",
      page: "project-detail.html?project=self-tightening-gripper"
    },
    {
      slug: "oil-drip-tray-redesign",
      title: "Oil Drip-Tray Mechanism Redesign",
      category: "Machine Design / Improvement",
      filter: "machine cad automation",
      oneLineProblem: "Incorrect tray geometry allowed filling-nozzle oil to drip onto the factory floor.",
      contribution: "Redesigned the tray position, drain slope and cylinder mounting bracket and issued revised fabrication drawings.",
      tools: ["SOLIDWORKS", "DfMA", "Pneumatics", "Fabrication drawings"],
      impact: "Corrected nozzle coverage and supported gravity return of collected oil to the machine tank.",
      summary: "A production-machine redesign focused on oil capture, clean operation and fit within the existing machine envelope.",
      problem: "The existing tray missed the nozzle drip point and its drain geometry did not return oil reliably.",
      role: "I inspected the mechanism, corrected the CAD model and prepared updated workshop drawings.",
      method: "Repositioned the tray under the nozzle, added a minimum three-degree drain slope and matched the bracket to the existing pneumatic cylinder.",
      result: "A fabrication-ready design that captures residual oil and routes it back to the tank.",
      image: "assets/images/projects-gallery/oil-tray/01.jpg",
      images: ["assets/images/projects-gallery/oil-tray/01.jpg", "assets/images/gallery/project-designs/oil-drip-tray-cad.png"],
      videos: [],
      doc: "",
      page: "project-detail.html?project=oil-drip-tray-redesign"
    },
    {
      slug: "combustion-chamber-scada",
      title: "Combustion Chamber SCADA Interface",
      category: "Automation / SCADA",
      filter: "automation software",
      oneLineProblem: "Researchers needed clearer real-time monitoring of temperature, pressure and flow parameters.",
      contribution: "Modified and enhanced the Haiwell SCADA interface with dynamic process displays.",
      tools: ["Haiwell SCADA", "PLC", "Process monitoring", "HMI design"],
      impact: "Improved visibility of live research-rig parameters through a clearer operator interface.",
      summary: "SCADA interface work for an academic combustion-chamber research rig.",
      problem: "The research team needed a practical interface for reading multiple live combustion parameters.",
      role: "I contributed to the SCADA GUI design and configured dynamic displays for monitored variables.",
      method: "Connected PLC-acquired sensor values to numeric displays, trends and status indications in Haiwell SCADA.",
      result: "A clearer real-time monitoring interface for temperature, pressure and flow data.",
      image: "assets/images/gallery/curated/controller-panel.jpg",
      images: ["assets/images/gallery/curated/controller-panel.jpg"],
      videos: [],
      doc: "",
      page: "project-detail.html?project=combustion-chamber-scada"
    },
    {
      slug: "screen-printer-control",
      title: "Screen Printer Control Circuit",
      category: "Industrial Controls",
      filter: "automation software",
      oneLineProblem: "The machine required a verified voltage-to-frequency control circuit before live installation.",
      contribution: "Designed the converter circuit, created a PLC test program and supported commissioning.",
      tools: ["PLC ladder", "Circuit design", "Testing", "Commissioning"],
      impact: "Verified the control signal on a test setup before installing it in the live screen-printer machine.",
      summary: "Control-circuit design and commissioning support for an industrial research screen printer.",
      problem: "A machine function required a dependable frequency output derived from an input voltage.",
      role: "I designed and bench-tested the circuit and wrote the PLC logic used for verification.",
      method: "Tested the voltage-to-frequency output using a Haiwell PLC, push buttons and a controlled pre-installation sequence.",
      result: "Confirmed circuit operation before live installation and commissioning.",
      image: "assets/images/projects-gallery/screen-printer/210.jpg",
      images: ["assets/images/projects-gallery/screen-printer/210.jpg", "assets/images/projects-gallery/screen-printer/222.jpg", "assets/images/projects-gallery/screen-printer/227.jpg", "assets/images/gallery/project-designs/screen-printer-cad.png"],
      videos: [],
      doc: "",
      page: "project-detail.html?project=screen-printer-control"
    },
    {
      slug: "ball-mill-control-panel",
      title: "Ball Mill Control Panel",
      category: "Electrical / Commissioning",
      filter: "automation machine",
      oneLineProblem: "An industrial ball mill needed a complete protected DOL motor-control panel.",
      contribution: "Wired, labelled, tested and commissioned the panel and its operator controls.",
      tools: ["DOL starter", "Panel wiring", "Protection", "Commissioning"],
      impact: "Delivered a tested panel with isolation, earth-fault, short-circuit and overload protection.",
      summary: "Complete control-panel wiring and commissioning for a three-phase ball mill drive.",
      problem: "The machine required a safe, maintainable motor-control panel with clear start, stop and emergency-stop operation.",
      role: "I mounted components, routed and terminated cables, labelled the panel and completed pre-energisation tests.",
      method: "Built a DOL starter circuit using an isolator, RCCB, MCB, contactor, overload relay and operator push buttons.",
      result: "The panel passed continuity, insulation and functional testing before handover.",
      image: "assets/images/gallery/curated/controller-panel.jpg",
      images: ["assets/images/gallery/curated/controller-panel.jpg"],
      videos: [],
      doc: "",
      page: "project-detail.html?project=ball-mill-control-panel"
    },
    {
      slug: "fabric-picking-research",
      title: "Fabric-Picking Mechanism Research",
      category: "R&D / Mechanical Design",
      filter: "automation cad",
      oneLineProblem: "Separating one flexible fabric layer from a cut-bundle stack limited full process automation.",
      contribution: "Researched and modelled Bernoulli air-jet and fabric-stretch separation concepts.",
      tools: ["SOLIDWORKS", "Concept design", "Pneumatics", "Research"],
      impact: "Produced two feasibility concepts and CAD recommendations for future automation development.",
      summary: "Concept research into reliable single-layer fabric separation for garment-process automation.",
      problem: "Flexible fabric layers adhere and deform, making conventional automated picking unreliable.",
      role: "I researched alternative separation principles and developed concept-level mechanical designs.",
      method: "Compared Bernoulli lifting with a clamp-and-stretch method and modelled both concepts in SOLIDWORKS.",
      result: "Delivered concept designs and recommendations for subsequent prototype development.",
      image: "assets/images/gallery/curated/fixture-mechanism.jpg",
      images: ["assets/images/gallery/curated/fixture-mechanism.jpg"],
      videos: [],
      doc: "",
      page: "project-detail.html?project=fabric-picking-research"
    },
    {
      slug: "mtone-erp",
      title: "MTone ERP Workflow",
      category: "Engineering Software",
      filter: "software",
      oneLineProblem: "Custom manufacturing jobs needed clearer costing, stock, quotation and job-status tracking.",
      contribution: "Developed an ERP-style workflow around the real operating needs of MTone Designers.",
      tools: ["Python", "Workflow design", "Inventory", "Costing"],
      impact: "Structured job, material, quotation and cost information in one engineering workflow.",
      summary: "A practical digital workflow for managing custom 3D-printing, laser and engineering jobs.",
      problem: "Job information was spread across separate notes and manual calculations.",
      role: "I defined the workflow and developed the software around day-to-day business operations.",
      method: "Mapped enquiries, quotations, inventory, production status and job costing into a connected process.",
      result: "A clearer operating system for tracking custom work and production information.",
      image: "assets/images/projects/mtone-erp.svg",
      images: ["assets/images/projects/mtone-erp.svg"],
      videos: [],
      doc: "",
      page: "project-detail.html?project=mtone-erp"
    },
    {
      slug: "vesak-lantern",
      title: "Vesak Lantern Build",
      category: "Personal Engineering Build",
      filter: "machine",
      oneLineProblem: "Create a complete illuminated Vesak display through practical fabrication and electrical assembly.",
      contribution: "Built and documented the lantern assembly as a personal hands-on project.",
      tools: ["Fabrication", "Lighting", "Electrical assembly", "Prototyping"],
      impact: "Completed a working display and documented the finished build in a project video.",
      summary: "A personal Vesak lantern build demonstrating practical fabrication, lighting integration and assembly work.",
      problem: "The project required a stable physical structure, integrated lighting and a presentable finished display.",
      role: "I completed the practical build and documented the result.",
      method: "Fabricated and assembled the structure, integrated the lighting and checked the completed display.",
      result: "A completed illuminated Vesak lantern documented through a public project video.",
      image: "",
      images: [],
      videos: [{ youtube: "https://youtu.be/mQnEnmzoZMQ", title: "Vesak Lantern Build" }],
      doc: "",
      page: "project-detail.html?project=vesak-lantern"
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


  skillEvidence: {
    "Mechanical Design": [
      { label: "Fan motor fixture", href: "project-detail.html?project=fan-motor-fixture" },
      { label: "CNC machine builds", href: "project-detail.html?project=cnc-laser-engraver" }
    ],
    "Automation & Controls": [
      { label: "1W LED Bulb Assembly Machine project", href: "project-detail.html?project=led-bulb-machine" },
      { label: "Bonding tape automation", href: "project-detail.html?project=bonding-tape-machine" }
    ],
    "Manufacturing & Maintenance": [
      { label: "Fan-base filling", href: "project-detail.html?project=fan-base-filling" },
      { label: "Eyelet puncher", href: "project-detail.html?project=eyelet-puncher" }
    ],
    "Digital Tools": [
      { label: "Engineering workflow projects", href: "projects.html?filter=software" }
    ],
    "3D Printing / Rapid Prototyping": [
      { label: "Custom FDM printer", href: "project-detail.html?project=custom-3d-printer" },
      { label: "Full image evidence", href: "gallery.html?filter=printing" }
    ]
  },
  machines: [
    {
      slug: "creality-k1-max",
      title: "Creality K1 Max",
      category: "Additive manufacturing",
      image: "",
      description: "An enclosed, high-speed FDM/FFF printer used for rapid prototypes, functional parts and production-support tooling.",
      familiarity: "Familiar with slicer preparation, material selection, automatic calibration, print monitoring, routine care and first-line troubleshooting.",
      technologies: "FDM/FFF, CoreXY motion, automatic bed levelling, enclosed printing, slicer workflow"
    },
    {
      slug: "ultimaker-3-extended",
      title: "Ultimaker 3 Extended",
      category: "Additive manufacturing",
      image: "",
      description: "A professional dual-extrusion FDM printer with an extended build height for prototypes, engineering parts and soluble-support workflows.",
      familiarity: "Familiar with Cura preparation, material and support selection, build-plate setup, dual-extrusion workflow, calibration and print-quality checks.",
      technologies: "FDM/FFF, dual extrusion, soluble supports, material profiles, Cura, build calibration"
    },
    {
      slug: "resistance-spot-welding",
      title: "Resistance Spot-Welding Machines",
      category: "Joining technology",
      image: "assets/images/projects/spot-welder.svg",
      description: "Production equipment that joins conductive sheet or components through controlled current, pressure and contact time.",
      familiarity: "Familiar with electrodes, clamping, weld consistency, cooling, operating checks and a structured maintenance and fault-finding approach.",
      technologies: "Resistance welding, electrodes, clamping force, current and timing, water cooling, maintenance"
    },
    {
      slug: "automatic-packing-machines",
      title: "Automatic Packing Machines",
      category: "Packaging technology",
      image: "assets/images/machines/extracted/packing-machine-06.jpg",
      description: "Automated packaging equipment coordinating product flow, film feeding, sealing, cutting and counting in a repeatable production cycle.",
      familiarity: "Familiar with operating sequence, HMI settings, film tracking, sealing and cutting timing, sensors, pneumatics and production checks.",
      technologies: "Film feed, sealing, cutting, sensors, pneumatics, drives, HMI, temperature control"
    },
    {
      slug: "industrial-sawing-machines",
      title: "Industrial Sawing Machines",
      category: "Cutting technology",
      image: "",
      description: "Workshop and production machines used to cut metal, polymer or other stock accurately and safely before fabrication or machining.",
      familiarity: "Familiar with work holding, blade selection and condition, cutting feed, guarding, dimensional checks and routine machine care.",
      technologies: "Saw blades, work holding, cutting feed, guarding, coolant, dimensional inspection"
    },
    {
      slug: "co2-fiber-laser-systems",
      title: "CO₂ & Fiber Laser Systems",
      category: "Laser processing",
      image: "assets/images/machines/fiber-laser.svg",
      description: "CO₂ systems support cutting and engraving of suitable non-metal materials, while fiber systems are commonly used for metal marking and related industrial processing.",
      familiarity: "Familiar with job setup, focus and parameter selection, fixtures, material suitability, extraction, marking or cutting workflow and laser safety controls.",
      technologies: "CO₂ laser, fiber laser, focus, power and speed, fixtures, extraction, LightBurn and marking workflow"
    },
    {
      slug: "led-bulb-assembly-machines",
      title: "LED Bulb Assembly Machines",
      category: "Existing production equipment",
      image: "",
      description: "Existing production systems that combine component feeding, positioning, joining and inspection steps in a controlled LED-bulb assembly sequence.",
      familiarity: "Hands-on familiarity through operation support and troubleshooting, including component flow, sensors, pneumatic actions, cycle timing, operator interaction and fault isolation. These were existing machines, not machines I designed or built.",
      technologies: "Part feeding, sensors, pneumatics, sequencing, fixtures, cycle control, production flow"
    },
    {
      slug: "injection-moulding-technology",
      title: "Injection Moulding Technology",
      category: "Polymer manufacturing",
      image: "",
      description: "A manufacturing process that plasticizes polymer, injects it into a mould, controls packing and cooling, then ejects the finished component.",
      familiarity: "Familiar through engineering study and advanced training with the machine cycle, process parameters, mould functions, material behaviour and common part defects.",
      technologies: "Clamping, injection, holding pressure, cooling, ejection, moulds, polymers, defect analysis"
    },
    {
      slug: "linear-vibratory-feeders",
      title: "Linear Vibratory Feeder Technology",
      category: "Parts feeding technology",
      image: "",
      description: "Vibratory feeding technology transports and presents small parts along a controlled track for assembly, inspection or packaging operations.",
      familiarity: "Familiar with vibration-based transport, track and guide geometry, part orientation, amplitude adjustment, sensors, transfer points and jam investigation.",
      technologies: "Vibration, linear tracks, part orientation, amplitude, guides, sensors, transfer and escapement"
    },
    {
      slug: "pad-printing-machines",
      title: "Pad-Printing Machines",
      category: "Industrial printing",
      image: "",
      description: "Printing equipment that transfers ink from an etched plate to flat, curved or irregular product surfaces using a silicone pad.",
      familiarity: "Familiar with the operating cycle, plate and pad relationship, part fixtures, print alignment, ink handling, setup checks and repeatability considerations.",
      technologies: "Cliché plate, silicone pad, ink system, fixtures, alignment, cycle timing, print-quality checks"
    },
    {
      slug: "bonding-tape-machines",
      title: "Bonding Tape Automation Machines",
      category: "Textile automation",
      image: "assets/images/machines/extracted/ottuthal-machine-58.jpg",
      description: "Automation equipment that feeds, measures, cuts and heat-bonds tape to fabric in a repeatable production cycle.",
      familiarity: "Familiar with tape feeding, pneumatic sequencing, stepper motion, heat and pressure control, sensing, testing and safe operation.",
      technologies: "PLC sequencing, PID temperature control, pneumatics, stepper motor, sensors, heat bonding"
    }
  ],
  gallery: [
    // ====== PROJECT VIDEOS (YouTube links) ======
    // These links remain available to project cards and project pages. The image gallery
    // deliberately excludes video entries and displays still images only.
    { title: "CNC Plotter & PCB Drilling Machine", category: "video / automation", filter: "video automation machine", youtube: "https://youtube.com/shorts/VnyF2VSwVNk", alt: "CNC plotter and PCB drilling machine in operation", text: "Custom CNC plotter / PCB drilling machine running an automated drilling cycle." },
    { title: "Fan Base Filling Machine", category: "video / automation", filter: "video automation machine", youtube: "https://youtube.com/shorts/L76piK7CX1Y", alt: "Concrete fan base filling machine", text: "Production-support machine for concrete fan base filling, showing the automated cycle." },
    { title: "1W LED Bulb Assembly Machine", category: "video / automation", filter: "video automation machine", youtube: "https://youtu.be/iFlCn68JsZg", alt: "LED bulb assembly machine running", text: "LED bulb assembly machine performing an automated assembly sequence." },
    { title: "Pneumatic Wire Stripping Machine", category: "project / automation", filter: "image curated automation machine", image: "assets/images/gallery/curated/wire-stripping-machine.jpg", alt: "Pneumatic wire stripping machine mechanism with cylinder and guides", text: "Public-safe photo of the pneumatic mechanism developed for a controlled, repeatable wire-stripping cycle." },
    { title: "Custom 3D Printer Running", category: "video / machine build", filter: "video printing machine", youtube: "https://youtube.com/shorts/izsnT307ZEw", alt: "Custom FDM 3D printer printing", text: "Personal custom FDM 3D printer build printing a part." },
    { title: "CNC Laser Engraving in Action", category: "video / laser work", filter: "video laser machine", youtube: "https://youtube.com/shorts/dT-JzzmaO9E", alt: "CNC laser engraver running", text: "Custom CNC laser engraving machine engraving a design." },
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
    { title: "Combustion Chamber SCADA", category: "project / SCADA", filter: "diagram automation", image: "assets/images/gallery/gallery-01.svg", alt: "Public-safe automation troubleshooting diagram", text: "Public-safe project reference retained without publishing the client-specific interface screens." },
    { title: "Mechanical Gripper CAD", category: "project / mechanism", filter: "image cad fixtures robotics", image: "assets/images/gallery/project-designs/gripper-cad.png", alt: "Mechanical gripper CAD assembly", text: "CAD assembly study for a compact gripping mechanism, showing linkage layout and component integration." },
    { title: "Liquid Filling Machine CAD", category: "project / automation", filter: "image cad automation machine", image: "assets/images/gallery/project-designs/liquid-filling-machine-cad.png", alt: "Liquid filling machine CAD concept", text: "Machine concept showing container positioning, multi-nozzle filling layout and production-flow thinking." },
    { title: "Eyelet Puncher Machine Build", category: "project / production automation", filter: "image automation machine", image: "assets/images/projects-gallery/eyelet-puncher/01.jpg", alt: "Pneumatic eyelet puncher machine with guided operator station", text: "Public-safe machine evidence showing pneumatic actuation, guided component handling and operator-focused production support." },
    { title: "Custom FDM Printer Build - Updated", category: "project / machine build", filter: "image printing machine", image: "assets/images/projects-gallery/3d-printer/05.jpg", alt: "Custom FDM 3D printer frame and motion system", text: "Updated build evidence showing the extrusion frame, motion system, print platform and hands-on machine integration." },
    { title: "Liquid Filling Machine CAD - System Layout", category: "project / automation", filter: "image cad automation machine", image: "assets/images/gallery/project-designs/liquid-filling-machine-cad-overview.png", alt: "Liquid filling machine CAD system layout", text: "Updated concept view showing the multi-nozzle filling head, container table, controller enclosure and equipment arrangement." },
    { title: "Liquid Filling Machine CAD - Filling Head", category: "project / automation", filter: "image cad automation machine", image: "assets/images/gallery/project-designs/liquid-filling-machine-cad-detail.png", alt: "Liquid filling machine multi-nozzle filling head CAD detail", text: "Closer concept view showing nozzle positioning, guided motion and repeatable container presentation." },
    { title: "Oil Drip Tray Mechanism", category: "project / machine design", filter: "image cad machine", image: "assets/images/gallery/project-designs/oil-drip-tray-cad.png", alt: "Oil drip tray mechanism CAD concept", text: "Mechanical concept developed to guide and collect process drips while supporting cleaner machine operation." },
    { title: "Screen Printer Mechanism", category: "project / machine design", filter: "image cad machine automation", image: "assets/images/gallery/project-designs/screen-printer-cad.png", alt: "Screen printer mechanism CAD concept", text: "CAD concept showing frame, guided motion and mechanism arrangement for a compact screen-printing machine." },
    { title: "3D Printer Motion Prototype", category: "curated / machine build", filter: "image curated printing machine", image: "assets/images/gallery/curated/3d-printer-prototype.jpg", alt: "3D printer motion prototype", text: "Curated public-safe evidence showing printer mechanism learning, motion-system assembly and rapid prototyping work." },
    { title: "Machine Frame Build", category: "curated / fabrication", filter: "image curated machine automation", image: "assets/images/gallery/curated/machine-frame-build.jpg", alt: "Machine frame and mechanism build", text: "Public-safe photo evidence of frame assembly, mechanical layout thinking and practical machine-building exposure." },
    { title: "Controller Panel Work", category: "curated / automation", filter: "image curated automation", image: "assets/images/gallery/curated/controller-panel.jpg", alt: "Controller panel and machine electronics", text: "General automation evidence for controller layout, wiring awareness and machine-support learning without publishing diagrams." },
    { title: "Fixture Mechanism Detail", category: "curated / fixtures", filter: "image curated fixtures machine", image: "assets/images/gallery/curated/fixture-mechanism.jpg", alt: "Fixture and mechanism detail", text: "Public-safe detail photo showing mechanism observation, fixture thinking and hands-on assembly experience." },
    { title: "Laser Engraving Work", category: "curated / laser work", filter: "image curated machine laser", image: "assets/images/gallery/curated/laser-engraving-work.jpg", alt: "Laser engraving work evidence", text: "Laser engraving workflow evidence covering setup, material trials and process-tuning practice." },
    { title: "Project Exhibition Machine", category: "curated / exhibition", filter: "image curated achievement machine", image: "assets/images/gallery/curated/project-exhibition-machine.jpg", alt: "Project machine displayed at exhibition", text: "Public-safe exhibition evidence showing engineering communication, machine display and practical project presentation." },
    { title: "Mechanism Detail Study", category: "curated / mechanism", filter: "image curated machine fixtures", image: "assets/images/gallery/curated/mechanism-detail.jpg", alt: "Mechanism detail study", text: "Cropped evidence for mechanism understanding, fit checks and physical problem-solving without sensitive project details." },
    { title: "Wood Engraving Sample", category: "curated / laser sample", filter: "image curated laser", image: "assets/images/gallery/curated/wood-engraving-sample.jpg", alt: "Wood engraving sample", text: "Public-safe laser engraving sample showing process experimentation, material behavior and finishing quality." },
    { title: "Personal Sustainability Planting", category: "personal project / sustainability", filter: "image curated personal", image: "assets/images/gallery/curated/personal-sustainability-planting.jpg", alt: "Personal sustainability planting project", text: "Public-safe personal project evidence. Kept separate from industrial machines so recruiters can clearly distinguish engineering work from personal initiatives." },
    { title: "Field Observation Project", category: "personal project / field work", filter: "image curated personal", image: "assets/images/gallery/curated/field-observation-personal-project.jpg", alt: "Field observation for personal project", text: "Personal project visual used as supporting context only, not listed as industrial machine experience." },
    ...(window.portfolioProjectGallery || []),
    ...(window.portfolioGalleryLibrary || []).filter(
      item => !(window.portfolioProjectGalleryLegacyDuplicates || []).includes(item.image)
    )
  ],

  certifications: [
    { name: "BSc (Hons) Mechanical Engineering", issuer: "University of Jaffna", detail: "Faculty of Engineering - Oct 2017 to Feb 2024.", image: "assets/certificates/img/university-of-jaffna-degree.jpg" },
    { name: "IESL Associate Member", issuer: "Institution of Engineers Sri Lanka", detail: "Membership AM-32795." },
    { name: "Associate Engineer Registration (2025)", issuer: "Engineering Council, Sri Lanka", detail: "Registration No. 218944. Certificate issued 01 April 2025 and states validity through 31 December 2025.", image: "assets/certificates/img/engineering-council-associate-engineer.jpg", file: "assets/certificates/engineering-council-associate-engineer.pdf" },
    { name: "SOLIDWORKS Design Professional (CSWP)", issuer: "Dassault Systèmes SOLIDWORKS", detail: "Issued 31 August 2026. Certificate ID: C-ZPJADGEXF3.", badge: "assets/images/certification-badges/cswp-design-professional.png", image: "assets/certificates/img/cswp-c-zpjadgexf3.jpg", file: "assets/certificates/Certificate%20C-ZPJADGEXF3.pdf" },
    { name: "Certified SOLIDWORKS Associate in Mechanical Design", issuer: "Dassault Systemes SOLIDWORKS", detail: "CSWA - Mechanical Design certification.", badge: "assets/images/certification-badges/cswa-mechanical-design.png", image: "assets/certificates/img/Certificate_C-T7NHSLZ59X.jpg", file: "assets/certificates/Certificate_C-T7NHSLZ59X.pdf" },
    { name: "Certified SOLIDWORKS Associate in Additive Manufacturing", issuer: "Dassault Systemes SOLIDWORKS", detail: "CSWA-AM - Additive Manufacturing certification.", badge: "assets/images/certification-badges/cswa-additive-manufacturing.png", image: "assets/certificates/img/Certificate_C-UQGLWM7JCK.jpg", file: "assets/certificates/Certificate_C-UQGLWM7JCK.pdf" },
    { name: "PLC Training", issuer: "University of Moratuwa", detail: "PLC training - Robotics & Control Systems Laboratory, 2025.", image: "assets/certificates/img/plc-moratuwa.jpg" },
    { name: "PLC Programming Course", issuer: "Epic Engineering", detail: "Industrial PLC programming - 2024." },
    { name: "Maintenance of Industrial Plant & Machinery", issuer: "NERDC", detail: "Maintenance of Industrial Plant & Machinery - 2026.", image: "assets/certificates/img/nerdc-maintenance.jpg" },
    { name: "Industrial Motor Operation & Control", issuer: "NERDC", detail: "Industrial Motor Operation & Control - 2025.", image: "assets/certificates/img/nerdc-motor-control.jpg" },
    { name: "Advanced Injection Moulding", issuer: "Industrial Development Board of Ceylon (IDB)", detail: "Advanced Injection Moulding - 2026.", image: "assets/certificates/img/idb-injection-molding.jpg" }
  ],

  availableFor: ["Automation Engineering", "Mechanical Design", "Machine Troubleshooting", "Fixture Design", "3D Printing & Prototyping", "Engineering Documentation"],

  // ====== Homepage running project image strip ======
  // Use meaningful public-safe project/artwork images. Title becomes the visible label.
  marquee: [
    { title: "Machine Frame Build", image: "assets/images/gallery/curated/machine-frame-build.jpg", href: "machines.html" },
    { title: "3D Printer Motion Prototype", image: "assets/images/gallery/curated/3d-printer-prototype.jpg", href: "project-detail.html?project=custom-3d-printer" },
    { title: "Custom FDM Printer Build", image: "assets/images/projects-gallery/3d-printer/05.jpg", href: "project-detail.html?project=custom-3d-printer" },
    { title: "CNC Laser Engraver Build", image: "assets/images/real/cnc-laser-machine.jpg", href: "project-detail.html?project=cnc-laser-engraver" },
    { title: "Gamunu Combat Robot", image: "assets/images/gallery/home/gamunu-combat-robot.jpg", href: "project-detail.html?project=combat-robots" },
    { title: "Eyelet Puncher Machine", image: "assets/images/projects-gallery/eyelet-puncher/01.jpg", href: "project-detail.html?project=eyelet-puncher" },
    { title: "Liquid Filling Machine CAD", image: "assets/images/gallery/project-designs/liquid-filling-machine-cad-overview.png", href: "gallery.html?filter=cad" },
    { title: "3D Printed Gripper", image: "assets/images/gallery/home/3d-printed-gripper.jpg", href: "gallery.html?filter=printing" },
    { title: "Controller Panel Work", image: "assets/images/gallery/curated/controller-panel.jpg", href: "gallery.html?filter=automation" },
    { title: "Engineering Exhibition", image: "assets/images/gallery/curated/project-exhibition-machine.jpg", href: "gallery.html?filter=achievement" }
  ],

  // Only comments YOU add here appear on the site (approval = you paste an approved one in).
  // To add an approved comment: copy a block below, fill it in, keep the comma.
  testimonials: []
};

// Curated project folders are the source of truth for project thumbnails and image viewers.
// This keeps each project page aligned with the categorized gallery without duplicating paths.
(() => {
  const imageMap = window.portfolioProjectImagesBySlug || {};
  (window.portfolioData.projects || []).forEach(project => {
    const images = imageMap[project.slug];
    if (!Array.isArray(images) || !images.length) return;
    project.images = [...images];
    project.image = images[0];
  });
})();
