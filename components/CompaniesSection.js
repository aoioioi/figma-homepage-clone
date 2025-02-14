import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';

function CompaniesSection() {
  return (
    <div className="flex items-center py-10 border-2 border-gray-900 rounded-2xl my-14 mx-4 sm:mx-8 lg:mx-36 2xl:mx-72 px-10">
      <p className="sm:max-w-sm grow mr-4">
        Join other industry-leading organizations pushing boundaries and solving problems in Figma
      </p>
      <div className="space-x-20 md:ml-12 whitespace-nowrap hidden sm:flex items-center sm:mt-0">
        <i className="bi bi-slack text-4xl"></i>
        <i className="bi bi-twitter text-4xl"></i>
        <i className="bi bi-behance text-4xl hidden lg:block"></i>
        <i className="bi bi-pinterest text-4xl hidden xl:block"></i>
        <i className="bi bi-linkedin text-4xl hidden xl:block"></i>
        <button>
          <ArrowRightCircleIcon className="h-9 w-9 inline" />
        </button>
      </div>
    </div>
  );
}

export default CompaniesSection;
