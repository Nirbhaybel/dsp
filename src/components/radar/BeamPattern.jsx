import { useState } from "react";
import { FaSatelliteDish } from "react-icons/fa";

export default function BeamPattern() {

  const [angle, setAngle] = useState(0);
  const [elements, setElements] = useState(16);

  return (

    <section className="mt-10">

      <div className="rounded-3xl bg-[#101C2D]/90 border border-cyan-500/20 backdrop-blur-xl p-8">

        <div className="flex flex-wrap justify-between items-center gap-5">

          <div>

            <h2 className="text-3xl font-bold text-white">

              Digital Beamforming

            </h2>

            <p className="text-gray-400 mt-2">

              Interactive Beam Steering Demonstration

            </p>

          </div>

          <FaSatelliteDish
            className="text-cyan-400 text-5xl"
          />

        </div>

        {/* Beam Display */}

        <div className="mt-10 flex justify-center">

          <div className="relative w-[420px] h-[420px] rounded-full border border-cyan-500/30">

            {/* Rings */}

            <div className="absolute inset-8 rounded-full border border-cyan-500/20"/>

            <div className="absolute inset-20 rounded-full border border-cyan-500/20"/>

            <div className="absolute inset-32 rounded-full border border-cyan-500/20"/>

            {/* Horizontal */}

            <div className="absolute left-0 right-0 top-1/2 h-px bg-cyan-500/20"/>

            {/* Vertical */}

            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-cyan-500/20"/>

            {/* Beam */}

            <div

              className="absolute left-1/2 top-1/2 origin-left"

              style={{

                width:"180px",

                height:"4px",

                background:"linear-gradient(90deg,#22d3ee,transparent)",

                transform:`rotate(${angle}deg)`,

                transformOrigin:"0% 50%"

              }}

            />

            {/* Center */}

            <div className="absolute left-1/2 top-1/2 w-5 h-5 bg-cyan-400 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_#22d3ee]"/>

          </div>

        </div>

        {/* Controls */}

        <div className="grid lg:grid-cols-2 gap-10 mt-10">

          <div>

            <p className="text-gray-300">

              Steering Angle

            </p>

            <input

              type="range"

              min="-60"

              max="60"

              value={angle}

              onChange={(e)=>setAngle(Number(e.target.value))}

              className="w-full mt-3 accent-cyan-400"

            />

            <div className="text-cyan-400 font-bold mt-2">

              {angle}°

            </div>

          </div>

          <div>

            <p className="text-gray-300">

              Array Elements

            </p>

            <select

              value={elements}

              onChange={(e)=>setElements(Number(e.target.value))}

              className="w-full mt-3 bg-[#162233] border border-cyan-500/20 rounded-xl p-3 text-white"

            >

              <option>8</option>

              <option>16</option>

              <option>32</option>

              <option>64</option>

              <option>136</option>

            </select>

            <div className="text-cyan-400 mt-3">

              {elements} Elements

            </div>

          </div>

        </div>

        {/* Status */}

        <div className="grid md:grid-cols-4 gap-5 mt-10">

          <Metric
            title="Beam Angle"
            value={`${angle}°`}
          />

          <Metric
            title="Elements"
            value={elements}
          />

          <Metric
            title="Phase Resolution"
            value="32-bit"
          />

          <Metric
            title="Update Rate"
            value="400 Hz"
          />

        </div>

      </div>

    </section>

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