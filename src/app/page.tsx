export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Hello, TailwindCSS!</h1>
        <p className="text-gray-600 bg-gray-100 p-4 rounded-md">
          This is a test page with TailwindCSS styling.
        </p>
        <div className="mt-6">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Click me
          </button>
        </div>
      </div>
    </main>
  );
}