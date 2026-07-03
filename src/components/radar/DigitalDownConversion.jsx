import { useState } from "react";
import {
  FaMicrochip,
  FaWaveSquare,
  FaRandom,
  FaFilter,
  FaCompressArrowsAlt,
  FaArrowRight,
} from "react-icons/fa";

const blocks = [
  {
    icon: <FaMicrochip />,
    title: "ADC",
    subtitle: "14-bit @ 3 GSPS",
    color: "cyan",
  },
  {
    icon: <FaWaveSquare />,
    title: "NCO",
    subtitle: "32-bit Phase",
    color: "green",
  },
  {
    icon: <FaRandom />,
    title: "Complex Mixer",
    subtitle: "I+jQ",
    color: "yellow",
  },
  {
    icon: <FaFilter />,
    title: "FIR LPF",
    subtitle: "101 Taps",
    color: "pink",
  },
  {
    icon: <FaCompressArrowsAlt />,
    title: "Decimator",
    subtitle: "×4",
    color: "orange",
  },
];

export default function DigitalDownConversion() {

  const [frequency, setFrequency] = useState(30);
  const [decimation, setDecimation] = useState(4);

  return (

<section className="mt-10">

<div className="rounded-3xl bg-[#101C2D]/90 border border-cyan-500/20 backdrop-blur-xl p-8">

<h2 className="text-3xl font-bold text-white">

Digital Down Conversion (DDC)

</h2>

<p className="text-gray-400 mt-2">

ADC → NCO → Mixer → FIR → Decimation → Baseband

</p>

<div className="flex flex-wrap items-center justify-center gap-4 mt-10">

{blocks.map((block,index)=>(

<div
key={index}
className="flex items-center"
>

<div className="bg-[#162233] border border-cyan-500/20 rounded-2xl p-5 w-48">

<div className="text-cyan-400 text-4xl">

{block.icon}

</div>

<h3 className="text-white text-lg font-bold mt-4">

{block.title}

</h3>

<p className="text-gray-400 text-sm mt-1">

{block.subtitle}

</p>

</div>

{index!==blocks.length-1&&(

<FaArrowRight className="text-cyan-400 text-2xl mx-4"/>

)}

</div>

))}

</div>

{/* Controls */}

<div className="grid lg:grid-cols-2 gap-8 mt-12">

<div>

<p className="text-gray-300">

IF Frequency

</p>

<input

type="range"

min="5"

max="200"

value={frequency}

onChange={(e)=>setFrequency(Number(e.target.value))}

className="w-full mt-3 accent-cyan-400"

/>

<div className="text-cyan-400 font-bold mt-2">

{frequency} MHz

</div>

</div>

<div>

<p className="text-gray-300">

Decimation

</p>

<select

value={decimation}

onChange={(e)=>setDecimation(Number(e.target.value))}

className="w-full mt-3 bg-[#162233] border border-cyan-500/20 rounded-xl p-3 text-white"

>

<option>2</option>

<option>4</option>

<option>8</option>

<option>16</option>

</select>

</div>

</div>

{/* Fixed Point */}

<div className="grid md:grid-cols-5 gap-5 mt-12">

<Card title="ADC" value="Q15.0"/>

<Card title="Mixer" value="24-bit"/>

<Card title="LPF" value="40-bit"/>

<Card title="Output" value="16-bit"/>

<Card title="IQ" value="Complex"/>

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

<h3 className="text-cyan-400 text-xl font-bold mt-2">

{value}

</h3>

</div>

);

}