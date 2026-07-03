import { useState } from "react";
import {
  FaBroadcastTower,
  FaBullseye,
  FaPlane,
  FaChartLine,
  FaSatelliteDish,
} from "react-icons/fa";

export default function RadarControls() {

  const [mode, setMode] = useState("SEARCH");
  const [beamAngle, setBeamAngle] = useState(0);
  const [range, setRange] = useState(120);
  const [prf, setPrf] = useState(2000);
  const [pulseWidth, setPulseWidth] = useState(20);
  const [gain, setGain] = useState(30);

  return (

    <div className="rounded-3xl bg-[#101C2D]/90 border border-cyan-500/20 backdrop-blur-xl overflow-hidden">

      {/* Header */}

      <div className="p-6 border-b border-cyan-500/20">

        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500 flex items-center justify-center">

            <FaSatelliteDish className="text-cyan-400 text-2xl"/>

          </div>

          <div>

            <h3 className="text-white text-2xl font-bold">

              Radar Console

            </h3>

            <p className="text-gray-400">

              Mission Control

            </p>

          </div>

        </div>

      </div>

      {/* Status */}

      <div className="grid grid-cols-2 gap-4 p-6">

        <StatusCard
          icon={<FaBroadcastTower/>}
          title="Status"
          value="ONLINE"
        />

        <StatusCard
          icon={<FaBullseye/>}
          title="Mode"
          value={mode}
        />

        <StatusCard
          icon={<FaPlane/>}
          title="Targets"
          value="3"
        />

        <StatusCard
          icon={<FaChartLine/>}
          title="Tracking"
          value="SEARCH"
        />

      </div>

      {/* Mode */}

      <div className="px-6">

        <h4 className="text-cyan-400 font-bold">

          Radar Mode

        </h4>

        <div className="grid grid-cols-3 gap-3 mt-4">

          {["SEARCH","TRACK","SCAN"].map((item)=>(

            <button

              key={item}

              onClick={()=>setMode(item)}

              className={`
              py-3 rounded-xl font-bold transition-all

              ${mode===item

              ? "bg-cyan-500 text-black"

              : "bg-slate-800 text-gray-300 hover:bg-cyan-500/20"}

              `}

            >

              {item}

            </button>

          ))}

        </div>

      </div>

      {/* Sliders */}

      <div className="p-6 space-y-6">

        <Slider
          title="Beam Angle"
          value={beamAngle}
          min={-60}
          max={60}
          unit="°"
          onChange={setBeamAngle}
        />

        <Slider
          title="PRF"
          value={prf}
          min={500}
          max={5000}
          unit="Hz"
          onChange={setPrf}
        />

        <Slider
          title="Radar Range"
          value={range}
          min={20}
          max={250}
          unit="km"
          onChange={setRange}
        />

        <Slider
          title="Pulse Width"
          value={pulseWidth}
          min={1}
          max={100}
          unit="µs"
          onChange={setPulseWidth}
        />

        <Slider
          title="Receiver Gain"
          value={gain}
          min={0}
          max={60}
          unit="dB"
          onChange={setGain}
        />

      </div>

    </div>

  );

}

/*------------------------------------------------*/

function StatusCard({icon,title,value}){

  return(

    <div className="bg-[#162233] rounded-xl p-4 border border-cyan-500/20">

      <div className="text-cyan-400 text-xl">

        {icon}

      </div>

      <p className="text-gray-400 text-sm mt-2">

        {title}

      </p>

      <h3 className="text-white text-lg font-bold">

        {value}

      </h3>

    </div>

  );

}

/*------------------------------------------------*/

function Slider({

title,

value,

min,

max,

unit,

onChange,

}){

  return(

    <div>

      <div className="flex justify-between mb-2">

        <span className="text-gray-300">

          {title}

        </span>

        <span className="text-cyan-400 font-semibold">

          {value} {unit}

        </span>

      </div>

      <input

        type="range"

        min={min}

        max={max}

        value={value}

        onChange={(e)=>onChange(Number(e.target.value))}

        className="w-full accent-cyan-400"

      />

    </div>

  );

}