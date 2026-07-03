const patents = [
  {
    title: "Multi-channel Direct RF Digital Transceiver Synchronization",
    year: "2023",
    no: "202341083757"
  },
  {
    title: "Wideband Exciter Signal Generator",
    year: "2023",
    no: "202341004980"
  },
  {
    title: "Wideband VSWR Measurement System",
    year: "2022",
    no: "202241070066"
  },
  {
    title: "Programmable Digital Radar Transceiver",
    year: "2020",
    no: "202041013933"
  },
  {
    title: "Coherent FMCW Radar Conversion",
    year: "2021",
    no: "202141009908"
  },
  {
    title: "Ultra Low Phase Noise Generator",
    year: "2023",
    no: "202341030479"
  }
];

export default function Patents() {
  return (
    <section className="py-28 bg-[#07111F]">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-cyan-400 mb-16">
          Patents
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {patents.map((p, i) => (

            <div
              key={i}
              className="bg-[#101C2D] rounded-2xl border border-cyan-500/20 p-8 hover:border-cyan-400 transition">

              <h3 className="text-2xl font-semibold">
                {p.title}
              </h3>

              <p className="text-cyan-400 mt-4">
                Patent No : {p.no}
              </p>

              <p className="text-gray-400 mt-2">
                {p.year}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}