import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaChartBar,
  FaSlidersH,
  FaWaveSquare,
  FaMicrochip,
} from "react-icons/fa";

export default function FFTAnalyzer() {

  const [fftSize, setFFTSize] = useState(1024);
  const [windowType, setWindowType] = useState("Hamming");
  const [sampleRate, setSampleRate] = useState(30);
  const [signalFreq, setSignalFreq] = useState(5);

  return (

<section className="py-24">

<div className="max-w-7xl mx-auto">

<motion.div

initial={{ opacity:0,y:-30 }}

whileInView={{ opacity:1,y:0 }}

transition={{ duration:0.8 }}

viewport={{ once:true }}

className="text-center"

>

<span className="px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300">

Interactive DSP Laboratory

</span>

<h2 className="mt-6 text-5xl lg:text-6xl font-black">

<span className="text-white">

FFT Spectrum

</span>

<span className="text-cyan-400">

 Analyzer

</span>

</h2>

<p className="mt-6 max-w-3xl mx-auto text-gray-400 leading-8">

Analyze frequency-domain characteristics of digital signals
using Fast Fourier Transform (FFT). Explore windowing,
spectral leakage and FPGA FFT implementation.

</p>

</motion.div>

<div className="grid lg:grid-cols-12 gap-8 mt-16">

{/* LEFT PANEL */}

<div className="lg:col-span-4">

<div className="bg-[#101B2D] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-2xl font-bold text-white flex items-center gap-3">

<FaSlidersH className="text-cyan-400"/>

FFT Parameters

</h3>

<div className="space-y-8 mt-8">

  {/* FFT Size */}

<div>

<div className="flex justify-between mb-2">

<span className="text-gray-300">

FFT Size

</span>

<span className="text-cyan-400 font-semibold">

{fftSize}

</span>

</div>

<select

value={fftSize}

onChange={(e)=>setFFTSize(Number(e.target.value))}

className="w-full bg-[#08121F] border border-cyan-500/20 rounded-xl p-3 text-white"

>

<option value={256}>256</option>

<option value={512}>512</option>

<option value={1024}>1024</option>

<option value={2048}>2048</option>

<option value={4096}>4096</option>

</select>

</div>

{/* Window Function */}

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

{/* Signal Frequency */}

<div>

<div className="flex justify-between mb-2">

<span className="text-gray-300">

Signal Frequency

</span>

<span className="text-cyan-400 font-semibold">

{signalFreq} MHz

</span>

</div>

<input

type="range"

min="1"

max="15"

step="0.5"

value={signalFreq}

onChange={(e)=>setSignalFreq(Number(e.target.value))}

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

{/* FFT Summary */}

<div className="mt-10 bg-[#08121F] rounded-2xl border border-cyan-500/20 p-6">

<h4 className="text-xl font-bold text-white mb-5">

FFT Configuration

</h4>

<div className="space-y-3">

<div className="flex justify-between">

<span className="text-gray-400">

FFT Length

</span>

<span className="text-green-400">

{fftSize}

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

Sampling Rate

</span>

<span className="text-green-400">

{sampleRate} MHz

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Signal Frequency

</span>

<span className="text-green-400">

{signalFreq} MHz

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Frequency Resolution

</span>

<span className="text-cyan-400">

{(sampleRate/fftSize).toFixed(4)} MHz

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

<FaChartBar className="text-cyan-400"/>

Spectrum Display

</h3>

{/* FFT Spectrum */}

<div className="mb-10">

<h4 className="text-xl font-bold text-cyan-400 mb-4">

Frequency Spectrum

</h4>

<div className="h-72 rounded-2xl bg-[#08121F] border border-cyan-500/20 p-4">

<svg
width="100%"
height="240"
viewBox="0 0 900 240"
preserveAspectRatio="none"
>

{/* Grid */}

{Array.from({ length: 10 }).map((_, i) => (

<line
key={i}
x1="0"
y1={20 + i * 20}
x2="900"
y2={20 + i * 20}
stroke="#1E3A4C"
strokeWidth="1"
/>

))}

{/* Spectrum Bars */}

{Array.from({ length: 64 }).map((_, i) => {

const x = i * 14;
const peak = Math.abs(i - 16);

const height =
peak < 2
? 170
: peak < 5
? 120
: peak < 10
? 70
: 20;

return (

<rect
key={i}
x={x}
y={200 - height}
width="10"
height={height}
rx="2"
fill="#22d3ee"
/>

);

})}

{/* Peak Marker */}

<line
x1="224"
y1="10"
x2="224"
y2="210"
stroke="#22c55e"
strokeDasharray="6 4"
strokeWidth="2"
/>

<text
x="235"
y="25"
fill="#22c55e"
fontSize="14"
>

Peak

</text>

</svg>

</div>

</div>

{/* Time Domain Signal */}

<div>

<h4 className="text-xl font-bold text-cyan-400 mb-4">

Time Domain Signal

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

0,90
20,60
40,40
60,30
80,40
100,60
120,90
140,120
160,145
180,150
200,140
220,120
240,90
260,60
280,40
300,30
320,40
340,60
360,90
380,120
400,145
420,150
440,140
460,120
480,90
500,60
520,40
540,30
560,40
580,60
600,90
620,120
640,145
660,150
680,140
700,120
720,90
740,60
760,40
780,30
800,40
820,60
840,90
860,120
880,145
900,150

"

/>

</svg>

</div>

</div>


  {/* FPGA FFT Architecture */}

<div className="grid lg:grid-cols-2 gap-8 mt-12">

{/* Architecture */}

<div className="bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-8">

<FaMicrochip className="text-cyan-400"/>

FFT FPGA Architecture

</h3>

<div className="space-y-6">

<div className="flex justify-between">

<span className="text-gray-400">

Algorithm

</span>

<span className="text-green-400">

Radix-2 FFT

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Architecture

</span>

<span className="text-cyan-400">

Pipelined Streaming

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Input Format

</span>

<span className="text-cyan-400">

Complex Q1.15

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Output Format

</span>

<span className="text-green-400">

Magnitude + Phase

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Scaling

</span>

<span className="text-green-400">

Block Floating Point

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

Interface

</span>

<span className="text-cyan-400">

AXI4-Stream

</span>

</div>

</div>

</div>

{/* Resource Estimate */}

<div className="bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-2xl font-bold text-white mb-8">

Estimated FPGA Resources

</h3>

<div className="space-y-6">

<div className="flex justify-between">

<span className="text-gray-400">

DSP48 Slices

</span>

<span className="text-green-400">

32

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

BRAM

</span>

<span className="text-green-400">

8

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

LUTs

</span>

<span className="text-cyan-400">

4,500

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Flip-Flops

</span>

<span className="text-cyan-400">

6,800

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Latency

</span>

<span className="text-green-400">

{Math.log2(fftSize).toFixed(0)} Pipeline Stages

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Throughput

</span>

<span className="text-green-400">

1 Sample / Clock

</span>

</div>

</div>

</div>

</div>

{/* FFT Processing Flow */}

<div className="mt-12 bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-2xl font-bold text-white mb-8">

FFT Processing Pipeline

</h3>

<div className="grid grid-cols-7 gap-4 text-center">

<div className="bg-cyan-500/10 rounded-xl p-4">

<p className="text-cyan-400 font-semibold">

ADC

</p>

</div>

<div className="bg-cyan-500/10 rounded-xl p-4">

<p className="text-cyan-400 font-semibold">

Window

</p>

</div>

<div className="bg-cyan-500/10 rounded-xl p-4">

<p className="text-cyan-400 font-semibold">

Bit Reverse

</p>

</div>

<div className="bg-cyan-500/10 rounded-xl p-4">

<p className="text-cyan-400 font-semibold">

Butterfly

</p>

</div>

<div className="bg-cyan-500/10 rounded-xl p-4">

<p className="text-cyan-400 font-semibold">

Complex FFT

</p>

</div>

<div className="bg-cyan-500/10 rounded-xl p-4">

<p className="text-cyan-400 font-semibold">

Magnitude

</p>

</div>

<div className="bg-cyan-500/10 rounded-xl p-4">

<p className="text-cyan-400 font-semibold">

Display

</p>

</div>

</div>

</div>

{/* Butterfly Network */}

<div className="mt-12 bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-2xl font-bold text-white mb-8">

Radix-2 Butterfly Network

</h3>

<div className="overflow-x-auto">

<svg
width="900"
height="280"
viewBox="0 0 900 280"
>

{/* Stage Labels */}

<text x="40" y="25" fill="#22d3ee">Stage 1</text>
<text x="220" y="25" fill="#22d3ee">Stage 2</text>
<text x="420" y="25" fill="#22d3ee">Stage 3</text>
<text x="640" y="25" fill="#22d3ee">Output</text>

{/* Nodes */}

{[40,80,120,160,200,240,280,320].map((y,i)=>(

<circle
key={i}
cx="60"
cy={y}
r="6"
fill="#22d3ee"
/>

))}

{[60,100,140,180,220,260].map((y,i)=>(

<circle
key={i}
cx="260"
cy={y}
r="6"
fill="#38bdf8"
/>

))}

{[80,140,200,260].map((y,i)=>(

<circle
key={i}
cx="470"
cy={y}
r="6"
fill="#0ea5e9"
/>

))}

{[110,230].map((y,i)=>(

<circle
key={i}
cx="700"
cy={y}
r="8"
fill="#22c55e"
/>

))}

{/* Connection Lines */}

<line x1="60" y1="40" x2="260" y2="60" stroke="#22d3ee"/>
<line x1="60" y1="80" x2="260" y2="100" stroke="#22d3ee"/>
<line x1="60" y1="120" x2="260" y2="140" stroke="#22d3ee"/>
<line x1="60" y1="160" x2="260" y2="180" stroke="#22d3ee"/>
<line x1="60" y1="200" x2="260" y2="220" stroke="#22d3ee"/>
<line x1="60" y1="240" x2="260" y2="260" stroke="#22d3ee"/>

<line x1="260" y1="60" x2="470" y2="80" stroke="#38bdf8"/>
<line x1="260" y1="140" x2="470" y2="140" stroke="#38bdf8"/>
<line x1="260" y1="220" x2="470" y2="200" stroke="#38bdf8"/>
<line x1="260" y1="260" x2="470" y2="260" stroke="#38bdf8"/>

<line x1="470" y1="80" x2="700" y2="110" stroke="#22c55e"/>
<line x1="470" y1="260" x2="700" y2="230" stroke="#22c55e"/>

</svg>

</div>

</div>

{/* Window Comparison */}

<div className="grid lg:grid-cols-3 gap-8 mt-12">

<div className="bg-[#08121F] rounded-3xl border border-cyan-500/20 p-6">

<h3 className="text-xl font-bold text-white mb-4">

Rectangular

</h3>

<p className="text-gray-400">

Highest spectral leakage but narrowest main lobe.

</p>

</div>

<div className="bg-[#08121F] rounded-3xl border border-cyan-500/20 p-6">

<h3 className="text-xl font-bold text-white mb-4">

Hamming

</h3>

<p className="text-gray-400">

Excellent compromise between main lobe width and side lobe suppression.

</p>

</div>

<div className="bg-[#08121F] rounded-3xl border border-cyan-500/20 p-6">

<h3 className="text-xl font-bold text-white mb-4">

Blackman

</h3>

<p className="text-gray-400">

Best side lobe suppression with wider transition bandwidth.

</p>

</div>

</div>

{/* FFT Equations */}

<div className="mt-12 bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-2xl font-bold text-white mb-6">

Discrete Fourier Transform

</h3>

<div className="overflow-x-auto">

<p className="text-center text-3xl text-cyan-400">

X(k)=Σ x(n)e<sup>-j2πkn/N</sup>

</p>

</div>

<p className="text-gray-400 mt-8 leading-8">

The FFT is an optimized implementation of the Discrete Fourier Transform (DFT). It reduces computational complexity from <strong>O(N²)</strong> to <strong>O(N log₂N)</strong>, making real-time spectrum analysis practical for FPGA, SDR, radar, and communication systems.

</p>

</div>


{/* Engineering Applications */}

<div className="mt-12 bg-gradient-to-r from-cyan-500/10 via-[#08121F] to-blue-500/10 rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-2xl font-bold text-white">

Applications

</h3>

<div className="grid md:grid-cols-2 gap-10 mt-8">

<div>

<h4 className="text-cyan-400 font-bold text-xl mb-4">

Radar Signal Processing

</h4>

<ul className="space-y-3 text-gray-300">

<li>✔ Doppler Processing</li>

<li>✔ MTI / MTD Processing</li>

<li>✔ Range-Doppler Map Generation</li>

<li>✔ Micro-Doppler Analysis</li>

<li>✔ Clutter Analysis</li>

<li>✔ Spectrum Monitoring</li>

</ul>

</div>

<div>

<h4 className="text-cyan-400 font-bold text-xl mb-4">

Communication Systems

</h4>

<ul className="space-y-3 text-gray-300">

<li>✔ OFDM Receivers</li>

<li>✔ Spectrum Sensing</li>

<li>✔ SDR Platforms</li>

<li>✔ Signal Identification</li>

<li>✔ Channel Estimation</li>

<li>✔ EMI Analysis</li>

</ul>

</div>

</div>

</div>

{/* FPGA Design Tips */}

<div className="mt-10 bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-2xl font-bold text-white mb-6">

FPGA Implementation Notes

</h3>

<div className="grid md:grid-cols-2 gap-8">

<div>

<ul className="space-y-4 text-gray-300">

<li>✔ Use Xilinx FFT IP for high throughput</li>

<li>✔ AXI4-Stream interface</li>

<li>✔ Pipeline every butterfly stage</li>

<li>✔ Block Floating Point Scaling</li>

<li>✔ Complex Q1.15 arithmetic</li>

</ul>

</div>

<div>

<ul className="space-y-4 text-gray-300">

<li>✔ Twiddle factors stored in BRAM</li>

<li>✔ Minimize overflow using scaling</li>

<li>✔ Validate MATLAB vs RTL</li>

<li>✔ Optimize DSP48 utilization</li>

<li>✔ Register every pipeline stage</li>

</ul>

</div>

</div>

</div>

{/* Interview Questions */}

<div className="mt-10 bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-2xl font-bold text-white mb-6">

Common DSP Interview Topics

</h3>

<div className="grid md:grid-cols-2 gap-6">

<div className="bg-[#101B2D] rounded-xl p-5">
Difference between DFT and FFT
</div>

<div className="bg-[#101B2D] rounded-xl p-5">
Why Windowing is Required?
</div>

<div className="bg-[#101B2D] rounded-xl p-5">
Spectral Leakage
</div>

<div className="bg-[#101B2D] rounded-xl p-5">
Radix-2 vs Radix-4 FFT
</div>

<div className="bg-[#101B2D] rounded-xl p-5">
Bit Reversal Algorithm
</div>

<div className="bg-[#101B2D] rounded-xl p-5">
FFT FPGA Architecture
</div>

</div>

</div>

{/* Footer */}

<div className="mt-12 text-center">

<p className="text-gray-500">

Interactive FFT Spectrum Analyzer • DSP Engineering Laboratory

</p>

</div>

</div>

</div>

</div>

</section>

);

  }

  
  
  
  
