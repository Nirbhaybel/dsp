import { motion } from "framer-motion";
import {
  FaWaveSquare,
  FaFilter,
  FaChartBar,
  FaCalculator,
  FaProjectDiagram,
  FaBroadcastTower,
  FaMicrochip,
  FaArrowRight
} from "react-icons/fa";

const modules = [

  {
    id: "ddc",
    title: "Digital Down Conversion",
    icon: <FaWaveSquare size={32} />,
    color: "cyan",
    description:
      "Frequency translation using NCO, Mixer, FIR and Decimator."
  },

  {
     id: "fir",
    title: "FIR Filter Designer",
    icon: <FaFilter size={32} />,
    color: "purple",
    description:
      "Interactive FIR implementation with fixed-point coefficients."
  },

  {
    id: "fft",
    title: "FFT Spectrum Analyzer",
    icon: <FaChartBar size={32} />,
    color: "green",
    description:
      "Real-time frequency spectrum visualization."
  },

  {
    id: "fixed",
    title: "Fixed Point Laboratory",
    icon: <FaCalculator size={32} />,
    color: "orange",
    description:
      "Q-format arithmetic, scaling and saturation."
  },

  {
    id: "iq",
    title: "Complex IQ Visualizer",
    icon: <FaProjectDiagram size={32} />,
    color: "pink",
    description:
      "Interactive I/Q constellation and phasor visualization."
  },

  {
    id: "pulse",
    title: "Pulse Compression",
    icon: <FaBroadcastTower size={32} />,
    color: "red",
    description:
      "Matched filtering and pulse compression analysis."
  },

  {
    id: "beam",
    title: "Digital Beamforming",
    icon: <FaMicrochip size={32} />,
    color: "blue",
    description:
      "Phase steering and multi-channel beamforming."
  }

];

export default function DSPDashboard({ activeLab, setActiveLab }) {

  return (

<div>

{/* Dashboard Header */}

<motion.div

initial={{ opacity:0, y:20 }}

whileInView={{ opacity:1, y:0 }}

viewport={{ once:true }}

transition={{ duration:0.7 }}

className="flex flex-col lg:flex-row justify-between items-center mb-12"

>

<div>

<h3 className="text-4xl font-black text-white">

DSP Laboratory Modules

</h3>

<p className="text-gray-400 mt-3">

Select a laboratory to explore FPGA-based DSP implementation.

</p>

</div>

<div className="mt-6 lg:mt-0 px-6 py-3 rounded-xl border border-cyan-500/20 bg-cyan-500/10">

<span className="text-cyan-300 font-semibold">

7 Interactive Modules

</span>

</div>

</motion.div>

{/* Dashboard Grid */}

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

{

modules.map((module,index)=>(

<motion.div

key={module.title}

initial={{ opacity:0, y:40 }}

whileInView={{ opacity:1, y:0 }}

viewport={{ once:true }}

transition={{

duration:0.6,

delay:index*0.08

}}

whileHover={{

y:-10,

scale:1.02

}}

className="group"

>

<div
className={`relative overflow-hidden rounded-3xl transition-all duration-300 p-8 h-full border

${
activeLab === module.id
? "bg-cyan-500/10 border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.35)]"
: "bg-[#101B2D] border-cyan-500/10 hover:border-cyan-400/40"
}

`}
>

{/* Background Glow */}

<div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-cyan-500/10 blur-3xl group-hover:bg-cyan-500/20 transition-all duration-500"/>

{/* Icon */}

<div className="relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">

{module.icon}

</div>

{/* Title */}

<h4 className="relative z-10 mt-8 text-2xl font-bold text-white">

{module.title}

</h4>
{activeLab === module.id && (

<div className="mt-3 inline-block px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-semibold">

Currently Active

</div>

)}
{/* Description */}

<p className="relative z-10 mt-5 text-gray-400 leading-7">

{module.description}

</p>

{/* Technology Tags */}

<div className="relative z-10 flex flex-wrap gap-2 mt-6">

<span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-sm">

FPGA

</span>

<span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-sm">

DSP

</span>

<span className="px-3 py-1 rounded-full bg-green-500/10 text-green-300 text-sm">

Real-Time

</span>

</div>

{/* Divider */}

<div className="relative z-10 h-px bg-white/10 my-8"/>

{/* Footer */}

<div className="relative z-10 flex items-center justify-between">

<span className="text-gray-400">

Interactive Module

</span>

<button
onClick={() => setActiveLab(module.id)}
className="flex items-center gap-2 text-cyan-400 font-semibold group-hover:translate-x-2 transition-transform"
>

{activeLab === module.id ? "Opened" : "Open Laboratory"}

<FaArrowRight/>

</button>

</div>
</div>

</motion.div>

))

}

</div>

{/* Laboratory Summary */}

<motion.div

initial={{ opacity:0, y:40 }}

whileInView={{ opacity:1, y:0 }}

viewport={{ once:true }}

transition={{ duration:0.8 }}

className="mt-20"

>

<div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-[#101B2D] via-[#16253A] to-[#101B2D] p-10">

<div className="grid lg:grid-cols-2 gap-12 items-center">

{/* Left */}

<div>

<h3 className="text-3xl font-black text-white">

Real-Time DSP Processing Workflow

</h3>

<p className="mt-6 text-gray-400 leading-8">

Each laboratory demonstrates the complete DSP design
flow from algorithm development to FPGA implementation.
The modules focus on mathematical foundations,
fixed-point optimization, RTL implementation,
and hardware validation.

</p>

<div className="grid grid-cols-2 gap-6 mt-10">

<div>

<h4 className="text-cyan-400 text-4xl font-black">

7

</h4>

<p className="text-gray-400 mt-2">

Interactive Laboratories

</p>

</div>

<div>

<h4 className="text-cyan-400 text-4xl font-black">

100%

</h4>

<p className="text-gray-400 mt-2">

FPGA Oriented

</p>

</div>

<div>

<h4 className="text-cyan-400 text-4xl font-black">

MATLAB

</h4>

<p className="text-gray-400 mt-2">

Algorithm Validation

</p>

</div>

<div>

<h4 className="text-cyan-400 text-4xl font-black">

RTL

</h4>

<p className="text-gray-400 mt-2">

Hardware Implementation

</p>

</div>

</div>

</div>

{/* Right */}

<div className="bg-[#08121F] rounded-2xl p-8 border border-cyan-500/10">

<h4 className="text-2xl font-bold text-white mb-8">

Development Flow

</h4>

<div className="space-y-5">

<div className="flex items-center gap-4">

<div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-black font-bold">

1

</div>

<span className="text-gray-300">

MATLAB Algorithm Development

</span>

</div>

<div className="ml-5 h-8 w-[2px] bg-cyan-500/40"/>

<div className="flex items-center gap-4">

<div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-black font-bold">

2

</div>

<span className="text-gray-300">

Fixed-Point Optimization

</span>

</div>

<div className="ml-5 h-8 w-[2px] bg-cyan-500/40"/>

<div className="flex items-center gap-4">

<div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-black font-bold">

3

</div>

<span className="text-gray-300">

RTL Design (VHDL/Verilog)

</span>

</div>

<div className="ml-5 h-8 w-[2px] bg-cyan-500/40"/>

<div className="flex items-center gap-4">

<div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-black font-bold">

4

</div>

<span className="text-gray-300">

Simulation & FPGA Validation

</span>

</div>

</div>

</div>

</div>

</div>

</motion.div>
</div>

);
}
