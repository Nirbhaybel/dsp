import { motion } from "framer-motion";
import {
  FaDownload,
  FaGithub,
  FaArrowRight,
  FaSignal,
  FaMicrochip,
  FaWaveSquare,
} from "react-icons/fa";

export default function Hero() {

  return (

<section
className="relative min-h-screen bg-[#050B16] overflow-hidden flex items-center"
>

{/* Background Blur */}

<div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"/>

<div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-600/10 blur-[140px] rounded-full"/>

<div className="max-w-7xl mx-auto w-full px-8 grid lg:grid-cols-2 gap-20 items-center">

{/* Left Side */}

<motion.div

initial={{opacity:0,x:-60}}

animate={{opacity:1,x:0}}

transition={{duration:0.8}}

>

<div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10">

<FaSignal className="text-cyan-400"/>

<span className="text-cyan-300">

Real-Time FPGA DSP

</span>

</div>

<h1 className="mt-8 text-6xl lg:text-7xl font-black leading-tight">

<span className="text-white">

DSP &

</span>

<br/>

<span className="text-cyan-400">

Signal Processing

</span>

<br/>

<span className="text-white">

Engineer

</span>

</h1>

<p className="mt-8 text-gray-400 text-xl leading-9 max-w-2xl">

Designing high-performance Digital Signal Processing
algorithms for FPGA, RFSoC and Embedded Systems
with expertise in Fixed-Point Arithmetic,
Digital Down Conversion, FFT,
Pulse Compression and Beamforming.

</p>
{/* Action Buttons */}

<div className="mt-10 flex flex-wrap gap-5">

  <a
    href={`${import.meta.env.BASE_URL}resume.pdf`}
    download="Nirbhay_Singh_DSP_Resume.pdf"
    className="flex items-center gap-3 px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition"
  >
    <FaDownload />
    Download Resume
  </a>

  <a
    href="#dsp-lab"
    className="flex items-center gap-3 px-8 py-4 rounded-xl border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/10 transition"
  >
    <FaArrowRight />
    View DSP Laboratory
  </a>

  <a
    href="https://github.com/YOUR-GITHUB"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 px-8 py-4 rounded-xl border border-white/10 hover:border-cyan-400 transition"
  >
    <FaGithub />
    GitHub
  </a>

</div>

{/* Statistics */}

<div className="grid grid-cols-3 gap-6 mt-16">

  <motion.div

    initial={{ opacity: 0, y: 30 }}

    animate={{ opacity: 1, y: 0 }}

    transition={{ delay: 0.3 }}

    className="bg-[#101B2D] border border-cyan-500/10 rounded-2xl p-6"

  >

    <h3 className="text-4xl font-black text-cyan-400">

      8+

    </h3>

    <p className="text-gray-400 mt-2">

      Years Experience

    </p>

  </motion.div>

  <motion.div

    initial={{ opacity: 0, y: 30 }}

    animate={{ opacity: 1, y: 0 }}

    transition={{ delay: 0.45 }}

    className="bg-[#101B2D] border border-cyan-500/10 rounded-2xl p-6"

  >

    <h3 className="text-4xl font-black text-cyan-400">

      25+

    </h3>

    <p className="text-gray-400 mt-2">

      DSP Algorithms

    </p>

  </motion.div>

  <motion.div

    initial={{ opacity: 0, y: 30 }}

    animate={{ opacity: 1, y: 0 }}

    transition={{ delay: 0.6 }}

    className="bg-[#101B2D] border border-cyan-500/10 rounded-2xl p-6"

  >

    <h3 className="text-4xl font-black text-cyan-400">

      FPGA

    </h3>

    <p className="text-gray-400 mt-2">

      Real-Time Implementation

    </p>

  </motion.div>

</div>

</motion.div>
{/* Right Side */}

<motion.div

initial={{ opacity: 0, x: 60 }}

animate={{ opacity: 1, x: 0 }}

transition={{ duration: 0.9 }}

className="relative"

>

{/* Main DSP Panel */}

<div className="bg-[#101B2D] border border-cyan-500/20 rounded-3xl p-8 shadow-2xl shadow-cyan-500/10">

<h3 className="text-2xl font-bold text-white mb-8">

Real-Time DSP Processing Pipeline

</h3>

<div className="space-y-5">

{/* ADC */}

<div className="flex items-center gap-5">

<div className="w-16 h-16 rounded-xl bg-cyan-500/20 flex items-center justify-center">

<FaMicrochip className="text-cyan-400 text-2xl"/>

</div>

<div>

<h4 className="text-white font-semibold">

ADC

</h4>

<p className="text-gray-400 text-sm">

High-Speed Data Acquisition

</p>

</div>

</div>

<div className="ml-8 h-8 w-[2px] bg-cyan-500/40"/>

{/* NCO */}

<div className="flex items-center gap-5">

<div className="w-16 h-16 rounded-xl bg-purple-500/20 flex items-center justify-center">

<FaWaveSquare className="text-purple-400 text-2xl"/>

</div>

<div>

<h4 className="text-white font-semibold">

NCO

</h4>

<p className="text-gray-400 text-sm">

Numerically Controlled Oscillator

</p>

</div>

</div>

<div className="ml-8 h-8 w-[2px] bg-cyan-500/40"/>

{/* Mixer */}

<div className="flex items-center gap-5">

<div className="w-16 h-16 rounded-xl bg-cyan-500/20 flex items-center justify-center">

<span className="text-cyan-400 font-bold text-xl">

×

</span>

</div>

<div>

<h4 className="text-white font-semibold">

Complex Mixer

</h4>

<p className="text-gray-400 text-sm">

Frequency Translation

</p>

</div>

</div>

<div className="ml-8 h-8 w-[2px] bg-cyan-500/40"/>

{/* FIR */}

<div className="flex items-center gap-5">

<div className="w-16 h-16 rounded-xl bg-purple-500/20 flex items-center justify-center">

<span className="text-purple-400 font-bold">

FIR

</span>

</div>

<div>

<h4 className="text-white font-semibold">

Low Pass Filter

</h4>

<p className="text-gray-400 text-sm">

101 Tap Fixed-Point FIR

</p>

</div>

</div>

<div className="ml-8 h-8 w-[2px] bg-cyan-500/40"/>

{/* FFT */}

<div className="flex items-center gap-5">

<div className="w-16 h-16 rounded-xl bg-cyan-500/20 flex items-center justify-center">

<span className="text-cyan-400 font-bold">

FFT

</span>

</div>

<div>

<h4 className="text-white font-semibold">

Frequency Analysis

</h4>

<p className="text-gray-400 text-sm">

Spectrum Generation

</p>

</div>

</div>

<div className="ml-8 h-8 w-[2px] bg-cyan-500/40"/>

{/* Output */}

<div className="flex items-center gap-5">

<div className="w-16 h-16 rounded-xl bg-green-500/20 flex items-center justify-center">

<span className="text-green-400 font-bold">

OUT

</span>

</div>

<div>

<h4 className="text-white font-semibold">

DSP Output

</h4>

<p className="text-gray-400 text-sm">

Real-Time FPGA Processing

</p>

</div>

</div>

</div>

</div>
{/* Floating Technology Cards */}

<motion.div

initial={{ opacity: 0 }}

animate={{ opacity: 1 }}

transition={{ delay: 1 }}

className="absolute -top-8 -right-6 hidden lg:block"

>

<div className="bg-[#18253B]/95 backdrop-blur-lg border border-cyan-500/20 rounded-2xl px-6 py-4 shadow-xl">

<p className="text-cyan-400 font-semibold">

Real-Time FPGA DSP

</p>

<p className="text-gray-400 text-sm mt-1">

Latency Optimized

</p>

</div>

</motion.div>

<motion.div

initial={{ opacity: 0 }}

animate={{ opacity: 1 }}

transition={{ delay: 1.2 }}

className="absolute -bottom-6 -left-6 hidden lg:block"

>

<div className="bg-[#18253B]/95 backdrop-blur-lg border border-purple-500/20 rounded-2xl px-6 py-4 shadow-xl">

<p className="text-purple-400 font-semibold">

Fixed-Point Design

</p>

<p className="text-gray-400 text-sm mt-1">

Q Format • Scaling • Saturation

</p>

</div>

</motion.div>

<motion.div

animate={{ y: [-10, 10, -10] }}

transition={{

duration: 4,

repeat: Infinity,

}}

className="absolute top-16 -left-10 w-5 h-5 rounded-full bg-cyan-400/40 blur-sm"

></motion.div>

<motion.div

animate={{ y: [10, -10, 10] }}

transition={{

duration: 5,

repeat: Infinity,

}}

className="absolute bottom-16 right-12 w-6 h-6 rounded-full bg-purple-500/40 blur-sm"

></motion.div>

</motion.div>

</div>

</section>

);

}