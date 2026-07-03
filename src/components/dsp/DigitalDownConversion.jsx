import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMicrochip,
  FaWaveSquare,
  FaFilter,
  FaProjectDiagram,
  FaArrowDown,
} from "react-icons/fa";

export default function DigitalDownConversion() {

  const [adcFs, setAdcFs] = useState(120);
  const [ifFreq, setIfFreq] = useState(30);
  const [ncoFreq, setNcoFreq] = useState(30);
  const [bandwidth, setBandwidth] = useState(1);
  const [decimation, setDecimation] = useState(4);

  const basebandFreq = Math.abs(ifFreq - ncoFreq);
  const outputFs = (adcFs / decimation).toFixed(2);

  return (

<section className="py-24">



<motion.div

initial={{opacity:0,y:-30}}

whileInView={{opacity:1,y:0}}

viewport={{once:true}}

transition={{duration:0.8}}

className="text-center"

>

<span className="px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300">

Interactive DSP Laboratory

</span>

<h2 className="mt-6 text-5xl lg:text-6xl font-black">

<span className="text-white">

Digital Down

</span>

<span className="text-cyan-400">

 Conversion

</span>

</h2>

<p className="mt-6 max-w-3xl mx-auto text-gray-400 leading-8">

Digital Down Conversion converts an IF signal into
complex baseband using an NCO, Complex Mixer,
Low Pass Filter and Decimator.

Move the controls and observe how every stage of the
signal chain changes in real time.

</p>

</motion.div>



{/* LEFT PANEL */}

<div className="lg:col-span-4">

<div className="bg-[#101B2D] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-2xl font-bold text-white">

System Parameters

</h3>

<div className="space-y-8 mt-8">


{/* ADC Sampling Frequency */}

<div>

<div className="flex justify-between mb-2">

<span className="text-gray-300">

ADC Sampling Frequency

</span>

<span className="text-cyan-400 font-semibold">

{adcFs} MHz

</span>

</div>

<input

type="range"

min="80"

max="500"

step="10"

value={adcFs}

onChange={(e)=>setAdcFs(Number(e.target.value))}

className="w-full accent-cyan-400"

/>

</div>

{/* IF Frequency */}

<div>

<div className="flex justify-between mb-2">

<span className="text-gray-300">

Input IF Frequency

</span>

<span className="text-cyan-400 font-semibold">

{ifFreq} MHz

</span>

</div>

<input

type="range"

min="5"

max="60"

step="1"

value={ifFreq}

onChange={(e)=>setIfFreq(Number(e.target.value))}

className="w-full accent-cyan-400"

/>

</div>

{/* NCO */}

<div>

<div className="flex justify-between mb-2">

<span className="text-gray-300">

NCO Frequency

</span>

<span className="text-cyan-400 font-semibold">

{ncoFreq} MHz

</span>

</div>

<input

type="range"

min="0"

max="60"

step="1"

value={ncoFreq}

onChange={(e)=>setNcoFreq(Number(e.target.value))}

className="w-full accent-cyan-400"

/>

</div>

{/* LPF */}

<div>

<div className="flex justify-between mb-2">

<span className="text-gray-300">

LPF Bandwidth

</span>

<span className="text-cyan-400 font-semibold">

{bandwidth} MHz

</span>

</div>

<input

type="range"

min="0.5"

max="20"

step="0.5"

value={bandwidth}

onChange={(e)=>setBandwidth(Number(e.target.value))}

className="w-full accent-cyan-400"

/>

</div>

{/* Decimation */}

<div>

<div className="flex justify-between mb-2">

<span className="text-gray-300">

Decimation

</span>

<span className="text-cyan-400 font-semibold">

×{decimation}

</span>

</div>

<input

type="range"

min="2"

max="16"

step="2"

value={decimation}

onChange={(e)=>setDecimation(Number(e.target.value))}

className="w-full accent-cyan-400"

/>

</div>

{/* Live Configuration */}

<div className="mt-10 rounded-2xl bg-[#08121F] border border-cyan-500/20 p-6">

<h4 className="text-white font-bold text-xl mb-5">

Live Configuration

</h4>

<div className="space-y-3">

<div className="flex justify-between">

<span className="text-gray-400">

ADC Fs

</span>

<span className="text-cyan-400">

{adcFs} MHz

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

IF

</span>

<span className="text-cyan-400">

{ifFreq} MHz

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

NCO

</span>

<span className="text-cyan-400">

{ncoFreq} MHz

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Baseband

</span>

<span className="text-green-400">

{basebandFreq.toFixed(2)} MHz

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Output Fs

</span>

<span className="text-green-400">

{outputFs} MHz

</span>

</div>

</div>

</div>

</div>

</div>

{/* RIGHT PANEL */}

<div className="lg:col-span-8">

<div className="bg-[#101B2D] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-3xl font-bold text-white mb-10">

Signal Processing Chain

</h3>

<div className="space-y-8">

{/* ADC */}

<motion.div

animate={{ x: [0, 6, 0] }}

transition={{ duration: 2, repeat: Infinity }}

className="flex items-center"

>

<div className="w-44 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 p-5">

<div className="flex items-center gap-3">

<FaMicrochip className="text-cyan-400 text-2xl"/>

<h4 className="text-white font-bold">

ADC

</h4>

</div>

<p className="text-gray-400 mt-3">

Sampling : {adcFs} MHz

</p>

</div>

<div className="flex-1 flex items-center px-6">

<motion.div

animate={{ x:[0,260,0] }}

transition={{ duration:2, repeat:Infinity }}

className="w-4 h-4 rounded-full bg-cyan-400"

/>

<div className="flex-1 h-1 bg-cyan-500/20 -ml-4"/>

</div>

</motion.div>

{/* NCO */}

<motion.div

animate={{ x: [0, 6, 0] }}

transition={{ duration:2, delay:0.3, repeat:Infinity }}

className="flex items-center"

>

<div className="w-44 rounded-2xl bg-purple-500/10 border border-purple-500/30 p-5">

<div className="flex items-center gap-3">

<FaWaveSquare className="text-purple-400 text-2xl"/>

<h4 className="text-white font-bold">

NCO

</h4>

</div>

<p className="text-gray-400 mt-3">

Frequency : {ncoFreq} MHz

</p>

</div>

<div className="flex-1 flex items-center px-6">

<motion.div

animate={{ x:[0,260,0] }}

transition={{ duration:2, delay:0.3, repeat:Infinity }}

className="w-4 h-4 rounded-full bg-purple-400"

/>

<div className="flex-1 h-1 bg-purple-500/20 -ml-4"/>

</div>

</motion.div>

{/* MIXER */}

<motion.div

animate={{ x:[0,6,0] }}

transition={{ duration:2, delay:0.6, repeat:Infinity }}

className="flex items-center"

>

<div className="w-44 rounded-2xl bg-green-500/10 border border-green-500/30 p-5">

<div className="flex items-center gap-3">

<FaProjectDiagram className="text-green-400 text-2xl"/>

<h4 className="text-white font-bold">

Mixer

</h4>

</div>

<p className="text-gray-400 mt-3">

IF → Baseband

</p>

</div>

<div className="flex-1 flex items-center px-6">

<motion.div

animate={{ x:[0,260,0] }}

transition={{ duration:2, delay:0.6, repeat:Infinity }}

className="w-4 h-4 rounded-full bg-green-400"

/>

<div className="flex-1 h-1 bg-green-500/20 -ml-4"/>

</div>

</motion.div>

{/* FIR */}

<motion.div

animate={{ x:[0,6,0] }}

transition={{ duration:2, delay:0.9, repeat:Infinity }}

className="flex items-center"

>

<div className="w-44 rounded-2xl bg-orange-500/10 border border-orange-500/30 p-5">

<div className="flex items-center gap-3">

<FaFilter className="text-orange-400 text-2xl"/>

<h4 className="text-white font-bold">

101-Tap FIR

</h4>

</div>

<p className="text-gray-400 mt-3">

Bandwidth : {bandwidth} MHz

</p>

</div>

<div className="flex-1 flex items-center px-6">

<motion.div

animate={{ x:[0,260,0] }}

transition={{ duration:2, delay:0.9, repeat:Infinity }}

className="w-4 h-4 rounded-full bg-orange-400"

/>

<div className="flex-1 h-1 bg-orange-500/20 -ml-4"/>

</div>

</motion.div>

{/* DECIMATOR */}

<motion.div

animate={{ x:[0,6,0] }}

transition={{ duration:2, delay:1.2, repeat:Infinity }}

className="flex items-center"

>

<div className="w-44 rounded-2xl bg-pink-500/10 border border-pink-500/30 p-5">

<div className="flex items-center gap-3">

<FaArrowDown className="text-pink-400 text-2xl"/>

<h4 className="text-white font-bold">

Decimator

</h4>

</div>

<p className="text-gray-400 mt-3">

× {decimation}

</p>

</div>

<div className="flex-1 flex items-center px-6">

<motion.div

animate={{ x:[0,260,0] }}

transition={{ duration:2, delay:1.2, repeat:Infinity }}

className="w-4 h-4 rounded-full bg-pink-400"

/>

<div className="flex-1 h-1 bg-pink-500/20 -ml-4"/>

</div>

</motion.div>

{/* OUTPUT */}

<div className="rounded-3xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 p-8">

<h3 className="text-2xl font-bold text-white">

Complex Baseband Output

</h3>

<p className="mt-4 text-cyan-300">

I + jQ

</p>

<p className="text-gray-400 mt-3">

Frequency = {basebandFreq.toFixed(2)} MHz

</p>

<p className="text-gray-400">

Output Sampling Rate = {outputFs} MHz

</p>

</div>

</div>

{/* Engineering Dashboard */}

<div className="grid lg:grid-cols-2 gap-8 mt-12">

{/* Live Engineering Parameters */}

<div className="bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-2xl font-bold text-white mb-8">

Live DSP Parameters

</h3>

<div className="space-y-5">

<div className="flex justify-between">

<span className="text-gray-400">ADC Sampling Rate</span>

<span className="text-cyan-400 font-semibold">

{adcFs} MHz

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">Input IF</span>

<span className="text-cyan-400 font-semibold">

{ifFreq} MHz

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">NCO Frequency</span>

<span className="text-cyan-400 font-semibold">

{ncoFreq} MHz

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">Baseband Frequency</span>

<span className="text-green-400 font-semibold">

{basebandFreq.toFixed(2)} MHz

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">LPF Bandwidth</span>

<span className="text-cyan-400 font-semibold">

{bandwidth} MHz

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">Decimation</span>

<span className="text-cyan-400 font-semibold">

×{decimation}

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">Output Sampling Rate</span>

<span className="text-green-400 font-semibold">

{outputFs} MHz

</span>

</div>

</div>

</div>

{/* FPGA Status */}

<div className="bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-2xl font-bold text-white mb-8">

FPGA Processing Status

</h3>

<div className="space-y-5">

<div className="flex justify-between">

<span className="text-gray-400">

Complex Mixer

</span>

<span className="text-green-400">

Running

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

FIR Filter

</span>

<span className="text-green-400">

101 Taps

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Arithmetic

</span>

<span className="text-green-400">

Q1.15 Fixed Point

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

Latency

</span>

<span className="text-cyan-400">

~101 Cycles

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

Target

</span>

<span className="text-cyan-400">

AMD RFSoC / FPGA

</span>

</div>

</div>

</div>

</div>

{/* Waveform Preview */}

<div className="mt-12 bg-[#08121F] rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-2xl font-bold text-white mb-8">

Signal Preview

</h3>

<div className="h-56 rounded-2xl bg-[#050B16] border border-cyan-500/10 flex items-center justify-center">

<svg
width="100%"
height="180"
viewBox="0 0 900 180"
preserveAspectRatio="none"
>

<polyline

fill="none"

stroke="#22d3ee"

strokeWidth="3"

points="
0,90
20,60
40,35
60,20
80,35
100,60
120,90
140,120
160,145
180,160
200,145
220,120
240,90
260,60
280,35
300,20
320,35
340,60
360,90
380,120
400,145
420,160
440,145
460,120
480,90
500,60
520,35
540,20
560,35
580,60
600,90
620,120
640,145
660,160
680,145
700,120
720,90
740,60
760,35
780,20
800,35
820,60
840,90
860,120
880,145
900,160"

/>

</svg>

</div>

<p className="text-center text-gray-400 mt-6">

Representative IF waveform (interactive waveform coming in the next version)

</p>

</div>

{/* Engineering Notes */}

<div className="mt-12 bg-gradient-to-r from-cyan-500/10 via-[#08121F] to-blue-500/10 rounded-3xl border border-cyan-500/20 p-8">

<h3 className="text-2xl font-bold text-white">

Engineering Notes

</h3>

<p className="mt-6 text-gray-300 leading-8">

Digital Down Conversion (DDC) is a key building block in modern
Radar, Electronic Warfare and Software Defined Radio systems.
The received Intermediate Frequency (IF) signal is translated to
complex baseband by multiplying it with locally generated sine
and cosine signals from a Numerically Controlled Oscillator (NCO).
The unwanted mixing products are removed using a Low Pass FIR
filter before reducing the sampling rate through decimation.

</p>

<div className="grid md:grid-cols-2 gap-10 mt-10">

<div>

<h4 className="text-cyan-400 font-bold text-xl mb-5">

Key Learning Points

</h4>

<ul className="space-y-3 text-gray-300">

<li>✔ Numerically Controlled Oscillator (NCO)</li>

<li>✔ Complex I/Q Mixing</li>

<li>✔ FIR Low Pass Filtering</li>

<li>✔ Multi-rate Signal Processing</li>

<li>✔ Decimation</li>

<li>✔ Fixed-Point FPGA Design</li>

<li>✔ RTL Hardware Implementation</li>

</ul>

</div>

<div>

<h4 className="text-cyan-400 font-bold text-xl mb-5">

Applications

</h4>

<ul className="space-y-3 text-gray-300">

<li>✔ AESA Radar Receiver</li>

<li>✔ Digital Communication Receiver</li>

<li>✔ Software Defined Radio (SDR)</li>

<li>✔ Satellite Communication</li>

<li>✔ Electronic Warfare Receiver</li>

<li>✔ RFSoC Based DSP Systems</li>

<li>✔ FPGA Signal Processing</li>

</ul>

</div>

</div>

</div>

</div>

</div>
</div>


</section>

);

}