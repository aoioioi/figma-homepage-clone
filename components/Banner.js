function Banner() {
  return (
    <div className="mx-4">
      <h1 className="text-5xl md:text-8xl text-center pt-20 pb-14 font-polite">Nothing great is <br /> <span className="">made</span> alone.</h1>
      <div className="mx-auto max-w-lg">
        <p className="text-center text-xl tracking-wide">Figma connects everyone in the design process so teams can deliver better products, faster.</p>
      </div>
      <button className="flex grow mx-auto bg-black text-white rounded-xl font-polite px-8 py-3 my-10 hover:-translate-y-0.5 transition duration-150">Try Figma for free</button>
      <img
        src="https://cdn.sanity.io/images/599r6htc/production/455e29e0d05e64300b4a2aa99bcd25fa10a341a7-6969x2010.png?rect=0,0,6969,2008&w=2016&h=581&q=75&fit=max&auto=format"
        alt=""
        className="md:mt-24 -ml-20 md:-ml-40 lg:-ml-64 "
        srcSet="https://cdn.sanity.io/images/599r6htc/production/455e29e0d05e64300b4a2aa99bcd25fa10a341a7-6969x2010.png?w=2016&q=75&fit=max&auto=format&dpr=0.5 1008w,
        https://cdn.sanity.io/images/599r6htc/production/455e29e0d05e64300b4a2aa99bcd25fa10a341a7-6969x2010.png?w=2016&q=75&fit=max&auto=format&dpr=0.75 1512w,
        https://cdn.sanity.io/images/599r6htc/production/455e29e0d05e64300b4a2aa99bcd25fa10a341a7-6969x2010.png?w=2016&q=75&fit=max&auto=format&dpr=1 2016w,
        https://cdn.sanity.io/images/599r6htc/production/455e29e0d05e64300b4a2aa99bcd25fa10a341a7-6969x2010.png?w=2016&q=75&fit=max&auto=format&dpr=1.5 3024w,
        https://cdn.sanity.io/images/599r6htc/production/455e29e0d05e64300b4a2aa99bcd25fa10a341a7-6969x2010.png?w=2016&q=75&fit=max&auto=format&dpr=2 4032w"
        sizes="(max-width: 500px) 100vw"
      />
    </div>
  );
}

export default Banner;
