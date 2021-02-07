import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";
import Link from "next/link";

export default function Header() {
  const [switchValue, setSwitchValue] = useState(false);
  useEffect(() => {
    setSwitchValue(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);
  useEffect(() => {
    if (switchValue) {
      document.querySelector("body").classList.add("dark");
      // document.querySelector("html").classList.remove("bg-gray-100");
      // document.querySelector("html").classList.add("bg-gray-900");
    } else {
      document.querySelector("body").classList.remove("dark");
      // document.querySelector("html").classList.remove("bg-gray-900");
      // document.querySelector("html").classList.add("bg-gray-100");
    }
    console.log(switchValue);
  }, [switchValue]);

  return (
    <header className="bg-gray-900">
      <div className="flex flex-wrap flex-row items-center justify-between lg:container px-4 py-6 mx-auto md:flex-no-wrap md:px-6">
        <div className="flex items-center">
          <Link href="/">
            <a className="text-lg md:text-xl font-bold text-white">WA - Web</a>
          </Link>
        </div>
        <div>
          {/* <ul className="flex flex-row items-center justify-center text-sm w-auto">
            {[{ title: "Acerca de", route: "/about" }].map(
              ({ route, title }) => (
                <li className="mt-3 md:mt-0 md:ml-6" key={title}>
                  <Link href={route}>
                    <a className="block text-white">{title}</a>
                  </Link>
                </li>
              )
            )}
          </ul> */}
          <Switch.Group
            as="div"
            className="flex items-center space-x-4 focus:ring "
          >
            {/* <Switch.Label>Enable notifications</Switch.Label> */}
            <Switch
              as="button"
              checked={switchValue}
              onChange={setSwitchValue}
              className={`bg-gray-600 relative inline-flex focus:ring flex-shrink-0 h-6 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:shadow-outline`}
            >
              {({ checked }) => (
                <span
                  className={`${
                    checked
                      ? "translate-x-5 bg-gray-900"
                      : "translate-x-0 bg-gray-50"
                  } inline-flex items-center justify-center w-5 h-5 transition duration-200 ease-in-out transform rounded-full`}
                >
                  <svg
                    className={`${checked ? "hidden" : ""} w-4 h-4`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <svg
                    className={`${checked ? "" : "hidden"} w-4 h-4 text-white`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                </span>
              )}
            </Switch>
          </Switch.Group>
        </div>
      </div>
    </header>
  );
}
