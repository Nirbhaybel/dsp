import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaSatelliteDish,
  FaWaveSquare,
  FaSlidersH,
  FaChartLine,
} from "react-icons/fa";

export default function PulseCompression() {

const [pulseWidth,setPulseWidth]=useState(4);
const [bandwidth,setBandwidth]=useState(1);
const [targetRange, setTargetRange] = useState(20);

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

<span className="px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">

Interactive Radar DSP Laboratory

</span>

<h2 className="mt-6 text-5xl lg:text-6xl font-black">

<span className="text-white">

Pulse

</span>

<span className="text-cyan-400">

 Compression

</span>

</h2>

<p className="mt-6 max-w-3xl mx-auto text-gray-400 leading-8">

Explore Linear Frequency Modulated (LFM) pulse generation,
matched filtering, pulse compression, and FPGA implementation
used in modern AESA radar systems.

</p>

</motion.div>

<div className="grid lg:grid-cols-12 gap-8 mt-16">

{/* LEFT PANEL */}

<div className="lg:col-span-4">

<div className="bg-[#101B2D] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-2xl font-bold text-white flex items-center gap-3">

<FaSlidersH className="text-cyan-400"/>

Radar Controls

</h3>

<div className="space-y-8 mt-8">
{/* Pulse Width */}

<div>

<div className="flex justify-between mb-2">

<span className="text-gray-300">

Pulse Width

</span>

<span className="text-cyan-400 font-semibold">

{pulseWidth} μs

</span>

</div>

<input
type="range"
min="1"
max="20"
step="1"
value={pulseWidth}
onChange={(e)=>setPulseWidth(Number(e.target.value))}
className="w-full accent-cyan-400"
/>

</div>

{/* Bandwidth */}

<div>

<div className="flex justify-between mb-2">

<span className="text-gray-300">

Bandwidth

</span>

<span className="text-cyan-400 font-semibold">

{bandwidth} MHz

</span>

</div>

<input
type="range"
min="0.5"
max="10"
step="0.5"
value={bandwidth}
onChange={(e)=>setBandwidth(Number(e.target.value))}
className="w-full accent-cyan-400"
/>

</div>

{/* Target Range */}

<div>

<div className="flex justify-between mb-2">

<span className="text-gray-300">

Target Range

</span>

<span className="text-cyan-400 font-semibold">

{range} km

</span>

</div>

<input
type="range"
min="1"
max="100"
step="1"
value={targetRange}
onChange={(e)=>setRange(Number(e.target.value))}
className="w-full accent-cyan-400"
/>

</div>

{/* Radar Parameters */}

<div className="mt-10 bg-[#08121F] rounded-2xl border border-cyan-500/20 p-6">

<h4 className="text-xl font-bold text-white mb-6">

Radar Parameters

</h4>

<div className="space-y-4">

<div className="flex justify-between">

<span className="text-gray-400">

Pulse Width

</span>

<span className="text-green-400">

{pulseWidth} μs

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Bandwidth

</span>

<span className="text-green-400">

{bandwidth} MHz

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Time-Bandwidth Product

</span>

<span className="text-yellow-400">

{(pulseWidth*bandwidth).toFixed(1)}

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Compression Ratio

</span>

<span className="text-cyan-400">

{(pulseWidth*bandwidth).toFixed(1)} : 1

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Target Range

</span>

<span className="text-green-400">

{range} km

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

LFM Chirp Generation

</h3>


  {/* Transmit & Receive Waveforms */}

<div className="grid lg:grid-cols-2 gap-8">

{/* Transmitted Chirp */}

<div>

<h4 className="text-xl font-bold text-cyan-400 mb-4">

Transmit LFM Chirp

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

Array.from({length:160},(_,i)=>{

const x=i*5;

const sweep=(i/160)*(bandwidth*10);

const y=110-

Math.sin(

2*Math.PI*

(i/160)*

(2+sweep)

)*70;

return `${x},${y}`;

}).join(" ")

}

/>

<line

x1="0"

y1="110"

x2="800"

y2="110"

stroke="#374151"

/>

</svg>

</div>

</div>

{/* Received Echo */}

<div>

<h4 className="text-xl font-bold text-green-400 mb-4">

Received Echo

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

Array.from({length:160},(_,i)=>{

const delay=targetRange*2;

const x=i*5;

const sweep=(i/160)*(bandwidth*10);

const y=110-

Math.sin(

2*Math.PI*

((i-delay)/160)*

(2+sweep)

)*55;

return `${x},${y}`;

}).join(" ")

}

