import {
  FaPlane,
  FaHelicopter,
  FaRocket,
  FaSatellite,
} from "react-icons/fa";

const targets = [
  {
    id: 1,
    icon: <FaPlane />,
    name: "SU-30 MKI",
    type: "Aircraft",
    range: "84 km",
    speed: "920 km/h",
    heading: "045°",
    threat: "HIGH",
    color: "text-red-400",
  },
  {
    id: 2,
    icon: <FaHelicopter />,
    name: "AH-64",
    type: "Helicopter",
    range: "36 km",
    speed: "280 km/h",
    heading: "120°",
    threat: "MEDIUM",
    color: "text-yellow-400",
  },
  {
    id: 3,
    icon: <FaRocket />,
    name: "Cruise Missile",
    type: "Missile",
    range: "52 km",
    speed: "780 km/h",
    heading: "300°",
    threat: "CRITICAL",
    color: "text-red-500",
  },
  {
    id: 4,
    icon: <FaSatellite />,
    name: "Recon UAV",
    type: "Drone",
    range: "112 km",
    speed: "140 km/h",
    heading: "220°",
    threat: "LOW",
    color: "text-green-400",
  },
];

export default function AircraftTargets() {

  return (

    <section className="mt-10">

      <div className="rounded-3xl bg-[#101C2D]/90 border border-cyan-500/20 backdrop-blur-xl p-8">

        <h2 className="text-3xl font-bold text-white">

          Live Target List

        </h2>

        <p className="text-gray-400 mt-2">

          Detected Objects by Radar

        </p>

        <div className="mt-8 space-y-5">

          {targets.map((target) => (

            <div

              key={target.id}

              className="rounded-2xl bg-[#162233] border border-cyan-500/20 hover:border-cyan-400 transition duration-300 p-6"

            >

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

                <div className="flex items-center gap-5">

                  <div className={`text-4xl ${target.color}`}>

                    {target.icon}

                  </div>

                  <div>

                    <h3 className="text-white text-xl font-bold">

                      {target.name}

                    </h3>

                    <p className="text-gray-400">

                      {target.type}

                    </p>

                  </div>

                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

                  <Info
                    title="Range"
                    value={target.range}
                  />

                  <Info
                    title="Speed"
                    value={target.speed}
                  />

                  <Info
                    title="Heading"
                    value={target.heading}
                  />

                  <Info
                    title="Threat"
                    value={target.threat}
                    color={target.color}
                  />

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

function Info({

title,

value,

color="text-cyan-400"

}){

  return(

    <div>

      <p className="text-gray-500 text-sm">

        {title}

      </p>

      <h4 className={`font-bold ${color}`}>

        {value}

      </h4>

    </div>

  );

}