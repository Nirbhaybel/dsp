import { useEffect, useState } from "react";

import {
    FaGithub,
    FaLinkedin,
    FaDownload,
    FaBars,
    FaTimes
} from "react-icons/fa";

const navItems = [

    { id: "about", label: "About" },

    { id: "expertise", label: "Expertise" },

    { id: "dsp-lab", label: "DSP Lab" },

    { id: "projects", label: "Projects" },

    { id: "publications", label: "Research" },

    { id: "contact", label: "Contact" }

];

export default function Navbar() {

    const [activeSection, setActiveSection] = useState("about");

    const [mobileOpen, setMobileOpen] = useState(false);

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            setScrolled(window.scrollY > 30);

            const sections = navItems.map(item =>
                document.getElementById(item.id)
            );

            const scrollPosition = window.scrollY + 120;

            sections.forEach((section, index) => {

                if (!section) return;

                if (
                    scrollPosition >= section.offsetTop &&
                    scrollPosition < section.offsetTop + section.offsetHeight
                ) {

                    setActiveSection(navItems[index].id);

                }

            });

        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () =>
            window.removeEventListener("scroll", handleScroll);

    }, []);

    const scrollToSection = (id) => {

        setMobileOpen(false);

        document.getElementById(id)?.scrollIntoView({

            behavior: "smooth"

        });

    };

        return (

        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? "backdrop-blur-xl bg-[#050B16]/90 border-b border-cyan-500/20 shadow-lg shadow-cyan-500/5"
                    : "bg-transparent"
            }`}
        >

            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-4">

                {/* Logo */}

                <div
                    className="cursor-pointer"
                    onClick={() =>
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        })
                    }
                >

                    <h1 className="text-2xl font-extrabold">

                        <span className="text-white">
                            DSP
                        </span>

                        <span className="text-cyan-400">
                            {" "}Engineering
                        </span>

                    </h1>

                    <p className="text-xs text-gray-400">

                        Signal Processing Laboratory

                    </p>

                </div>

                {/* Desktop Navigation */}

                <ul className="hidden lg:flex items-center gap-8">

                    {navItems.map((item) => (

                        <li key={item.id}>

                            <button
                                onClick={() => scrollToSection(item.id)}
                                className={`relative transition-colors duration-300 hover:text-cyan-400 ${
                                    activeSection === item.id
                                        ? "text-cyan-400"
                                        : "text-gray-300"
                                }`}
                            >

                                {item.label}

                                {activeSection === item.id && (

                                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-cyan-400 rounded-full" />

                                )}

                            </button>

                        </li>

                    ))}

                </ul>

                {/* Right Icons */}

                <div className="hidden lg:flex items-center gap-5">

                    <a
                        href="https://linkedin.com/in/YOUR-LINKEDIN"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-cyan-400 transition"
                    >
                        <FaLinkedin size={22} />
                    </a>

                    <a
                        href="https://github.com/YOUR-GITHUB"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-cyan-400 transition"
                    >
                        <FaGithub size={22} />
                    </a>

                    <a
                        href={`${import.meta.env.BASE_URL}resume.pdf`}
                        download="Nirbhay_Singh_DSP_Resume.pdf"
                        className="text-gray-300 hover:text-cyan-400 transition"
                    >
                        <FaDownload size={20} />
                    </a>

                </div>

                {/* Mobile Menu Button */}

                <button
                    className="lg:hidden text-cyan-400"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >

                    {mobileOpen ? (
                        <FaTimes size={24} />
                    ) : (
                        <FaBars size={24} />
                    )}

                </button>

            </div>

                        {/* Mobile Menu */}

            {mobileOpen && (

                <div className="lg:hidden border-t border-cyan-500/20 bg-[#050B16]/95 backdrop-blur-xl">

                    <div className="flex flex-col px-6 py-6 space-y-5">

                        {navItems.map((item) => (

                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`text-left text-lg transition ${
                                    activeSection === item.id
                                        ? "text-cyan-400 font-semibold"
                                        : "text-gray-300 hover:text-cyan-400"
                                }`}
                            >
                                {item.label}
                            </button>

                        ))}

                        <div className="flex items-center gap-6 pt-6 border-t border-cyan-500/20">

                            <a
                                href="https://linkedin.com/in/YOUR-LINKEDIN"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-cyan-400 transition"
                            >
                                <FaLinkedin size={22} />
                            </a>

                            <a
                                href="https://github.com/YOUR-GITHUB"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-cyan-400 transition"
                            >
                                <FaGithub size={22} />
                            </a>

                            <a
                                href={`${import.meta.env.BASE_URL}resume.pdf`}
                                download="Nirbhay_Singh_DSP_Resume.pdf"
                                className="text-gray-300 hover:text-cyan-400 transition"
                            >
                                <FaDownload size={20} />
                            </a>

                        </div>

                    </div>

                </div>

            )}

        </nav>

    );

}