import { motion } from "framer-motion";
import { useState } from "react";
import DSPDashboard from "./dsp/DSPDashboard";
import DigitalDownConversion from "./dsp/DigitalDownConversion";

// Future Labs
// import FIRDesigner from "./dsp/FIRDesigner";
// import FFTAnalyzer from "./dsp/FFTAnalyzer";
// import FixedPointLab from "./dsp/FixedPointLab";
// import ComplexIQ from "./dsp/ComplexIQ";
// import PulseCompression from "./dsp/PulseCompression";
// import Beamforming from "./dsp/Beamforming";

export default function DSPLab() {
const [activeLab, setActiveLab] = useState("ddc");
  return (

    <section
      id="dsp-lab"
      className="min-h-screen bg-[#050B16] py-24 px-4 lg:px-8"
    >

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <motion.div

          initial={{ opacity: 0, y: -40 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}

          transition={{ duration: 0.8 }}

          className="text-center"

        >

          <span className="inline-block px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300">

            Interactive Engineering Laboratory

          </span>

          <h2 className="mt-6 text-5xl lg:text-6xl font-black text-white">

            DSP

            <span className="text-cyan-400">

              {" "}Engineering Laboratory

            </span>

          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-400 leading-8">

            Explore real-time DSP algorithms, MATLAB modelling,
            FPGA implementation, fixed-point arithmetic and
            digital communication processing through interactive laboratories.

          </p>

        </motion.div>

        {/* Dashboard */}

        <div className="mt-20">

          <DSPDashboard
    activeLab={activeLab}
    setActiveLab={setActiveLab}
/>

        </div>

        {/* ==================================================== */}

        {/* Laboratory 1 */}

       {activeLab === "ddc" && <DigitalDownConversion />}

/* Future */

{activeLab === "fir" && <FIRDesigner />}

{activeLab === "fft" && <FFTAnalyzer />}

{activeLab === "fixed" && <FixedPointLab />}

{activeLab === "iq" && <ComplexIQ />}

{activeLab === "pulse" && <PulseCompression />}

{activeLab === "beam" && <Beamforming />}

        {/* ==================================================== */}

        {/* Future Laboratories */}

        {/*
        <FIRDesigner />

        <FFTAnalyzer />

        <FixedPointLab />

        <ComplexIQ />

        <PulseCompression />

        <Beamforming />
        */}

      </div>

    </section>

  );

}