/>

<line

x1="0"

y1="110"

x2="800"

y2="110"

stroke="#374151"

/>

</svg>

</div>

</div>

</div>

{/* Live Calculations */}

<div className="grid lg:grid-cols-3 gap-6 mt-10">

<div className="bg-[#08121F] rounded-2xl p-6 text-center">

<h4 className="text-gray-400">

Chirp Slope

</h4>

<p className="text-3xl text-cyan-400 mt-3">

{(bandwidth/pulseWidth).toFixed(2)}

</p>

<p className="text-gray-500 text-sm">

MHz/μs

</p>

</div>

<div className="bg-[#08121F] rounded-2xl p-6 text-center">

<h4 className="text-gray-400">

TB Product

</h4>

<p className="text-3xl text-green-400 mt-3">

{(pulseWidth*bandwidth).toFixed(1)}

</p>

</div>

<div className="bg-[#08121F] rounded-2xl p-6 text-center">

<h4 className="text-gray-400">

Echo Delay

</h4>

<p className="text-3xl text-yellow-400 mt-3">

{((targetRange*2)/300).toFixed(2)}

</p>

<p className="text-gray-500 text-sm">

μs (Approx.)

</p>

</div>

</div>

  {/* Matched Filter */}

<div className="mt-14">

<h3 className="text-3xl font-bold text-white mb-8">

Matched Filter Processing

</h3>

<div className="grid lg:grid-cols-2 gap-8">

{/* Input Chirp */}

<div>

<h4 className="text-xl font-bold text-cyan-400 mb-4">

Matched Filter Input

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

Array.from({length:180},(_,i)=>{

const x=i*4.4;

const sweep=(i/180)*(bandwidth*10);

const y=110-

Math.sin(

2*Math.PI*

(i/180)*(2+sweep)

)*65;

return `${x},${y}`;

}).join(" ")

}

/>

<line
x1="0"
y1="110"
x2="800"
y2="110"
stroke="#374151"
/>

</svg>

</div>

</div>

{/* Pulse Compression */}

<div>

<h4 className="text-xl font-bold text-green-400 mb-4">

Matched Filter Output

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

strokeWidth="4"

points={

Array.from({length:180},(_,i)=>{

const x=i*4.4;

const center=90+targetRange/2;

const pulse=Math.exp(

-0.02*Math.pow(i-center,2)

);

const y=110-pulse*90;

return `${x},${y}`;

}).join(" ")

}

/>

<line
x1="0"
y1="110"
x2="800"
y2="110"
stroke="#374151"
/>

</svg>

</div>

</div>

</div>

{/* Compression Results */}

<div className="grid lg:grid-cols-4 gap-6 mt-10">

<div className="bg-[#08121F] rounded-2xl p-6 text-center">

<h4 className="text-gray-400">

Pulse Width

</h4>

<p className="text-3xl text-cyan-400 mt-3">

{pulseWidth} μs

</p>

</div>

<div className="bg-[#08121F] rounded-2xl p-6 text-center">

<h4 className="text-gray-400">

Compressed Width

</h4>

<p className="text-3xl text-green-400 mt-3">

{(pulseWidth/(pulseWidth*bandwidth)).toFixed(2)} μs

</p>

</div>

<div className="bg-[#08121F] rounded-2xl p-6 text-center">

<h4 className="text-gray-400">

Compression Ratio

</h4>

<p className="text-3xl text-yellow-400 mt-3">

{(pulseWidth*bandwidth).toFixed(1)} : 1

</p>

</div>

<div className="bg-[#08121F] rounded-2xl p-6 text-center">

<h4 className="text-gray-400">

Matched Filter Gain

</h4>

<p className="text-3xl text-cyan-400 mt-3">

{(10*Math.log10(pulseWidth*bandwidth)).toFixed(1)} dB

</p>

</div>

</div>

</div>


  {/* Pulse Compression Performance */}

<div className="mt-14">

<h3 className="text-3xl font-bold text-white mb-8">

Pulse Compression Performance

</h3>

<div className="grid lg:grid-cols-2 gap-8">

{/* Range Profile */}

<div>

<h4 className="text-xl font-bold text-cyan-400 mb-4">

Range Profile

</h4>

<div className="bg-[#08121F] rounded-2xl border border-cyan-500/20 p-4">

<svg
width="100%"
height="240"
viewBox="0 0 800 240"
>

<polyline

fill="none"

stroke="#22d3ee"

strokeWidth="3"

