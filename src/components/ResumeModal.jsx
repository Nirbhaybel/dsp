import { AnimatePresence, motion } from "framer-motion";
import {
  FaTimes,
  FaDownload,
  FaSatelliteDish,
  FaMicrochip,
  FaBroadcastTower,
  FaBrain,
  FaProjectDiagram,
  FaStar,
} from "react-icons/fa";

const resumes = [
  {
    featured: true,
    title: "Senior Radar Systems Architect",
    subtitle: "AESA • DBF • DDC • Pulse Compression",
    experience: "10+ Years Experience",
    target: "Principal Engineer • Technical Lead • Architect",
    skills: ["AESA", "DBF", "CFAR", "Tracking", "Radar DSP"],
    file: "Radar_Resume.pdf",
    icon: <FaSatelliteDish />,
  },

  {
    title: "FPGA / RTL Design Engineer",
    subtitle: "VHDL • Verilog • Vivado",
    experience: "10+ Years",
    target: "Senior FPGA Engineer",
    skills: ["VHDL", "Verilog", "Vivado", "Timing"],
    file: "FPGA_Resume.pdf",
    icon: <FaMicrochip />,
  },

  {
    title: "RFSoC Signal Processing",
    subtitle: "ADC • DAC • JESD204 • DDC",
    experience: "RFSoC Specialist",
    target: "Signal Processing Engineer",
    skills: ["RFSoC", "ADC", "DAC", "JESD204"],
    file: "RFSoC_Resume.pdf",
    icon: <FaBroadcastTower />,
  },

  {
    title: "Mixed Signal Hardware Lead",
    subtitle: "DDR • Ethernet • PCB",
    experience: "Hardware Lead",
    target: "Hardware Architect",
    skills: ["DDR", "Ethernet", "PCB"],
    file: "MixedSignal_Resume.pdf",
    icon: <FaProjectDiagram />,
  },

  {
    title: "AI for Radar & DSP",
    subtitle: "MATLAB • Python • Neural Networks",
    experience: "AI Research",
    target: "AI Engineer",
    skills: ["MATLAB", "Python", "ANN"],
    file: "AI_Resume.pdf",
    icon: <FaBrain />,
  },
];

