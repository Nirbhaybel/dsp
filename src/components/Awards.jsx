const awards = [

"BEL R&D Excellence Award 2023",

"BEL Innovation Award 2023",

"BEL Innovation Award 2020",

"BEL Innovation Award 2017",

"IETE Young Scientist Award Nominee",

"Best Technical Poster Award"

];

export default function Awards(){

return(

<section className="py-28 bg-[#08121F]">

<div className="max-w-6xl mx-auto px-8">

<h2 className="text-5xl font-bold text-cyan-400 mb-16">

Awards

</h2>

<div className="space-y-6">

{

awards.map((a,i)=>(

<div

key={i}

className="bg-[#101C2D] rounded-xl p-6 border-l-4 border-cyan-400">

🏆 {a}

</div>

))

}

</div>

</div>

</section>

)

}