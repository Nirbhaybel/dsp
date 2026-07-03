import { motion } from "framer-motion";
import RadarCanvas from "./radar/RadarCanvas";
import RadarControls from "./radar/RadarControls";
import SignalChain from "./radar/SignalChain";
import AircraftTargets from "./radar/AircraftTargets";
import RadarStatistics from "./radar/RadarStatistics";
import BeamPattern from "./radar/BeamPattern";
import AESAArray from "./radar/AESAArray";
import RangeDoppler from "./radar/RangeDoppler";
import CFARVisualizer from "./radar/CFARVisualizer";
import PulseCompression from "./radar/PulseCompression";
import DigitalDownConversion from "./radar/DigitalDownConversion";
import DigitalBeamforming from "./radar/DigitalBeamforming";
import TargetTracker from "./radar/TargetTracker";
export default function RadarLab() {
  return (
    <section
      id="radar-lab"
      className="min-h-screen bg-[#07111F] py-24 px-4 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="inline-block px-5 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 font-medium">
            Interactive AESA Radar Laboratory
          </span>

          <h2 className="mt-6 text-5xl lg:text-6xl font-black text-white">
            Radar
            <span className="text-cyan-400"> Engineering Lab</span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-400 leading-8">
            Explore beam steering, pulse compression, digital beamforming,
            target tracking and FPGA-based radar processing through an
            interactive engineering dashboard.
          </p>
        </motion.div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-12 gap-8 mt-14">
          {/* Left Panel */}
          <div className="lg:col-span-4">
            <RadarControls />
          </div>

          {/* Right Panel */}
          <div className="lg:col-span-8">
            <RadarCanvas />
          </div>
        </div>
        <SignalChain />
        <AircraftTargets />
        <RadarStatistics />
        <BeamPattern />
        <AESAArray />
        <RangeDoppler/>
        <CFARVisualizer/>
        <PulseCompression/>
        <DigitalDownConversion/>
        <DigitalBeamforming/>
        <TargetTracker/>
      </div>
    </section>
  );
}