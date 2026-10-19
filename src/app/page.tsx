import Reveal from "@/components/Reveal";
import Faq from "@/components/Faq";
import LeadForm from "@/components/LeadForm";
import FloatingDice from "@/components/FloatingDice";
import {
  brand,
  price,
  nav,
  painPoints,
  stats,
  modules,
  support,
  lifetime,
  steps,
  location,
  forWhom,
  disclaimer,
} from "@/lib/content";

function Icon({ name }: { name: string }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "live":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="12" rx="2" />
          <path d="M10 9.5v4l3.5-2z" />
          <path d="M8 21h8" />
        </svg>
      );
    case "chat":
      return (
        <svg {...common}>
          <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <path d="M9 11l3 3 8-8" />
          <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M21 12A9 9 0 1 1 12 3v9z" />
          <path d="M15 3.5A9 9 0 0 1 20.5 9H15z" />
        </svg>
      );
  }
}

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
    <div className="hero-shot">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="shot shot-a" src="/portfolio.jpg" alt="Стоимость портфеля и график доходности" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="shot shot-b" src="/positions.jpg" alt="Позиции в портфеле" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="container header-in">
          <a href="#top" className="logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
<img src="/logo.svg" alt="" className="logo-mark" />
            <span className="logo-text">
              <small>{brand.nameTop}</small>
              <b>{brand.nameMain}</b>
            </span>
          </a>
          <nav className="nav">
            {nav.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
          </nav>
          <a href="#price" className="btn btn-accent btn-sm">
            Записаться
          </a>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="glow glow-a" />
          <div className="glow glow-b" />
          <div className="container hero-grid">
            <div>
              <span className="eyebrow">Обучение + сопровождение на 12 месяцев</span>
               <h2>
                Университет нового поколения <em>международного образца</em>
              </h2>
              <h3>
                Фундаментальное направление: Инвестиции в акции <em>без хаоса</em> и догадок
              </h3>
              <p className="lead">
                Системная программа на год: от первой сделки до собственного портфеля и
                инвестиционного плана. Куратор рядом на каждом шаге, а авторские
                материалы остаются у вас <strong>навсегда и бесплатно</strong>.
              </p>
              <div className="hero-cta">
                <a href="#price" className="btn btn-accent">
                  Поступить
                </a>
                <a href="#program" className="btn btn-ghost">
                  Смотреть программу
                </a>
              </div>
              <ul className="hero-points">
                <li><Tick /> Практика на реальных компаниях</li>
                <li><Tick /> Проверка заданий куратором</li>
                <li><Tick /> Пожизненный доступ к материалам</li>
              </ul>
            </div>
            <HeroChart />
          </div>
        </section>

        {/* STATS */}
        <section className="stats">
          <div className="container stats-grid">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="stat">
                  <b>{s.value}</b>
                  <span>{s.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* PAIN */}
        <section className="section">
          <div className="container">
            <Reveal>
              <span className="eyebrow">Знакомо?</span>
              <h2>Почему большинство частных инвесторов буксует</h2>
            </Reveal>
            <div className="grid-3">
              {painPoints.map((p, i) => (
                <Reveal key={p.title} delay={i * 100}>
                  <article className="card">
                    <span className="card-num">0{i + 1}</span>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROGRAM */}
        <section className="section section-alt" id="program">
          <div className="container">
            <Reveal>
              <span className="eyebrow">Программа</span>
              <h2>Пять модулей за год. От основ до самостоятельности</h2>
            </Reveal>
            <div className="timeline">
              {modules.map((m, i) => (
                <Reveal key={m.title} delay={60}>
                  <article className="module">
                    <div className="module-side">
                      <span className="module-months">{m.months}</span>
                      <span className="module-idx">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="module-body">
                      <h3>{m.title}</h3>
                      <ul>
                        {m.points.map((p) => (
                          <li key={p}><Tick /> {p}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SUPPORT */}
        <section className="section" id="support">
          <div className="container">
            <Reveal>
              <span className="eyebrow">Сопровождение</span>
              <h2>Вы не остаётесь с курсом один на один</h2>
              <p className="sub">
                Весь год с вами работает куратор: отвечает, проверяет, разбирает и не
                даёт бросить на полпути.
              </p>
            </Reveal>
            <div className="grid-4">
              {support.map((s, i) => (
                <Reveal key={s.title} delay={i * 90}>
                  <article className="card card-icon">
                    <div className="icon"><Icon name={s.icon} /></div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* IZMIR */}
        <section className="section section-alt" id="izmir">
          <div className="container">
            <Reveal>
              <span className="eyebrow">{location.eyebrow}</span>
              <h2 className="wide">{location.title}</h2>
              <p className="sub">{location.text}</p>
              <ul className="chips">
                {location.chips.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </Reveal>
            <div className="mosaic">
              <Reveal className="m-campus">
                <figure>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/izmir/campus.jpg" alt="Кампус Эгейского университета с высоты" width={1024} height={536} />
                  <figcaption>Кампус Эгейского университета</figcaption>
                </figure>
              </Reveal>
              <Reveal delay={100} className="m-city">
                <figure>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/izmir/izmir.jpg" alt="Набережная Измира и Эгейское море" width={1000} height={1328} />
                  <figcaption>Измир, набережная</figcaption>
                </figure>
              </Reveal>
              <Reveal delay={200} className="m-room">
                <figure>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/izmir/room.jpg" alt="Комната для проживания" width={1005} height={624} />
                  <figcaption>Проживание</figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </section>

        {/* LIFETIME */}
        <section className="section lifetime on-dark" id="lifetime">
          <div className="container lifetime-grid">
            <Reveal>
              <span className="badge">Бонус · бесплатно · навсегда</span>
              <h2>Авторские материалы, которые остаются с вами пожизненно</h2>
              <p className="sub">
                Через год сопровождение закончится, а инструменты, которыми вы пользовались,
                продолжат работать. Без подписки и доплат.
              </p>
              <a href="#price" className="btn btn-accent">Получить доступ</a>
            </Reveal>
            <Reveal delay={120}>
              <div className="vault">
                <div className="vault-head">
                  <span>Авторская библиотека</span>
                  <b>∞</b>
                </div>
                <ul>
                  {lifetime.map((l) => (
                    <li key={l}><Tick /> {l}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FOR WHOM */}
        <section className="section">
          <div className="container">
            <Reveal>
              <span className="eyebrow">Для кого</span>
              <h2>Честно о том, подойдёт ли вам программа</h2>
            </Reveal>
            <div className="grid-2">
              <Reveal>
                <div className="card fit fit-yes">
                  <h3>Подойдёт</h3>
                  <ul>
                    {forWhom.yes.map((t) => (
                      <li key={t}><Tick /> {t}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="card fit fit-no">
                  <h3>Не подойдёт</h3>
                  <ul>
                    {forWhom.no.map((t) => (
                      <li key={t}><span className="cross">×</span> {t}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* AUTHOR */}
        <section className="section section-alt">
          <div className="container author">
            <Reveal>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="author-photo" src="/author.jpg" alt={brand.author} />
            </Reveal>
            <Reveal delay={100}>
              <span className="eyebrow">Автор программы</span>
              <h2>{brand.author}</h2>
              <p className="sub">{brand.authorRole}</p>
              <ul className="author-facts">
                {brand.authorFacts.map((f) => (
                  <li key={f}><Tick /> {f}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* STEPS */}
        <section className="section">
          <div className="container">
            <Reveal>
              <span className="eyebrow">Как это работает</span>
              <h2>Четыре шага до старта</h2>
            </Reveal>
            <div className="grid-4">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 80}>
                  <article className="step">
                    <b>{s.n}</b>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PRICE */}
        <section className="section price-section on-dark" id="price">
          <div className="glow glow-c" />
          <div className="container price-grid">
            <Reveal>
              <div className="price-copy">
                <span className="eyebrow">Оставить заявку на поступление</span>
                <h2>Год обучения и сопровождения + библиотека навсегда</h2>
                <ul className="price-list">
                  <li><Tick /> 5 модулей программы на 12 месяцев</li>
                  <li><Tick /> Эфиры, чат и куратор весь год</li>
                  <li><Tick /> Проверка заданий и разбор портфеля</li>
                  <li><Tick /> Пожизненный доступ к авторским материалам</li>
                </ul>
                <FloatingDice />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="price-card">
                <span className="badge">Запись</span>
                {price.show && (
                  <div className="price-row">
                    <b>{price.current}</b>
                    <span className="instead">вместо</span>
                    <s>{price.old}</s>
                  </div>
                )}
                <p className="offer-until"><span className="excl" aria-hidden>!</span>Заявки по льготной стоимости принимаются до 30 октября</p>
                <LeadForm />
                <p className="fine">{price.note}</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" id="faq">
          <div className="container narrow">
            <Reveal>
              <span className="eyebrow">Вопросы</span>
              <h2>Частые вопросы</h2>
            </Reveal>
            <Reveal delay={80}>
              <Faq />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <a href="#top" className="logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
<img src="/logo.svg" alt="" className="logo-mark" />
              <span className="logo-text">
                <small>{brand.nameTop}</small>
                <b>{brand.nameMain}</b>
              </span>
            </a>
            <div className="footer-links">
              <a href={brand.whatsapp}>WhatsApp</a>
              <a href={brand.telegram}>Telegram</a>
            </div>
          </div>
          <p className="disclaimer">{disclaimer}</p>
          <p className="copy">© 2026 {brand.name}. Все права защищены.</p>
        </div>
      </footer>
    </>
  );
}
