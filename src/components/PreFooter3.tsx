import React from 'react';
import { Link } from 'react-router-dom';

const PreFooter3 = () => {
  return (
    <div className="w-screen bg-black text-white relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]">
      <div className="w-full py-12 xs:py-16 sm:py-20 px-4 xs:px-6 sm:px-8 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-[1.1] mb-8 md:mb-0">
              Hast du ein Projekt und<br className="hidden xs:block" />
              brauchst Hilfe?
            </h2>
            <div className="flex justify-center md:justify-start">
              <Link 
                to="/kontakt"
                className="inline-flex items-center justify-center w-[140px] h-[140px] xs:w-[160px] xs:h-[160px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] border-2 border-white rounded-full hover:bg-white hover:text-black transition-colors text-base xs:text-lg sm:text-xl"
              >
                Let's get started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreFooter3;