import { motion } from "framer-motion";

export default function RadarBackground() {
  return (
    <div className="relative w-[400px] h-[400px] flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute w-[1000px] h-[1000px] rounded-full bg-cyan-500/5 blur-3xl" />

      {/* Radar Rings */}
      {[220,420,620,820].map((size, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-cyan-500/20"
          style={{
            width: size,
            height: size,
          }}
        />
      ))}
<div className="absolute text-cyan-500/40 text-xs left-4 top-1/2">
100 km
</div>

<div className="absolute text-cyan-500/40 text-xs right-4 top-1/2">
100 km
</div>

<div className="absolute text-cyan-500/40 text-xs top-4 left-1/2">
N
</div>

<div className="absolute text-cyan-500/40 text-xs bottom-4 left-1/2">
S
</div>
      {/* Cross Lines */}
      <div className="absolute w-[850px] h-[1px] bg-cyan-500/20" />
      <div className="absolute h-[850px] w-[1px] bg-cyan-500/20" />

      {/* Diagonal Lines */}
      <div className="absolute w-[850px] h-[1px] bg-cyan-500/10 rotate-45" />
      <div className="absolute w-[850px] h-[1px] bg-cyan-500/10 -rotate-45" />

      {/* Rotating Radar Sweep */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 5,
          ease: "linear",
          repeat: Infinity,
        }}
        className="absolute w-[850px] h-[850px]"
      >
        <div
          className="absolute left-1/2 top-1/2 origin-left"
          style={{
            width: "320px",
            height: "2px",
            background:
              "linear-gradient(to right, rgba(34,211,238,0.95), rgba(34,211,238,0.4), transparent)",
            transform: "translateY(-1px)",
          }}
        />

        {/* Sweep Glow */}
        <div
          className="absolute left-1/2 top-1/2 origin-left"
          style={{
            width: "320px",
            height: "70px",
            background:
              "linear-gradient(to right, rgba(34,211,238,0.18), transparent)",
            clipPath: "polygon(0 50%,100% 0,100% 100%)",
          }}
        />
      </motion.div>
{[...Array(15)].map((_,i)=>(

<motion.div

key={i}

animate={{
opacity:[0.1,1,0.1],
scale:[1,1.6,1]
}}

transition={{
repeat:Infinity,
delay:i*0.4,
duration:3
}}

className="absolute rounded-full bg-green-400"

style={{
left:`${20+Math.random()*60}%`,
top:`${20+Math.random()*60}%`,
width:4,
height:4
}}
/>

))}
      {/* Radar Center */}
      <div className="absolute w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]" />

      {/* Targets */}
      <motion.div
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute"
        style={{ left: "62%", top: "38%" }}
      >
        <div className="w-3 h-3 rounded-full bg-green-400 shadow-[0_0_15px_lime]" />
      </motion.div>

      <motion.div
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute"
        style={{ left: "36%", top: "65%" }}
      >
        <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_cyan]" />
      </motion.div>

      <motion.div
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: Infinity, duration: 1.4 }}
        className="absolute"
        style={{ left: "48%", top: "26%" }}
      >
        <div className="w-2 h-2 rounded-full bg-yellow-300 shadow-[0_0_15px_yellow]" />
      </motion.div>

      <motion.div
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute"
        style={{ left: "72%", top: "56%" }}
      >
        <div className="w-3 h-3 rounded-full bg-red-400 shadow-[0_0_15px_red]" />
      </motion.div>

      {/* Expanding Pulse */}
      <motion.div
        animate={{
          scale: [0, 1.8],
          opacity: [0.8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeOut",
        }}
        className="absolute w-24 h-24 rounded-full border border-cyan-400"
      />

      {/* Background Stars */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 2 + Math.random() * 4,
            repeat: Infinity,
          }}
          className="absolute w-[2px] h-[2px] rounded-full bg-white"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}