points={

Array.from({length:220},(_,i)=>{

const x=i*3.6;

const target=80+targetRange*1.2;

const sidelobe1=0.18*Math.exp(-0.02*Math.pow(i-(target-10),2));

const sidelobe2=0.18*Math.exp(-0.02*Math.pow(i-(target+10),2));

const main=1.0*Math.exp(-0.05*Math.pow(i-target,2));

const y=180-(main+sidelobe1+sidelobe2)*140;

return `${x},${y}`;

}).join(" ")

}

/>

<line
x1="0"
y1="180"
x2="800"
y2="180"
stroke="#475569"
/>

</svg>

</div>

</div>

{/* Detection Statistics */}

<div className="bg-[#08121F] rounded-2xl border border-cyan-500/20 p-8">

<h4 className="text-xl font-bold text-green-400 mb-6">

Compression Performance

</h4>

<div className="space-y-5">

<div className="flex justify-between">

<span className="text-gray-400">

Peak Sidelobe Ratio (PSLR)

</span>

<span className="text-green-400">

-13.2 dB

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Integrated Sidelobe Ratio (ISLR)

</span>

<span className="text-green-400">

-9.6 dB

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Processing Gain

</span>

<span className="text-cyan-400">

{(10*Math.log10(pulseWidth*bandwidth)).toFixed(2)} dB

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Range Resolution

</span>

<span className="text-yellow-400">

{(150/bandwidth).toFixed(1)} m

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Detected Target

</span>

<span className="text-green-400">

{targetRange} km

</span>

</div>

</div>

</div>

</div>

</div>

{/* FPGA Matched Filter */}

<div className="mt-14 bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-3xl font-bold text-white mb-8">

240-Tap FPGA Matched Filter

</h3>

<div className="grid lg:grid-cols-4 gap-6">

<div className="bg-[#101B2D] rounded-2xl p-6 text-center">

<h4 className="text-cyan-400 font-bold">

Input IQ

</h4>

<p className="mt-3 text-gray-300">

32-bit

</p>

</div>

<div className="bg-[#101B2D] rounded-2xl p-6 text-center">

<h4 className="text-green-400 font-bold">

240 FIR Taps

</h4>

<p className="mt-3 text-gray-300">

Q1.15

</p>

</div>

<div className="bg-[#101B2D] rounded-2xl p-6 text-center">

<h4 className="text-blue-400 font-bold">

Accumulator

</h4>

<p className="mt-3 text-gray-300">

64-bit

</p>

</div>

<div className="bg-[#101B2D] rounded-2xl p-6 text-center">

<h4 className="text-purple-400 font-bold">

Output

</h4>

<p className="mt-3 text-gray-300">

32-bit IQ

</p>

</div>

</div>

<div className="mt-10">

<h4 className="text-xl font-bold text-cyan-400 mb-5">

Implementation Highlights

</h4>

<ul className="grid lg:grid-cols-2 gap-4 text-gray-300">

<li>✔ 240-Tap Complex Matched Filter</li>

<li>✔ Fixed-Point Q1.15 Coefficients</li>

<li>✔ DSP48 Multiply-Accumulate</li>

<li>✔ Fully Pipelined Architecture</li>

<li>✔ AXI4-Stream Interface</li>

<li>✔ 250 MHz Timing Closure</li>

<li>✔ MATLAB Coefficient Verification</li>

<li>✔ Optimized for Real-Time Radar Processing</li>

</ul>

</div>

</div>


  {/* Radar Detection Dashboard */}

<div className="mt-16">

<h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">

<FaSatelliteDish className="text-cyan-400"/>

Radar Detection Dashboard

</h3>

<div className="grid lg:grid-cols-2 gap-8">

{/* Detection Plot */}

<div>

<h4 className="text-xl font-bold text-cyan-400 mb-4">

Target Detection

</h4>

<div className="bg-[#08121F] rounded-2xl border border-cyan-500/20 p-4">

<svg
width="100%"
height="260"
viewBox="0 0 800 260"
>

{/* Threshold */}

<line
x1="0"
y1="130"
x2="800"
y2="130"
stroke="#ef4444"
strokeDasharray="8 8"
strokeWidth="2"
/>

<text
x="10"
y="122"
fill="#ef4444"
fontSize="14"
>

CFAR Threshold

</text>

{/* Signal */}

<polyline

fill="none"

stroke="#22d3ee"

strokeWidth="3"

