import { useState } from 'react';

import { XMarkIcon } from '@heroicons/react/24/solid';

function Ribbon() {
  const [isClosed, setIsClosed] = useState(false);

  return (
    <div className={`bg-[#c7b9ff] py-3 flex justify-center items-center relative font-polite ${isClosed && 'hidden'}`}>
      <p className="mx-4 md:mx-11 text-center">
        Announcing plugins, widgets, Open sessions, and more. Learn about six new ways to jam with your team.{' '}
        <a href="/" className="text-blue-600 hover:underline">Read more.</a>
      </p>
      <button className="px-3" onClick={() => setIsClosed(true)}>
        <XMarkIcon className="h-5 w-5 absolute top-3.5 right-4 md:right-11" />
      </button>
    </div>
  );
}

export default Ribbon;
