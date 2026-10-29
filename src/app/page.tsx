import ResultsGallery from "@/components/ResultsGallery";
import { brand, disclaimer } from "@/lib/content";

const WHATSAPP_URL = `https://wa.me/447453549621?text=${encodeURIComponent(
  "Хочу узнать про акции за 0.9$"
)}`;

function Tick() {
  return (
    <svg className="tick" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="11" fill="currentColor" opacity=".14" />
      <path d="M7 12.5l3.2 3.2L17 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HeroChart() {
  return (
    <div className="shots">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="shots-img shots-a" src="/portfolio.jpg" alt="Стоимость портфеля и график доходности" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="shots-img shots-c" src="/trade.jpg" alt="Закрытая сделка по IONQ" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="shots-img shots-b" src="/positions.jpg" alt="Позиции в портфеле" />
    </div>
  );
}

function Logo() {
  return (
    <a href="#top" className="logo">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo.svg" alt="" className="logo-mark" />
      <span className="logo-text">
        <small>{brand.nameTop}</small>
        <b>{brand.nameMain}</b>
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <div className="one-screen">
      <header className="header">
        <div className="container header-in">
          <Logo />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent btn-sm"
          >
            Подписаться
          </a>
        </div>
      </header>

      <main id="top" className="one-screen-main">
        <section className="hero hero-one">
          <div className="glow glow-a" />
          <div className="glow glow-b" />
          <div className="container hero-grid">
            <HeroChart />

            <div className="hero-text">
              <span className="eyebrow">Университет нового поколения международного образца</span>
              <h1>
                Находим <em>дешёвые акции от 0.9$</em> и помогаем успешно превращать 100$ в 15,000$
              </h1>
              <p className="lead">
                Системная программа на год с куратором: от первой сделки до собственного
                портфеля. Материалы остаются у вас <strong>навсегда и бесплатно</strong>.
              </p>

              <div className="hero-cta">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent"
                >
                  Подписаться
                </a>
                <ResultsGallery />
              </div>

              <ul className="hero-points">
                <li><Tick /> Поиск недорогих акций и практика на реальных компаниях</li>
                <li><Tick /> Проверка заданий куратором</li>
                <li><Tick /> Пожизненный доступ к материалам</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="disclaimer-bar">
        <div className="container">
          <p className="disclaimer">{disclaimer}</p>
        </div>
      </footer>
    </div>
  );
}
