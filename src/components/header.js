import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/whatsabi.svg";

export default function Header() {
  return (
    <header className="bg-emerald-800">
      <div className="flex flex-wrap flex-row items-center justify-center lg:container px-4 py-6 mx-auto md:flex-no-wrap md:px-6">
        <Link href="/">
          <a>
            <Image src={Logo} alt="Whatsabi" width={90} height={90} />
          </a>
        </Link>
      </div>
    </header>
  );
}
