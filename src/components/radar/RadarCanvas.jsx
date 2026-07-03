import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function RadarCanvas() {

  const [rotation, setRotation] = useState(0);

  useEffect(() => {

    const timer = setInterval(() => {

      setRotation((prev) => (prev + 2) % 360);

    }, 25);

    return () => clearInterval(timer);

  }, []);

  const targets = [

    { x: 68, y: 42, type: "Aircraft" },
    { x: 30, y: 70, type: "Drone" },
    { x: 78, y: 78, type: "Missile" },

  ];

  return (

    <div className="rounded-3xl overflow-hidden border border-cyan-500/20 bg-[#09111E]">

      {/* Header */}

      <div className="flex justify-between items-center px-6 py-5 border-b border-cyan-500/20">

        <div>

          <h2 className="text-white text-2xl font-bold">

            Live Radar Display

          </h2>

          <p className="text-gray-400 mt-1">

            AESA Surveillance Mode

          </p>

        </div>

        <div className="flex gap-3">

          <div className="px-4 py-2 rounded-full bg-green-500/20 text-green-400">

            ● ONLINE

          </div>

          <div className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300">

            SEARCH

          </div>

        </div>

      </div>

      {/* Radar Area */}

      <div className="relative aspect-square bg-[#07111F] overflow-hidden">

        {/* Grid */}

        <div className="absolute inset-0 flex items-center justify-center">

          <div className="w-[90%] h-[90%] rounded-full border border-cyan-500/30"/>

          <div className="absolute w-[70%] h-[70%] rounded-full border border-cyan-500/20"/>

          <div className="absolute w-[50%] h-[50%] rounded-full border border-cyan-500/20"/>

          <div className="absolute w-[30%] h-[30%] rounded-full border border-cyan-500/20"/>

        </div>

        {/* Cross */}

        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-cyan-500/20 -translate-x-1/2"/>

        <div className="absolute top-1/2 left-0 right-0 h-px bg-cyan-500/20 -translate-y-1/2"/>

        {/* Sweep */}

        <motion.div

          animate={{

            rotate: rotation

          }}

          transition={{

            duration:0

          }}

          className="absolute left-1/2 top-1/2 origin-left"

          style={{

            width:"45%",

            height:"2px",

            background:"linear-gradient(90deg,#22d3ee,transparent)"

          }}

        />

        {/* Radar Center */}

        <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-cyan-400 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_25px_#22d3ee]"/>

        {/* Targets */}

        {targets.map((target,index)=>(

          <div

            key={index}

            className="absolute"

            style={{

              left:`${target.x}%`,

              top:`${target.y}%`

            }}

          >

            <div className="w-4 h-4 rounded-full bg-green-400 shadow-[0_0_20px_#4ade80] animate-pulse"/>

            <p className="text-xs text-green-300 mt-2 whitespace-nowrap">

              {target.type}

            </p>

          </div>

        ))}

      </div>

      {/* Bottom Status */}

      <div className="grid md:grid-cols-4 gap-4 p-6 border-t border-cyan-500/20">

        <Status title="Beam Angle" value="0°"/>

        <Status title="PRF" value="2000 Hz"/>

        <Status title="Range" value="120 km"/>

        <Status title="Tracking" value="SEARCH"/>

      </div>

    </div>

  );

}

function Status({title,value}){

  return(

    <div className="bg-[#101C2D] rounded-xl p-4">

      <p className="text-gray-400 text-sm">

        {title}

      </p>

      <h3 className="text-cyan-400 text-xl font-bold mt-2">

        {value}

      </h3>

    </div>

  );

}