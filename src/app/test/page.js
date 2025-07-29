export default function Test() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen bg-blue-900/50 p-8 pb-20 gap-16">
      <main className="flex flex-col gap-[50px] items-center">
        <h1 className="text-4xl text-white">Welcome to the Test Page</h1>
        <p className="text-lg text-gray-200">
          This is a simple test page to demonstrate layout and styling.
        </p>
        <a
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-white text-blue-900 gap-2 hover:bg-gray-200 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          href="https://example.com"
          rel="noopener noreferrer"
        >
          Visit Example
        </a>
      </main>
    </div>
  );
}
