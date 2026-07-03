const groups={

Hardware:[
"Mixed Signal",
"RF Design",
"PCB",
"SI/PI",
"Power Design"
],

FPGA:[
"VHDL",
"Verilog",
"RFSoC",
"DSP",
"Vivado"
],

Communication:[
"JESD204B/C",
"Ethernet",
"SPI",
"I2C",
"UART"
],

Software:[
"MATLAB",
"Python",
"Simulink",
"HFSS",
"Cadence"
]

}

export default function Skills(){

return(

<section className="py-28 bg-[#07111F]">

<div className="max-w-7xl mx-auto px-8">

<h2 className="text-5xl font-bold text-cyan-400 mb-16">

Technical Skills

</h2>

<div className="grid md:grid-cols-2 gap-10">

{

Object.entries(groups).map(([k,v])=>(

<div
key={k}
className="bg-[#101C2D] rounded-2xl p-8">

<h3 className="text-2xl font-bold text-cyan-400 mb-6">

{k}

</h3>

<div className="flex flex-wrap gap-3">

{

v.map(skill=>(

<span

key={skill}

className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full">

{skill}

</span>

))

}

</div>

</div>

))

}

</div>

</div>

</section>

)

}