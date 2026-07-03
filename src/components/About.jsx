import { motion } from "framer-motion";
import {
  FaMicrochip,
  FaWaveSquare,
  FaCalculator,
  FaCode
} from "react-icons/fa";

export default function About() {

return(

<section
id="about"
className="py-28 bg-[#08121F]"
>

<div className="max-w-7xl mx-auto px-8">

<motion.div

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

viewport={{once:true}}

transition={{duration:0.8}}

className="text-center"

>

<span className="px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300">

About Me

</span>

<h2 className="mt-6 text-5xl font-black">

<span className="text-white">

Engineering

</span>

<span className="text-cyan-400">

 Philosophy

</span>

</h2>

<p className="mt-8 max-w-4xl mx-auto text-gray-400 leading-9 text-lg">

I'm a DSP & Signal Processing Engineer with more than
8 years of experience in designing and implementing
real-time Digital Signal Processing algorithms on FPGA
and RFSoC platforms.

My expertise spans Fixed-Point Arithmetic,
Digital Down Conversion (DDC),
Pulse Compression,
Digital Beamforming,
FFT Processing,
and high-speed FPGA implementation using VHDL.

I enjoy transforming complex mathematical algorithms
into optimized hardware architectures capable of
real-time processing.

</p>

</motion.div>

<div className="grid lg:grid-cols-2 gap-16 mt-20">
  {/* Left Column */}

<div className="space-y-8">

  <motion.div

    initial={{ opacity: 0, x: -40 }}

    whileInView={{ opacity: 1, x: 0 }}

    viewport={{ once: true }}

    transition={{ duration: 0.6 }}

    className="bg-[#101B2D] border border-cyan-500/20 rounded-3xl p-8"

  >

    <div className="flex items-center gap-5">

      <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center">

        <FaWaveSquare className="text-cyan-400 text-3xl"/>

      </div>

      <div>

        <h3 className="text-2xl font-bold text-white">

          DSP Algorithms

        </h3>

        <p className="text-gray-400 mt-2">

          End-to-End Signal Processing

        </p>

      </div>

    </div>

    <ul className="mt-6 space-y-3 text-gray-300">

      <li>✔ Digital Down Conversion (DDC)</li>

      <li>✔ Pulse Compression</li>

      <li>✔ FFT & Spectrum Analysis</li>

      <li>✔ Digital Beamforming</li>

      <li>✔ Complex Signal Processing</li>

      <li>✔ Fixed-Point DSP</li>

    </ul>

  </motion.div>

  <motion.div

    initial={{ opacity: 0, x: -40 }}

    whileInView={{ opacity: 1, x: 0 }}

    viewport={{ once: true }}

    transition={{ duration: 0.7 }}

    className="bg-[#101B2D] border border-cyan-500/20 rounded-3xl p-8"

  >

    <div className="flex items-center gap-5">

      <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center">

        <FaMicrochip className="text-purple-400 text-3xl"/>

      </div>

      <div>

        <h3 className="text-2xl font-bold text-white">

          FPGA Implementation

        </h3>

        <p className="text-gray-400 mt-2">

          High-Speed RTL Design

        </p>

      </div>

    </div>

    <ul className="mt-6 space-y-3 text-gray-300">

      <li>✔ VHDL / Verilog</li>

      <li>✔ AMD Vivado</li>

      <li>✔ RFSoC Platforms</li>

      <li>✔ Timing Closure</li>

      <li>✔ CDC Design</li>

      <li>✔ AXI & High-Speed Interfaces</li>

    </ul>

  </motion.div>

</div>
{/* Right Column */}

<div className="space-y-8">

  <motion.div

    initial={{ opacity: 0, x: 40 }}

    whileInView={{ opacity: 1, x: 0 }}

    viewport={{ once: true }}

    transition={{ duration: 0.6 }}

    className="bg-[#101B2D] border border-cyan-500/20 rounded-3xl p-8"

  >

    <div className="flex items-center gap-5">

      <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center">

        <FaCode className="text-green-400 text-3xl"/>

      </div>

      <div>

        <h3 className="text-2xl font-bold text-white">

          MATLAB & Algorithm Development

        </h3>

        <p className="text-gray-400 mt-2">

          Simulation • Verification • Optimization

        </p>

      </div>

    </div>

    <ul className="mt-6 space-y-3 text-gray-300">

      <li>✔ MATLAB Signal Processing Toolbox</li>

      <li>✔ DSP Algorithm Development</li>

      <li>✔ Filter Design & Analysis</li>

      <li>✔ FFT & Spectral Analysis</li>

      <li>✔ Beamforming Simulation</li>

      <li>✔ Hardware Verification Models</li>

    </ul>

  </motion.div>

  <motion.div

    initial={{ opacity: 0, x: 40 }}

    whileInView={{ opacity: 1, x: 0 }}

    viewport={{ once: true }}

    transition={{ duration: 0.7 }}

    className="bg-[#101B2D] border border-cyan-500/20 rounded-3xl p-8"

  >

    <div className="flex items-center gap-5">

      <div className="w-16 h-16 rounded-2xl bg-orange-500/20 flex items-center justify-center">

        <FaCalculator className="text-orange-400 text-3xl"/>

      </div>

      <div>

        <h3 className="text-2xl font-bold text-white">

          Fixed-Point Optimization

        </h3>

        <p className="text-gray-400 mt-2">

          Hardware-Efficient Arithmetic

        </p>

      </div>

    </div>

    <ul className="mt-6 space-y-3 text-gray-300">

      <li>✔ Q-Format Design</li>

      <li>✔ Scaling & Normalization</li>

      <li>✔ Overflow Analysis</li>

      <li>✔ Saturation & Rounding</li>

      <li>✔ Resource Optimization</li>

      <li>✔ Numerical Accuracy Validation</li>

    </ul>

  </motion.div>

</div>

</div>

{/* Statistics */}

<div className="grid md:grid-cols-4 gap-6 mt-20">

  <div className="bg-[#101B2D] rounded-2xl p-8 text-center border border-cyan-500/10">

    <h3 className="text-4xl font-black text-cyan-400">

      8+

    </h3>

    <p className="text-gray-400 mt-3">

      Years Experience

    </p>

  </div>

  <div className="bg-[#101B2D] rounded-2xl p-8 text-center border border-cyan-500/10">

    <h3 className="text-4xl font-black text-cyan-400">

      25+

    </h3>

    <p className="text-gray-400 mt-3">

      DSP Algorithms

    </p>

  </div>

  <div className="bg-[#101B2D] rounded-2xl p-8 text-center border border-cyan-500/10">

    <h3 className="text-4xl font-black text-cyan-400">

      9

    </h3>

    <p className="text-gray-400 mt-3">

      IEEE Publications

    </p>

  </div>

  <div className="bg-[#101B2D] rounded-2xl p-8 text-center border border-cyan-500/10">

    <h3 className="text-4xl font-black text-cyan-400">

      FPGA

    </h3>

    <p className="text-gray-400 mt-3">

      Real-Time Implementation

    </p>

  </div>

</div>
{/* Engineering Philosophy */}

<motion.div

initial={{ opacity: 0, y: 40 }}

whileInView={{ opacity: 1, y: 0 }}

viewport={{ once: true }}

transition={{ duration: 0.8 }}

className="mt-20"

>

<div className="bg-gradient-to-r from-cyan-500/10 via-[#101B2D] to-purple-500/10 border border-cyan-500/20 rounded-3xl p-10">

<h3 className="text-3xl font-bold text-white text-center">

Engineering Philosophy

</h3>

<p className="mt-8 text-gray-300 text-lg leading-9 text-center max-w-5xl mx-auto">

I believe that an efficient DSP algorithm is only valuable when it can be
implemented reliably on hardware. My approach combines mathematical modeling,
MATLAB-based verification, fixed-point optimization, and FPGA implementation to
deliver deterministic, low-latency, real-time signal processing solutions.

</p>

<div className="grid md:grid-cols-3 gap-8 mt-12">

<div className="text-center">

<h4 className="text-cyan-400 text-xl font-bold">

Algorithm

</h4>

<p className="mt-3 text-gray-400">

Design and validate DSP algorithms using MATLAB and numerical analysis.

</p>

</div>

<div className="text-center">

<h4 className="text-purple-400 text-xl font-bold">

Optimization

</h4>

<p className="mt-3 text-gray-400">

Convert floating-point models into efficient fixed-point architectures while
maintaining numerical accuracy.

</p>

</div>

<div className="text-center">

<h4 className="text-green-400 text-xl font-bold">

Implementation

</h4>

<p className="mt-3 text-gray-400">

Develop synthesizable VHDL/Verilog designs for FPGA and RFSoC platforms with
timing closure and hardware validation.

</p>

</div>

</div>

</div>

</motion.div>

</div>

</section>

);

}