import { useEffect, useState } from "react";
import {
  FaPlane,
  FaRocket,
  FaHelicopter,
  FaSatellite,
} from "react-icons/fa";

export default function TargetTracker() {

  const [targets, setTargets] = useState([
    {
      id: 1,
      icon: <FaPlane />,
      name: "SU-30 MKI",
      x: 18,
      y: 20,
      speed: 920,
      heading: 45,
      track: "T001",
      threat: "HIGH",
      color: "text-red-400",
    },
    {
      id: 2,
      icon: <FaRocket />,
      name: "Cruise Missile",
      x: 55,
      y: 60,
      speed: 760,
      heading: 310,
      track: "T002",
      threat: "CRITICAL",
      color: "text-red-500",
    },
    {
      id: 3,
      icon: <FaHelicopter />,
      name: "AH-64",
      x: 78,
      y: 28,
      speed: 260,
      heading: 120,
      track: "T003",
      threat: "MEDIUM",
      color: "text-yellow-400",
    },
    {
      id: 4,
      icon: <FaSatellite />,
      name: "UAV",
      x: 35,
      y: 82,
      speed: 140,
      heading: 200,
      track: "T004",
      threat: "LOW",
      color: "text-green-400",
    },
  ]);

  useEffect(() => {

    const timer = setInterval(() => {

      setTargets(prev =>
        prev.map(t => ({
          ...t,
          x: (t.x + Math.cos(t.heading * Math.PI / 180) * 0.4 + 100) % 100,
          y: (t.y - Math.sin(t.heading * Math.PI / 180) * 0.4 + 100) % 100,
        }))
      );

    },100);

    return ()=>clearInterval(timer);

  },[]);

  return (

<section className="mt-10">

<div className="rounded-3xl bg-[#101C2D]/90 border border-cyan-500/20 backdrop-blur-xl p-8">

<h2 className="text-3xl font-bold text-white">

Multi Target Tracker

</h2>

<p className="text-gray-400 mt-2">

Track While Scan (TWS)

</p>

<div className="grid lg:grid-cols-2 gap-10 mt-10">

{/* Radar */}

<div className="relative aspect-square rounded-full border border-cyan-500/20 overflow-hidden bg-[#07111F]">

<div className="absolute inset-8 rounded-full border border-cyan-500/20"/>

<div className="absolute inset-20 rounded-full border border-cyan-500/20"/>

<div className="absolute inset-32 rounded-full border border-cyan-500/20"/>

<div className="absolute left-1/2 top-0 bottom-0 w-px bg-cyan-500/20"/>

<div className="absolute top-1/2 left-0 right-0 h-px bg-cyan-500/20"/>

<div className="absolute left-1/2 top-1/2 w-4 h-4 bg-cyan-400 rounded-full -translate-x-1/2 -translate-y-1/2"/>

{targets.map(t=>(

<div

key={t.id}

className="absolute transition-all duration-100"

style={{
left:`${t.x}%`,
top:`${t.y}%`
}}

>

<div className={`${t.color} text-xl`}>

{t.icon}

</div>

<div className="text-[10px] text-cyan-300">

{t.track}

</div>

</div>

))}

</div>

{/* Track Table */}

<div className="space-y-4">

{targets.map(t=>(

<div

key={t.id}

className="rounded-xl bg-[#162233] p-5 border border-cyan-500/20"

>

<div className="flex justify-between">

<div>

<h3 className="text-white font-bold">

{t.track}

</h3>

<p className="text-gray-400">

{t.name}

</p>

</div>

<div className={t.color}>

{t.icon}

</div>

</div>

<div className="grid grid-cols-3 gap-4 mt-5">

<Item title="Speed" value={`${t.speed} km/h`} />

<Item title="Heading" value={`${t.heading}°`} />

<Item title="Threat" value={t.threat} />

</div>

</div>

))}

</div>

</div>

</div>

</section>

);

}

function Item({title,value}){

return(

<div>

<p className="text-gray-500 text-sm">

{title}

</p>

<h3 className="text-cyan-400 font-bold">

{value}

</h3>

</div>

);

}