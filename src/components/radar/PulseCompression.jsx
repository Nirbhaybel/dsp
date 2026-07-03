import { useState } from "react";
import {
  FaWaveSquare,
  FaChartLine,
  FaBullseye,
  FaCompressAlt,
} from "react-icons/fa";

export default function PulseCompression() {

  const [bandwidth, setBandwidth] = useState(20);
  const [pulseWidth, setPulseWidth] = useState(40);

  const rangeResolution = (300 / (2 * bandwidth)).toFixed(2);

  const compressionRatio = bandwidth * pulseWidth;

  return (

<section className="mt-10">

<div className="rounded-3xl bg-[#101C2D]/90 border border-cyan-500/20 backdrop-blur-xl p-8">

<div className="flex justify-between items-center flex-wrap gap-4">

<div>

<h2 className="text-3xl font-bold text-white">

Digital Pulse Compression

</h2>

<p className="text-gray-400 mt-2">

LFM Chirp • Matched Filter • Pulse Compression

</p>

</div>

<FaCompressAlt className="text-cyan-400 text-5xl"/>

</div>

{/* Controls */}

<div className="grid lg:grid-cols-2 gap-8 mt-10">

<div>

<p className="text-gray-300">

Bandwidth (MHz)

</p>

<input

type="range"

min="5"

max="80"

value={bandwidth}

onChange={(e)=>setBandwidth(Number(e.target.value))}

className="w-full mt-3 accent-cyan-400"

/>

<p className="text-cyan-400 font-bold mt-2">

{bandwidth} MHz

</p>

</div>

<div>

<p className="text-gray-300">

Pulse Width (µs)

</p>

<input

type="range"

min="5"

max="100"

value={pulseWidth}

onChange={(e)=>setPulseWidth(Number(e.target.value))}

className="w-full mt-3 accent-cyan-400"

/>

<p className="text-cyan-400 font-bold mt-2">

{pulseWidth} µs

</p>

</div>

</div>

{/* Waveforms */}

<div className="grid lg:grid-cols-3 gap-8 mt-12">

<WaveCard
title="Transmit Chirp"
icon={<FaWaveSquare/>}
color="cyan"
/>

<WaveCard
title="Received Echo"
icon={<FaChartLine/>}
color="yellow"
/>

<WaveCard
title="Matched Filter"
icon={<FaBullseye/>}
color="green"
/>

</div>

{/* Results */}

<div className="grid md:grid-cols-4 gap-6 mt-12">

<Metric

title="Bandwidth"

value={`${bandwidth} MHz`}

/>

<Metric

title="Pulse Width"

value={`${pulseWidth} µs`}

/>

<Metric

title="Compression Ratio"

value={`${compressionRatio}`}

/>

<Metric

title="Range Resolution"

value={`${rangeResolution} m`}

/>

</div>

</div>

</section>

);

}

function WaveCard({title,icon,color}){

const colors={

cyan:"text-cyan-400",

yellow:"text-yellow-400",

green:"text-green-400"

};

return(

<div className="rounded-2xl bg-[#162233] border border-cyan-500/20 p-6">

<div className={`text-4xl ${colors[color]}`}>

{icon}

</div>

<h3 className="text-white text-xl font-bold mt-5">

{title}

</h3>

<div className="mt-6 h-24 flex items-center">

<svg width="100%" height="80">

<polyline

fill="none"

stroke="currentColor"

strokeWidth="3"

className={colors[color]}

points="0,40 20,35 40,25 60,15 80,10 100,20 120,35 140,50 160,60 180,45 200,30 220,20"

/>

</svg>

</div>

</div>

);

}

function Metric({title,value}){

return(

<div className="rounded-xl bg-[#162233] p-5">

<p className="text-gray-400">

{title}

</p>

<h3 className="text-cyan-400 text-2xl font-bold mt-2">

{value}

</h3>

</div>

);

}