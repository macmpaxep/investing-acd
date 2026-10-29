import LeadForm from "@/components/LeadForm";
import ResultsGallery from "@/components/ResultsGallery";
import Modal from "@/components/Modal";
import { brand, price, disclaimer } from "@/lib/content";

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
          <Modal label="Подписаться" triggerClassName="btn btn-accent btn-sm" title="Заявка на подписку">
            <SubscribeContent />
          </Modal>
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
                Находим <em>дешёвые акции от 0.9$</em> и помогаем успешно инвестировать 100$ в акции США и преумножать до 15,000$
              </h1>
              <p className="lead">
                Системная программа на год с куратором: от первой сделки до собственного
                портфеля. Материалы остаются у вас <strong>навсегда и бесплатно</strong>.
              </p>

              <div className="hero-cta">
                <Modal label="Подписаться" triggerClassName="btn btn-accent" title="Заявка на подписку">
                  <SubscribeContent />
                </Modal>
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

function SubscribeContent() {
  return (
    <div className="price-card price-card-modal">
      <span className="badge">Запись</span>
      {price.show && (
        <div className="price-row">
          <b>{price.current}</b>
          <span className="instead">вместо</span>
          <s>{price.old}</s>
        </div>
      )}
      <LeadForm />
      <p className="fine">{price.note}</p>
    </div>
  );
}
