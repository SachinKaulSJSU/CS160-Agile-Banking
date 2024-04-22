import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-white sticky top-0 z-50 shadow">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 z-50"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                aria-controls="logo-sidebar"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                type="button"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    fillRule="evenodd"
                  />
                </svg>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="lg:hidden block">
              <DropdownMenuLabel>Navigation Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link href="/">
                <DropdownMenuItem>Home</DropdownMenuItem>
              </Link>
              <Link href="/locations">
                <DropdownMenuItem>ATMs/Locations</DropdownMenuItem>
              </Link>
              <Link href="/aboutus">
                <DropdownMenuItem>About Us</DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              <Link href="/login">
                <DropdownMenuItem>Login</DropdownMenuItem>
              </Link>
              <Link href="/enroll">
                <DropdownMenuItem>Enroll</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
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
        </div>
        <div className="lg:flex lg:gap-x-12 hidden">
          <a
            href="/locations"
            className="text-sm font-semibold leading-6 text-gray-900 hovereffect"
          >
            ATMs/Locations
          </a>
          <a
            href="/aboutus"
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
    </div>
  );
}
