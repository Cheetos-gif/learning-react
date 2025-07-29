export default function Header() {
  return (
    <header className="text-center mb-8 !bg-black ">
      <h1 className="text-3xl text-white">Learning React</h1>
      <nav>
        <ul className="flex justify-center space-x-4">
          <li>
            <a href="/" className="text-white hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/test" className="text-white hover:underline">
              Test
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
