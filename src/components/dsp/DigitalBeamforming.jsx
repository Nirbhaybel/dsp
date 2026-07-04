import { useState } from "react";
import { motion } from "framer-motion";
import {
FaSatelliteDish,
FaSlidersH,
FaCrosshairs,
FaMicrochip
} from "react-icons/fa";

export default function DigitalBeamforming(){

const [steeringAngle,setSteeringAngle]=useState(0);

const [elements,setElements]=useState(16);

const [spacing,setSpacing]=useState(0.5);

const [frequency,setFrequency]=useState(9400);

return(

<section className="py-24">

<div className="max-w-7xl mx-auto">

<motion.div

initial={{opacity:0,y:-30}}

whileInView={{opacity:1,y:0}}

transition={{duration:0.8}}

viewport={{once:true}}

className="text-center"

>

<span className="px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300">

Interactive Radar DSP Laboratory

</span>

<h2 className="mt-6 text-5xl lg:text-6xl font-black">

<span className="text-white">

Digital Beam

</span>

<span className="text-cyan-400">

Forming

</span>

</h2>

<p className="mt-6 max-w-3xl mx-auto text-gray-400 leading-8">

Explore phased-array beam steering, phase calculation,
array factor and FPGA implementation of Digital
Beamforming for AESA radar systems.

</p>

</motion.div>

<div className="grid lg:grid-cols-12 gap-8 mt-16">

<div className="lg:col-span-4">

<div className="bg-[#101B2D] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-2xl font-bold text-white flex items-center gap-3">

<FaSlidersH className="text-cyan-400"/>

Beamforming Controls

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

min="-60"

max="60"

step="1"

value={steeringAngle}

onChange={(e)=>setSteeringAngle(Number(e.target.value))}

className="w-full accent-cyan-400"

/>

</div>

{/* Number of Elements */}

<div>

<label className="block text-gray-300 mb-3">

Antenna Elements

</label>

<select

value={elements}

onChange={(e)=>setElements(Number(e.target.value))}

className="w-full bg-[#08121F] border border-cyan-500/20 rounded-xl p-3 text-white"

>

<option value={8}>8</option>

<option value={16}>16</option>

<option value={32}>32</option>

<option value={64}>64</option>

</select>

</div>

{/* Frequency */}

<div>

<div className="flex justify-between mb-2">

<span className="text-gray-300">

Operating Frequency

</span>

<span className="text-cyan-400 font-semibold">

{frequency} MHz

</span>

</div>

<input

type="range"

min="1000"

max="12000"

step="100"

value={frequency}

onChange={(e)=>setFrequency(Number(e.target.value))}

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

max="1"

step="0.05"

value={spacing}

onChange={(e)=>setSpacing(Number(e.target.value))}

className="w-full accent-cyan-400"

/>

</div>

{/* Beam Summary */}

<div className="mt-10 bg-[#08121F] rounded-2xl border border-cyan-500/20 p-6">

<h4 className="text-xl font-bold text-white mb-5">

Current Configuration

</h4>

<div className="space-y-3">

<div className="flex justify-between">

<span className="text-gray-400">

Steering

</span>

<span className="text-green-400">

{steeringAngle}°

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Array

</span>

<span className="text-cyan-400">

{elements} Elements

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Frequency

</span>

<span className="text-green-400">

{frequency} MHz

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Spacing

</span>

<span className="text-cyan-400">

{spacing.toFixed(2)} λ

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Beam Direction

</span>

<span className="text-green-400">

{steeringAngle >= 0 ? "Right" : "Left"}

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

<FaSatelliteDish className="text-cyan-400"/>

Beam Steering Visualization

</h3>

{/* Antenna Array */}

<div className="mb-10">

<h4 className="text-xl font-bold text-cyan-400 mb-4">

AESA Antenna Array

</h4>

<div className="h-60 rounded-2xl bg-[#08121F] border border-cyan-500/20 p-6">

<svg
width="100%"
height="200"
viewBox="0 0 900 200"
preserveAspectRatio="none"
>

{/* Antenna Elements */}

{Array.from({ length: elements }).map((_, i) => {

const x = 40 + i * (820 / (elements - 1));

return (

<g key={i}>

<rect
x={x - 5}
y="120"
width="10"
height="40"
rx="2"
fill="#22d3ee"
/>

<circle
cx={x}
cy="115"
r="4"
fill="#38bdf8"
/>

</g>

);

})}

{/* Main Beam */}

<line
x1="450"
y1="110"
x2={450 + steeringAngle * 4}
y2="20"
stroke="#22c55e"
strokeWidth="5"
/>

{/* Side Beams */}

<line
x1="450"
y1="110"
x2={430 + steeringAngle * 3}
y2="35"
stroke="#0ea5e9"
strokeWidth="2"
opacity="0.5"
/>

<line
x1="450"
y1="110"
x2={470 + steeringAngle * 3}
y2="35"
stroke="#0ea5e9"
strokeWidth="2"
opacity="0.5"
/>

{/* Target */}

<polygon
points="700,35 715,55 700,50 685,55"
fill="#facc15"
/>

<text
x="690"
y="28"
fill="#facc15"
fontSize="14"
>

Target

</text>

</svg>

</div>

</div>

{/* Beam Pattern */}

<div>

<h4 className="text-xl font-bold text-cyan-400 mb-4">

Beam Pattern

</h4>

<div className="h-64 rounded-2xl bg-[#08121F] border border-cyan-500/20 p-4">

<svg
width="100%"
height="220"
viewBox="0 0 900 220"
preserveAspectRatio="none"
>

<polyline

fill="none"

stroke="#22d3ee"

strokeWidth="4"

points={`

0,200
100,195
180,185
250,160
320,120
390,60
450,20
510,60
580,120
650,160
720,185
800,195
900,200

`}

/>

<line

x1={450 + steeringAngle * 3}

y1="0"

x2={450 + steeringAngle * 3}

y2="210"

stroke="#22c55e"

strokeDasharray="6 6"

strokeWidth="2"

/>

<text

x={455 + steeringAngle * 3}

y="20"

fill="#22c55e"

fontSize="14"

>

Beam Direction

</text>

</svg>

</div>

</div>

  {/* Phase Calculation */}

<div className="grid lg:grid-cols-2 gap-8 mt-12">

<div className="bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-2xl font-bold text-white mb-8">

Element Phase Shift

</h3>

<div className="overflow-auto max-h-96">

<table className="w-full">

<thead>

<tr className="text-cyan-400 border-b border-cyan-500/20">

<th className="py-2 text-left">Element</th>

<th className="py-2 text-center">Phase (°)</th>

<th className="py-2 text-right">NCO Phase</th>

</tr>

</thead>

<tbody>

{

Array.from({length:elements}).map((_,i)=>{

const phase=((i-(elements-1)/2)*steeringAngle*2).toFixed(1);

const nco=Math.round(
(((Number(phase)+360)%360)/360)*(2**32)
);

return(

<tr
key={i}
className="border-b border-gray-700/30 hover:bg-cyan-500/5"
>

<td className="py-2">

Element {i+1}

</td>

<td className="text-center text-cyan-400">

{phase}

</td>

<td className="text-right text-green-400">

0x{nco.toString(16).toUpperCase()}

</td>

</tr>

);

})

}

</tbody>

</table>

</div>

</div>

{/* Engineering Equations */}

<div className="bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-2xl font-bold text-white mb-8">

Beamforming Equations

</h3>

<div className="space-y-8">

<div>

<p className="text-gray-400 mb-3">

Progressive Phase Shift

</p>

<p className="text-3xl text-cyan-400 text-center">

Δφ = 2π(d/λ)sin(θ)

</p>

</div>

<div>

<p className="text-gray-400 mb-3">

Array Factor

</p>

<p className="text-3xl text-cyan-400 text-center">

AF = Σ e<sup>jnΔφ</sup>

</p>

</div>

<div>

<p className="text-gray-400 leading-8">

Each antenna element is multiplied by a unique
complex phase coefficient generated by an NCO.
After complex multiplication, all channels are summed
using an FPGA adder tree to produce the steered beam.

</p>

</div>

</div>

</div>

</div>


  {/* FPGA Architecture */}

<div className="mt-14 bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">

<FaMicrochip className="text-cyan-400"/>

FPGA Digital Beamforming Architecture

</h3>

<div className="grid grid-cols-9 gap-3 items-center">

<div className="bg-cyan-500/10 rounded-xl p-4 text-center">

<h4 className="text-cyan-400 font-bold">

ADC

</h4>

<p className="text-xs text-gray-400 mt-2">

16-bit I/Q

</p>

</div>

<div className="text-center text-cyan-400 text-3xl">

→

</div>

<div className="bg-cyan-500/10 rounded-xl p-4 text-center">

<h4 className="text-cyan-400 font-bold">

DDC

</h4>

<p className="text-xs text-gray-400 mt-2">

NCO + Mixer

</p>

</div>

<div className="text-center text-cyan-400 text-3xl">

→

</div>

<div className="bg-cyan-500/10 rounded-xl p-4 text-center">

<h4 className="text-cyan-400 font-bold">

LPF

</h4>

<p className="text-xs text-gray-400 mt-2">

101 Tap FIR

</p>

</div>

<div className="text-center text-cyan-400 text-3xl">

→

</div>

<div className="bg-cyan-500/10 rounded-xl p-4 text-center">

<h4 className="text-cyan-400 font-bold">

Pulse Compression

</h4>

<p className="text-xs text-gray-400 mt-2">

Matched Filter

</p>

</div>

<div className="text-center text-cyan-400 text-3xl">

→

</div>

<div className="bg-green-500/10 rounded-xl p-4 text-center">

<h4 className="text-green-400 font-bold">

Beamforming

</h4>

<p className="text-xs text-gray-400 mt-2">

16 Channels

</p>

</div>

</div>

</div>

{/* Beamforming Processing */}

<div className="mt-10 grid lg:grid-cols-2 gap-8">

<div className="bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-2xl font-bold text-white mb-6">

Beamforming Processing

</h3>

<div className="space-y-5">

<div className="flex justify-between">

<span className="text-gray-400">

Input Channels

</span>

<span className="text-green-400">

16 Complex Channels

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Input Width

</span>

<span className="text-cyan-400">

32-bit I/Q

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Phase Generator

</span>

<span className="text-cyan-400">

32-bit NCO

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Complex Multiplier

</span>

<span className="text-green-400">

16 Parallel

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Adder Tree

</span>

<span className="text-green-400">

Pipeline

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Output

</span>

<span className="text-green-400">

Beam Signal

</span>

</div>

</div>

</div>

<div className="bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-2xl font-bold text-white mb-6">

FPGA Resource Estimate

</h3>

<div className="space-y-5">

<div className="flex justify-between">

<span className="text-gray-400">

DSP48

</span>

<span className="text-green-400">

64

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

BRAM

</span>

<span className="text-green-400">

20

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Clock

</span>

<span className="text-green-400">

250 MHz

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Pipeline Latency

</span>

<span className="text-cyan-400">

18 Cycles

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Fixed Point

</span>

<span className="text-cyan-400">

Q1.15 / Q2.30

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Implementation

</span>

<span className="text-green-400">

Fully Parallel

</span>

</div>

</div>

</div>

</div>

  {/* Array Factor */}

<div className="mt-14">

<h3 className="text-3xl font-bold text-white mb-8">

Array Factor

</h3>

<div className="bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<svg

width="100%"

height="320"

viewBox="0 0 900 320"

preserveAspectRatio="none"

>

{/* Grid */}

{

Array.from({length:8}).map((_,i)=>(

<line

key={i}

x1="0"

y1={40+i*35}

x2="900"

y2={40+i*35}

stroke="#1f2937"

/>

))

}

{/* Main Beam */}

<polyline

fill="none"

stroke="#22d3ee"

strokeWidth="5"

points={`

0,300
120,295
180,285
240,250
300,180
360,90
450,20
540,90
600,180
660,250
720,285
780,295
900,300

`}

/>

{/* Beam Direction */}

<line

x1={450+steeringAngle*3}

y1="0"

x2={450+steeringAngle*3}

y2="310"

stroke="#22c55e"

strokeWidth="2"

strokeDasharray="8 6"

/>

<text

x={455+steeringAngle*3}

y="20"

fill="#22c55e"

fontSize="14"

>

Steered Beam

</text>

</svg>

</div>

</div>

{/* Target Scene */}

<div className="mt-10">

<h3 className="text-3xl font-bold text-white mb-8">

Radar Target Scene

</h3>

<div className="bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<svg

width="100%"

height="260"

viewBox="0 0 900 260"

preserveAspectRatio="none"

>

{/* Radar */}

<circle

cx="450"

cy="220"

r="18"

fill="#22d3ee"

/>

{/* Scan Sector */}

<path

d={`M450 220 L${450+steeringAngle*4} 30`}

stroke="#22c55e"

strokeWidth="5"

/>

{/* Aircraft */}

<polygon

points="260,70 275,90 260,85 245,90"

fill="#facc15"

/>

<polygon

points="470,45 485,65 470,60 455,65"

fill="#facc15"

/>

<polygon

points="700,90 715,110 700,105 685,110"

fill="#facc15"

/>

<text x="245" y="60" fill="#facc15">

Target 1

</text>

<text x="455" y="35" fill="#facc15">

Target 2

</text>

<text x="685" y="80" fill="#facc15">

Target 3

</text>

</svg>

</div>

</div>

{/* Beam Parameters */}

<div className="grid lg:grid-cols-4 gap-6 mt-12">

<div className="bg-[#08121F] rounded-2xl p-6 text-center">

<h4 className="text-gray-400">

Beamwidth

</h4>

<p className="text-3xl text-cyan-400 mt-3">

{(102/elements).toFixed(1)}°

</p>

</div>

<div className="bg-[#08121F] rounded-2xl p-6 text-center">

<h4 className="text-gray-400">

Gain

</h4>

<p className="text-3xl text-green-400 mt-3">

{(10*Math.log10(elements)).toFixed(1)} dB

</p>

</div>

<div className="bg-[#08121F] rounded-2xl p-6 text-center">

<h4 className="text-gray-400">

Scan Angle

</h4>

<p className="text-3xl text-cyan-400 mt-3">

{steeringAngle}°

</p>

</div>

<div className="bg-[#08121F] rounded-2xl p-6 text-center">

<h4 className="text-gray-400">

Elements

</h4>

<p className="text-3xl text-green-400 mt-3">

{elements}

</p>

</div>

</div>

  {/* Complete Radar Signal Processing Chain */}

<div className="mt-14 bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-3xl font-bold text-white mb-10">

Complete Radar Signal Processing Chain

</h3>

<div className="grid grid-cols-4 lg:grid-cols-8 gap-4 text-center">

<div className="bg-cyan-500/10 rounded-2xl p-5 hover:bg-cyan-500/20 transition">

<h4 className="text-cyan-400 font-bold">

ADC

</h4>

<p className="text-xs text-gray-400 mt-2">

16-bit I/Q

</p>

</div>

<div className="bg-cyan-500/10 rounded-2xl p-5 hover:bg-cyan-500/20 transition">

<h4 className="text-cyan-400 font-bold">

DDC

</h4>

<p className="text-xs text-gray-400 mt-2">

NCO + Mixer

</p>

</div>

<div className="bg-cyan-500/10 rounded-2xl p-5 hover:bg-cyan-500/20 transition">

<h4 className="text-cyan-400 font-bold">

LPF

</h4>

<p className="text-xs text-gray-400 mt-2">

FIR Filter

</p>

</div>

<div className="bg-cyan-500/10 rounded-2xl p-5 hover:bg-cyan-500/20 transition">

<h4 className="text-cyan-400 font-bold">

Pulse Compression

</h4>

<p className="text-xs text-gray-400 mt-2">

Matched Filter

</p>

</div>

<div className="bg-green-500/10 rounded-2xl p-5 hover:bg-green-500/20 transition">

<h4 className="text-green-400 font-bold">

Beamforming

</h4>

<p className="text-xs text-gray-400 mt-2">

16 Channels

</p>

</div>

<div className="bg-blue-500/10 rounded-2xl p-5 hover:bg-blue-500/20 transition">

<h4 className="text-blue-400 font-bold">

Range FFT

</h4>

<p className="text-xs text-gray-400 mt-2">

Fast Time

</p>

</div>

<div className="bg-purple-500/10 rounded-2xl p-5 hover:bg-purple-500/20 transition">

<h4 className="text-purple-400 font-bold">

Doppler FFT

</h4>

<p className="text-xs text-gray-400 mt-2">

Slow Time

</p>

</div>

<div className="bg-red-500/10 rounded-2xl p-5 hover:bg-red-500/20 transition">

<h4 className="text-red-400 font-bold">

CFAR

</h4>

<p className="text-xs text-gray-400 mt-2">

Detection

</p>

</div>

</div>

</div>

{/* Engineering Summary */}

<div className="grid lg:grid-cols-2 gap-8 mt-12">

<div className="bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-2xl font-bold text-white mb-6">

Implemented FPGA Modules

</h3>

<ul className="space-y-4 text-gray-300">

<li>✔ Digital Down Converter (DDC)</li>

<li>✔ Numerically Controlled Oscillator (NCO)</li>

<li>✔ FIR Low Pass Filter</li>

<li>✔ Pulse Compression (Matched Filter)</li>

<li>✔ Digital Beamforming (DBF)</li>

<li>✔ Complex Multiplier</li>

<li>✔ Pipelined Adder Tree</li>

<li>✔ FFT Processing</li>

<li>✔ Fixed-Point Arithmetic</li>

<li>✔ AXI4-Stream Interfaces</li>

</ul>

</div>

<div className="bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-2xl font-bold text-white mb-6">

FPGA Design Skills

</h3>

<ul className="space-y-4 text-gray-300">

<li>✔ VHDL-2008 Design</li>

<li>✔ Vivado IP Integration</li>

<li>✔ DSP48 Optimization</li>

<li>✔ Pipeline Architecture</li>

<li>✔ Timing Closure @250 MHz</li>

<li>✔ CDC Design</li>

<li>✔ Fixed-Point Modeling</li>

<li>✔ MATLAB Algorithm Validation</li>

<li>✔ Hardware Debug</li>

<li>✔ High-Speed Ethernet Interfaces</li>

</ul>

</div>

</div>

{/* Professional Note */}

<div className="mt-12 bg-gradient-to-r from-cyan-500/10 via-[#08121F] to-blue-500/10 rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-2xl font-bold text-white mb-6">

Engineering Note

</h3>

<p className="text-gray-300 leading-8">

This Digital Beamforming Laboratory demonstrates the complete signal processing chain used in modern FPGA-based AESA radar systems. The implementation combines Digital Down Conversion, FIR filtering, Pulse Compression, Digital Beamforming, FFT processing, and CFAR detection into a high-throughput pipelined architecture suitable for real-time radar applications.

</p>

</div>

{/* Live Radar Console */}

<div className="mt-16 bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">

<FaCrosshairs className="text-cyan-400"/>

Live Radar Console

</h3>

<div className="grid lg:grid-cols-3 gap-8">

{/* Radar Status */}

<div className="bg-[#101B2D] rounded-2xl p-6">

<h4 className="text-xl font-bold text-cyan-400 mb-6">

Radar Status

</h4>

<div className="space-y-5">

<div className="flex justify-between">

<span className="text-gray-400">

Mode

</span>

<span className="text-green-400">

Track While Scan

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Targets

</span>

<span className="text-green-400">

3

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

PRF

</span>

<span className="text-cyan-400">

50 kHz

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Pulse Width

</span>

<span className="text-cyan-400">

4 μs

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Bandwidth

</span>

<span className="text-cyan-400">

1 MHz

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Beam Steering

</span>

<span className="text-green-400">

{steeringAngle}°

</span>

</div>

</div>

</div>

{/* Processing Latency */}

<div className="bg-[#101B2D] rounded-2xl p-6">

<h4 className="text-xl font-bold text-cyan-400 mb-6">

Real-Time Processing

</h4>

<div className="space-y-5">

<div className="flex justify-between">

<span className="text-gray-400">

ADC → DDC

</span>

<span className="text-green-400">

2 cycles

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

LPF

</span>

<span className="text-green-400">

101 cycles

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Pulse Compression

</span>

<span className="text-green-400">

240 cycles

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Beamforming

</span>

<span className="text-green-400">

18 cycles

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

FFT

</span>

<span className="text-green-400">

10 stages

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

CFAR

</span>

<span className="text-green-400">

12 cycles

</span>

</div>

</div>

</div>

{/* FPGA */}

<div className="bg-[#101B2D] rounded-2xl p-6">

<h4 className="text-xl font-bold text-cyan-400 mb-6">

FPGA Summary

</h4>

<div className="space-y-5">

<div className="flex justify-between">

<span className="text-gray-400">

Device

</span>

<span className="text-green-400">

Kintex UltraScale

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Clock

</span>

<span className="text-green-400">

250 MHz

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

DSP48

</span>

<span className="text-cyan-400">

64

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

BRAM

</span>

<span className="text-cyan-400">

20

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Latency

</span>

<span className="text-green-400">

< 2 μs

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Status

</span>

<span className="text-green-400">

Operational

</span>

</div>

</div>

</div>

</div>

</div>

{/* Footer */}

<div className="mt-16 text-center">

<p className="text-gray-500">

Designed & Developed by Nirbhay Singh

</p>

<p className="text-gray-600 mt-2">

FPGA | Radar Signal Processing | Digital Beamforming | DSP | VHDL

</p>

</div>

</div>

</section>

);

  }

  
  
  
