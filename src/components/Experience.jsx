import { motion } from "framer-motion";

const experience = [

{
year:"2023 - Present",
title:"Deputy Manager",
company:"Bharat Electronics Limited",
points:[
"Led hardware architecture for next-generation defence radar platforms.",
"136-channel RFSoC Digital Beamforming architecture.",
"12 GSPS RF ADC/DAC integration.",
"Multi-board synchronization using JESD204C.",
"Hardware architecture, SI/PI, Clock Tree, FPGA integration."
]
},

{
year:"2017 - 2022",
title:"Senior Hardware & FPGA Engineer",
company:"Bharat Electronics Limited",
points:[
"Mixed-signal radar receiver design.",
"FPGA firmware development.",
"Radar DSP implementation.",
"High-speed DDR and Ethernet interfaces.",
"RF performance optimization."
]
},

{
year:"2015 - 2016",
title:"Mixed Signal Design Engineer",
company:"Bharat Electronics Limited",
points:[
"RF Transceiver Hardware.",
"PCB Design.",
"Analog Design.",
"Prototype bring-up.",
"Laboratory validation."
]
}

];

export default function Experience(){

return(

<section
id="experience"
className="bg-[#07111F] py-28">

<div className="max-w-6xl mx-auto px-8">

<h2 className="text-5xl text-cyan-400 font-bold mb-16">

Professional Experience

</h2>

<div className="border-l-2 border-cyan-500 pl-10">

{

experience.map((job,index)=>(

<motion.div

key={index}

initial={{opacity:0,x:-80}}

whileInView={{opacity:1,x:0}}

transition={{duration:.7}}

className="mb-20 relative"

>

<div className="absolute -left-[50px] top-3 w-5 h-5 rounded-full bg-cyan-400"></div>

<p className="text-cyan-400 font-semibold">

{job.year}

</p>

<h3 className="text-3xl font-bold mt-2">

{job.title}

</h3>

<p className="text-xl text-gray-400">

{job.company}

</p>

<ul className="mt-6 space-y-3">

{

job.points.map((p,i)=>(

<li
key={i}
className="text-gray-300">

✓ {p}

</li>

))

}

</ul>

</motion.div>

))

}

</div>

</div>

</section>

)

}