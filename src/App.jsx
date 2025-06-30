import BMICalculator from './components/BMICalculator';

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      
      
      <header className="p-6">
        <h1 className="text-3xl font-bold">MeasureUp</h1>
      </header>

      
      <main className="flex-grow flex justify-center items-start pt-8 px-4 lg:px-8">
        <BMICalculator />
      </main>

      
      <footer className="bg-gray-900 text-gray-400 text-sm text-center py-4">
        © {new Date().getFullYear()} G Gokul. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
