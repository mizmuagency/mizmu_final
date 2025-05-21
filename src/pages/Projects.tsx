import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import GradientCanvas from '../components/GradientCanvas';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import PreFooter3 from '../components/PreFooter3';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 'senica',
      title: 'Senica',
      description: 'Kontraststarkes Design mit präziser Typografie; dezente Animationen schaffen visuelle Tiefe.',
      image: 'https://pub-f50bad00c34f4dbb9e7b6b2bf1b7722d.r2.dev/mizmu_senica.png',
      link: '/projekte/senica'
    },
    {
      id: 'hanfgartenweg',
      title: 'Hanfgartenweg',
      description: 'Wohntraum in Blauen - Modernes Immobilienprojekt mit klarer visueller Sprache.',
      image: 'https://pub-f50bad00c34f4dbb9e7b6b2bf1b7722d.r2.dev/mizmu_hanfgartenweg.png',
      link: '/projekte/hanfgartenweg'
    },
    {
      id: 'dazzleye',
      title: 'DAZZLEYE',
      description: 'Innovative Eyeliner-Sticker für müheloses Augen-Make-up.',
      image: 'https://pub-f50bad00c34f4dbb9e7b6b2bf1b7722d.r2.dev/mizmu_dazzleye.png',
      link: '/projekte/dazzleye'
    },
    {
      id: 'inky-kinky',
      title: 'Inky Kinky',
      description: 'Alcohol Ink Art - Einzigartige Kunstwerke mit fließenden Farben.',
      image: 'https://pub-f50bad00c34f4dbb9e7b6b2bf1b7722d.r2.dev/mizmu_inkykinky.png',
      link: '/projekte/inky-kinky'
    }
  ];

  return (
    <div className="min-h-screen text-black relative overflow-hidden bg-white flex flex-col">
      <GradientCanvas />
      
      <div className="relative z-20 flex-1 flex flex-col">
        {/* Logo */}
        <div className="fixed top-safe-top left-safe-left z-50 p-4 xs:p-6 sm:p-8">
          <Link 
            to="/" 
            className="text-fluid-xl font-montreal font-bold tracking-tight hover:opacity-70 transition-opacity touch-target"
          >
            mizmu
          </Link>
        </div>

        <Menu />

        <main className="flex-1 flex flex-col">
          <div className="container mx-auto px-4 md:px-8 pt-32 xs:pt-36 sm:pt-40 pb-12 md:pb-20 flex-1">
            {/* Hero Section */}
            <div className="mb-20 relative">
              <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
                <div className="flex-1 md:pl-20">
                  <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-8xl font-light tracking-tight leading-[0.9] mb-6">
                    Wir erwecken<br />
                    deine Vision zum<br />
                    Leben
                  </h1>
                  <p className="text-base xs:text-lg md:text-xl text-black/70 max-w-xl tracking-tight leading-relaxed">
                    mizmu ist eine progressive digitale Agentur, bei der Ästhetik auf Funktionalität trifft. 
                    Dank unserem technischen Know-How und feinem Designgespür, verwandeln wir deinen Brand 
                    in sein bestes digitales Selbst.
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
                      src="https://pub-f50bad00c34f4dbb9e7b6b2bf1b7722d.r2.dev/mizmu_projekte.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>

            {/* Projects Title */}
            <h2 className="text-2xl font-light mb-8">Projekte</h2>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <Link 
                  key={project.id}
                  to={project.link}
                  className="group relative rounded-lg overflow-hidden aspect-[4/3] bg-black"
                >
                  {/* Project Image */}
                  <div className="absolute inset-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>

                  {/* Project Title - Always Visible */}
                  <div className="absolute top-0 left-0 p-6 z-10">
                    <div className="flex items-center gap-2">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                      <span className="text-lg font-light text-white tracking-tight">
                        {project.title}
                      </span>
                    </div>
                  </div>

                  {/* Project Description - Visible on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-lg font-light text-white tracking-tight leading-tight text-center max-w-md">
                      {project.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <PreFooter3 />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Projects;