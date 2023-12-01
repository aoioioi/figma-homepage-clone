import { ArrowRightIcon } from '@heroicons/react/24/solid'

function Main() {
  return (
    <div className="px-4 md:px-11 py-16 pb-32 bg-[#fafafa]">
      <div className="flex space-x-4 sticky top-8">
        <button className="text-sm font-semibold px-5 py-2 border border-transparent bg-blue-400 text-white rounded-3xl font-custom">Brainstorm</button>
        <button className="text-sm font-semibold px-5 py-2 border border-gray-400 text-gray-400 bg-white rounded-3xl font-custom">Design</button>
        <button className="text-sm font-semibold px-5 py-2 border border-gray-400 text-gray-400 bg-white rounded-3xl font-custom">Build</button>
      </div>
      <div className="flex flex-col xl:flex-row justify-around items-center">
        <div className="lg:p-14">
          <div className="max-w-md">
            <h2 className="text-4xl my-6 font-polite">Explore ideas together</h2>
            <p className="text-xl mb-6 tracking-wide">Diagram, sticky-note and workshop in FigJam—an online whiteboard for you and your team to brainstorm in the open.</p>
            <a href="/" className="font-bold text-xl text-blue-500 tracking-wide hover:underline">
              Meet FigJam
              <ArrowRightIcon className="h-5 w-5 inline mx-2" />
            </a>
          </div>
        </div>
        <img src="/images/brainstorm.png" alt="" className="" />
      </div>
      <div className="flex flex-col xl:flex-row justify-around items-center">
        <div className="lg:p-14">
          <div className="max-w-md">
            <h2 className="text-4xl my-6 font-polite">Bring those ideas to life</h2>
            <p className="text-xl mb-6 tracking-wide">FigJam and Figma live side-by-side, so all design work, from ideation to execution, can be found in one place. </p>
          </div>
        </div>
        <img src="/images/design.png" alt="" className="" />
      </div>
      <div className="flex flex-col xl:flex-row  justify-around items-center">
        <div className="lg:p-14">
          <div className="max-w-md">
            <h2 className="text-4xl my-6 font-polite">Powerful design systems</h2>
            <p className="text-xl mb-6 tracking-wide">Increase design consistency with searchable assets and shareable styles in one home—centralized and accessible to your entire company.</p>
            <a href="/" className="font-bold text-xl text-green-500 tracking-wide hover:underline">
              Build systems
              <ArrowRightIcon className="h-5 w-5 inline mx-2" />
            </a>
          </div>
        </div>
        <img src="/images/build.png" alt="" />
      </div>
    </div>
  )
}

export default Main
