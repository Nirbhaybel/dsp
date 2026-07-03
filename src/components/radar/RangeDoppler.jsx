import { useEffect, useState } from "react";

export default function RangeDoppler() {

  const rows = 32;
  const cols = 48;

  const [frame, setFrame] = useState([]);

  useEffect(() => {

    const update = () => {

      const data = [];

      for (let r = 0; r < rows; r++) {

        const row = [];

        for (let c = 0; c < cols; c++) {

          let value = Math.random() * 0.15;

          // Target 1
          if (
            Math.abs(r - 8) < 2 &&
            Math.abs(c - 12) < 2
          ) value = 1;

          // Target 2
          if (
            Math.abs(r - 18) < 2 &&
            Math.abs(c - 30) < 2
          ) value = 0.9;

          // Target 3
          if (
            Math.abs(r - 25) < 2 &&
            Math.abs(c - 40) < 2
          ) value = 0.8;

          row.push(value);

        }

        data.push(row);

      }

      setFrame(data);

    };

    update();

    const timer = setInterval(update,700);

    return ()=>clearInterval(timer);

  },[]);

  const color=(v)=>{

    if(v>0.9) return "#ef4444";

    if(v>0.75) return "#f97316";

    if(v>0.55) return "#eab308";

    if(v>0.3) return "#22d3ee";

    return "#0f172a";

  };

  return(

<section className="mt-10">

<div className="rounded-3xl bg-[#101C2D]/90 border border-cyan-500/20 backdrop-blur-xl p-8">

<h2 className="text-3xl font-bold text-white">

Range Doppler Map

</h2>

<p className="text-gray-400 mt-2">

Real-Time Pulse Compression Output

</p>

<div className="overflow-auto mt-10">

<div
className="grid gap-[2px]"
style={{
gridTemplateColumns:`repeat(${cols},14px)`
}}
>

{frame.flat().map((v,index)=>(

<div

key={index}

className="w-[14px] h-[14px] rounded-sm"

style={{
background:color(v)
}}

/>

))}

</div>

</div>

<div className="grid md:grid-cols-4 gap-5 mt-10">

<Card title="FFT Size" value="2048"/>

<Card title="PRF" value="2 kHz"/>

<Card title="Velocity Bins" value="32"/>

<Card title="Range Bins" value="48"/>

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