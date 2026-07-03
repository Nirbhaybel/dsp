import { useState } from "react";

export default function AESAArray() {

  const [beamAngle, setBeamAngle] = useState(0);
  const [size, setSize] = useState(16);

  const elements = [];

  for (let row = 0; row < size; row++) {

    for (let col = 0; col < size; col++) {

      const phase = Math.sin((col / size) * Math.PI + beamAngle * Math.PI / 180);

      const intensity = (phase + 1) / 2;

      elements.push({

        id: row * size + col,

        intensity

      });

    }

  }

  return (

<section className="mt-10">

<div className="rounded-3xl bg-[#101C2D]/90 border border-cyan-500/20 backdrop-blur-xl p-8">

<div className="flex flex-wrap justify-between items-center">

<div>

<h2 className="text-3xl font-bold text-white">

AESA Antenna Array

</h2>

<p className="text-gray-400 mt-2">

Active Electronically Scanned Array Visualization

</p>

</div>

<div className="text-cyan-400 font-bold">

{size} × {size}

</div>

</div>

{/* Controls */}

<div className="grid lg:grid-cols-2 gap-8 mt-8">

<div>

<p className="text-gray-300">

Beam Steering

</p>

<input

type="range"

min="-60"

max="60"

value={beamAngle}

onChange={(e)=>setBeamAngle(Number(e.target.value))}

className="w-full mt-3 accent-cyan-400"

/>

<div className="text-cyan-400 mt-2">

{beamAngle}°

</div>

</div>

<div>

<p className="text-gray-300">

Array Size

</p>

<select

value={size}

onChange={(e)=>setSize(Number(e.target.value))}

className="w-full mt-3 bg-[#162233] rounded-xl border border-cyan-500/20 p-3"

>

<option value={8}>8 × 8</option>

<option value={16}>16 × 16</option>

<option value={32}>32 × 32</option>

</select>

</div>

</div>

{/* Array */}

<div className="flex justify-center mt-12 overflow-auto">

<div

className="grid gap-1"

style={{

gridTemplateColumns:`repeat(${size},16px)`

}}

>

{elements.map((item)=>(

<div

key={item.id}

style={{

background:`rgba(34,211,238,${item.intensity})`

}}

className="w-4 h-4 rounded-sm transition-all duration-300"

/>

))}

</div>

</div>

{/* Info */}

<div className="grid md:grid-cols-4 gap-5 mt-10">

<Card

title="Elements"

value={`${size*size}`}

/>

<Card

title="Steering"

value={`${beamAngle}°`}

/>

<Card

title="Spacing"

value="0.5 λ"

/>

<Card

title="Architecture"

value="Digital"

/>

</div>

</div>

</section>

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