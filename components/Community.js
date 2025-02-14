import { Fragment } from "react";

import CommunityMarquee from "./CommunityMarquee";

import Marquee from "react-fast-marquee";

const BUZZWORTHY_COMMUNITY = [
  {
    src: '/images/figma_spotify.png',
    title: 'Spotify',
    likes: '30.2K',
    icon: ''
  },
  {
    src: '/images/figma_3d_pack.png',
    title: 'Alzea',
    likes: '127K',
    icon: ''
  },
  {
    src: '/images/figma_material.png',
    title: 'Material Design',
    likes: '228K',
    icon: ''
  },
];

const TRENDING_PLUGINS = [
  {
    title: 'Design Lint',
    description: 'Design Lint is an open source plugin that finds missing styles within your project.',
    src: '/images/design_lint.png'
  },
  {
    title: 'Unsplash',
    description: 'Insert beautiful images from Unsplash straight into your canvas.',
    src: '/images/unsplash.png'
  },
  {
    title: 'Stark',
    description: 'A suite of integrated accessibility tools for your game-changing project.',
    src: '/images/stark.png'
  },
];

function Community() {
  const marqueeTranslate = () => {
    return {
      initial: {
        x: 2000,
      },
      animate: {
        x: -4000,
        transition: {
          delay: 0,
          duration: 30,
          ease: 'linear',
          repeat: Infinity,
        },
      },
    };
  };

  return (
    <Fragment>
      <div className="py-3 bg-yellow-400 border-t-2 border-black overflow-x-hidden"
      >
        <Marquee
          gradient={false}
          speed={65}
          className="overflow-y-hidden"
        >
          <CommunityMarquee />
        </Marquee>
      </div>
      <div className="bg-black text-white pb-44">
        <div className="py-28 mx-4 md:mx-0">
          <h3 className="text-4xl my-4 font-bold text-center">Join the community</h3>
          <p className="text-xl leading-8 text-center max-w-2xl flex mx-auto">Learn from others, share your work, and extend your tool set with a diverse group of designers, plugin creators, researchers, illustrators, content writers, and many more from around the world.</p>
        </div>
        <div className="max-w-(--breakpoint-xl) mx-auto">
          <p className="text-sm font-semibold text-yellow-300 my-1 mx-3">BUZZWORTHY</p>
          <p className="text-xl font-bold mx-3">Excellent files by and for our community</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6  gap-y-4 lg:gap-y-0 mt-4 mb-20 mx-3">
            {BUZZWORTHY_COMMUNITY.map(item => (
              <a href="/" key={item.src} className="flex flex-col">
                <img src={item.src} alt="" className="rounded-xl" />
                <div className="flex justify-between text-sm font-semibold mt-1 text-gray-500">
                  {item.title}
                  <p>
                    <i className="bi bi-people-fill"></i>{' '}
                    {item.likes}
                  </p>
                </div>
              </a>
            ))}
          </div>
          <p className="text-sm font-semibold text-yellow-300 my-1 mx-3">THIS WEEK</p>
          <p className="text-xl font-bold mx-3">Trending plugins</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-4 lg:gap-y-4 mt-4 mb-32 mx-3">
            {TRENDING_PLUGINS.map(item => (
              <a href="/" key={item.src} className="flex px-4 py-4 rounded-xl hover:bg-gray-700 hover:bg-opacity-50 hover:ring-1 hover:ring-gray-600">
                <img src={item.src} alt="" className="h-16 w-16 rounded-[20px]" />
                <div className="ml-4">
                  <p className="text-xl font-bold">{item.title}</p>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </div>
              </a>
            ))}
          </div>
          <button className="flex mx-auto bg-white text-black border-2 border-transparent rounded-lg px-12 py-3  my-6 font-polite hover:-translate-y-0.5 transition duration-150">Browse Figma community</button>
        </div>
      </div>
    </Fragment>
  );
}

export default Community;