export default function ResumeModal({ open, onClose }) {

  if (!open) return null;

  return (

    <AnimatePresence>

      <motion.div
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >

        <motion.div
          initial={{ y: 40, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="
          relative
          w-full
          max-w-6xl
          max-h-[92vh]
          overflow-y-auto
          rounded-3xl
          border
          border-cyan-500/30
          bg-slate-900/90
          backdrop-blur-2xl
          shadow-[0_0_40px_rgba(0,255,255,0.18)]
          "
        >

          {/* Header */}

          <div className="sticky top-0 z-20 bg-slate-900/95 backdrop-blur-xl border-b border-cyan-500/20 px-6 sm:px-8 py-5 flex items-center justify-between">

            <div>

              <h2 className="text-2xl sm:text-4xl font-black text-white">

                Recruiter Dashboard

              </h2>

              <p className="text-cyan-400 mt-2 text-sm sm:text-base">

                Choose the resume that best matches your hiring requirement.

              </p>

            </div>

            <button
              onClick={onClose}
              className="h-12 w-12 rounded-full bg-slate-800 hover:bg-cyan-500 transition flex items-center justify-center text-white text-xl"
            >
              <FaTimes />
            </button>

          </div>

          {/* Body */}

          <div className="p-5 sm:p-8 space-y-8">

           {/* ================= FEATURED RESUME ================= */}

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1 }}
  className="
    relative
    overflow-hidden
    rounded-3xl
    border
    border-cyan-500/40
    bg-gradient-to-br
    from-cyan-500/10
    via-slate-900/90
    to-blue-900/20
    p-6
    sm:p-8
    shadow-[0_0_35px_rgba(0,255,255,0.15)]
  "
>

  {/* Recommended Badge */}

  <div className="absolute top-5 right-5">

    <span className="flex items-center gap-2 bg-cyan-500 text-black px-4 py-2 rounded-full text-xs sm:text-sm font-bold">

      <FaStar />

      Recommended

    </span>

  </div>

  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8">

    {/* Left Side */}

    <div className="flex gap-5">

      <div className="h-20 w-20 rounded-2xl bg-cyan-500/15 border border-cyan-500 flex items-center justify-center text-cyan-400 text-5xl flex-shrink-0">

        {resumes[0].icon}

      </div>

      <div>

        <h3 className="text-2xl sm:text-4xl font-black text-white">

          {resumes[0].title}

        </h3>

        <p className="text-cyan-300 mt-2">

          {resumes[0].subtitle}

        </p>

        <div className="flex flex-wrap gap-3 mt-5">

          <span className="bg-cyan-500/15 border border-cyan-500 text-cyan-300 px-4 py-2 rounded-full text-sm">

            📈 {resumes[0].experience}

          </span>

          <span className="bg-green-500/15 border border-green-500 text-green-300 px-4 py-2 rounded-full text-sm">

            🎯 {resumes[0].target}

          </span>

        </div>

        <div className="flex flex-wrap gap-2 mt-6">

          {resumes[0].skills.map((skill) => (

            <span
              key={skill}
              className="px-3 py-1 rounded-full bg-slate-800 border border-cyan-500/40 text-cyan-300 text-xs sm:text-sm"
            >
              {skill}
            </span>

          ))}

        </div>

      </div>

    </div>

    {/* Right Side */}

    <div className="flex flex-col items-stretch sm:items-end gap-4">

      <a
        href={`${import.meta.env.BASE_URL}resumes/${resumes[0].file}`}
        download={resumes[0].file}
        className="
          w-full
          sm:w-auto
          bg-cyan-500
          hover:bg-cyan-400
          text-black
          px-8
          py-4
          rounded-2xl
          font-bold
          flex
          justify-center
          items-center
          gap-3
          transition-all
          duration-300
          hover:scale-105
        "
      >
        <FaDownload />

        Download Resume

      </a>

      <div className="text-center sm:text-right">

        <p className="text-gray-400 text-sm">

          Best suited for

        </p>

        <p className="text-white font-semibold">

          Radar • RFSoC • FPGA Leadership

        </p>

      </div>

    </div>

  </div>

</motion.div>

            {/* ================= OTHER RESUMES ================= */}

<div className="space-y-5">

  <h3 className="text-2xl font-bold text-white">
    Other Resume Versions
  </h3>

  <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">

    {resumes.slice(1).map((resume, index) => (

      <motion.div
        key={resume.file}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 + index * 0.1 }}
        whileHover={{
          scale: 1.02,
          y: -4,
        }}
        className="
          bg-slate-800/60
          backdrop-blur-xl
          border
          border-cyan-500/20
          hover:border-cyan-400
          rounded-3xl
          p-6
          transition-all
          duration-300
        "
      >

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-6">

          {/* LEFT */}

          <div className="flex gap-5">

            <div className="
              h-16
              w-16
              rounded-2xl
              bg-cyan-500/10
              border
              border-cyan-500/30
              flex
              items-center
              justify-center
              text-cyan-400
              text-3xl
              flex-shrink-0
            ">

              {resume.icon}

            </div>

            <div>

              <h4 className="text-xl font-bold text-white">

                {resume.title}

              </h4>

              <p className="text-cyan-300 mt-1">

                {resume.subtitle}

              </p>

              <div className="flex flex-wrap gap-2 mt-4">

                <span className="bg-cyan-500/10 border border-cyan-500 text-cyan-300 px-3 py-1 rounded-full text-xs">

                  📈 {resume.experience}

                </span>

                <span className="bg-green-500/10 border border-green-500 text-green-300 px-3 py-1 rounded-full text-xs">

                  🎯 {resume.target}

                </span>

              </div>

              <div className="flex flex-wrap gap-2 mt-4">

                {resume.skills.map((skill) => (

                  <span
                    key={skill}
                    className="
                      px-3
                      py-1
                      rounded-full
                      bg-slate-900
                      border
                      border-cyan-500/30
                      text-cyan-300
                      text-xs
                    "
                  >

                    {skill}

                  </span>

                ))}

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="flex flex-col justify-center">

            <a
              href={`${import.meta.env.BASE_URL}resumes/${resume.file}`}
              download={resume.file}
              className="
                w-full
                sm:w-auto
                bg-cyan-500
                hover:bg-cyan-400
                text-black
                px-6
                py-3
                rounded-xl
                font-bold
                flex
                items-center
                justify-center
                gap-2
                transition-all
                duration-300
                hover:scale-105
              "
            >

              <FaDownload />

              Download

            </a>

          </div>

        </div>

      </motion.div>

    ))}

  </div>

