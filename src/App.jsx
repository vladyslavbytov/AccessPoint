import imgHero from "./assets/hero.png";
import imgIconKeyboard from "./assets/icon-keyboard.svg";
import imgIconScreenreader from "./assets/icon-screenreader.svg";
import imgIconContrast from "./assets/icon-contrast.svg";
import imgIconCourseInfo from "./assets/icon-course-info.svg";
import imgIconWcag from "./assets/icon-wcag.svg";
import imgIconAltText from "./assets/icon-alt-text.svg";
import imgIconCheck from "./assets/icon-check.svg";
import imgLogo from "./assets/logo.svg";
import imgIconGlobe from "./assets/icon-globe.svg";

const featureCards = [
  {
    icon: imgIconKeyboard,
    title: "Tastatur-Navigation",
    description: "Alle Funktionen vollständig per Tastatur bedienbar — ohne Maus.",
  },
  {
    icon: imgIconScreenreader,
    title: "Screenreader-Support",
    description: "Optimiert für Screenreader wie NVDA, JAWS und VoiceOver.",
  },
  {
    icon: imgIconContrast,
    title: "Kontrast & Schriftgröße",
    description: "WCAG AA-konforme Farben und ausreichend große Schrift.",
  },
  {
    icon: imgIconCourseInfo,
    title: "Klare Kursinformationen",
    description: "Strukturierte Darstellung aller relevanten Informationen.",
  },
  {
    icon: imgIconWcag,
    title: "WCAG-konform",
    description: "Entwickelt nach den Web Content Accessibility Guidelines.",
  },
  {
    icon: imgIconAltText,
    title: "Alternativer Text",
    description: "Alle Bilder und Grafiken mit beschreibendem Alt-Text.",
  },
];

const steps = [
  {
    number: "1",
    title: "Konto erstellen",
    description: "Registriere dich kostenlos mit deiner Uni-E-Mail-Adresse.",
  },
  {
    number: "2",
    title: "Dokument einreichen",
    description: "Lade dein Dokument hoch und wähle das gewünschte Format.",
  },
  {
    number: "3",
    title: "Barrierefreies Dokument erhalten",
    description: "Unser Team bearbeitet deine Anfrage und stellt das Dokument bereit.",
  },
];

const beneficiaries = [
  "Studierende mit Lernschwierigkeiten (ADHS)",
  "Studierende mit Sehbehinderungen",
  "Screenreader-Nutzende",
];

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col gap-4 p-6 rounded-[10px] border border-[#bac7df] bg-[#f5f6fa] shadow-[0_0_2px_0_rgba(0,0,0,0.2)] flex-1 min-w-[280px]">
      <img src={icon} alt="" className="w-12 h-12" />
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-[#2d388b] text-2xl leading-normal">{title}</h3>
        <p className="text-[#3d3d3d] text-xl leading-normal">{description}</p>
      </div>
    </div>
  );
}

