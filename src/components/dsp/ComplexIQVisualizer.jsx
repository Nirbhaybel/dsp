import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaWaveSquare,
  FaCompass,
  FaChartScatter,
  FaSlidersH,
} from "react-icons/fa";

export default function ComplexIQVisualizer() {

  const [amplitude, setAmplitude] = useState(1);
  const [phase, setPhase] = useState(45);
  const [frequency, setFrequency] = useState(5);

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

<span className="px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300">

Interactive DSP Laboratory

</span>

<h2 className="mt-6 text-5xl lg:text-6xl font-black">

<span className="text-white">

Complex IQ

</span>

<span className="text-cyan-400">

 Visualizer

</span>

</h2>

<p className="mt-6 max-w-3xl mx-auto text-gray-400 leading-8">

Visualize complex I/Q signals, constellation diagrams,
phasors, amplitude and phase relationships used in
radar receivers, SDR systems and digital communications.

</p>

</motion.div>

<div className="grid lg:grid-cols-12 gap-8 mt-16">

{/* LEFT PANEL */}

<div className="lg:col-span-4">

<div className="bg-[#101B2D] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-2xl font-bold text-white flex items-center gap-3">

<FaSlidersH className="text-cyan-400"/>

Signal Controls

</h3>

<div className="space-y-8 mt-8">
{/* Amplitude */}

<div>

<div className="flex justify-between mb-2">

<span className="text-gray-300">

Amplitude

</span>

<span className="text-cyan-400 font-semibold">

{amplitude.toFixed(1)}

</span>

</div>

<input

type="range"

min="0.5"

max="2"

step="0.1"

value={amplitude}

onChange={(e)=>setAmplitude(Number(e.target.value))}

className="w-full accent-cyan-400"

/>

</div>

{/* Phase */}

<div>

<div className="flex justify-between mb-2">

<span className="text-gray-300">

Phase

</span>

<span className="text-cyan-400 font-semibold">

{phase}°

</span>

</div>

<input

type="range"

min="-180"

max="180"

step="1"

value={phase}

onChange={(e)=>setPhase(Number(e.target.value))}

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

min="1"

max="30"

step="1"

value={frequency}

onChange={(e)=>setFrequency(Number(e.target.value))}

className="w-full accent-cyan-400"

/>

</div>

{/* IQ Summary */}

<div className="mt-10 bg-[#08121F] rounded-2xl border border-cyan-500/20 p-6">

<h4 className="text-xl font-bold text-white mb-5">

Signal Parameters

</h4>

<div className="space-y-3">

<div className="flex justify-between">

<span className="text-gray-400">

Amplitude

</span>

<span className="text-green-400">

{amplitude.toFixed(2)}

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Phase

</span>

<span className="text-green-400">

{phase}°

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

I Component

</span>

<span className="text-cyan-400">

{(amplitude*Math.cos(phase*Math.PI/180)).toFixed(3)}

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Q Component

</span>

<span className="text-cyan-400">

{(amplitude*Math.sin(phase*Math.PI/180)).toFixed(3)}

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

<FaWaveSquare className="text-cyan-400"/>

I/Q Signal Visualization

</h3>

{/* I & Q Waveforms */}

<div className="grid lg:grid-cols-2 gap-8">

{/* I Wave */}

<div>

<h4 className="text-xl font-bold text-cyan-400 mb-4">

In-Phase (I)

</h4>

<div className="bg-[#08121F] rounded-2xl border border-cyan-500/20 p-4">

<svg
width="100%"
height="220"
viewBox="0 0 800 220"
>

<polyline
fill="none"
stroke="#22d3ee"
strokeWidth="3"
points={
Array.from({length:100},(_,i)=>{

const x=i*8;
const y=110-
amplitude*
Math.cos(
(i/100)*2*Math.PI*frequency+
phase*Math.PI/180
)*70;

return `${x},${y}`;

}).join(" ")
}
/>

<line x1="0" y1="110" x2="800" y2="110" stroke="#374151"/>

</svg>

</div>

</div>

{/* Q Wave */}

<div>

<h4 className="text-xl font-bold text-cyan-400 mb-4">

Quadrature (Q)

</h4>

<div className="bg-[#08121F] rounded-2xl border border-cyan-500/20 p-4">

<svg
width="100%"
height="220"
viewBox="0 0 800 220"
>

<polyline
fill="none"
stroke="#22c55e"
strokeWidth="3"
points={
Array.from({length:100},(_,i)=>{

const x=i*8;
const y=110-
amplitude*
Math.sin(
(i/100)*2*Math.PI*frequency+
phase*Math.PI/180
)*70;

return `${x},${y}`;

}).join(" ")
}
/>

<line x1="0" y1="110" x2="800" y2="110" stroke="#374151"/>

</svg>

</div>

</div>

</div>

{/* Constellation Diagram */}

<div className="mt-10">

<h4 className="text-xl font-bold text-cyan-400 mb-4">

IQ Constellation

</h4>

<div className="bg-[#08121F] rounded-2xl border border-cyan-500/20 p-6">

<svg
width="100%"
height="320"
viewBox="0 0 320 320"
>

{/* Axes */}

<line x1="160" y1="20" x2="160" y2="300" stroke="#374151"/>

<line x1="20" y1="160" x2="300" y2="160" stroke="#374151"/>

{/* IQ Point */}

<circle

cx={160+amplitude*Math.cos(phase*Math.PI/180)*90}

cy={160-amplitude*Math.sin(phase*Math.PI/180)*90}

r="8"

fill="#facc15"

/>

{/* Vector */}

<line

x1="160"

y1="160"

x2={160+amplitude*Math.cos(phase*Math.PI/180)*90}

y2={160-amplitude*Math.sin(phase*Math.PI/180)*90}

stroke="#22d3ee"

strokeWidth="3"

/>

<text x="292" y="175" fill="#22d3ee">

I

</text>

<text x="150" y="20" fill="#22d3ee">

Q

</text>

</svg>

</div>

</div>

{/* Rotating Phasor */}

<div className="mt-12 grid lg:grid-cols-2 gap-8">

<div>

<h4 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">

<FaCompass />

Rotating Phasor

</h4>

<div className="bg-[#08121F] rounded-2xl border border-cyan-500/20 p-6">

<svg
width="100%"
height="320"
viewBox="0 0 320 320"
>

{/* Grid */}

<circle cx="160" cy="160" r="120"
stroke="#334155"
fill="none"/>

<circle cx="160" cy="160" r="80"
stroke="#334155"
fill="none"/>

<circle cx="160" cy="160" r="40"
stroke="#334155"
fill="none"/>

<line x1="20" y1="160" x2="300" y2="160"
stroke="#475569"/>

<line x1="160" y1="20" x2="160" y2="300"
stroke="#475569"/>

{/* Phasor */}

<line

x1="160"

y1="160"

x2={160 + amplitude*Math.cos(phase*Math.PI/180)*110}

y2={160 - amplitude*Math.sin(phase*Math.PI/180)*110}

stroke="#22d3ee"

strokeWidth="4"

/>

<circle

cx={160 + amplitude*Math.cos(phase*Math.PI/180)*110}

cy={160 - amplitude*Math.sin(phase*Math.PI/180)*110}

r="7"

fill="#22d3ee"

/>

<text x="295" y="175" fill="#22d3ee">

I

</text>

<text x="150" y="25" fill="#22d3ee">

Q

</text>

</svg>

</div>

</div>

{/* Mathematical Representation */}

<div>

<h4 className="text-xl font-bold text-cyan-400 mb-4">

Complex Signal Equation

</h4>

<div className="bg-[#08121F] rounded-2xl border border-cyan-500/20 p-8">

<div className="space-y-8">

<div>

<p className="text-gray-400 mb-2">

Complex Signal

</p>

<p className="text-3xl text-cyan-400">

s(t)=I+jQ

</p>

</div>

<div>

<p className="text-gray-400 mb-2">

Euler Representation

</p>

<p className="text-3xl text-green-400">

Ae<sup>jθ</sup>

</p>

</div>

<div>

<p className="text-gray-400 mb-2">

Current Signal

</p>

<p className="text-xl text-white">

{amplitude.toFixed(2)}
e<sup>j{phase}°</sup>

</p>

</div>

<div>

<p className="text-gray-400 mb-2">

Rectangular Form

</p>

<p className="text-xl text-yellow-400">

({(amplitude*Math.cos(phase*Math.PI/180)).toFixed(3)})
+
j({(amplitude*Math.sin(phase*Math.PI/180)).toFixed(3)})

</p>

</div>

</div>

</div>

</div>

</div>

{/* Complex Multiplication */}

<div className="mt-12 bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-2xl font-bold text-white mb-8">

Complex Multiplication (NCO Mixing)

</h3>

<div className="grid lg:grid-cols-3 gap-8 text-center">

<div className="bg-[#101B2D] rounded-2xl p-6">

<h4 className="text-cyan-400 font-bold">

Input Signal

</h4>

<p className="mt-4 text-2xl text-white">

I + jQ

</p>

</div>

<div className="flex items-center justify-center text-5xl text-cyan-400">

×

</div>

<div className="bg-[#101B2D] rounded-2xl p-6">

<h4 className="text-green-400 font-bold">

NCO

</h4>

<p className="mt-4 text-2xl text-white">

cosθ − jsinθ

</p>

</div>

</div>

<div className="mt-10 text-center">

<p className="text-3xl text-yellow-400">

(I+jQ)(cosθ−jsinθ)

</p>

<p className="mt-6 text-gray-300 leading-8">

This is the fundamental operation performed inside a
Digital Down Converter (DDC), Digital Up Converter (DUC),
Digital Beamformer and Software Defined Radio (SDR).

</p>

</div>

</div>
{/* FPGA Implementation */}

<div className="mt-14 bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-3xl font-bold text-white mb-10">

FPGA IQ Signal Processing Chain

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

NCO

</h4>

<p className="text-xs text-gray-400 mt-2">

Q1.15

</p>

</div>

<div className="text-center text-cyan-400 text-3xl">

→

</div>

<div className="bg-green-500/10 rounded-xl p-4 text-center">

<h4 className="text-green-400 font-bold">

Complex

</h4>

<p className="text-xs text-gray-400 mt-2">

Multiplier

</p>

</div>

<div className="text-center text-cyan-400 text-3xl">

→

</div>

<div className="bg-blue-500/10 rounded-xl p-4 text-center">

<h4 className="text-blue-400 font-bold">

LPF

</h4>

<p className="text-xs text-gray-400 mt-2">

101 Tap FIR

</p>

</div>

<div className="text-center text-cyan-400 text-3xl">

→

</div>

<div className="bg-purple-500/10 rounded-xl p-4 text-center">

<h4 className="text-purple-400 font-bold">

Baseband

</h4>

<p className="text-xs text-gray-400 mt-2">

I/Q

</p>

</div>

</div>

</div>

{/* Fixed Point Representation */}

<div className="grid lg:grid-cols-2 gap-8 mt-12">

<div className="bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-2xl font-bold text-white mb-8">

Fixed-Point Data Width

</h3>

<table className="w-full">

<thead>

<tr className="border-b border-cyan-500/20">

<th className="text-left py-3 text-cyan-400">

Stage

</th>

<th className="text-right py-3 text-cyan-400">

Width

</th>

</tr>

</thead>

<tbody>

<tr className="border-b border-gray-700/30">

<td className="py-3">

ADC

</td>

<td className="text-right text-green-400">

16 bits

</td>

</tr>

<tr className="border-b border-gray-700/30">

<td className="py-3">

NCO

</td>

<td className="text-right text-green-400">

16 bits

</td>

</tr>

<tr className="border-b border-gray-700/30">

<td className="py-3">

Complex Multiply

</td>

<td className="text-right text-green-400">

32 bits

</td>

</tr>

<tr className="border-b border-gray-700/30">

<td className="py-3">

LPF Output

</td>

<td className="text-right text-green-400">

40 bits

</td>

</tr>

<tr>

<td className="py-3">

Output

</td>

<td className="text-right text-green-400">

16/24/32 bits

</td>

</tr>

</tbody>

</table>

</div>

<div className="bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-2xl font-bold text-white mb-8">

FPGA Design Notes

</h3>

<ul className="space-y-4 text-gray-300">

<li>✔ Q1.15 Fixed-Point Arithmetic</li>

<li>✔ DSP48-Based Complex Multiplier</li>

<li>✔ 32-bit NCO Phase Accumulator</li>

<li>✔ Pipelined Architecture</li>

<li>✔ FIR Compiler IP</li>

<li>✔ AXI4-Stream Interfaces</li>

<li>✔ Timing Closure @250 MHz</li>

<li>✔ MATLAB vs FPGA Verification</li>

</ul>

</div>

</div>

{/* Engineering Note */}

<div className="mt-12 bg-gradient-to-r from-cyan-500/10 via-[#08121F] to-blue-500/10 rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-2xl font-bold text-white mb-5">

Engineering Insight

</h3>

<p className="text-gray-300 leading-8">

The complex IQ signal path shown above represents a typical FPGA implementation of a Digital Down Converter (DDC). The incoming ADC samples are mixed with Numerically Controlled Oscillator (NCO) outputs using complex multiplication, filtered by a low-pass FIR filter, and converted to baseband I/Q samples. This architecture forms the foundation of radar receivers, software-defined radios (SDR), digital communication systems, and digital beamforming applications.

</p>

</div>

{/* DSP Dashboard */}

<div className="mt-14">

<h3 className="text-3xl font-bold text-white mb-8">

Real-Time DSP Dashboard

</h3>

<div className="grid lg:grid-cols-3 gap-8">

{/* Signal Metrics */}

<div className="bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h4 className="text-xl font-bold text-cyan-400 mb-6">

Signal Metrics

</h4>

<div className="space-y-5">

<div className="flex justify-between">

<span className="text-gray-400">Magnitude</span>

<span className="text-green-400">

{Math.sqrt(
Math.pow(amplitude*Math.cos(phase*Math.PI/180),2)+
Math.pow(amplitude*Math.sin(phase*Math.PI/180),2)
).toFixed(3)}

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Power

</span>

<span className="text-green-400">

{(amplitude*amplitude).toFixed(3)}

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Phase

</span>

<span className="text-green-400">

{phase}°

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

</div>

</div>

{/* FPGA Parameters */}

<div className="bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h4 className="text-xl font-bold text-cyan-400 mb-6">

FPGA Parameters

</h4>

<div className="space-y-5">

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

Data Format

</span>

<span className="text-green-400">

Q1.15

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Complex Multiply

</span>

<span className="text-green-400">

4 DSP48

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Latency

</span>

<span className="text-green-400">

4 Cycles

</span>

</div>

</div>

</div>

{/* Engineering Summary */}

<div className="bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h4 className="text-xl font-bold text-cyan-400 mb-6">

Applications

</h4>

<ul className="space-y-4 text-gray-300">

<li>✔ Digital Down Conversion</li>

<li>✔ Software Defined Radio</li>

<li>✔ Radar Receivers</li>

<li>✔ Digital Beamforming</li>

<li>✔ Pulse Compression</li>

<li>✔ QPSK / QAM Modulation</li>

<li>✔ Satellite Communications</li>

<li>✔ FPGA DSP Systems</li>

</ul>

</div>

</div>

</div>

{/* Mathematical Relationships */}

<div className="mt-14 bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-3xl font-bold text-white mb-8">

Key DSP Equations

</h3>

<div className="grid lg:grid-cols-2 gap-8">

<div>

<p className="text-gray-400 mb-3">

Magnitude

</p>

<p className="text-3xl text-cyan-400">

|S| = √(I² + Q²)

</p>

</div>

<div>

<p className="text-gray-400 mb-3">

Phase

</p>

<p className="text-3xl text-green-400">

θ = atan(Q / I)

</p>

</div>

<div>

<p className="text-gray-400 mb-3">

Complex Signal

</p>

<p className="text-3xl text-cyan-400">

S = I + jQ

</p>

</div>

<div>

<p className="text-gray-400 mb-3">

Euler Formula

</p>

<p className="text-3xl text-green-400">

Ae<sup>jθ</sup>

</p>

</div>

</div>

</div>

{/* Complete DSP Workflow */}

<div className="mt-16 bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-3xl font-bold text-white mb-10">

Complete Radar DSP Workflow

</h3>

<div className="grid grid-cols-2 lg:grid-cols-10 gap-4 items-center">

<div className="bg-cyan-500/10 rounded-xl p-4 text-center">

<h4 className="text-cyan-400 font-bold">ADC</h4>

<p className="text-xs text-gray-400 mt-2">16-bit I/Q</p>

</div>

<div className="text-center text-cyan-400 text-2xl">→</div>

<div className="bg-cyan-500/10 rounded-xl p-4 text-center">

<h4 className="text-cyan-400 font-bold">NCO</h4>

<p className="text-xs text-gray-400 mt-2">DDS</p>

</div>

<div className="text-center text-cyan-400 text-2xl">→</div>

<div className="bg-green-500/10 rounded-xl p-4 text-center">

<h4 className="text-green-400 font-bold">DDC</h4>

<p className="text-xs text-gray-400 mt-2">Mixer</p>

</div>

<div className="text-center text-cyan-400 text-2xl">→</div>

<div className="bg-blue-500/10 rounded-xl p-4 text-center">

<h4 className="text-blue-400 font-bold">LPF</h4>

<p className="text-xs text-gray-400 mt-2">101 Tap</p>

</div>

<div className="text-center text-cyan-400 text-2xl">→</div>

<div className="bg-purple-500/10 rounded-xl p-4 text-center">

<h4 className="text-purple-400 font-bold">Baseband</h4>

<p className="text-xs text-gray-400 mt-2">Complex IQ</p>

</div>

</div>

<div className="grid grid-cols-2 lg:grid-cols-8 gap-4 items-center mt-10">

<div className="bg-orange-500/10 rounded-xl p-4 text-center">

<h4 className="text-orange-400 font-bold">

Pulse Compression

</h4>

</div>

<div className="text-center text-cyan-400 text-2xl">→</div>

<div className="bg-red-500/10 rounded-xl p-4 text-center">

<h4 className="text-red-400 font-bold">

Beamforming

</h4>

</div>

<div className="text-center text-cyan-400 text-2xl">→</div>

<div className="bg-indigo-500/10 rounded-xl p-4 text-center">

<h4 className="text-indigo-400 font-bold">

Range FFT

</h4>

</div>

<div className="text-center text-cyan-400 text-2xl">→</div>

<div className="bg-pink-500/10 rounded-xl p-4 text-center">

<h4 className="text-pink-400 font-bold">

CFAR

</h4>

</div>

<div className="text-center text-cyan-400 text-2xl">→</div>

<div className="bg-yellow-500/10 rounded-xl p-4 text-center">

<h4 className="text-yellow-400 font-bold">

Target Detection

</h4>

</div>

</div>

</div>

{/* Engineering Summary */}

<div className="mt-14 bg-gradient-to-r from-cyan-500/10 via-[#08121F] to-blue-500/10 rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-2xl font-bold text-white mb-6">

Engineering Summary

</h3>

<p className="text-gray-300 leading-8">

The Complex IQ Visualizer demonstrates the mathematical and hardware implementation of complex signal processing used in modern radar and communication systems. It covers I/Q generation, phasor representation, complex multiplication, Digital Down Conversion (DDC), fixed-point arithmetic, and FPGA implementation techniques. These concepts form the foundation of Digital Beamforming, Pulse Compression, FFT-based signal analysis, and real-time radar processing pipelines.

</p>

</div>

</div>

</section>

);

  }

  



  
  
  
  
  
  
  