</div>





{/* ================= RECRUITER RESOURCES ================= */}

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6 }}
  className="
      rounded-3xl
      border
      border-cyan-500/20
      bg-slate-800/40
      backdrop-blur-xl
      p-6
      mt-10
  "
>

  <h3 className="text-2xl font-bold text-white mb-6">

      Recruiter Resources

  </h3>

  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

      {/* Publications */}

      <a
        href="https://scholar.google.com/citations?hl=en&user=VmJlN-AAAAAJ"
        target="_blank"
        rel="noreferrer"
        className="rounded-2xl border border-cyan-500/20 bg-slate-900/70 p-5 hover:border-cyan-400 transition"
      >

          <div className="text-4xl mb-4">📚</div>

          <h4 className="text-white font-bold">

              IEEE Publications

          </h4>

          <p className="text-gray-400 mt-2 text-sm">

              View research papers & conference publications

          </p>

      </a>

      {/* Patents */}

      <a
        href="#"
        className="rounded-2xl border border-cyan-500/20 bg-slate-900/70 p-5 hover:border-cyan-400 transition"
      >

          <div className="text-4xl mb-4">🏅</div>

          <h4 className="text-white font-bold">

              Patents

          </h4>

          <p className="text-gray-400 mt-2 text-sm">

              Explore filed and granted innovations

          </p>

      </a>

      {/* LinkedIn */}

      <a
        href="https://www.linkedin.com/in/nirbhay-kumar-singh-01354256/"
        target="_blank"
        rel="noreferrer"
        className="rounded-2xl border border-cyan-500/20 bg-slate-900/70 p-5 hover:border-cyan-400 transition"
      >

          <div className="text-4xl mb-4">💼</div>

          <h4 className="text-white font-bold">

              LinkedIn

          </h4>

          <p className="text-gray-400 mt-2 text-sm">

              Professional profile & recommendations

          </p>

      </a>

      {/* Contact */}

      <a
        href="nirbhaysingh.iitm@gmail.com"
        className="rounded-2xl border border-cyan-500/20 bg-slate-900/70 p-5 hover:border-cyan-400 transition"
      >

          <div className="text-4xl mb-4">📧</div>

          <h4 className="text-white font-bold">

              Contact

          </h4>

          <p className="text-gray-400 mt-2 text-sm">

              Email directly for opportunities

          </p>

      </a>

  </div>

</motion.div>



{/* ================= WHY HIRE ME ================= */}

<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:.8}}
className="
mt-8
rounded-3xl
border
border-cyan-500/20
bg-gradient-to-r
from-cyan-500/10
to-blue-500/10
p-8
"
>

<h3 className="text-3xl font-black text-white mb-6">

Why Hire Me?

</h3>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

<div className="rounded-xl bg-slate-900/60 p-5">

<h4 className="text-cyan-400 font-bold">

🛰 Radar Systems

</h4>

<p className="text-gray-300 mt-3 text-sm">

AESA Radar, DBF, DDC, Pulse Compression,
Tracking, Signal Processing

</p>

</div>

<div className="rounded-xl bg-slate-900/60 p-5">

<h4 className="text-cyan-400 font-bold">

⚡ FPGA

</h4>

<p className="text-gray-300 mt-3 text-sm">

VHDL, Verilog, Vivado,
Timing Closure,
High-Speed Design

</p>

</div>

<div className="rounded-xl bg-slate-900/60 p-5">

<h4 className="text-cyan-400 font-bold">

📡 RFSoC

</h4>

<p className="text-gray-300 mt-3 text-sm">

ADC, DAC,
JESD204,
Digital Up/Down Conversion

</p>

</div>

<div className="rounded-xl bg-slate-900/60 p-5">

<h4 className="text-cyan-400 font-bold">

🤖 AI

</h4>

<p className="text-gray-300 mt-3 text-sm">

MATLAB,
Python,
Neural Networks,
Radar AI

</p>

</div>

</div>

</motion.div>


          </div>

        </motion.div>

      </motion.div>

    </AnimatePresence>

  );

}