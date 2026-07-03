const papers = [
  {
    title: "Phase Noise Effects on Micro-Doppler Extraction for Radar Target Classification Using Machine Learning",
    conference: " 2024 IEEE Asia-Pacific Microwave Conference (APMC)",
    year: "2024",
    
    authors: (
  <>
    <span className="text-cyan-400 font-bold">
      Nirbhay Kumar Singh
    </span>
     ,Malwinder Singh, Shaik Abdul Subhan, Seema
  </>
),
    /*abstract:
      "The extraction of Micro-Doppler (M-D) signatures from radar signals is critical for classifying various targets. This study uses Machine Learning techniques to investigate the impact of phase noise on micro-Doppler extraction....see more",*/
    abstract: "The extraction of Micro-Doppler (M-D) signatures from radar signals is critical for classifying various targets. This study uses Machine Learning techniques to investigate the impact of phase noise on micro-Doppler extraction....see more",
    doi: "https://doi.org/10.1109/APMC60911.2024.10867536",
    pdf: "/papers/mapcon2024.pdf"
  },
  {
    title: "Ultra-Low Phase Noise, Digital Transceiver for High Range Resolution Pulsed Agile Radar",
    conference: "2023 IEEE Radio and Antenna Days of the Indian Ocean (RADIO)",
    year: "2023",
    authors: "Nirbhay Kumar Singh; Vikas Kumar; T. Venkatamuni",
     authors: (
  <>
    <span className="text-cyan-400 font-bold">
      Nirbhay Kumar Singh
    </span>
    , Vikas Kumar, T. Venkatamuni
  </>),
    abstract:
      "In the modern age, highly sensitive advanced radar systems require very stable and accurate radar waveforms for micro-Doppler signature analysis and smaller Radar Cross section (RCS) detection. Also..See more",
    /*keywords: "RFSoC, Digital Beamforming",*/
    doi: "https://doi.org/10.1109/RADIO58424.2023.10146099",
    pdf: "/papers/apmc2024.pdf"
  },
    {
    title: "Multi-board Synchronization of n-channel Direct RF Digital Transceiver for Active Phased Array Radar using JESD204 Interface",
    conference: "2024 IEEE 9th International Conference for Convergence in Technology (I2CT)",
    year: "2024",
    authors: (
  <>
    <span className="text-cyan-400 font-bold">
      Nirbhay Kumar Singh
    </span>

  </>
),
    abstract:
      "Achieving synchronization in multi-channel transmit and receive systems has traditionally involved complex length-matched channel designs, posing challenges, particularly in higher-order channels. This paper..See more",
    /*keywords: "RFSoC, Digital Beamforming",*/
    doi: "https://doi.org/10.1109/I2CT61223.2024.10543803",
    pdf: "/papers/apmc2024.pdf"
  },
    {
    title: "A Programmable, Multimode Operational 3U-VPX Based Digital Transceiver & Processing Module For CIT-MKXIIA IFF",
    conference: "2023 IEEE International Conference for Advancement in Technology (ICONAT)",
    year: "2023",
    authors: (
  <>
    <span className="text-cyan-400 font-bold">
      Nirbhay Kumar Singh
    </span>
    , C Fouziya, Vikas Kumar, T Venkatamuni
  </>),
    abstract:
      "This paper relates to the realization of 3U-VPX based programmable Digital Transceiver to support different modes (1, 2, 3, A, B, C, D, S and Mode5) and configurations of Identification of Friend and Foe (IFF) systems. L-Band..See more",
    /*keywords: "RFSoC, Digital Beamforming",*/
    doi: "https://doi.org/10.1109/ICONAT57137.2023.10080650",
    pdf: "/papers/apmc2024.pdf"
  },
    {
    title: "A Wide-band SWaP System for VSWR and Power Measurement with Temperature Compensation Technique",
    conference: "2022 IEEE Microwaves, Antennas, and Propagation Conference (MAPCON)",
    year: "2022",
    authors: (
  <>
    <span className="text-cyan-400 font-bold">
      Nirbhay Kumar Singh
    </span>
    , T Venkatamuni
  </>),
    abstract:
      "Modern high-power systems like Radars and communication need very accurate and temperature invariant systems to measure the transmitted power and VSWR to insure the proper operation of these equipment. This paper..See more",
    /*keywords: "RFSoC, Digital Beamforming",*/
    doi: "https://doi.org/ 10.1109/MAPCON56011.2022.10047646",
    pdf: "/papers/apmc2024.pdf"
  },
    {
    title: "A Method to Enhance Power Amplifier Linearity Using Time Delay Estimation & Correction Technique",
    conference: "2022 IEEE International Conference for Advancement in Technology (ICONAT)",
    year: "2022",
    authors: (
  <>
    <span className="text-cyan-400 font-bold">
      Nirbhay Kumar Singh
    </span>
    , T. Venkatmuni, M C Devindra
  </>),
    abstract:
      "Power amplifier, a critical component of the RF chain, is the main source that is responsible for signal distortion. Its nonlinear behavior must be taken into consideration for efficient design to cater the need for high data links. In this paper, ..See more",
    /*keywords: "RFSoC, Digital Beamforming",*/
    doi: "https://doi.org/10.1109/ICONAT53423.2022.9725877",
    pdf: "/papers/apmc2024.pdf"
  }
];

export default function Publications(){

return(

<section
id="publications"
className="py-28 bg-[#08121F]">

<div className="max-w-7xl mx-auto px-8">

<h2 className="text-5xl font-bold text-cyan-400 mb-16">

IEEE Publications

</h2>

<div className="grid md:grid-cols-3 gap-8">

{

papers.map((p,i)=>(

<div
key={i}
className="bg-[#101C2D] rounded-2xl p-8">

<div className="bg-[#101C2D] rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400 transition">

<h3 className="text-2xl font-bold text-white">

{p.title}

</h3>

<p className="text-cyan-400 mt-2">

{p.conference} • {p.year}

</p>

<p className="text-gray-400 mt-4">

<strong>Authors:</strong> {p.authors}

</p>

<p className="text-gray-400 mt-4 leading-7">

{p.Keywords}

</p>

<p className="mt-4 text-cyan-300">

<strong>abstract:</strong> {p.abstract}

</p>

<div className="flex gap-4 mt-8">

<a

href={p.doi}

target="_blank"

className="px-4 py-2 rounded-lg bg-cyan-500 text-black font-semibold"

>

IEEE Xplore

</a>

<a

href={p.pdf}

target="_blank"

className="px-4 py-2 rounded-lg border border-cyan-500 text-cyan-300"

>

PDF

</a>

</div>

</div>


</div>

))

}

</div>

</div>

</section>

)

}