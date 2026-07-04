import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBroadcastTower,
  FaSlidersH,
  FaProjectDiagram,
  FaWaveSquare,
} from "react-icons/fa";

export default function DigitalBeamforming() {

  const [steeringAngle, setSteeringAngle] = useState(0);
  const [elements, setElements] = useState(16);
  const [spacing, setSpacing] = useState(0.5);
  const [frequency, setFrequency] = useState(3000);

  return (

<section className="py-24">

<div className="max-w-7xl mx-auto">

<motion.div

initial={{opacity:0,y:-30}}

whileInView={{opacity:1,y:0}}

transition={{duration:0.8}}

viewport={{once:true}}

className="text-center"

>

<span className="px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">

Interactive Radar DSP Laboratory

</span>

<h2 className="mt-6 text-5xl lg:text-6xl font-black">

<span className="text-white">

Digital

</span>

<span className="text-cyan-400">

 Beamforming

</span>

</h2>

<p className="mt-6 max-w-3xl mx-auto text-gray-400 leading-8">

Explore phased-array beam steering, array factor,
phase shift calculation, FPGA implementation,
and real-time digital beamforming used in
modern AESA radar systems.

</p>

</motion.div>

<div className="grid lg:grid-cols-12 gap-8 mt-16">

{/* LEFT PANEL */}

<div className="lg:col-span-4">

<div className="bg-[#101B2D] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-2xl font-bold text-white flex items-center gap-3">

<FaSlidersH className="text-cyan-400"/>

Beam Controls

</h3>

  
<div className="space-y-8 mt-8">


  {/* Steering Angle */}

<div>

<div className="flex justify-between mb-2">

<span className="text-gray-300">

Steering Angle

</span>

<span className="text-cyan-400 font-semibold">

{steeringAngle}°

</span>

</div>

<input
type="range"
min="-90"
max="90"
step="1"
value={steeringAngle}
onChange={(e)=>setSteeringAngle(Number(e.target.value))}
className="w-full accent-cyan-400"
/>

</div>

{/* Number of Elements */}

<div>

<div className="flex justify-between mb-2">

<span className="text-gray-300">

Array Elements

</span>

<span className="text-cyan-400 font-semibold">

{elements}

</span>

</div>

<input
type="range"
min="4"
max="64"
step="4"
value={elements}
onChange={(e)=>setElements(Number(e.target.value))}
className="w-full accent-cyan-400"
/>

</div>

{/* Element Spacing */}

<div>

<div className="flex justify-between mb-2">

<span className="text-gray-300">

Element Spacing

</span>

<span className="text-cyan-400 font-semibold">

{spacing.toFixed(2)} λ

</span>

</div>

<input
type="range"
min="0.25"
max="1.0"
step="0.05"
value={spacing}
onChange={(e)=>setSpacing(Number(e.target.value))}
className="w-full accent-cyan-400"
/>

</div>

{/* Frequency */}

<div>

<div className="flex justify-between mb-2">

<span className="text-gray-300">

Frequency

</span>

<span className="text-cyan-400 font-semibold">

{frequency} MHz

</span>

</div>

<input
type="range"
min="1000"
max="10000"
step="100"
value={frequency}
onChange={(e)=>setFrequency(Number(e.target.value))}
className="w-full accent-cyan-400"
/>

</div>

{/* Engineering Parameters */}

<div className="mt-10 bg-[#08121F] rounded-2xl border border-cyan-500/20 p-6">

<h4 className="text-xl font-bold text-white mb-6">

Beam Parameters

</h4>

<div className="space-y-4">

<div className="flex justify-between">

<span className="text-gray-400">

Wavelength

</span>

<span className="text-green-400">

{(300/frequency).toFixed(3)} m

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Array Length

</span>

<span className="text-green-400">

{((elements-1)*spacing*(300/frequency)).toFixed(2)} m

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Steering

</span>

<span className="text-cyan-400">

{steeringAngle}°

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Theoretical Array Gain

</span>

<span className="text-yellow-400">

{(10*Math.log10(elements)).toFixed(2)} dB

</span>

</div>

</div>

</div>

</div>

</div>

{/* RIGHT PANEL */}

<div className="lg:col-span-8">

<div className="bg-[#101B2D] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">

<FaBroadcastTower className="text-cyan-400"/>

Antenna Array

</h3>


  {/* Antenna Array Visualization */}

<div className="bg-[#08121F] rounded-2xl border border-cyan-500/20 p-8">

<div className="flex justify-center items-end gap-2 flex-wrap">

{

Array.from({length:elements},(_,i)=>{

const phase=i*spacing*Math.sin(steeringAngle*Math.PI/180)*180;

return(

<div
key={i}
className="flex flex-col items-center"
>

<div

className="w-5 h-20 rounded-full bg-gradient-to-t from-cyan-700 to-cyan-300"

style={{

transform:`rotate(${phase/15}deg)`,

transition:"0.4s"

}}

></div>

<div className="mt-3 text-xs text-cyan-300">

CH{i}

</div>

<div className="text-[10px] text-gray-400">

{phase.toFixed(1)}°

</div>

</div>

);

})

}

</div>

</div>

{/* Beam Steering Indicator */}

<div className="mt-10 bg-[#08121F] rounded-2xl border border-cyan-500/20 p-8">

<h4 className="text-xl font-bold text-cyan-400 mb-8">

Beam Steering Direction

</h4>

<div className="relative h-56 flex justify-center items-end">

<div

className="absolute bottom-0 w-2 h-40 bg-cyan-400 origin-bottom rounded-full"

style={{

transform:`rotate(${steeringAngle}deg)`,

transition:"0.5s"

}}

></div>

<div className="absolute bottom-0 w-12 h-12 rounded-full bg-cyan-400"></div>

</div>

<div className="mt-6 text-center">

<p className="text-white text-2xl font-bold">

Steering Angle =

<span className="text-cyan-400">

{" "}

{steeringAngle}°

</span>

</p>

</div>

</div>

{/* Phase Shift Table */}

<div className="mt-10 bg-[#08121F] rounded-2xl border border-cyan-500/20 p-8">

<h4 className="text-xl font-bold text-white mb-6">

Element Phase Shifts

</h4>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

{

Array.from({length:Math.min(elements,16)},(_,i)=>{

const phase=i*spacing*Math.sin(steeringAngle*Math.PI/180)*180;

return(

<div

key={i}

className="bg-[#101B2D] rounded-xl p-4"

>

<div className="text-cyan-400 font-bold">

CH{i}

</div>

<div className="text-gray-300 mt-2">

{phase.toFixed(2)}°

</div>

</div>

);

})

}

</div>

</div>

{/* Polar Radiation Pattern */}

<div className="mt-14">

<h3 className="text-3xl font-bold text-white mb-8">

Polar Radiation Pattern

</h3>

<div className="grid lg:grid-cols-2 gap-8">

{/* Polar Plot */}

<div className="bg-[#08121F] rounded-2xl border border-cyan-500/20 p-6 flex justify-center">

<svg
width="400"
height="400"
viewBox="-200 -200 400 400"
>

{/* Concentric Circles */}

<circle r="160" fill="none" stroke="#334155"/>

<circle r="120" fill="none" stroke="#334155"/>

<circle r="80" fill="none" stroke="#334155"/>

<circle r="40" fill="none" stroke="#334155"/>

{/* Cross Lines */}

<line x1="-170" y1="0" x2="170" y2="0" stroke="#475569"/>

<line x1="0" y1="-170" x2="0" y2="170" stroke="#475569"/>

{/* Beam */}

<line

x1="0"

y1="0"

x2={160*Math.sin(steeringAngle*Math.PI/180)}

y2={-160*Math.cos(steeringAngle*Math.PI/180)}

stroke="#22d3ee"

strokeWidth="5"

strokeLinecap="round"

/>

<circle
cx="0"
cy="0"
r="8"
fill="#22d3ee"
/>

</svg>

</div>

{/* Pattern Parameters */}

<div className="bg-[#08121F] rounded-2xl border border-cyan-500/20 p-8">

<h4 className="text-xl font-bold text-cyan-400 mb-6">

Beam Parameters

</h4>

<div className="space-y-5">

<div className="flex justify-between">

<span className="text-gray-400">

Main Beam

</span>

<span className="text-green-400">

{steeringAngle}°

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

3 dB Beamwidth

</span>

<span className="text-green-400">

{(102/elements).toFixed(1)}°

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Array Gain

</span>

<span className="text-cyan-400">

{(10*Math.log10(elements)).toFixed(2)} dB

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Element Spacing

</span>

<span className="text-yellow-400">

{spacing.toFixed(2)} λ

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Operating Frequency

</span>

<span className="text-green-400">

{frequency} MHz

</span>

</div>

</div>

</div>

</div>

{/* Beam Characteristics */}

<div className="grid lg:grid-cols-4 gap-6 mt-10">

<div className="bg-[#08121F] rounded-2xl p-6 text-center">

<h4 className="text-gray-400">

Steering

</h4>

<p className="text-3xl text-cyan-400 mt-3">

{steeringAngle}°

</p>

</div>

<div className="bg-[#08121F] rounded-2xl p-6 text-center">

<h4 className="text-gray-400">

Beamwidth

</h4>

<p className="text-3xl text-green-400 mt-3">

{(102/elements).toFixed(1)}°

</p>

</div>

<div className="bg-[#08121F] rounded-2xl p-6 text-center">

<h4 className="text-gray-400">

Array Gain

</h4>

<p className="text-3xl text-yellow-400 mt-3">

{(10*Math.log10(elements)).toFixed(2)}

</p>

<p className="text-sm text-gray-500">

dB

</p>

</div>

<div className="bg-[#08121F] rounded-2xl p-6 text-center">

<h4 className="text-gray-400">

Grating Lobes

</h4>

<p className="text-3xl text-purple-400 mt-3">

{spacing>0.5?"Yes":"No"}

</p>

</div>

</div>

</div>


  {/* Cartesian Array Pattern */}

<div className="mt-16">

<h3 className="text-3xl font-bold text-white mb-8">

Array Factor Pattern

</h3>

<div className="bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<svg
width="100%"
height="350"
viewBox="0 0 900 350"
>

{/* Grid */}

{
Array.from({length:9},(_,i)=>(

<line

key={`v${i}`}

x1={i*100}

y1="20"

x2={i*100}

y2="320"

stroke="#233347"

/>

))
}

{
Array.from({length:7},(_,i)=>(

<line

key={`h${i}`}

x1="0"

y1={20+i*50}

x2="900"

y2={20+i*50}

stroke="#233347"

/>

))
}

{/* Axis */}

<line
x1="0"
y1="170"
x2="900"
y2="170"
stroke="#475569"
strokeWidth="2"
/>

{/* Array Factor */}

<polyline

fill="none"

stroke="#22d3ee"

strokeWidth="3"

points={

Array.from({length:361},(_,i)=>{

const theta=(i-180)*Math.PI/180;

const steer=steeringAngle*Math.PI/180;

let af=0;

for(let n=0;n<elements;n++){

af+=Math.cos(

2*Math.PI*

spacing*

n*

(

Math.sin(theta)-

Math.sin(steer)

)

);

}

af=Math.abs(af)/elements;

const x=i*2.5;

const y=170-af*140;

return `${x},${y}`;

}).join(" ")

}

/>

</svg>

</div>

</div>

{/* Performance Dashboard */}

<div className="grid lg:grid-cols-4 gap-6 mt-12">

<div className="bg-[#08121F] rounded-2xl p-6 text-center">

<h4 className="text-gray-400">

Elements

</h4>

<p className="text-3xl text-cyan-400 mt-3">

{elements}

</p>

</div>

<div className="bg-[#08121F] rounded-2xl p-6 text-center">

<h4 className="text-gray-400">

Peak Gain

</h4>

<p className="text-3xl text-green-400 mt-3">

{(10*Math.log10(elements)).toFixed(2)}

</p>

<p className="text-sm text-gray-500">

dBi

</p>

</div>

<div className="bg-[#08121F] rounded-2xl p-6 text-center">

<h4 className="text-gray-400">

3 dB Beamwidth

</h4>

<p className="text-3xl text-yellow-400 mt-3">

{(102/elements).toFixed(1)}°

</p>

</div>

<div className="bg-[#08121F] rounded-2xl p-6 text-center">

<h4 className="text-gray-400">

Scan Loss

</h4>

<p className="text-3xl text-purple-400 mt-3">

{(Math.max(0,10*Math.log10(Math.cos(steeringAngle*Math.PI/180)))).toFixed(2)}

</p>

<p className="text-sm text-gray-500">

dB

</p>

</div>

</div>


{/* FPGA Phase Calculator */}

<div className="mt-16">

<h3 className="text-3xl font-bold text-white mb-8">

FPGA Phase Calculator

</h3>

<div className="grid lg:grid-cols-2 gap-8">

{/* Equation */}

<div className="bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h4 className="text-xl font-bold text-cyan-400 mb-6">

Beamforming Equation

</h4>

<div className="text-center">

<p className="text-5xl text-white font-bold">

φ = PA × dx + PB × dy

</p>

</div>

<div className="mt-8 space-y-4">

<div className="flex justify-between">

<span className="text-gray-400">

PA

</span>

<span className="text-green-400">

0.01875

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

PB

</span>

<span className="text-green-400">

0.01120

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Phase Format

</span>

<span className="text-cyan-400">

Q5.27

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

DDS Phase Word

</span>

<span className="text-yellow-400">

32-bit

</span>

</div>

</div>

</div>

{/* Phase Table */}

<div className="bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h4 className="text-xl font-bold text-cyan-400 mb-6">

16 Channel Phase Values

</h4>

<div className="grid grid-cols-2 gap-3">

{

Array.from({length:16},(_,i)=>{

const dx=i%4;

const dy=Math.floor(i/4);

const pa=0.01875;

const pb=0.01120;

const phase=(pa*dx+pb*dy)*360;

return(

<div

key={i}

className="bg-[#101B2D] rounded-xl p-4"

>

<div className="text-cyan-400 font-bold">

CH{i}

</div>

<div className="text-sm text-gray-400">

dx={dx}, dy={dy}

</div>

<div className="mt-2 text-green-400">

{phase.toFixed(2)}°

</div>

</div>

);

})

}

</div>

</div>

</div>

{/* FPGA Processing Flow */}

<div className="mt-12 bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-2xl font-bold text-white mb-8">

FPGA Beamforming Pipeline

</h3>

<div className="grid grid-cols-2 lg:grid-cols-11 gap-3 items-center">

<div className="bg-cyan-500/10 rounded-xl p-4 text-center">

<h4 className="text-cyan-400 font-bold">

PA/PB

</h4>

</div>

<div className="text-center text-cyan-400 text-2xl">→</div>

<div className="bg-green-500/10 rounded-xl p-4 text-center">

<h4 className="text-green-400 font-bold">

Phase Calc

</h4>

</div>

<div className="text-center text-cyan-400 text-2xl">→</div>

<div className="bg-blue-500/10 rounded-xl p-4 text-center">

<h4 className="text-blue-400 font-bold">

DDS

</h4>

</div>

<div className="text-center text-cyan-400 text-2xl">→</div>

<div className="bg-purple-500/10 rounded-xl p-4 text-center">

<h4 className="text-purple-400 font-bold">

Complex Multiply

</h4>

</div>

<div className="text-center text-cyan-400 text-2xl">→</div>

<div className="bg-pink-500/10 rounded-xl p-4 text-center">

<h4 className="text-pink-400 font-bold">

Adder Tree

</h4>

</div>

<div className="text-center text-cyan-400 text-2xl">→</div>

<div className="bg-yellow-500/10 rounded-xl p-4 text-center">

<h4 className="text-yellow-400 font-bold">

Beam Output

</h4>

</div>

</div>

</div>

{/* Interactive FPGA Steering */}

<div className="mt-16">

<h3 className="text-3xl font-bold text-white mb-8">

Interactive FPGA Steering Coefficients

</h3>

<div className="grid lg:grid-cols-2 gap-8">

{/* Controls */}

<div className="bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h4 className="text-xl font-bold text-cyan-400 mb-6">

PA / PB Controls

</h4>

<div className="space-y-8">

<div>

<div className="flex justify-between mb-2">

<span className="text-gray-300">

PA (X Steering)

</span>

<span className="text-green-400">

{pa.toFixed(4)}

</span>

</div>

<input

type="range"

min="-0.05"

max="0.05"

step="0.001"

value={pa}

onChange={(e)=>setPa(Number(e.target.value))}

className="w-full accent-cyan-400"

/>

</div>

<div>

<div className="flex justify-between mb-2">

<span className="text-gray-300">

PB (Y Steering)

</span>

<span className="text-green-400">

{pb.toFixed(4)}

</span>

</div>

<input

type="range"

min="-0.05"

max="0.05"

step="0.001"

value={pb}

onChange={(e)=>setPb(Number(e.target.value))}

className="w-full accent-cyan-400"

/>

</div>

</div>

</div>

{/* Phase Word */}

<div className="bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h4 className="text-xl font-bold text-cyan-400 mb-6">

DDS Phase Generator

</h4>

<div className="space-y-5">

<div className="flex justify-between">

<span className="text-gray-400">

Phase Format

</span>

<span className="text-green-400">

Q5.27

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

DDS Width

</span>

<span className="text-yellow-400">

32-bit

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Clock

</span>

<span className="text-cyan-400">

250 MHz

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Pipeline

</span>

<span className="text-green-400">

Enabled

</span>

</div>

</div>

</div>

</div>

</div>

{/* Live Phase Table */}

<div className="mt-12 bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-2xl font-bold text-white mb-8">

Live FPGA Phase Table

</h3>

<div className="grid lg:grid-cols-4 gap-4">

{

Array.from({length:16},(_,i)=>{

const dx=i%4;

const dy=Math.floor(i/4);

const phase=(pa*dx+pb*dy)*360;

const phaseWord=Math.round(

((phase%360+360)%360)

/

360

*

4294967296

);

return(

<div

key={i}

className="bg-[#101B2D] rounded-xl p-4"

>

<h4 className="text-cyan-400 font-bold">

CH{i}

</h4>

<p className="text-sm text-gray-400">

dx={dx}, dy={dy}

</p>

<p className="text-green-400 mt-2">

{phase.toFixed(2)}°

</p>

<p className="text-yellow-400 text-xs mt-1">

0x{phaseWord.toString(16).toUpperCase()}

</p>

</div>

);

})

}

</div>

</div>



{/* FPGA Beamforming Architecture */}

<div className="mt-16">

<h3 className="text-3xl font-bold text-white mb-8">

16-Channel FPGA Beamforming Architecture

</h3>

<div className="bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<div className="grid grid-cols-11 gap-2 items-center">

{/* ADC */}

<div className="bg-cyan-500/10 rounded-xl p-4 text-center">

<h4 className="text-cyan-400 font-bold">

16 ADC

</h4>

<p className="text-xs text-gray-400 mt-2">

IQ Input

</p>

</div>

<div className="text-center text-cyan-400 text-2xl">→</div>

{/* Phase */}

<div className="bg-green-500/10 rounded-xl p-4 text-center">

<h4 className="text-green-400 font-bold">

PA×dx

<br/>

+

<br/>

PB×dy

</h4>

</div>

<div className="text-center text-cyan-400 text-2xl">→</div>

{/* DDS */}

<div className="bg-blue-500/10 rounded-xl p-4 text-center">

<h4 className="text-blue-400 font-bold">

DDS

</h4>

<p className="text-xs text-gray-400 mt-2">

32-bit

</p>

</div>

<div className="text-center text-cyan-400 text-2xl">→</div>

{/* Complex Multiply */}

<div className="bg-purple-500/10 rounded-xl p-4 text-center">

<h4 className="text-purple-400 font-bold">

Complex

Multiply

</h4>

</div>

<div className="text-center text-cyan-400 text-2xl">→</div>

{/* Adder */}

<div className="bg-pink-500/10 rounded-xl p-4 text-center">

<h4 className="text-pink-400 font-bold">

Adder

Tree

</h4>

</div>

<div className="text-center text-cyan-400 text-2xl">→</div>

{/* Output */}

<div className="bg-yellow-500/10 rounded-xl p-4 text-center">

<h4 className="text-yellow-400 font-bold">

Beam

Output

</h4>

</div>

</div>

</div>

{/* Processing Stages */}

<div className="grid lg:grid-cols-3 gap-6 mt-10">

<div className="bg-[#08121F] rounded-2xl border border-cyan-500/20 p-6">

<h4 className="text-cyan-400 text-xl font-bold mb-4">

Stage 1

</h4>

<ul className="space-y-2 text-gray-300">

<li>• 16 IQ Inputs</li>

<li>• Phase Calculation</li>

<li>• Q5.27 Arithmetic</li>

<li>• Pipeline Register</li>

</ul>

</div>

<div className="bg-[#08121F] rounded-2xl border border-cyan-500/20 p-6">

<h4 className="text-green-400 text-xl font-bold mb-4">

Stage 2

</h4>

<ul className="space-y-2 text-gray-300">

<li>• DDS Compiler</li>

<li>• Complex Weight</li>

<li>• DSP48 Multiply</li>

<li>• Pipeline Register</li>

</ul>

</div>

<div className="bg-[#08121F] rounded-2xl border border-cyan-500/20 p-6">

<h4 className="text-purple-400 text-xl font-bold mb-4">

Stage 3

</h4>

<ul className="space-y-2 text-gray-300">

<li>• Adder Tree</li>

<li>• Beam Output</li>

<li>• AXI4-Stream</li>

<li>• 250 MHz</li>

</ul>

</div>

</div>

{/* FPGA Resource Summary */}

<div className="grid lg:grid-cols-4 gap-6 mt-10">

<div className="bg-[#08121F] rounded-2xl p-6 text-center">

<h4 className="text-gray-400">

Channels

</h4>

<p className="text-3xl text-cyan-400 mt-3">

16

</p>

</div>

<div className="bg-[#08121F] rounded-2xl p-6 text-center">

<h4 className="text-gray-400">

Clock

</h4>

<p className="text-3xl text-green-400 mt-3">

250

</p>

<p className="text-sm text-gray-500">

MHz

</p>

</div>

<div className="bg-[#08121F] rounded-2xl p-6 text-center">

<h4 className="text-gray-400">

Phase Width

</h4>

<p className="text-3xl text-yellow-400 mt-3">

32

</p>

<p className="text-sm text-gray-500">

bits

</p>

</div>

<div className="bg-[#08121F] rounded-2xl p-6 text-center">

<h4 className="text-gray-400">

Pipeline

</h4>

<p className="text-3xl text-purple-400 mt-3">

3

</p>

<p className="text-sm text-gray-500">

Stages

</p>

</div>

</div>

</div>





  {/* Engineering Dashboard */}

<div className="mt-16">

<h3 className="text-3xl font-bold text-white mb-8">

Engineering Dashboard

</h3>

<div className="grid lg:grid-cols-4 gap-6">

<div className="bg-[#08121F] rounded-2xl border border-cyan-500/20 p-6 text-center">

<h4 className="text-gray-400">

Steering Angle

</h4>

<p className="text-4xl font-bold text-cyan-400 mt-3">

{steeringAngle}°

</p>

</div>

<div className="bg-[#08121F] rounded-2xl border border-cyan-500/20 p-6 text-center">

<h4 className="text-gray-400">

Array Gain

</h4>

<p className="text-4xl font-bold text-green-400 mt-3">

{(10*Math.log10(elements)).toFixed(2)}

</p>

<p className="text-sm text-gray-500">

dBi

</p>

</div>

<div className="bg-[#08121F] rounded-2xl border border-cyan-500/20 p-6 text-center">

<h4 className="text-gray-400">

Beamwidth

</h4>

<p className="text-4xl font-bold text-yellow-400 mt-3">

{(102/elements).toFixed(1)}°

</p>

</div>

<div className="bg-[#08121F] rounded-2xl border border-cyan-500/20 p-6 text-center">

<h4 className="text-gray-400">

Aperture

</h4>

<p className="text-4xl font-bold text-purple-400 mt-3">

{((elements-1)*spacing).toFixed(2)} λ

</p>

</div>

</div>

{/* FPGA Implementation */}

<div className="grid lg:grid-cols-2 gap-8 mt-10">

<div className="bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-2xl font-bold text-cyan-400 mb-6">

FPGA Design Parameters

</h3>

<table className="w-full">

<tbody>

<tr className="border-b border-gray-700">

<td className="py-3 text-gray-400">

Clock Frequency

</td>

<td className="py-3 text-green-400 text-right">

250 MHz

</td>

</tr>

<tr className="border-b border-gray-700">

<td className="py-3 text-gray-400">

Phase Width

</td>

<td className="py-3 text-green-400 text-right">

32-bit

</td>

</tr>

<tr className="border-b border-gray-700">

<td className="py-3 text-gray-400">

Coefficient Format

</td>

<td className="py-3 text-green-400 text-right">

Q5.27

</td>

</tr>

<tr className="border-b border-gray-700">

<td className="py-3 text-gray-400">

IQ Format

</td>

<td className="py-3 text-green-400 text-right">

Q1.15

</td>

</tr>

<tr className="border-b border-gray-700">

<td className="py-3 text-gray-400">

Channels

</td>

<td className="py-3 text-green-400 text-right">

16

</td>

</tr>

<tr>

<td className="py-3 text-gray-400">

Interface

</td>

<td className="py-3 text-green-400 text-right">

AXI4-Stream

</td>

</tr>

</tbody>

</table>

</div>

<div className="bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-2xl font-bold text-cyan-400 mb-6">

Design Features

</h3>

<ul className="space-y-4 text-gray-300">

<li>✔ 16 Independent Receive Channels</li>

<li>✔ FPGA-based Digital Beamforming</li>

<li>✔ PA × dx + PB × dy Phase Calculation</li>

<li>✔ DDS Compiler for Phase Rotation</li>

<li>✔ Complex IQ Weighting</li>

<li>✔ Pipelined Adder Tree</li>

<li>✔ Fixed-Point Arithmetic</li>

<li>✔ Real-Time Beam Steering</li>

<li>✔ MATLAB Verified Coefficients</li>

<li>✔ Vivado Implementation</li>

</ul>

</div>

</div>

{/* Processing Pipeline */}

<div className="mt-12 bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-2xl font-bold text-white mb-8">

Processing Latency

</h3>

<div className="grid lg:grid-cols-5 gap-6">

<div className="text-center">

<div className="text-4xl text-cyan-400 font-bold">

1

</div>

<p className="text-gray-400 mt-2">

Phase Calc

</p>

</div>

<div className="text-center">

<div className="text-4xl text-green-400 font-bold">

8

</div>

<p className="text-gray-400 mt-2">

DDS

</p>

</div>

<div className="text-center">

<div className="text-4xl text-yellow-400 font-bold">

4

</div>

<p className="text-gray-400 mt-2">

Complex Mult

</p>

</div>

<div className="text-center">

<div className="text-4xl text-purple-400 font-bold">

6

</div>

<p className="text-gray-400 mt-2">

Adder Tree

</p>

</div>

<div className="text-center">

<div className="text-4xl text-pink-400 font-bold">

19

</div>

<p className="text-gray-400 mt-2">

Total Cycles

</p>

</div>

</div>

</div>

</div>


{/* Key Takeaways */}

<div className="mt-16 bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-3xl font-bold text-white mb-8">

Key Takeaways

</h3>

<div className="grid lg:grid-cols-2 gap-8">

<div>

<ul className="space-y-4 text-gray-300">

<li>✔ Digital Beamforming enables electronic beam steering without moving the antenna.</li>

<li>✔ Phase weights determine the beam direction.</li>

<li>✔ Increasing antenna elements improves directivity and array gain.</li>

<li>✔ Element spacing affects grating lobes.</li>

<li>✔ Fixed-point arithmetic enables efficient FPGA implementation.</li>

<li>✔ DDS-based phase rotation provides precise beam steering.</li>

</ul>

</div>

<div>

<ul className="space-y-4 text-gray-300">

<li>✔ PA × dx + PB × dy is suitable for 2-D phased arrays.</li>

<li>✔ Pipelined FPGA architecture enables real-time operation.</li>

<li>✔ Complex IQ multiplication performs beam weighting.</li>

<li>✔ Adder trees combine all channel outputs into a single beam.</li>

<li>✔ MATLAB verification is essential before FPGA implementation.</li>

<li>✔ Digital Beamforming is a core technology in modern AESA radar systems.</li>

</ul>

</div>

</div>

</div>

{/* References */}

<div className="mt-12 bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-2xl font-bold text-white mb-8">

Recommended References

</h3>

<div className="grid lg:grid-cols-2 gap-6">

<div className="bg-[#101B2D] rounded-xl p-5">

<h4 className="text-cyan-400 font-semibold">

📘 Antenna Theory

</h4>

<p className="text-gray-400 mt-2">

Constantine A. Balanis

</p>

</div>

<div className="bg-[#101B2D] rounded-xl p-5">

<h4 className="text-cyan-400 font-semibold">

📘 Optimum Array Processing

</h4>

<p className="text-gray-400 mt-2">

Harry L. Van Trees

</p>

</div>

<div className="bg-[#101B2D] rounded-xl p-5">

<h4 className="text-cyan-400 font-semibold">

📘 Radar Handbook

</h4>

<p className="text-gray-400 mt-2">

Merrill I. Skolnik

</p>

</div>

<div className="bg-[#101B2D] rounded-xl p-5">

<h4 className="text-cyan-400 font-semibold">

📘 Principles of Modern Radar

</h4>

<p className="text-gray-400 mt-2">

Richards, Scheer & Holm

</p>

</div>

</div>

</div>

{/* Explore Other Labs */}

<div className="mt-12 bg-gradient-to-r from-cyan-500/10 via-[#08121F] to-blue-500/10 rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-3xl font-bold text-white mb-8">

Explore More DSP Laboratories

</h3>

<div className="grid lg:grid-cols-4 gap-6">

<div className="bg-[#101B2D] rounded-xl p-6 text-center hover:border-cyan-400 border border-transparent transition">

<h4 className="text-cyan-400 font-bold">

Digital Down Conversion

</h4>

<p className="text-gray-400 mt-3 text-sm">

NCO • FIR • Decimator

</p>

</div>

<div className="bg-[#101B2D] rounded-xl p-6 text-center hover:border-cyan-400 border border-transparent transition">

<h4 className="text-cyan-400 font-bold">

Pulse Compression

</h4>

<p className="text-gray-400 mt-3 text-sm">

LFM • Matched Filter

</p>

</div>

<div className="bg-[#101B2D] rounded-xl p-6 text-center hover:border-cyan-400 border border-transparent transition">

<h4 className="text-cyan-400 font-bold">

FFT Spectrum Analyzer

</h4>

<p className="text-gray-400 mt-3 text-sm">

Frequency Domain Analysis

</p>

</div>

<div className="bg-[#101B2D] rounded-xl p-6 text-center hover:border-cyan-400 border border-transparent transition">

<h4 className="text-cyan-400 font-bold">

Complex IQ Visualizer

</h4>

<p className="text-gray-400 mt-3 text-sm">

Constellation • Phasor

</p>

</div>

</div>

</div>

{/* Conclusion */}

<div className="mt-12 bg-[#08121F] rounded-3xl border border-cyan-500/20 p-10 text-center">

<h3 className="text-3xl font-bold text-cyan-400 mb-6">

Digital Beamforming Laboratory Complete

</h3>

<p className="max-w-4xl mx-auto text-gray-300 leading-8">

This interactive laboratory demonstrates the principles of phased-array beamforming used in modern radar systems. It combines antenna array theory with a practical FPGA implementation, including phase coefficient generation, DDS-based phase rotation, complex weighting, and real-time beam synthesis. The implementation reflects engineering concepts used in high-performance AESA radar receivers.

</p>

</div>

</div>

</section>

);

  }


  
  
  
  
  
  
