import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact(){

return(

<section
    id="contact"
    className="py-20"
>

<div className="max-w-5xl mx-auto text-center px-8">

<h2 className="text-5xl font-bold text-cyan-400">

Let's Connect

</h2>

<p className="mt-8 text-gray-300 text-lg">

Interested in Radar, FPGA, RFSoC, Defence Electronics or AI?

Let's collaborate.

</p>

<div className="flex justify-center gap-10 mt-16">

<a

href="mailto:nirbhaysingh.iitm@gmail.com"

className="text-cyan-400 hover:text-white">

<FaEnvelope size={40}/>

</a>

<a

href="https://linkedin.com"

className="text-cyan-400 hover:text-white">

<FaLinkedin size={40}/>

</a>

<a

href="https://github.com"

className="text-cyan-400 hover:text-white">

<FaGithub size={40}/>

</a>

</div>

</div>

</section>

)

}