points={

Array.from({length:220},(_,i)=>{

const x=i*3.6;

const t1=Math.exp(-0.04*Math.pow(i-(50+targetRange*0.6),2));

const t2=0.8*Math.exp(-0.04*Math.pow(i-130,2));

const t3=0.6*Math.exp(-0.04*Math.pow(i-185,2));

const y=180-(t1+t2+t3)*120;

return `${x},${y}`;

}).join(" ")

}

/>

/>

</svg>

</div>

</div>

{/* Detection Summary */}

<div className="bg-[#08121F] rounded-2xl border border-cyan-500/20 p-8">

<h4 className="text-xl font-bold text-green-400 mb-6">

Detected Targets

</h4>

<div className="space-y-5">

<div className="flex justify-between">

<span className="text-gray-400">

Target 1

</span>

<span className="text-green-400">

{targetRange} km

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Target 2

</span>

<span className="text-green-400">

42 km

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Target 3

</span>

<span className="text-green-400">

68 km

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Detection Probability

</span>

<span className="text-cyan-400">

99.2%

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

False Alarm Rate

</span>

<span className="text-yellow-400">

10⁻⁶

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Processing Time

</span>

<span className="text-green-400">

1.8 μs

</span>

</div>

</div>

</div>

</div>

</div>

{/* Radar Processing Statistics */}

<div className="mt-12 grid lg:grid-cols-4 gap-6">

<div className="bg-[#08121F] rounded-2xl p-6 text-center">

<h4 className="text-gray-400">

Matched Filter

</h4>

<p className="text-3xl text-cyan-400 mt-3">

240

</p>

<p className="text-sm text-gray-500">

Taps

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

Latency

</h4>

<p className="text-3xl text-yellow-400 mt-3">

240

</p>

<p className="text-sm text-gray-500">

Cycles

</p>

</div>

<div className="bg-[#08121F] rounded-2xl p-6 text-center">

<h4 className="text-gray-400">

Output Rate

</h4>

<p className="text-3xl text-purple-400 mt-3">

50k

</p>

<p className="text-sm text-gray-500">

Pulses/s

</p>

</div>

</div>


  {/* FPGA Radar Processing Architecture */}

<div className="mt-16 bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-3xl font-bold text-white mb-10">

FPGA Radar Processing Architecture

</h3>

<div className="grid grid-cols-2 lg:grid-cols-11 gap-3 items-center">

<div className="bg-cyan-500/10 rounded-xl p-4 text-center">

<h4 className="text-cyan-400 font-bold">

ADC

</h4>

<p className="text-xs text-gray-400 mt-2">

16-bit IQ

</p>

</div>

<div className="text-center text-cyan-400 text-2xl">

→

</div>

<div className="bg-green-500/10 rounded-xl p-4 text-center">

<h4 className="text-green-400 font-bold">

DDC

</h4>

<p className="text-xs text-gray-400 mt-2">

Mixer + LPF

</p>

</div>

<div className="text-center text-cyan-400 text-2xl">

→

</div>

<div className="bg-blue-500/10 rounded-xl p-4 text-center">

<h4 className="text-blue-400 font-bold">

Matched Filter

</h4>

<p className="text-xs text-gray-400 mt-2">

240 Tap FIR

</p>

</div>

<div className="text-center text-cyan-400 text-2xl">

→

</div>

<div className="bg-purple-500/10 rounded-xl p-4 text-center">

<h4 className="text-purple-400 font-bold">

Range FFT

</h4>

<p className="text-xs text-gray-400 mt-2">

1024 Point

</p>

</div>

<div className="text-center text-cyan-400 text-2xl">

→

</div>

<div className="bg-pink-500/10 rounded-xl p-4 text-center">

<h4 className="text-pink-400 font-bold">

CFAR

</h4>

<p className="text-xs text-gray-400 mt-2">

Detection

</p>

</div>

<div className="text-center text-cyan-400 text-2xl">

→

</div>

<div className="bg-yellow-500/10 rounded-xl p-4 text-center">

<h4 className="text-yellow-400 font-bold">

Tracks

</h4>

<p className="text-xs text-gray-400 mt-2">

Output

</p>

</div>

</div>

</div>

{/* FPGA Resource Utilization */}

<div className="mt-12 grid lg:grid-cols-2 gap-8">

<div className="bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-2xl font-bold text-white mb-6">

Estimated FPGA Resources

</h3>

<table className="w-full">

<thead>

<tr className="border-b border-cyan-500/20">

<th className="text-left py-3 text-cyan-400">

Resource

</th>

<th className="text-right py-3 text-cyan-400">

Usage

