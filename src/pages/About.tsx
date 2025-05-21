import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import GradientCanvas from '../components/GradientCanvas';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const current = ref.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return ref;
};

const About = () => {
  const [isAlmaHovered, setIsAlmaHovered] = useState(false);
  const [isMelinaHovered, setIsMelinaHovered] = useState(false);
  const heroRef = useScrollReveal();
  const almaRef = useScrollReveal();
  const melinaRef = useScrollReveal();
  const bottomRef = useScrollReveal();

  return (
    <div className="min-h-screen text-white relative overflow-hidden bg-black/95 flex flex-col">
      <GradientCanvas />
      
      <div className="relative z-20 flex-1 flex flex-col">
        {/* Logo */}
        <div className="fixed top-safe-top left-safe-left z-50 p-4 xs:p-6 sm:p-8">
          <Link 
            to="/" 
            className="text-fluid-xl font-montreal font-bold tracking-tight hover:opacity-70 transition-opacity touch-target text-white"
          >
            mizmu
          </Link>
        </div>

        <Menu />

        <main className="flex-1 flex flex-col">
          <div className="container mx-auto px-4 md:px-8 pt-32 xs:pt-36 sm:pt-40 pb-12 md:pb-20 flex-1">
            {/* Hero Section */}
            <div ref={heroRef} className="mb-20 opacity-0 translate-y-8 duration-1000 ease-out relative">
              <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
                <div className="flex-1 md:pl-20">
                  <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-8xl font-light tracking-tight leading-[0.9] mb-6">
                    Digitale Magie<br />
                    Macher
                  </h1>
                  <p className="text-base xs:text-lg md:text-xl text-white/70 max-w-xl tracking-tight leading-relaxed">
                    Wir sind mizmu - Agentur für kreative Technologie, die an der Schnittstelle von Fantasie und Funktion arbeitet. Wir erschaffen digitale Erlebnisse mit einer Prise Zauber – spielerisch, ästhetisch und zukunftsweisend.
                    Lern uns kennen:
                  </p>
                </div>
                <div className="w-full md:w-[500px] h-[300px] md:h-[500px] rounded-full overflow-hidden flex-shrink-0">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source
                      src="https://pub-f50bad00c34f4dbb9e7b6b2bf1b7722d.r2.dev/about_mizmu%20(2).mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>

            {/* Team Members */}
            <div className="space-y-8">
              {/* Alma */}
              <div ref={almaRef} className="rounded-3xl xs:rounded-[48px] p-8 xs:p-10 sm:p-12 opacity-0 translate-y-8 duration-1000 ease-out">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 lg:gap-16">
                  <div className="w-[250px] h-[250px] md:w-[380px] md:h-[380px] flex-shrink-0">
                    <div className="bg-[#9333EA] rounded-full aspect-square origin-right scale-100 duration-1000 ease-out delay-300 relative overflow-hidden w-full h-full">
                      <img
                        src="https://pub-f50bad00c34f4dbb9e7b6b2bf1b7722d.r2.dev/almizmu.jpg"
                        alt="Alma"
                        className="absolute inset-0 w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-4xl xs:text-5xl md:text-7xl font-light tracking-tight leading-none mb-8">
                      Alma
                    </h2>
                    <p className="text-base xs:text-lg md:text-xl text-white/70 mb-8 tracking-tight leading-relaxed">
                      Neuste Tech Trends? Alma kennt sie schon.<br />
                      Hast einen neuen Song gehört? Alma hörte ihn schon<br />
                      vor 10 Jahren, ohne es dir unter die Nase zu reiben.<br />
                      Im Gegenteil: Sie teilt aus, ehm nein, natürlich mit dir.
                    </p>
                    <a 
                      href="mailto:alma@mizmu.ch" 
                      className="inline-flex items-center justify-center w-[184px] h-[50px] border-2 border-white rounded-full hover:bg-white hover:text-black transition-colors tracking-tight whitespace-nowrap text-base"
                    >
                      Sag Alma hallo <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Melina */}
              <div ref={melinaRef} className="rounded-3xl xs:rounded-[48px] p-8 xs:p-10 sm:p-12 opacity-0 translate-y-8 duration-1000 ease-out">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 lg:gap-16">
                  <div className="w-[250px] h-[250px] md:w-[380px] md:h-[380px] flex-shrink-0">
                    <div className="bg-[#9333EA] rounded-full aspect-square origin-right scale-100 duration-1000 ease-out delay-300 relative overflow-hidden w-full h-full">
                      <img
                        src="https://pub-f50bad00c34f4dbb9e7b6b2bf1b7722d.r2.dev/melmizmu.jpg"
                        alt="Melina"
                        className="absolute inset-0 w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-4xl xs:text-5xl md:text-7xl font-light tracking-tight leading-none mb-8">
                      Melina
                    </h2>
                    <p className="text-base xs:text-lg md:text-xl text-white/70 mb-8 tracking-tight leading-relaxed">
                      It's Melina. Übrigens aus 2155.<br />
                      Weiss telepathisch was insgeheim<br />
                      deine Wünsche sind, noch bevor du es weisst.<br />
                      Grosses Plus: Sie machts möglich.
                    </p>
                    <a 
                      href="mailto:melina@mizmu.ch" 
                      className="inline-flex items-center justify-center w-[184px] h-[50px] border-2 border-white rounded-full hover:bg-white hover:text-black transition-colors tracking-tight whitespace-nowrap text-base"
                    >
                      Melina begrüssen <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-20 mb-32">
              <h2 className="text-fluid-4xl xs:text-fluid-5xl sm:text-fluid-6xl font-light tracking-tight leading-none mb-8">
                Magie gefällig? Oder<br />
                Kaffee? Auf Deinen<br />
                Nacken, Gönnjamin
              </h2>
              <Link 
                to="/kontakt"
                className="inline-flex items-center justify-center w-[184px] h-[50px] border-2 border-white rounded-full hover:bg-white hover:text-black transition-colors tracking-tight whitespace-nowrap text-base"
              >
                Freunde werden <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

          </div>

          <Footer />
        </main>
      </div>
    </div>
  );
};

export default About;