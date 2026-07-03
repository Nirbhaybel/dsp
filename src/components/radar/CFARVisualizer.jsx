import { useState } from "react";

export default function CFARVisualizer() {

  const [threshold, setThreshold] = useState(0.65);

  const samples = Array.from({ length: 41 }, (_, i) => {

    let value = Math.random() * 0.35;

    if (i === 20) value = 1.0;
    if (i === 30) value = 0.82;
    if (i === 12) value = 0.72;

    return value;
  });

  return (

<section className="mt-10">

<div className="rounded-3xl bg-[#101C2D]/90 border border-cyan-500/20 backdrop-blur-xl p-8">

<h2 className="text-3xl font-bold text-white">

CA-CFAR Detection

</h2>

<p className="text-gray-400 mt-2">

Interactive Constant False Alarm Rate Demonstration

</p>

{/* Threshold */}

<div className="mt-8">

<div className="flex justify-between">

<span className="text-gray-300">

Detection Threshold

</span>

<span className="text-cyan-400 font-bold">

{threshold.toFixed(2)}

</span>

</div>

<input

type="range"

min="0.2"

max="1"

step="0.01"

value={threshold}

onChange={(e)=>setThreshold(Number(e.target.value))}

className="w-full mt-3 accent-cyan-400"

/>

</div>

{/* Samples */}

<div className="mt-10">

<div className="flex items-end gap-2 h-64">

{samples.map((value,index)=>{

const detected=value>=threshold;

const training=index<15||index>25;

const guard=(index>=17&&index<=19)||(index>=21&&index<=23);

const cut=index===20;

return(

<div
key={index}
className="flex flex-col items-center flex-1"
>

<div

style={{
height:`${value*220}px`
}}

className={`
w-full rounded-t transition-all duration-300

${cut
?"bg-red-500"
:guard
?"bg-yellow-400"
:training
?"bg-cyan-500"
:"bg-slate-500"}

`}

/>

{detected&&(

<div className="mt-2 text-green-400 text-xs">

✔

</div>

)}

</div>

);

})}

</div>

</div>

{/* Legend */}

<div className="grid md:grid-cols-4 gap-4 mt-10">

<Legend
color="bg-cyan-500"
text="Training Cells"
/>

<Legend
color="bg-yellow-400"
text="Guard Cells"
/>

<Legend
color="bg-red-500"
text="CUT"
/>

<Legend
color="bg-green-500"
text="Detection"
/>

</div>

{/* Stats */}

<div className="grid md:grid-cols-4 gap-5 mt-10">

<Card title="Training Cells" value="28"/>

<Card title="Guard Cells" value="4"/>

<Card title="CUT" value="1"/>

<Card title="Threshold" value={threshold.toFixed(2)}/>

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

function Legend({color,text}){

return(

<div className="flex items-center gap-3">

<div className={`w-5 h-5 rounded ${color}`}/>

<p className="text-gray-300">

{text}

</p>

</div>

);

}