</th>

</tr>

</thead>

<tbody>

<tr className="border-b border-gray-700/30">

<td className="py-3">

DSP48

</td>

<td className="text-right text-green-400">

240

</td>

</tr>

<tr className="border-b border-gray-700/30">

<td className="py-3">

BRAM

</td>

<td className="text-right text-green-400">

16

</td>

</tr>

<tr className="border-b border-gray-700/30">

<td className="py-3">

LUT

</td>

<td className="text-right text-green-400">

28K

</td>

</tr>

<tr className="border-b border-gray-700/30">

<td className="py-3">

FF

</td>

<td className="text-right text-green-400">

34K

</td>

</tr>

<tr>

<td className="py-3">

Clock

</td>

<td className="text-right text-green-400">

250 MHz

</td>

</tr>

</tbody>

</table>

</div>

<div className="bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-2xl font-bold text-white mb-6">

Implementation Features

</h3>

<ul className="space-y-4 text-gray-300">

<li>✔ Fully Pipelined Processing Chain</li>

<li>✔ AXI4-Stream Data Flow</li>

<li>✔ Fixed-Point Q1.15 Arithmetic</li>

<li>✔ DSP48 Multiply-Accumulate Units</li>

<li>✔ Block RAM Coefficient Storage</li>

<li>✔ Vivado Timing Closure @250 MHz</li>

<li>✔ MATLAB-to-FPGA Verification</li>

<li>✔ Real-Time Radar Signal Processing</li>

</ul>

</div>

</div>

{/* Performance Analysis */}

<div className="mt-16">

<h3 className="text-3xl font-bold text-white mb-8">

Performance Analysis

</h3>

<div className="grid lg:grid-cols-4 gap-6">

<div className="bg-[#08121F] rounded-2xl border border-cyan-500/20 p-6 text-center">

<h4 className="text-gray-400">

Processing Gain

</h4>

<p className="text-4xl text-cyan-400 mt-4">

{(10*Math.log10(pulseWidth*bandwidth)).toFixed(2)}

</p>

<p className="text-gray-500">

dB

</p>

</div>

<div className="bg-[#08121F] rounded-2xl border border-cyan-500/20 p-6 text-center">

<h4 className="text-gray-400">

Range Resolution

</h4>

<p className="text-4xl text-green-400 mt-4">

{(150/bandwidth).toFixed(1)}

</p>

<p className="text-gray-500">

m

</p>

</div>

<div className="bg-[#08121F] rounded-2xl border border-cyan-500/20 p-6 text-center">

<h4 className="text-gray-400">

Compression Ratio

</h4>

<p className="text-4xl text-yellow-400 mt-4">

{(pulseWidth*bandwidth).toFixed(1)}

</p>

<p className="text-gray-500">

:1

</p>

</div>

<div className="bg-[#08121F] rounded-2xl border border-cyan-500/20 p-6 text-center">

<h4 className="text-gray-400">

Echo Delay

</h4>

<p className="text-4xl text-purple-400 mt-4">

{((targetRange*2)/300).toFixed(2)}

</p>

<p className="text-gray-500">

μs

</p>

</div>

</div>

{/* Engineering Notes */}

<div className="mt-10 bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-2xl font-bold text-white mb-6">

Engineering Interpretation

</h3>

<div className="grid lg:grid-cols-2 gap-8">

<div>

<ul className="space-y-4 text-gray-300">

<li>✔ Larger bandwidth improves range resolution.</li>

<li>✔ Longer pulse width increases processing gain.</li>

<li>✔ Higher Time-Bandwidth Product improves compression.</li>

<li>✔ Matched filtering maximizes output SNR.</li>

<li>✔ Lower PSLR reduces false target detections.</li>

</ul>

</div>

<div>

<ul className="space-y-4 text-gray-300">

<li>✔ FPGA pipelines enable real-time processing.</li>

<li>✔ Fixed-point arithmetic minimizes hardware resources.</li>

<li>✔ DSP48 slices accelerate complex MAC operations.</li>

<li>✔ FIR coefficients are generated using MATLAB.</li>

<li>✔ Architecture is suitable for AESA radar receivers.</li>

</ul>

</div>

</div>

</div>

{/* Design Summary */}

<div className="mt-10 bg-gradient-to-r from-cyan-500/10 via-[#08121F] to-blue-500/10 rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-2xl font-bold text-white mb-5">

Radar Design Summary

</h3>

<p className="text-gray-300 leading-8">

