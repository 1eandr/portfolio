import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { content, profile, type Lang } from './content'
import AnimatedContent from './components/AnimatedContent.jsx'
import Aurora from './components/Aurora.jsx'
import BlurText from './components/BlurText.jsx'
import CountUp from './components/CountUp.jsx'
import FadeContent from './components/FadeContent.jsx'
import GradientText from './components/GradientText.jsx'
import LogoLoop from './components/LogoLoop.jsx'
import SplitText from './components/SplitText.jsx'
import SpotlightCard from './components/SpotlightCard.jsx'

const THEME_KEY = 'portfolio-theme'
const LANG_KEY = 'portfolio-lang'
const YEAR = new Date().getFullYear()

type Theme = 'dark' | 'light'

const ICONS: { slug: string; name: string }[] = [
  { slug: 'python', name: 'Python' },
  { slug: 'javascript', name: 'JavaScript' },
  { slug: 'html5', name: 'HTML5' },
  { slug: 'css', name: 'CSS3' },
  { slug: 'flask', name: 'Flask' },
  { slug: 'git', name: 'Git' },
  { slug: 'github', name: 'GitHub' },
  { slug: 'sqlite', name: 'SQLite' },
]

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem(THEME_KEY)
    return saved === 'light' || saved === 'dark' ? saved : 'dark'
  })
  const [lang, setLang] = useState<Lang>(() => {
    return localStorage.getItem(LANG_KEY) === 'en' ? 'en' : 'pt'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
    localStorage.setItem(LANG_KEY, lang)
  }, [lang])

  const t = content[lang]
  const isLight = theme === 'light'
  const grad = isLight ? ['#0891b2', '#6d4aff', '#0891b2'] : ['#22d3ee', '#7c5cff', '#22d3ee']

  const logos = useMemo(
    () =>
      ICONS.map(icon => ({
        src: isLight
          ? `https://cdn.simpleicons.org/${icon.slug}`
          : `https://cdn.simpleicons.org/${icon.slug}/ffffff`,
        alt: icon.name,
      })),
    [isLight],
  )

  const nav: [string, string][] = [
    ['#about', t.nav.about],
    ['#experience', t.nav.experience],
    ['#journey', t.nav.journey],
    ['#tech', t.nav.tech],
    ['#next', t.nav.next],
    ['#languages', t.nav.languages],
    ['#contact', t.nav.contact],
  ]

  const title = (text: string): ReactNode => (
    <h2>
      <GradientText colors={grad} animationSpeed={7} className="gt-title">
        {text}
      </GradientText>
    </h2>
  )

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <span className="brand">Leandro Santos</span>
          <nav className="nav">
            {nav.map(([href, label]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            className="icon-btn"
            onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
            aria-label={t.ui.lang}
            title={t.ui.lang}
          >
            🌐 {lang.toUpperCase()}
          </button>
          <button
            type="button"
            className="icon-btn"
            onClick={() => setTheme(isLight ? 'dark' : 'light')}
            aria-label={t.ui.theme}
            title={t.ui.theme}
          >
            {isLight ? '🌙' : '☀️'}
          </button>
        </div>
      </header>

      <main>
        {/* ================= HERO ================= */}
        <section className="hero">
          <div className="hero__bg" aria-hidden="true">
            <Aurora
              colorStops={isLight ? ['#0891b2', '#6d4aff', '#22d3ee'] : ['#22d3ee', '#7c5cff', '#22d3ee']}
              amplitude={0.85}
              blend={0.55}
              lightMode={isLight}
            />
          </div>
          <div className="hero__inner">
            <span className="pill">
              <span className="dot" /> {t.ui.openToWork}
            </span>
            <SplitText
              text={t.hero.name}
              tag="h1"
              splitType="words"
              delay={70}
              duration={0.9}
              textAlign="left"
            />
            <GradientText colors={grad} animationSpeed={6} className="hero__role">
              {t.hero.role}
            </GradientText>
            <BlurText
              text={t.hero.tagline}
              className="hero__tagline"
              animateBy="words"
              delay={35}
              stepDuration={0.45}
            />
            <div className="hero__cta">
              <a className="btn btn--primary" href="#contact">
                {t.hero.ctaContact} →
              </a>
              <a className="btn btn--ghost" href="#tech">
                {t.hero.ctaTech}
              </a>
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <AnimatedContent className="section-wrap" distance={60} threshold={0.12}>
          <section className="section" id="about">
            <p className="section__label">{t.nav.about}</p>
            {title(t.about.title)}
            <div className="section-card">
              {t.about.body.map(paragraph => (
                <p key={paragraph} style={{ marginBottom: '1rem' }}>
                  {paragraph}
                </p>
              ))}
              <FadeContent blur threshold={0.2} className="stats">
                {t.about.stats.map(stat => (
                  <div className="stat" key={stat.label}>
                    <div className="stat__value">
                      <CountUp to={stat.value} from={stat.value > 1000 ? stat.value - 5 : 0} duration={1.6} />
                    </div>
                    <div className="stat__label">{stat.label}</div>
                  </div>
                ))}
              </FadeContent>
            </div>
          </section>
        </AnimatedContent>

        {/* ================= EXPERIENCE ================= */}
        <AnimatedContent className="section-wrap" distance={60} threshold={0.12}>
          <section className="section" id="experience">
            <p className="section__label">{t.nav.experience}</p>
            {title(t.experience.title)}
            <SpotlightCard className="card-spotlight">
              <div className="exp-head">
                <h3>{t.experience.role}</h3>
                <span className="exp-period">{t.experience.period}</span>
              </div>
              <p className="exp-company">{t.experience.company}</p>
              <p>{t.experience.intro}</p>

              <div className="grid-2" style={{ marginTop: '1.5rem' }}>
                {t.experience.activities.map(activity => (
                  <SpotlightCard className="card-spotlight" key={activity.title}>
                    <h3>{activity.title}</h3>
                    <p>{activity.text}</p>
                  </SpotlightCard>
                ))}
              </div>

              <p className="section__label" style={{ marginTop: '2rem', marginBottom: '0.6rem' }}>
                {t.ui.results}
              </p>
              <ul className="bullets">
                {t.experience.results.map(result => (
                  <li key={result}>{result}</li>
                ))}
              </ul>

              <p className="note">{t.ui.note}</p>
            </SpotlightCard>
          </section>
        </AnimatedContent>

        {/* ================= JOURNEY ================= */}
        <AnimatedContent className="section-wrap" distance={60} threshold={0.12}>
          <section className="section" id="journey">
            <p className="section__label">{t.nav.journey}</p>
            {title(t.journey.title)}
            <p style={{ marginTop: '-0.8rem', marginBottom: '1.8rem' }}>{t.journey.intro}</p>
            <div className="section-card">
              <div className="timeline">
                {t.journey.items.map(item => (
                  <div className="timeline__item" key={item.title}>
                    <span className="card__tag">{item.tag}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedContent>

        {/* ================= TECH ================= */}
        <AnimatedContent className="section-wrap" distance={60} threshold={0.12}>
          <section className="section" id="tech">
            <p className="section__label">{t.nav.tech}</p>
            {title(t.tech.title)}
            <p style={{ marginTop: '-0.8rem', marginBottom: '1.8rem' }}>{t.tech.intro}</p>
            <div className="section-card">
              {t.tech.groups.map(group => (
                <div className="chip-group" key={group.name}>
                  <div className="chip-group__name">{group.name}</div>
                  <div className="chips">
                    {group.items.map(item => (
                      <span className="chip" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              <div className="logoloop-wrap">
                <LogoLoop
                  logos={logos}
                  speed={85}
                  logoHeight={30}
                  gap={44}
                  pauseOnHover
                  fadeOut
                  ariaLabel="Tech stack"
                />
              </div>
            </div>
          </section>
        </AnimatedContent>

        {/* ================= NEXT STEPS ================= */}
        <AnimatedContent className="section-wrap" distance={60} threshold={0.12}>
          <section className="section" id="next">
            <p className="section__label">{t.nav.next}</p>
            {title(t.next.title)}
            <p style={{ marginTop: '-0.8rem', marginBottom: '1.8rem' }}>{t.next.intro}</p>
            <div className="grid-4">
              {t.next.cards.map(card => (
                <SpotlightCard className="card-spotlight" key={card.n}>
                  <div className="next-num">{card.n}</div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </SpotlightCard>
              ))}
            </div>
          </section>
        </AnimatedContent>

        {/* ================= LANGUAGES ================= */}
        <AnimatedContent className="section-wrap" distance={60} threshold={0.12}>
          <section className="section" id="languages">
            <p className="section__label">{t.nav.languages}</p>
            {title(t.languages.title)}
            <div className="section-card">
              {t.languages.items.map(item => (
                <div className="lang-row" key={item.name}>
                  <strong>{item.name}</strong>
                  <span>{item.level}</span>
                </div>
              ))}
            </div>
          </section>
        </AnimatedContent>

        {/* ================= CONTACT ================= */}
        <AnimatedContent className="section-wrap" distance={60} threshold={0.12}>
          <section className="section" id="contact">
            <p className="section__label">{t.nav.contact}</p>
            {title(t.contact.title)}
            <div className="section-card">
              <p>{t.contact.intro}</p>
              <div className="contact-links">
                <a className="btn btn--primary" href={`mailto:${profile.email}`}>
                  ✉ {t.contact.email}
                </a>
                <a
                  className="btn btn--ghost"
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub · 1eandr
                </a>
              </div>
            </div>
          </section>
        </AnimatedContent>
      </main>

      <footer className="site-footer">
        <p>
          © {YEAR} Leandro De Lima Santos · {t.footer.text}
        </p>
      </footer>
    </>
  )
}
