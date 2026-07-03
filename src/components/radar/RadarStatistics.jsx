import {
  FaBullseye,
  FaWaveSquare,
  FaMicrochip,
  FaMemory,
  FaBolt,
  FaEthernet,
  FaThermometerHalf,
  FaClock,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaBullseye />,
    title: "Detection Probability",
    value: "99.84%",
    color: "text-green-400",
  },
  {
    icon: <FaWaveSquare />,
    title: "False Alarm Rate",
    value: "10⁻⁶",
    color: "text-cyan-400",
  },
  {
    icon: <FaMicrochip />,
    title: "ADC Sampling",
    value: "12 GSPS",
    color: "text-yellow-400",
  },
  {
    icon: <FaMemory />,
    title: "FPGA Utilization",
    value: "68%",
    color: "text-pink-400",
  },
  {
    icon: <FaBolt />,
    title: "Power",
    value: "34 W",
    color: "text-orange-400",
  },
  {
    icon: <FaEthernet />,
    title: "10G Ethernet",
    value: "9.82 Gbps",
    color: "text-blue-400",
  },
  {
    icon: <FaThermometerHalf />,
    title: "RFSoC Temp",
    value: "54°C",
    color: "text-red-400",
  },
  {
    icon: <FaClock />,
    title: "Beam Update",
    value: "400 Hz",
    color: "text-cyan-300",
  },
];

export default function RadarStatistics() {

  return (

    <section className="mt-10">

      <div className="rounded-3xl bg-[#101C2D]/90 border border-cyan-500/20 backdrop-blur-xl p-8">

        <h2 className="text-3xl font-bold text-white">

          Radar Performance Dashboard

        </h2>

        <p className="text-gray-400 mt-2">

          Real-Time FPGA & Radar Health Monitoring

        </p>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-10">

          {stats.map((item,index)=>(

            <div

              key={index}

              className="rounded-2xl bg-[#162233] border border-cyan-500/20 p-6 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-2"

            >

              <div className={`text-4xl ${item.color}`}>

                {item.icon}

              </div>

              <p className="text-gray-400 mt-5">

                {item.title}

              </p>

              <h3 className={`text-3xl font-bold mt-2 ${item.color}`}>

                {item.value}

              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}