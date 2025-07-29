import Link from "next/link";

export default function Header() {
  return (
    <header className="text-center mb-8 !bg-black ">
      <h1 className="text-3xl text-white">Learning React</h1>
      <nav>
        <ul className="flex justify-center space-x-4">
          <li>
            <Link href="/" className="text-white hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/test" className="text-white hover:underline">
              Test
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
