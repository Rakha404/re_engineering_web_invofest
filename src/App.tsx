import "./App.css";
import Button from "./components/Button";
import Image from "./components/Image";
import Collapse from "./components/Collapse";
import Header from "./components/Header";
import NavLink from "./components/Navlink";
import DescProps from "./components/Desc";
import SpeakerCard from "./components/SpeakerCard";

function App() {
  return (

    <div className="container mx-auto flex flex-col items-center min-h-screen">

      <div className="w-full">
        <Header />
      </div>

      <div className="flex flex-row-reverse items-center justify-between gap-10 mt-10 w-full max-w-6xl px-10">

        {/* SISI KANAN: Gambar Maskot */}
        <div className="flex-1 flex justify-end">
          <div className="max-w-90">
            <Image imageUrl="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png" />
          </div>
        </div>

        {/* SISI KIRI: Deskripsi & Tombol */}
        <div className="flex-1 flex flex-col items-start gap-6 text-left">
          <DescProps
            foto="https://www.invofest-harkatnegeri.com/assets/text-image.png"
            name=""
            description="Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. Dengan mengusung tema “Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow ”."
          />

          <div className="flex gap-4">
            <Button title=" Hubungi Panitia" />
            <Button title=" Info Selengkapnya" />
          </div>
        </div>

      </div>

      <div className="bg-pink-100 h-125 w-full"
        style={{ clipPath: 'ellipse(100% 80% at 50% 100%)' }}>
      </div>
      <div className="bg-pink-100 h-125 w-full"
        style={{ clipPath: 'ellipse(100% 80% at 50% 10%)' }}>
      </div>



      <div className="flex flex-row-reverse items-center justify-between gap-10 mt-10 w-full max-w-6xl px-10">

        {/* SISI KANAN: Gambar Maskot */}
        <div className="flex-1 flex justify-end">
          <div className="max-w-90">
            <Image imageUrl="https://www.invofest-harkatnegeri.com/assets/Maskot-Seminar.png" />
          </div>
        </div>

        {/* SISI KIRI: Deskripsi & Tombol */}
        <div className="flex-1 flex flex-col items-start gap-6 text-left">
          <DescProps
            foto=""
            name="IT SEMINAR"
            description="Seminar Nasional Teknologi Informasi ini mengangkat tema Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif. Kami bertujuan untuk menggeser fokus dari ketakutan akan kompetisi menjadi eksplorasi peluang kolaborasi. Seminar ini akan mengupas tuntas bagaimana kita dapat merancang sistem, etika, dan lingkungan kerja di mana AI berfungsi sebagai mitra yang memperkuat kecerdasan, kreativitas, dan produktivitas manusia—bukan sebagai pengganti."
          />

          <div className="flex gap-4">
            <Button title=" Hubungi Panitia" />
            <Button title=" Info Selengkapnya" />
          </div>
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-50 mt-10 mb-10">
        <SpeakerCard
          name="Derry Agung T."
          role="Aws Indonesia"
          imageUrl="https://www.invofest-harkatnegeri.com/assets/seminar/Seminar%20Dery.png"
        />
        <SpeakerCard
          name="Sowam Habibi"
          role="Google Indonesia"
          imageUrl="https://www.invofest-harkatnegeri.com/assets/seminar/seminar%20sowam.png"
        />

      </div>

      <div className="border border-red-500 rounded-lg overflow-hidden max-w-lg mx-auto w-full mt-10 mb-10">
        <Collapse
          title="Lorem Ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        />
      </div>


      <div className="mt-10 mb-10">
        <NavLink
          label="Link Youtube"
          href="https://www.youtube.com/watch?v=F4n3mqKMVZ0"
          icon
          isActive
        />
      </div>

    </div>

  );
}

export default App;
