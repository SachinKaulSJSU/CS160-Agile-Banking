export default function Header() {
  return (
    <header className="bg-white sticky top-0 z-50 shadow">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Agile Bank</span>
            <img
              className="h-8 w-auto"
              src="/agile_logo_v1.png"
              alt="agile logo"
            />
          </a>
        </div>

        <div className="lg:flex lg:gap-x-12">
          <a
            href="/locations"
            className="text-sm font-semibold leading-6 text-gray-900 hovereffect"
          >
            ATMs/Locations
          </a>
          <a
            href="/deposit"
            className="text-sm font-semibold leading-6 text-gray-900 hovereffect"
          >
            Deposit
          </a>
          <a
            href="aboutus"
            className="text-sm font-semibold leading-6 text-gray-900 hovereffect"
          >
            About Us
          </a>
        </div>

        <div className="lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/login"
            className="text-sm font-semibold leading-6 text-gray-900 hovereffect"
          >
            Login <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
