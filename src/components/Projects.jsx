import { motion } from "framer-motion";

const projects = [
  {
    title: "136-Channel AESA Digital Beamforming",
    subtitle: "RFSoC | JESD204C | FPGA",
    desc: "Designed and architected a 136-channel Digital Beamforming platform using RFSoC with deterministic synchronization for phased-array radar.",
    tech: ["RFSoC","JESD204C","FPGA","Beamforming"]
  },
  {
    title: "Direct RF Sampling Receiver",
    subtitle: "12 GSPS ADC",
    desc: "Developed direct RF sampling receiver architecture with high-speed ADCs, DDC, pulse compression and radar processing.",
    tech: ["ADC","DDC","DSP","Radar"]
  },
  {
    title: "Ultra Low Phase Noise Exciter",
    subtitle: "Clock Distribution",
    desc: "Designed coherent ultra-low phase noise waveform generation for high resolution radar systems.",
    tech:["PLL","Clock Tree","RF","Exciter"]
  },
  {
    title:"AI Target Classification",
    subtitle:"Deep Learning",
    desc:"Target classification using Micro-Doppler signatures with deep learning models.",
    tech:["Python","MATLAB","CNN","AI"]
  }
];

export default function Projects() {

    return (

        <section
            id="projects"
            className="py-20 bg-slate-900"
        >

<div className="max-w-7xl mx-auto px-8">

<h2 className="text-5xl font-bold text-cyan-400 mb-16">

Featured Projects

</h2>

<div className="grid md:grid-cols-2 gap-10">

{

projects.map((p,index)=>(

<motion.div

key={index}

whileHover={{y:-10}}

className="bg-[#101C2D] rounded-3xl border border-cyan-500/20 p-8 shadow-xl">

<h3 className="text-3xl font-bold">

{p.title}

</h3>

<p className="text-cyan-400 mt-2">

{p.subtitle}

</p>

<p className="mt-6 text-gray-300 leading-7">

{p.desc}

</p>

<div className="flex flex-wrap gap-3 mt-8">

{

p.tech.map((t,i)=>(

<span
key={i}
className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300">

{t}

</span>

))

}

</div>

</motion.div>

))

}

</div>

</div>

</section>

)

}