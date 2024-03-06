export default function Header() {
  return (
    <header className="bg-white shadow-md z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 "
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="/agile_logo_v1.png"
              alt="agile logo"
            />
          </a>
        </div>

        <div className="lg:flex lg:gap-x-12">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            ATMs/Locations
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Support
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            About Us
          </a>
        </div>
        <div className="lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
