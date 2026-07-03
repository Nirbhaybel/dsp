import {
  FaMicrochip,
  FaFilter,
  FaCompress,
  FaWaveSquare,
  FaSatelliteDish,
  FaBullseye,
  FaCrosshairs,
} from "react-icons/fa";

const pipeline = [
  {
    title: "ADC",
    subtitle: "RF Sampling",
    icon: <FaMicrochip />,
    color: "cyan",
  },
  {
    title: "DDC",
    subtitle: "Digital Down Conversion",
    icon: <FaWaveSquare />,
    color: "green",
  },
  {
    title: "LPF",
    subtitle: "FIR Filter",
    icon: <FaFilter />,
    color: "yellow",
  },
  {
    title: "Pulse Compression",
    subtitle: "Matched Filter",
    icon: <FaCompress />,
    color: "pink",
  },
  {
    title: "CFAR",
    subtitle: "Detection",
    icon: <FaBullseye />,
    color: "orange",
  },
  {
    title: "DBF",
    subtitle: "Beamforming",
    icon: <FaSatelliteDish />,
    color: "cyan",
  },
  {
    title: "Tracker",
    subtitle: "Track Manager",
    icon: <FaCrosshairs />,
    color: "green",
  },
];

export default function SignalChain() {
  return (
    <section className="mt-10">

      <div className="rounded-3xl bg-[#101C2D]/90 border border-cyan-500/20 backdrop-blur-xl p-8">

        <h2 className="text-3xl font-bold text-white">
          Radar Signal Processing Pipeline
        </h2>

        <p className="text-gray-400 mt-3">
          End-to-End FPGA Signal Processing Architecture
        </p>

        <div className="grid lg:grid-cols-7 md:grid-cols-4 sm:grid-cols-2 gap-5 mt-10">

          {pipeline.map((item, index) => (

            <div
              key={index}
              className="rounded-2xl bg-[#162233] border border-cyan-500/20 p-6 hover:border-cyan-400 transition duration-300 hover:-translate-y-2"
            >

              <div className="text-4xl text-cyan-400">

                {item.icon}

              </div>

              <h3 className="text-white text-xl font-bold mt-5">

                {item.title}

              </h3>

              <p className="text-gray-400 text-sm mt-2">

                {item.subtitle}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}