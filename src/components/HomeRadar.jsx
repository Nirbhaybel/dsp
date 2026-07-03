export default function HomeRadar({ onOpen }) {
  return (
    <section className="min-h-screen bg-[#07111F] flex items-center justify-center px-6">
      <div className="text-center max-w-4xl">

        <div className="inline-block px-6 py-3 rounded-full border border-cyan-500/30 text-cyan-300">
          Interactive AESA Radar Laboratory
        </div>

        <h1 className="text-6xl font-black mt-10">
          <span className="text-white">Radar</span>
          <span className="text-cyan-400"> Engineering Lab</span>
        </h1>

        <p className="text-gray-400 text-xl mt-8 leading-9">
          Explore beam steering, pulse compression, digital beamforming,
          FPGA and RFSoC based radar signal processing through an
          interactive engineering console.
        </p>

        <button
          onClick={onOpen}
          className="mt-12 px-10 py-5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xl"
        >
          Enter Engineering Console
        </button>

      </div>
    </section>
  );
}