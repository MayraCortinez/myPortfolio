// src/components/Banner.jsx
import React from 'react';
import Atropos from 'atropos/react';
import 'atropos/css';

const Banner = () => {
  return (
    <Atropos className="atropos-banner" shadow={false}>
    <div className="intro w-full" data-atropos-offset="0" id="intro">
        <div className="cube-01" data-atropos-offset="5"></div>
        <div className="cube-02" data-atropos-offset="10"></div>
        <div className="cube-03" data-atropos-offset="15"></div>
        <div className="cube-04" data-atropos-offset="30"></div>
        <div className="cube-05" data-atropos-offset="35"></div>
        <section className="text-center pt-36" data-atropos-offset="0">
          <div className="text-intro" data-atropos-offset="15">
            <p className="p-intro" data-atropos-offset="-5">Bienvenida/o a mi portafolio</p>
            <p className="text-white font-bold text-2xl">Soy una desarrolladora web Full Stack especializada en JavaScript y React.</p>
          </div>
        </section>
    </div>
    </Atropos>
  );
};

export default Banner;
