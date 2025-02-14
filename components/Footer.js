function Footer() {
  return (
    <div className="font-sen mx-4">
      <div className="flex justify-between items-center md:hidden mr-4">
        <a href="/" className="text-4xl mr-4 font-alata">Figma</a>
        <div className="space-x-6">
          <a href="/" className="hover:underline">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="/" className="hover:underline">
            <i className="bi bi-youtube"></i>
          </a>
          <a href="/" className="hover:underline">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="/" className="hover:underline">
            <i className="bi bi-facebook"></i>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 max-w-(--breakpoint-xl) mx-auto pt-[4rem] pb-[8rem] space-x-4 md:space-x-8 gap-y-12 text-sm">
        <div className="space-y-4 ml-4 hidden md:block">
          <a href="/" className="text-4xl font-alata">Figma</a>
          <div />
          <a href="/" className="block hover:underline">
            <i className="bi bi-twitter mr-3"></i>
            Twitter
          </a>
          <a href="/" className="block hover:underline">
            <i className="bi bi-youtube mr-3"></i>
            Youtube
          </a>
          <a href="/" className="block hover:underline">
            <i className="bi bi-instagram mr-3"></i>
            Instagram
          </a>
          <a href="/" className="block hover:underline">
            <i className="bi bi-facebook mr-3"></i>
            Facebook
          </a>
        </div>
        <div className="space-y-4">
          <p className="font-bold">Use Cases</p>
          <a href="/" className="block hover:underline">UI design</a>
          <a href="/" className="block hover:underline">UX design</a>
          <a href="/" className="block hover:underline">Graphic design</a>
          <a href="/" className="block hover:underline">Wireframing</a>
          <a href="/" className="block hover:underline">Diagramming</a>
          <a href="/" className="block hover:underline">Brainstorming</a>
          <a href="/" className="block hover:underline">Templates</a>
          <a href="/" className="block hover:underline">Remote design</a>
          <a href="/" className="block hover:underline">Agencies</a>
          <a href="/" className="block hover:underline">Figma for education</a>
        </div>
        <div className="space-y-4">
          <p className="font-bold">Explore</p>
          <a href="/" className="block hover:underline">Design features</a>
          <a href="/" className="block hover:underline">Prototyping features</a>
          <a href="/" className="block hover:underline">Design systems features</a>
          <a href="/" className="block hover:underline">Collaboration features</a>
          <a href="/" className="block hover:underline">Design process</a>
          <a href="/" className="block hover:underline">FigJam</a>
          <a href="/" className="block hover:underline">Pricing</a>
          <a href="/" className="block hover:underline">Figma Organization</a>
          <a href="/" className="block hover:underline">Customers</a>
          <a href="/" className="block hover:underline">Security</a>
          <a href="/" className="block hover:underline">Integrations</a>
          <a href="/" className="block hover:underline">Contact</a>
        </div>
        <div className="space-y-4">
          <p className="font-bold">Resources</p>
          <a href="/" className="block hover:underline">Blog</a>
          <a href="/" className="block hover:underline">Best practices</a>
          <a href="/" className="block hover:underline">Support</a>
          <a href="/" className="block hover:underline">Developers</a>
          <a href="/" className="block hover:underline">Learn design</a>
          <a href="/" className="block hover:underline">Careers</a>
          <a href="/" className="block hover:underline">About us</a>
        </div>
        <div className="space-y-4">
          <p className="font-bold">Compare</p>
          <a href="/" className="block hover:underline">Sketch</a>
          <a href="/" className="block hover:underline">Adobe XD</a>
          <a href="/" className="block hover:underline">Invision Studio</a>
          <a href="/" className="block hover:underline">Framer</a>
          <a href="/" className="block hover:underline">Design on Windows</a>
          <a href="/" className="block hover:underline">Miro</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
