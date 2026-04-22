import RegisterForm from "./pages/RegisterForm";

function App() {
  return (
    // Menjadikan screen penuh dan center secara vertikal
    <div className="min-h-screen bg-red-900 flex items-center justify-center p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Kolom Kiri: Visual/Branding */}
        <div className="ml-25 mt-15 size-100">
         <img src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png" alt="hero" className="hover:scale-135 transition active:scale-95" />
         <img src="https://www.invofest-harkatnegeri.com/assets/text-image.png" alt="text" />
        </div>

        {/* Kolom Kanan: Form */}
        <div className="p-8 lg:p-12 overflow-y-auto max-h-[90vh]">
          <h1 className="text-2xl font-bold text-red-900 mb-3">Selamat Datang di Form Pendaftaran Invofest 2026</h1>
          <RegisterForm />
        </div>

      </div>
    </div>
  );
};

export default App;