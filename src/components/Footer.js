export default function Footer() {
  return (
    <footer className="text-center mt-8 bg-black p-4">
      <p className="text-white text-sm">
        © {new Date().getFullYear()} Learning React. All rights reserved.
      </p>
      <nav>
        <ul className="flex justify-center space-x-4">
          <li>
            <a href="/privacy" className="text-white hover:underline">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms" className="text-white hover:underline">
              Terms of Service
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