This interactive laboratory demonstrates the complete pulse compression process used in modern radar systems. Users can vary pulse width, bandwidth, and target range to observe their impact on chirp generation, matched filtering, compression ratio, processing gain, and range resolution. The FPGA implementation reflects a practical fixed-point architecture using pipelined DSP processing for real-time radar applications.

</p>

</div>

</div>


  {/* Key Takeaways */}

<div className="mt-16 bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-3xl font-bold text-white mb-8">

Key Takeaways

</h3>

<div className="grid lg:grid-cols-2 gap-8">

<div>

<ul className="space-y-5 text-gray-300">

<li>✔ LFM chirps enable high energy transmission while maintaining fine range resolution.</li>

<li>✔ Matched filtering maximizes Signal-to-Noise Ratio (SNR).</li>

<li>✔ Time-Bandwidth Product determines pulse compression performance.</li>

<li>✔ Higher bandwidth produces finer target separation.</li>

<li>✔ FPGA pipelining enables real-time radar signal processing.</li>

<li>✔ Fixed-point arithmetic significantly reduces hardware utilization.</li>

</ul>

</div>

<div>

<ul className="space-y-5 text-gray-300">

<li>✔ Pulse Compression is the first major stage of a modern radar receiver.</li>

<li>✔ The compressed pulse feeds Digital Beamforming.</li>

<li>✔ Beamformed data is processed by FFT.</li>

<li>✔ CFAR identifies valid targets above the noise floor.</li>

<li>✔ The complete chain forms the basis of AESA radar systems.</li>

<li>✔ MATLAB verification is essential before FPGA implementation.</li>

</ul>

</div>

</div>

</div>

{/* Recommended References */}

<div className="mt-12 bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-2xl font-bold text-white mb-6">

Recommended References

</h3>

<div className="grid lg:grid-cols-2 gap-6">

<div className="bg-[#101B2D] rounded-2xl p-5">

<h4 className="text-cyan-400 font-semibold">

📘 Radar Handbook

</h4>

<p className="text-gray-400 mt-2">

Merrill I. Skolnik

</p>

</div>

<div className="bg-[#101B2D] rounded-2xl p-5">

<h4 className="text-cyan-400 font-semibold">

📘 Principles of Modern Radar

</h4>

<p className="text-gray-400 mt-2">

Richards, Scheer & Holm

</p>

</div>

<div className="bg-[#101B2D] rounded-2xl p-5">

<h4 className="text-cyan-400 font-semibold">

📘 Radar Systems Analysis

</h4>

<p className="text-gray-400 mt-2">

Mahafza

</p>

</div>

<div className="bg-[#101B2D] rounded-2xl p-5">

<h4 className="text-cyan-400 font-semibold">

📘 Digital Signal Processing

</h4>

<p className="text-gray-400 mt-2">

Proakis & Manolakis

</p>

</div>

</div>

</div>

{/* Explore More Labs */}

<div className="mt-12 bg-gradient-to-r from-cyan-500/10 via-[#08121F] to-blue-500/10 rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-3xl font-bold text-white mb-8">

Explore More DSP Laboratories

</h3>

<div className="grid lg:grid-cols-4 gap-6">

<div className="bg-[#101B2D] rounded-2xl p-6 text-center hover:border-cyan-400 border border-transparent transition">

<h4 className="text-cyan-400 font-bold">

Digital Down Conversion

</h4>

<p className="text-gray-400 mt-3 text-sm">

NCO • Mixer • FIR • Decimator

</p>

</div>

<div className="bg-[#101B2D] rounded-2xl p-6 text-center hover:border-cyan-400 border border-transparent transition">

<h4 className="text-cyan-400 font-bold">

Complex IQ Visualizer

</h4>

<p className="text-gray-400 mt-3 text-sm">

Constellation • Phasor • Euler

</p>

</div>

<div className="bg-[#101B2D] rounded-2xl p-6 text-center hover:border-cyan-400 border border-transparent transition">

<h4 className="text-cyan-400 font-bold">

Digital Beamforming

</h4>

<p className="text-gray-400 mt-3 text-sm">

Phase Shift • Steering • Arrays

</p>

</div>

<div className="bg-[#101B2D] rounded-2xl p-6 text-center hover:border-cyan-400 border border-transparent transition">

<h4 className="text-cyan-400 font-bold">

FFT Spectrum Analyzer

</h4>

<p className="text-gray-400 mt-3 text-sm">

Frequency Domain Analysis

</p>

</div>

</div>

</div>

</div>

</section>

);

  }
  
  

  
  
