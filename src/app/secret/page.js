

export default function Secret() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main>
        <h1 className="text-3xl text-center">Secret Page</h1>
        <p className="text-center mt-4">
          This is a secret page only accessible to authorized users.
        </p>
      </main>
    </div>
  );
}
