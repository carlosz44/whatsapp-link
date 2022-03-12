import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900">
      <div className="flex flex-wrap flex-row items-center justify-between lg:container px-4 py-6 mx-auto md:flex-no-wrap md:px-6">
        <div className="flex items-center">
          <Link href="/">
            <a className="text-lg md:text-xl font-bold text-white">Whatsabi</a>
          </Link>
        </div>
      </div>
    </header>
  );
}
