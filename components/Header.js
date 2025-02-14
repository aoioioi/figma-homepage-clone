import { useState } from 'react';

import { Bars3Icon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

function Header() {
  const [scrollY, setScrollY] = useState(0);

  const fadeInOutY = (direction, duration) => {
    return {
      initial: {
        y: direction,
        opacity: 0,
      },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          duration: duration ? duration : 0.5,
          ease: 'easeInOut'
        },
      },
    };
  };

  if (typeof window === 'object') {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
  }

  return (
    <header className="flex mx-4 md:mx-11 my-5">
      <a href="/" className="h-9 w-9">
        <svg viewBox="0 0 38 57"><path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"></path><path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"></path><path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z"></path><path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"></path><path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"></path></svg>
      </a>
      <div className="bg-trans grow"></div>
      <div className="space-x-6 hidden lg:block font-polite">
        <a href="/" className="tracking-wide hover:underline">Products</a>
        <a href="/" className="tracking-wide hover:underline">Enterprise</a>
        <a href="/" className="tracking-wide hover:underline">Pricing</a>
        <a href="/" className="tracking-wide hover:underline">Community</a>
        <a href="/" className="tracking-wide hover:underline">Company</a>
        <a href="/" className="tracking-wide hover:underline">Log in</a>
        <button className="text-white bg-black px-6 py-3 rounded-xl hover:-translate-y-0.5 transition duration-150">Sign Up</button>
      </div>
      <div className="flex items-center mt-1 lg:hidden">
        <button className="text-white bg-black px-6 py-3 rounded-xl mx-5 font-polite hover:-translate-y-0.5 transition duration-150">Sign Up</button>
        <button>
          <Bars3Icon className="h-8 w-8" />
        </button>
      </div>
      <motion.button
        initial="initial"
        animate="animate"
        variants={scrollY > 200 && fadeInOutY(-1000, 0.5)}
        className={`text-white bg-black px-6 py-3 rounded-xl font-polite hover:-translate-y-0.5 transition duration-150 ${scrollY > 200 ? 'fixed top-8 right-3 md:right-11 z-10' : 'hidden'}`}
      >
        Sign Up
      </motion.button>
    </header>
  );
}

export default Header;