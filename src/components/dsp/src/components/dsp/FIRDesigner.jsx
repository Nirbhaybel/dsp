import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFilter,
  FaSlidersH,
  FaChartLine,
  FaMicrochip,
} from "react-icons/fa";

export default function FIRDesigner() {

  const [numTaps, setNumTaps] = useState(101);
  const [cutoff, setCutoff] = useState(1.0);
  const [windowType, setWindowType] = useState("Hamming");
  const [sampleRate, setSampleRate] = useState(30);

  return (

<section className="py-24">

<div className="max-w-7xl mx-auto">

<motion.div

initial={{ opacity:0, y:-30 }}

whileInView={{ opacity:1, y:0 }}

viewport={{ once:true }}

transition={{ duration:0.8 }}

className="text-center"

>

<span className="px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300">

Interactive DSP Laboratory

</span>

<h2 className="mt-6 text-5xl lg:text-6xl font-black">

<span className="text-white">

FIR Filter

</span>

<span className="text-cyan-400">

 Designer

</span>

</h2>

<p className="mt-6 max-w-3xl mx-auto text-gray-400 leading-8">

Design and analyze digital FIR filters used in Radar,
Communication and FPGA DSP systems.

Adjust taps, cutoff frequency and window function
to observe filter characteristics.

</p>

</motion.div>

<div className="grid lg:grid-cols-12 gap-8 mt-16">

{/* LEFT PANEL */}

<div className="lg:col-span-4">

<div className="bg-[#101B2D] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-2xl font-bold text-white flex items-center gap-3">

<FaSlidersH className="text-cyan-400"/>

Filter Parameters

</h3>

<div className="space-y-8 mt-8">
  {/* Number of Taps */}

<div>

<div className="flex justify-between mb-2">

<span className="text-gray-300">

Filter Taps

</span>

<span className="text-cyan-400 font-semibold">

{numTaps}

</span>

</div>

<input

type="range"

min="21"

max="201"

step="2"

value={numTaps}

onChange={(e)=>setNumTaps(Number(e.target.value))}

className="w-full accent-cyan-400"

/>

</div>

{/* Cutoff Frequency */}

<div>

<div className="flex justify-between mb-2">

<span className="text-gray-300">

Cutoff Frequency

</span>

<span className="text-cyan-400 font-semibold">

{cutoff.toFixed(1)} MHz

</span>

</div>

<input

type="range"

min="0.5"

max="15"

step="0.5"

value={cutoff}

onChange={(e)=>setCutoff(Number(e.target.value))}

className="w-full accent-cyan-400"

/>

</div>

{/* Sampling Frequency */}

<div>

<div className="flex justify-between mb-2">

<span className="text-gray-300">

Sampling Frequency

</span>

<span className="text-cyan-400 font-semibold">

{sampleRate} MHz

</span>

</div>

<input

type="range"

min="10"

max="250"

step="10"

value={sampleRate}

onChange={(e)=>setSampleRate(Number(e.target.value))}

className="w-full accent-cyan-400"

/>

</div>

{/* Window Selection */}

<div>

<label className="block text-gray-300 mb-3">

Window Function

</label>

<select

value={windowType}

onChange={(e)=>setWindowType(e.target.value)}

className="w-full bg-[#08121F] border border-cyan-500/20 rounded-xl p-3 text-white"

>

<option>Rectangular</option>

<option>Hamming</option>

<option>Hann</option>

<option>Blackman</option>

<option>Kaiser</option>

</select>

</div>

{/* Filter Summary */}

<div className="mt-10 bg-[#08121F] rounded-2xl border border-cyan-500/20 p-6">

<h4 className="text-xl font-bold text-white mb-5">

Current Configuration

</h4>

<div className="space-y-3">

<div className="flex justify-between">

<span className="text-gray-400">

Filter Type

</span>

<span className="text-green-400">

Low Pass FIR

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Number of Taps

</span>

<span className="text-cyan-400">

{numTaps}

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Window

</span>

<span className="text-cyan-400">

{windowType}

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Cutoff

</span>

<span className="text-green-400">

{cutoff.toFixed(1)} MHz

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Sampling Rate

</span>

<span className="text-green-400">

{sampleRate} MHz

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

<FaChartLine className="text-cyan-400"/>

Filter Visualization

</h3>

{/* Impulse Response */}

<div className="mb-10">

<h4 className="text-xl font-bold text-cyan-400 mb-4">

Impulse Response

</h4>

<div className="h-56 rounded-2xl bg-[#08121F] border border-cyan-500/20 p-4">

<svg
width="100%"
height="180"
viewBox="0 0 900 180"
preserveAspectRatio="none"
>

{Array.from({ length: 41 }).map((_, i) => {

const x = 20 + i * 20;
const height =
i === 20
? 90
: Math.max(8, 80 - Math.abs(i - 20) * 4);

return (

<g key={i}>

<line
x1={x}
y1="150"
x2={x}
y2={150 - height}
stroke="#22d3ee"
strokeWidth="4"
/>

<circle
cx={x}
cy={150 - height}
r="3"
fill="#22d3ee"
/>

</g>

);

})}

</svg>

</div>

</div>

{/* Magnitude Response */}

<div className="mb-10">

<h4 className="text-xl font-bold text-cyan-400 mb-4">

Magnitude Response

</h4>

<div className="h-56 rounded-2xl bg-[#08121F] border border-cyan-500/20 p-4">

<svg
width="100%"
height="180"
viewBox="0 0 900 180"
preserveAspectRatio="none"
>

<polyline

fill="none"

stroke="#22d3ee"

strokeWidth="4"

points="

0,40
50,40
100,40
150,40
200,40
250,40
300,42
350,45
400,55
450,75
500,100
550,125
600,145
650,155
700,160
750,162
800,163
850,164
900,165

"

/>

</svg>

</div>

</div>

{/* Phase Response */}

<div>

<h4 className="text-xl font-bold text-cyan-400 mb-4">

Phase Response

</h4>

<div className="h-56 rounded-2xl bg-[#08121F] border border-cyan-500/20 p-4">

<svg
width="100%"
height="180"
viewBox="0 0 900 180"
preserveAspectRatio="none"
>

<polyline

fill="none"

stroke="#38bdf8"

strokeWidth="3"

points="

0,40
100,55
200,70
300,90
400,105
500,120
600,135
700,150
800,165
900,175

"

/>

</svg>

</div>

</div>


  {/* FPGA Implementation Dashboard */}

<div className="grid lg:grid-cols-2 gap-8 mt-12">

{/* FPGA Resource Estimation */}

<div className="bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-8">

<FaMicrochip className="text-cyan-400"/>

FPGA Resource Estimate

</h3>

<div className="space-y-5">

<div className="flex justify-between">

<span className="text-gray-400">

DSP Slices

</span>

<span className="text-green-400 font-semibold">

{Math.ceil(numTaps/2)}

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Coefficient Width

</span>

<span className="text-cyan-400">

Q1.15 (16-bit)

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Data Width

</span>

<span className="text-cyan-400">

16-bit Signed

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Accumulator

</span>

<span className="text-cyan-400">

40-bit

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

<div className="flex justify-between">

<span className="text-gray-400">

Estimated Latency

</span>

<span className="text-green-400">

{numTaps} Cycles

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Clock Frequency

</span>

<span className="text-green-400">

250 MHz

</span>

</div>

</div>

</div>

{/* Filter Implementation */}

<div className="bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-2xl font-bold text-white mb-8">

Implementation Summary

</h3>

<div className="space-y-5">

<div className="flex justify-between">

<span className="text-gray-400">

Architecture

</span>

<span className="text-cyan-400">

Transposed FIR

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Window

</span>

<span className="text-green-400">

{windowType}

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Cutoff

</span>

<span className="text-green-400">

{cutoff.toFixed(2)} MHz

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Sampling Rate

</span>

<span className="text-green-400">

{sampleRate} MHz

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Filter Type

</span>

<span className="text-cyan-400">

Linear Phase FIR

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Symmetry

</span>

<span className="text-green-400">

Yes

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Optimization

</span>

<span className="text-green-400">

Coefficient Folding

</span>

</div>

</div>

</div>

</div>

{/* Engineering Formula */}

<div className="mt-12 bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-2xl font-bold text-white mb-6">

FIR Filter Equation

</h3>

<div className="overflow-x-auto">

<p className="text-3xl text-cyan-400 text-center">

y[n] = Σ h[k] · x[n-k]

</p>

</div>

<p className="text-gray-400 mt-6 leading-8">

Each output sample is obtained by multiplying the delayed
input samples with filter coefficients and accumulating
the results. This architecture is extensively used in
Digital Down Conversion (DDC), pulse compression,
matched filtering, channelization and radar receivers.

</p>

</div>

  {/* Applications & Design Notes */}

<div className="mt-12 bg-gradient-to-r from-cyan-500/10 via-[#08121F] to-blue-500/10 rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-2xl font-bold text-white">

Applications

</h3>

<div className="grid md:grid-cols-2 gap-10 mt-8">

<div>

<h4 className="text-cyan-400 font-bold text-xl mb-4">

Radar Systems

</h4>

<ul className="space-y-3 text-gray-300">

<li>✔ Digital Down Conversion (DDC)</li>

<li>✔ Pulse Compression</li>

<li>✔ Matched Filtering</li>

<li>✔ Clutter Suppression</li>

<li>✔ Range Processing</li>

<li>✔ Doppler Processing</li>

</ul>

</div>

<div>

<h4 className="text-cyan-400 font-bold text-xl mb-4">

Communication Systems

</h4>

<ul className="space-y-3 text-gray-300">

<li>✔ SDR Receivers</li>

<li>✔ Channel Filtering</li>

<li>✔ Decimation</li>

<li>✔ Interpolation</li>

<li>✔ Audio Processing</li>

<li>✔ Satellite Communication</li>

</ul>

</div>

</div>

</div>

{/* Engineering Tips */}

<div className="mt-10 bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-2xl font-bold text-white mb-6">

FPGA Design Considerations

</h3>

<div className="grid md:grid-cols-2 gap-8">

<div>

<ul className="space-y-4 text-gray-300">

<li>✔ Exploit coefficient symmetry</li>

<li>✔ Use DSP48 slices efficiently</li>

<li>✔ Pipeline multiplier stages</li>

<li>✔ Register accumulator outputs</li>

<li>✔ Quantize coefficients carefully</li>

</ul>

</div>

<div>

<ul className="space-y-4 text-gray-300">

<li>✔ Maintain linear phase response</li>

<li>✔ Balance latency vs throughput</li>

<li>✔ Verify fixed-point overflow</li>

<li>✔ Validate MATLAB vs RTL results</li>

<li>✔ Optimize resource utilization</li>

</ul>

</div>

</div>

</div>

{/* Footer */}

<div className="mt-12 text-center">

<p className="text-gray-500">

Interactive FIR Filter Designer • DSP Engineering Laboratory

</p>

</div>

</div>

</div>

</div>

</section>

);

  }
  
  
