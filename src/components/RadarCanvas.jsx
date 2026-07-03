import { useEffect, useRef } from "react";

export default function RadarCanvas() {

  const canvasRef = useRef(null);

  useEffect(() => {

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const size = 900;

    canvas.width = size;
    canvas.height = size;

    const cx = size / 2;
    const cy = size / 2;

    const radius = 380;

    let angle = 0;

    const aircraft = [
  {
    radius: 110,
    angle: 40,
    speed: 0.10,
    altitude: "32k",
    id: "A101"
  },
  {
    radius: 180,
    angle: 120,
    speed: -0.06,
    altitude: "18k",
    id: "B204"
  },
  {
    radius: 270,
    angle: 250,
    speed: 0.08,
    altitude: "41k",
    id: "C310"
  },
  {
    radius: 330,
    angle: 330,
    speed: 0.05,
    altitude: "27k",
    id: "D420"
  }
];
function drawAircraft() {

  aircraft.forEach(a => {

    a.angle += a.speed;

    if (a.angle > 360) a.angle = 0;
    if (a.angle < 0) a.angle = 360;

    const rad = a.angle * Math.PI / 180;

    const x = cx + a.radius * Math.cos(rad);
    const y = cy + a.radius * Math.sin(rad);

    let echoDiff = Math.abs(angle - a.angle);

if (echoDiff > 180)
    echoDiff = 360 - echoDiff;

if (echoDiff < 3) {
     echoes.push({

        x,
        y,
        life:50
          });
}



    history.push({
    x,
    y,
    life: 40
});


    let diff = Math.abs(angle - a.angle);

    if (diff > 180)
      diff = 360 - diff;

    const visible = diff < 12;
const bearing =
((450 - a.angle) % 360)
.toFixed(0)
.padStart(3,"0");

const range =
Math.round(a.radius);

const speed =
Math.round(Math.abs(a.speed)*900);
    /* aircraft */

    ctx.save();

    ctx.translate(x, y);

    ctx.rotate(rad);

    ctx.beginPath();

    ctx.moveTo(10, 0);
    ctx.lineTo(-8, -5);
    ctx.lineTo(-3, 0);
    ctx.lineTo(-8, 5);

    ctx.closePath();

    ctx.fillStyle = visible

? "#7CFFB2"

: "#0C3D2F";
   ctx.shadowBlur = visible ? 35 : 5;
    ctx.shadowColor = "#00ff99";

    ctx.fill();

    ctx.restore();
ctx.beginPath();

ctx.moveTo(x, y);

ctx.lineTo(
    x + Math.cos(rad) * 45,
    y + Math.sin(rad) * 45
);

ctx.strokeStyle = "rgba(120,255,200,.5)";
ctx.lineWidth = 1;

ctx.stroke();
    if (visible) {

      /* lock box */

      ctx.strokeStyle = "#00ff88";

      ctx.strokeStyle="#00ff99";

ctx.lineWidth=2;

ctx.strokeRect(
x-16,
y-16,
32,
32
);

ctx.beginPath();

ctx.moveTo(x+16,y);

ctx.lineTo(x+55,y);

ctx.stroke();

      ctx.font = "13px Arial";

      ctx.fillStyle = "#00ffaa";

     ctx.font="13px Consolas";

ctx.fillStyle="#66ffcc";

ctx.fillText(
a.id,
x+60,
y-24
);

ctx.fillText(
"BRG "+bearing+"°",
x+60,
y-8
);

ctx.fillText(
"RNG "+range+" km",
x+60,
y+8
);

ctx.fillText(
"SPD "+speed+" kt",
x+60,
y+24
);

ctx.fillText(
"ALT "+a.altitude,
x+60,
y+40
);

    }

  });

}
    function drawGrid() {

    ctx.shadowBlur = 8;
    ctx.shadowColor = "#00ffaa";

    ctx.strokeStyle = "rgba(0,255,255,.12)";
    ctx.lineWidth = 1;

    // ==========================
    // Draw Range Rings
    // ==========================

    for (let i = 1; i <= 5; i++) {

        ctx.beginPath();

        ctx.arc(
            cx,
            cy,
            radius * i / 5,
            0,
            Math.PI * 2
        );

        ctx.stroke();

    }

    // ==========================
    // ADD THIS CODE HERE
    // Compass Tick Marks
    // ==========================

    for (let i = 0; i < 360; i += 10) {

        const r = i * Math.PI / 180;

        const r1 = radius;

        const r2 = radius + 10;

        ctx.beginPath();

        ctx.moveTo(
            cx + Math.cos(r) * r1,
            cy + Math.sin(r) * r1
        );

        ctx.lineTo(
            cx + Math.cos(r) * r2,
            cy + Math.sin(r) * r2
        );

        ctx.strokeStyle = "rgba(0,255,255,.25)";
        ctx.stroke();

    }

    // ==========================
    // Cross Hair
    // ==========================

    ctx.beginPath();

    ctx.moveTo(cx - radius, cy);

    ctx.lineTo(cx + radius, cy);

    ctx.stroke();

    ctx.beginPath();

    ctx.moveTo(cx, cy - radius);

    ctx.lineTo(cx, cy + radius);

    ctx.stroke();

    // ==========================
    // Radial Lines
    // ==========================

    for (let i = 0; i < 360; i += 30) {

        const rad = i * Math.PI / 180;

        ctx.beginPath();

        ctx.moveTo(cx, cy);

        ctx.lineTo(
            cx + Math.cos(rad) * radius,
            cy + Math.sin(rad) * radius
        );

        ctx.strokeStyle = "rgba(0,255,255,.08)";

        ctx.stroke();

    }

    ctx.shadowBlur = 0;

}
function drawSweep(){

    const sweep = angle * Math.PI / 180;

    for(let i=0;i<140;i++){

        const alpha=(140-i)/500;

        const a=sweep-i*0.012;

        ctx.beginPath();

        ctx.moveTo(cx,cy);

        ctx.arc(
            cx,
            cy,
            radius,
            a-0.01,
            a+0.01
        );

        ctx.closePath();

        ctx.fillStyle=`rgba(0,255,160,${alpha})`;

        ctx.fill();

    }

}
function drawEchoes(){

    echoes.forEach((e)=>{

        ctx.beginPath();

        ctx.arc(

            e.x,

            e.y,

            8-e.life/10,

            0,

            Math.PI*2

        );

        ctx.strokeStyle=

        `rgba(0,255,120,${e.life/50})`;

        ctx.lineWidth=2;

        ctx.stroke();

        e.life--;

    });

    while(
        echoes.length &&
        echoes[0].life<=0
    ){

        echoes.shift();

    }

}
    function drawCenter(){

      ctx.beginPath();

      ctx.arc(cx,cy,8,0,Math.PI*2);

      ctx.fillStyle="#00ffff";

      ctx.shadowBlur=25;

      ctx.shadowColor="#00ffff";
ctx.shadowBlur=40;

ctx.shadowColor="#00ffff";
      ctx.fill();

      ctx.shadowBlur=0;

    }

    function drawTargets(){

      targets.forEach(t=>{

        const x=cx+t.r*Math.cos(t.a*Math.PI/180);

        const y=cy+t.r*Math.sin(t.a*Math.PI/180);

        let diff=Math.abs(angle-t.a);

        if(diff>180) diff=360-diff;

        const glow=Math.max(0,1-diff/18);

        ctx.beginPath();

        ctx.arc(x,y,5,0,Math.PI*2);

        ctx.fillStyle=`rgba(0,255,100,${0.2+glow})`;

        ctx.shadowBlur=25*glow;

        ctx.shadowColor="#00ff88";

        ctx.fill();

        ctx.shadowBlur=0;

      });

    }

    function drawLabels(){

      ctx.fillStyle="rgba(0,255,255,.5)";
      ctx.font="15px Arial";

      ctx.fillText("N",cx-5,30);
      ctx.fillText("E",size-30,cy+5);
      ctx.fillText("S",cx-5,size-20);
      ctx.fillText("W",20,cy+5);

  ctx.fillStyle="rgba(0,255,255,.35)";

ctx.font="14px Consolas";

ctx.fillText("100 km",cx+82,cy-6);

ctx.fillText("200 km",cx+162,cy-6);

ctx.fillText("300 km",cx+242,cy-6);

ctx.fillText("400 km",cx+322,cy-6);
ctx.font = "18px Consolas";

ctx.fillStyle = "#00ffaa";

ctx.fillText(

new Date().toLocaleTimeString(),

40,

40

);
ctx.fillText(

"TRACKING MODE",

40,

70

);

ctx.fillText(

"TARGETS : " + aircraft.length,

40,

100

);
ctx.fillStyle="#66ffcc";

ctx.font="18px Consolas";

ctx.fillText(
"MODE : TRACK",
40,
130
);

ctx.fillText(
"SCAN : 360°",
40,
160
);

ctx.fillText(
"RANGE : 400 km",
40,
190
);

ctx.fillText(
"TRACKS : "+aircraft.length,
40,
220
);

ctx.fillText(
"STATUS : NOMINAL",
40,
250
);

    }
    function drawHistory() {

    history.forEach((p, index) => {

        ctx.beginPath();

        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);

        ctx.fillStyle =
            `rgba(0,255,150,${p.life / 40})`;

        ctx.fill();

        p.life--;

    });

    while (
        history.length &&
        history[0].life <= 0
    ) {

        history.shift();

    }

}
const echoes=[];
const history = [];
    function animate(){

      /* Phosphor Persistence */

ctx.fillStyle = "rgba(7,17,31,0.15)";
ctx.fillRect(0, 0, size, size);

      drawGrid();

      drawSweep();
      drawEchoes();
      drawHistory();
      drawAircraft();

      drawCenter();

      drawLabels();

      angle+=0.7;

      if(angle>=360) angle=0;

      requestAnimationFrame(animate);

    }

    animate();

  },[]);

  return(

<canvas

ref={canvasRef}

className="w-[800px] h-[800px]"

/>

  )

}