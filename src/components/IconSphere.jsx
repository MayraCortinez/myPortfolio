
import { motion, useMotionValue, useTransform } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

const icons = [
  'icon1.png',
  'icon2.png',
  'icon3.png',
  'icon4.png',
  'favicon.svg',
  'bg.svg',
  'icon7.png',
  'https://cdn.prod.website-files.com/62865614b39c464b76d339aa/650c6cc436d4b956acb9dca1_Bootstrap_logo-minimal-min.svg',
  'icon9.png',
  'icon10.svg',
];

const IconSphere = () => {
  const sphereRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (sphereRef.current) {
        setDimensions({
          width: sphereRef.current.offsetWidth,
          height: sphereRef.current.offsetHeight,
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseMove = (e) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };

  const radius = Math.min(dimensions.width, dimensions.height) / 2;

  const iconElements = icons.map((icon, index) => {
    const theta = (index / icons.length) * Math.PI * 2;
    const x = Math.cos(theta) * radius;
    const y = Math.sin(theta) * radius;

    return (
      <motion.img
        key={icon}
        src={icon}
        className="absolute"
        style={{
          left: `${50 + (x / dimensions.width) * 50}%`,
          top: `${50 + (y / dimensions.height) * 50}%`,
          width: '50px',
          height: '50px',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
    );
  });

  return (
    <motion.div
      ref={sphereRef}
      className="relative w-full h-full"
      onMouseMove={handleMouseMove}
    >
      {iconElements}
    </motion.div>
  );
};

export default IconSphere;