function StepCard({ number, title, description }) {
  return (
    <div className="flex flex-col gap-4 items-center text-center flex-1 max-w-[330px]">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#2d388b] shrink-0">
        <span className="font-bold text-white text-2xl">{number}</span>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-[#2d388b] text-2xl leading-normal">{title}</h3>
        <p className="text-[#3d3d3d] text-xl leading-normal">{description}</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f6fa] font-['Atkinson_Hyperlegible',sans-serif]">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-[0_1.5px_3px_0_rgba(0,0,0,0.08)] px-[138px] py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img src={imgLogo} alt="AccessPoint Logo" className="w-6 h-6" />
          <span className="font-bold text-[#2d388b] text-lg leading-[27px]">AccessPoint</span>
        </a>
        <div className="flex items-center gap-4">
          <img src={imgIconGlobe} alt="" className="w-6 h-6" />
          <div className="flex items-center gap-2 text-lg">
            <span className="bg-[#2d388b] text-white px-2 py-0.5 rounded text-lg leading-[25.6px]">DE</span>
            <span className="text-[#3d3d3d] text-base">|</span>
            <span className="text-[#2d388b] px-2 py-0.5 rounded text-lg leading-[25.6px]">EN</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-[190px] pb-16 px-[138px]">
        <div className="max-w-[1164px] mx-auto flex gap-14 items-center justify-center">
          <div className="flex flex-col gap-6 flex-1">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-[#2d388b] text-[40px] leading-normal">
                Barrierefrei studieren — einfach und selbstständig.
              </h1>
              <p className="text-[#3d3d3d] text-2xl leading-normal">
                AccessPoint ist deine digitale Plattform für barrierefreie Studienmaterialien.
                WCAG-konform, für alle zugänglich.
              </p>
            </div>
            <div className="flex gap-2">
              <button className="bg-[#2d388b] text-white font-['Atkinson_Hyperlegible',sans-serif] text-lg leading-[25.6px] px-6 py-3 rounded-lg hover:bg-[#232e73] transition-colors">
                Ankelden
              </button>
              <button className="border-[1.5px] border-[#2d388b] text-[#2d388b] font-['Atkinson_Hyperlegible',sans-serif] text-lg leading-[25.6px] px-6 py-3 rounded-lg hover:bg-[#2d388b]/5 transition-colors">
                Registrieren
              </button>
            </div>
          </div>
          <div className="shrink-0 w-[492px] h-[325px]">
            <img src={imgHero} alt="Studierende nutzen AccessPoint am Laptop" className="w-full h-full object-contain" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white border-t border-b border-[#bac7df]/50 py-32 px-[138px]">
        <div className="max-w-[1164px] mx-auto flex flex-col gap-6 items-center">
          <div className="text-center max-w-[855px] flex flex-col gap-2">
            <h2 className="font-bold text-[#2d388b] text-[32px] leading-normal">Barrierefreiheit im Fokus</h2>
            <p className="text-[#3d3d3d] text-2xl leading-normal">
              Alle wichtigen Funktionen für ein barrierefreies Studium
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex gap-4">
              {featureCards.slice(0, 3).map((card) => (
                <FeatureCard key={card.title} {...card} />
              ))}
            </div>
            <div className="flex gap-4">
              {featureCards.slice(3).map((card) => (
                <FeatureCard key={card.title} {...card} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-[138px]">
        <div className="max-w-[1164px] mx-auto flex flex-col gap-6 items-center">
          <h2 className="font-bold text-[#2d388b] text-[32px] leading-normal text-center">
            So funktioniert AccessPoint
          </h2>
          <div className="flex gap-4 items-start justify-center w-full">
            {steps.map((step, i) => (
              <StepCard key={step.number} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white border-t border-[#bac7df]/50 py-32 px-[175px]">
        <div className="max-w-[1164px] mx-auto flex flex-col gap-6">
          <h2 className="font-bold text-[#2d388b] text-[32px] leading-normal">Über AccessPoint</h2>
          <div className="flex gap-10 items-start">
            <div className="flex flex-col gap-2 text-[#3d3d3d] text-xl leading-normal flex-1">
              <p>
                AccessPoint wurde entwickelt, um Studierenden mit Behinderung den gleichberechtigten
                Zugang zu Lernmaterialien zu ermöglichen.
              </p>
              <p>
                Unsere Plattform verbindet Studierende mit einem spezialisierten
                Barrierefreiheits-Team, das Dokumente in verschiedene zugängliche Formate umwandelt.
              </p>
              <p>
                Ob Großdruck, Audio, Braille oder Untertitel — wir sorgen dafür, dass niemand
                ausgeschlossen wird.
              </p>
            </div>
            <div className="flex flex-col gap-4 shrink-0">
              <h3 className="font-bold text-[#2d388b] text-2xl leading-normal">Wer profitiert?</h3>
              <ul className="flex flex-col gap-2">
                {beneficiaries.map((item) => (
                  <li key={item} className="flex gap-2 items-center text-[#3d3d3d] text-xl leading-normal">
                    <img src={imgIconCheck} alt="" className="w-6 h-6 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#2d388b] py-16 px-[326px] flex flex-col items-center gap-4">
        <div className="flex flex-col gap-2 items-center text-center text-white">
          <h2 className="font-bold text-[32px] leading-normal">Bereit für barrierefreies Studieren?</h2>
          <p className="text-xl leading-normal">
            Erstelle jetzt dein Konto und erhalte Unterstützung bei der Umsetzung deiner Materialien.
          </p>
        </div>
        <button className="bg-white text-[#2d388b] font-['Atkinson_Hyperlegible',sans-serif] text-lg leading-[25.6px] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
          Jetzt starten
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-[#bac7df]/50 h-[120px] flex flex-col items-center justify-center gap-4 text-[#3d3d3d] text-base leading-[22.4px]">
        <nav className="flex gap-4">
          <a href="#" className="underline hover:text-[#2d388b] transition-colors">Kontakt</a>
          <a href="#" className="underline hover:text-[#2d388b] transition-colors">Barrierefreiheit</a>
          <a href="#" className="underline hover:text-[#2d388b] transition-colors">Datenschutz</a>
          <a href="#" className="underline hover:text-[#2d388b] transition-colors">Impressum</a>
        </nav>
        <p>© 2026 AccessPoint. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  );
}
