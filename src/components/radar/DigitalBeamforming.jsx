import { useState } from "react";
import {
  FaSatelliteDish,
  FaProjectDiagram,
  FaSlidersH,
  FaLayerGroup,
} from "react-icons/fa";

export default function DigitalBeamforming() {

  const [azimuth, setAzimuth] = useState(0);
  const [elevation, setElevation] = useState(0);
  const [channels, setChannels] = useState(16);

  return (

<section className="mt-10">

<div className="rounded-3xl bg-[#101C2D]/90 border border-cyan-500/20 backdrop-blur-xl p-8">

<div className="flex justify-between items-center flex-wrap gap-4">

<div>

<h2 className="text-3xl font-bold text-white">

Digital Beamforming Engine

</h2>

<p className="text-gray-400 mt-2">

Phase Steering • Complex Weighting • Beam Summation

</p>

</div>

<FaSatelliteDish className="text-cyan-400 text-5xl"/>

</div>

{/* Block Diagram */}

<div className="grid lg:grid-cols-5 gap-4 mt-10">

<Block
icon={<FaLayerGroup/>}
title="16 IQ Inputs"
/>

<Block
icon={<FaProjectDiagram/>}
title="Phase Calculator"
/>

<Block
icon={<FaSlidersH/>}
title="NCO"
/>

<Block
icon={<FaProjectDiagram/>}
title="Complex Multiply"
/>

<Block
icon={<FaSatelliteDish/>}
title="Beam Sum"
/>

</div>

{/* Controls */}

<div className="grid lg:grid-cols-3 gap-8 mt-12">

<div>

<p className="text-gray-300">

Azimuth

</p>

<input

type="range"

min="-60"

max="60"

value={azimuth}

onChange={(e)=>setAzimuth(Number(e.target.value))}

className="w-full mt-3 accent-cyan-400"

/>

<div className="text-cyan-400 mt-2">

{azimuth}°

</div>

</div>

<div>

<p className="text-gray-300">

Elevation

</p>

<input

type="range"

min="-60"

max="60"

value={elevation}

onChange={(e)=>setElevation(Number(e.target.value))}

className="w-full mt-3 accent-cyan-400"

/>

<div className="text-cyan-400 mt-2">

{elevation}°

</div>

</div>

<div>

<p className="text-gray-300">

Channels

</p>

<select

value={channels}

onChange={(e)=>setChannels(Number(e.target.value))}

className="w-full mt-3 rounded-xl bg-[#162233] border border-cyan-500/20 p-3 text-white"

>

<option>8</option>
<option>16</option>
<option>32</option>
<option>64</option>

</select>

</div>

</div>

{/* Metrics */}

<div className="grid md:grid-cols-4 gap-5 mt-12">

<Card title="Channels" value={channels}/>

<Card title="Azimuth" value={`${azimuth}°`}/>

<Card title="Elevation" value={`${elevation}°`}/>

<Card title="Update Rate" value="400 Hz"/>

</div>

{/* Formula */}

<div className="mt-12 rounded-2xl bg-[#162233] p-6 border border-cyan-500/20">

<h3 className="text-cyan-400 text-xl font-bold">

Beamforming Equation

</h3>

<p className="text-gray-300 mt-4 font-mono">

Phase = PA × dx + PB × dy

</p>

<p className="text-gray-500 mt-3">

Each antenna element receives an independent phase offset,
which drives a 32-bit NCO for complex weighting before
summation.

</p>

</div>

</div>

</section>

);

}

function Block({icon,title}){

return(

<div className="rounded-xl bg-[#162233] border border-cyan-500/20 p-6 text-center">

<div className="text-cyan-400 text-4xl flex justify-center">

{icon}

</div>

<h3 className="text-white font-bold mt-4">

{title}

</h3>

</div>

);

}

function Card({title,value}){

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