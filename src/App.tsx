import { useEffect, useRef, useState } from 'react'
import { content, profile, type Lang } from './content'
import perfilPhoto from './assets/perfil.jpg'
import LetterGlitch from './components/LetterGlitch.jsx'

const THEME_KEY = 'portfolio-theme'
const LANG_KEY = 'portfolio-lang'
const YEAR = new Date().getFullYear()

const SECTION_IDS = ['about', 'experience', 'projects', 'tech', 'contact']

type Theme = 'dark' | 'light'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const INTRO_KEY = 'portfolio-intro-seen'

const introSkipped = () => {
  try {
    return (
      sessionStorage.getItem(INTRO_KEY) === 'seen' || window.location.hash !== ''
    )
  } catch {
    return false
  }
}

type TyperProps = {
  text: string
  /** undefined = começa a digitar quando entra na viewport */
  start?: boolean
  speed?: number
  delay?: number
  caret?: 'always' | 'while'
  onDone?: () => void
}

function Typer({
  text,
  start,
  speed = 55,
  delay = 0,
  caret = 'while',
  onDone,
}: TyperProps) {
  const reduced = prefersReducedMotion()
  const selfRef = useRef<HTMLSpanElement>(null)
  const doneRef = useRef(onDone)
  const [visible, setVisible] = useState(false)
  const [n, setN] = useState(() => (reduced ? text.length : 0))

  useEffect(() => {
    doneRef.current = onDone
  })

  useEffect(() => {
    if (start !== undefined || reduced) return
    const el = selfRef.current
    if (!el) return
    const io = new IntersectionObserver(
      entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          setVisible(true)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -20% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [start, reduced])

  const active = start ?? visible

  useEffect(() => {
    if (!active || reduced) return
    let i = 0
    let intervalId = 0
    const timeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        i += 1
        setN(i)
        if (i >= text.length) {
          window.clearInterval(intervalId)
          doneRef.current?.()
        }
      }, speed)
    }, delay)
    return () => {
      window.clearTimeout(timeoutId)
      window.clearInterval(intervalId)
    }
  }, [active, text, speed, delay, reduced])

  const typing = active && n < text.length && !reduced
  const showCaret = caret === 'always' || (caret === 'while' && typing)

  return (
    <span className="typer" ref={selfRef}>
      <span aria-hidden="true">
        {text.slice(0, n) || '\u200B'}
        {showCaret && <span className="caret" />}
      </span>
      <span className="sr-only">{text}</span>
    </span>
  )
}

function SecHead({ num, cmd, sub }: { num: string; cmd: string; sub: string }) {
  const [cmdDone, setCmdDone] = useState(false)
  return (
    <div className="sec__head">
      <span className="sec__num">{num}</span>
      <h2>
        <span className="prompt">&gt;</span>{' '}
        <Typer text={cmd} onDone={() => setCmdDone(true)} />
      </h2>
      <p className="sec__lead">
        <Typer text={sub} start={cmdDone} delay={160} />
      </p>
    </div>
  )
}

function IconGlobe() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="15"
      height="15"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="4.2" ry="9" />
      <path d="M3 12h18" />
      <path d="M4.6 7.4c2.2 1.1 4.7 1.8 7.4 1.8s5.2-.7 7.4-1.8" />
      <path d="M4.6 16.6c2.2-1.1 4.7-1.8 7.4-1.8s5.2.7 7.4 1.8" />
    </svg>
  )
}

function IconSun() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="15"
      height="15"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4" />
    </svg>
  )
}

function IconMoon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="15"
      height="15"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  )
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem(THEME_KEY)
    return saved === 'light' || saved === 'dark' ? saved : 'dark'
  })
  const [lang, setLang] = useState<Lang>(() =>
    localStorage.getItem(LANG_KEY) === 'en' ? 'en' : 'pt',
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
    localStorage.setItem(LANG_KEY, lang)
  }, [lang])

  const [activeId, setActiveId] = useState('')
  const [started, setStarted] = useState(introSkipped)
  const [introMounted, setIntroMounted] = useState(() => !introSkipped())

  useEffect(() => {
    document.documentElement.classList.toggle('locked', !started)
    return () => document.documentElement.classList.remove('locked')
  }, [started])

  useEffect(() => {
    if (!started) return
    const id = window.setTimeout(() => setIntroMounted(false), 650)
    return () => window.clearTimeout(id)
  }, [started])

  const handleStart = () => {
    setStarted(true)
    try {
      sessionStorage.setItem(INTRO_KEY, 'seen')
    } catch {
      /* sessão indisponível — intro aparece de novo no próximo load */
    }
    window.setTimeout(() => document.getElementById('main')?.focus(), 560)
  }

  useEffect(() => {
    if (started) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter') handleStart()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started])

  useEffect(() => {
    const els = SECTION_IDS.map(id => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    )
    if (els.length === 0) return
    const io = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  const t = content[lang]
  const isLight = theme === 'light'

  const nav: [string, string][] = [
    ['#about', t.nav.about],
    ['#experience', t.nav.experience],
    ['#projects', t.nav.projects],
    ['#tech', t.nav.tech],
    ['#contact', t.nav.contact],
  ]

  const secNum = (n: number) => `[${String(n).padStart(2, '0')}]`

  return (
    <>
      {introMounted && (
        <section
          className={started ? 'intro intro--out' : 'intro'}
          aria-label={t.intro.hello}
        >
          <div className="intro__bg" aria-hidden="true">
            {!prefersReducedMotion() && (
              <LetterGlitch
                glitchSpeed={50}
                centerVignette={true}
                outerVignette={false}
                smooth
                glitchColors={
                  isLight
                    ? ['#0a6e33', '#454e46', '#8fa395']
                    : ['#2b4539', '#61dca3', '#61b3dc']
                }
                backgroundColor={isLight ? '#f1f1ec' : '#0a0e0b'}
                lightMode={isLight}
              />
            )}
          </div>
          <div className="wrap intro__in">
            <div className="intro__panel">
              <p className="intro__boot">
                <Typer key={lang} text={t.intro.boot} start caret="always" />
              </p>
              <p className="intro__hello">{t.intro.hello}</p>
              <p className="intro__name">{t.intro.name}</p>
              <p className="intro__pitch">{t.intro.pitch}</p>
              <p className="intro__invite">{t.intro.invite}</p>
              <button
                type="button"
                className="start-card"
                onClick={handleStart}
                autoFocus
              >
                <span className="start-card__cmd">
                  <span className="prompt">&gt;</span> {t.intro.start}
                </span>
                <span className="start-card__hint">{t.intro.hint}</span>
              </button>
            </div>
          </div>
        </section>
      )}

      <a className="skip" href="#main" inert={!started}>
        {t.ui.skip}
      </a>

      <header className="hdr" inert={!started}>
        <div className="hdr__in">
          <a className="brand" href="#top">
            <span className="prompt">$</span> 1eandr
          </a>
          <nav className="nav" aria-label={t.ui.navLabel}>
            {nav.map(([href, label]) => {
              const active = href.slice(1) === activeId
              return (
                <a
                  key={href}
                  href={href}
                  className={active ? 'is-active' : undefined}
                  aria-current={active ? 'location' : undefined}
                >
                  {label}
                </a>
              )
            })}
          </nav>
          <div className="hdr__tools">
            <button
              type="button"
              className="tgl"
              onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
              aria-label={t.ui.lang}
              title={t.ui.lang}
            >
              <IconGlobe />
              {lang}
            </button>
            <button
              type="button"
              className="tgl"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label={t.ui.theme}
              title={t.ui.theme}
            >
              {theme === 'dark' ? <IconMoon /> : <IconSun />}
            </button>
          </div>
        </div>
      </header>

      <main id="main" tabIndex={-1} inert={!started}>
        {/* ================= HERO ================= */}
        <section className="hero" id="top">
          <div className="wrap hero__in">
            <div className="hero__text">
              <p className="hero__cmd">
                <Typer key={lang} text={t.hero.cmd} start={started} caret="always" />
              </p>
              <h1>{t.hero.name}</h1>
              <p className="hero__role">{t.hero.role}</p>
              <p className="hero__course">{t.hero.course}</p>
              <p className="hero__pitch">{t.hero.pitch}</p>
              <p className="hero__status">[ {t.ui.openToWork} ]</p>
              <div className="hero__cta">
                <a className="btn" href="#contact">
                  {t.hero.ctaContact} <span aria-hidden="true">-&gt;</span>
                </a>
                <a className="btn btn--ghost" href="#tech">
                  {t.hero.ctaTech}
                </a>
                <a
                  className="btn btn--ghost"
                  href="curriculo.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.hero.ctaCv} <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
            <figure className="photo">
              <div className="photo__frame">
                <img
                  className="photo__img"
                  src={perfilPhoto}
                  alt="Leandro De Lima Santos"
                  width={600}
                  height={600}
                />
                <img
                  className="photo__glitch photo__glitch--a"
                  src={perfilPhoto}
                  alt=""
                  aria-hidden="true"
                />
                <img
                  className="photo__glitch photo__glitch--b"
                  src={perfilPhoto}
                  alt=""
                  aria-hidden="true"
                />
              </div>
              <figcaption className="photo__cap">
                <span className="prompt">&gt;</span> perfil.jpg
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section className="sec" id="about">
          <div className="wrap sec__grid">
            <SecHead key={lang} num={secNum(1)} cmd={t.about.cmd} sub={t.about.lead} />
            <div className="sec__body">
              {t.about.body.map(paragraph => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <ul className="meta-list">
                {t.about.meta.map(item => (
                  <li key={item.k}>
                    <b>{item.k}</b>
                    {item.v}
                  </li>
                ))}
              </ul>
              <p className="label">{t.about.langsLabel}</p>
              <div>
                {t.about.languages.map(item => (
                  <div className="lang-row" key={item.code}>
                    <span className="lang-row__code">{item.code}</span>
                    <span className="lang-row__name">{item.name}</span>
                    <span className="lang-row__dots" aria-hidden="true" />
                    <span className="lang-row__level">{item.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= EXPERIENCE ================= */}
        <section className="sec" id="experience">
          <div className="wrap sec__grid">
            <SecHead
              key={lang}
              num={secNum(2)}
              cmd={t.experience.cmd}
              sub={t.experience.lead}
            />
            <div className="sec__body">
              <div className="term">
                <h3>{t.experience.role}</h3>
                <p className="term__meta">
                  {t.experience.company}
                  <span className="tag">{t.experience.period}</span>
                </p>
                <p>{t.experience.intro}</p>

                <ul className="acts">
                  {t.experience.activities.map(activity => (
                    <li key={activity.title}>
                      <h4>{activity.title}</h4>
                      <p>{activity.text}</p>
                    </li>
                  ))}
                </ul>

                <p className="label">{t.ui.results}</p>
                <ul className="checks">
                  {t.experience.results.map(result => (
                    <li key={result}>{result}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section className="sec" id="projects">
          <div className="wrap sec__grid">
            <SecHead key={lang} num={secNum(3)} cmd={t.projects.cmd} sub={t.projects.lead} />
            <div className="sec__body">
              {t.projects.items.length === 0 ? (
                <p className="empty">{t.projects.empty}</p>
              ) : (
                <ul className="proj">
                  {t.projects.items.map((item, i) => (
                    <li className="proj__item" key={item.name}>
                      <p className="proj__name">
                        <span className="proj__idx">
                          [{String(i + 1).padStart(2, '0')}]
                        </span>{' '}
                        <span className="prompt">&gt;</span> {item.name}
                      </p>
                      <p className="proj__line">
                        <b>{t.projects.labels.problem}</b> {item.problem}
                      </p>
                      <p className="proj__line">
                        <b>{t.projects.labels.detail}</b> {item.detail}
                      </p>
                      {item.note !== '' && (
                        <p className="proj__line">
                          <b>{t.projects.labels.note}</b> {item.note}
                        </p>
                      )}
                      <p className="proj__meta">
                        <span>
                          <b>{t.projects.labels.stack}</b> {item.stack}
                        </span>
                        <span>
                          <b>{t.projects.labels.status}</b> {item.status}
                        </span>
                      </p>
                      <p className="proj__access">{t.projects.access}</p>
                    </li>
                  ))}
                </ul>
              )}
              <p className="note">{t.projects.note}</p>
            </div>
          </div>
        </section>

        {/* ================= STACK ================= */}
        <section className="sec" id="tech">
          <div className="wrap sec__grid">
            <SecHead key={lang} num={secNum(4)} cmd={t.tech.cmd} sub={t.tech.lead} />
            <div className="sec__body">
              <p>{t.tech.intro}</p>
              {t.tech.groups.map(group => (
                <div className="stackgroup" key={group.name}>
                  <p className="stackgroup__name">{group.name}</p>
                  <div className="chips">
                    {group.items.map(item => (
                      <span className="chip" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section className="sec" id="contact">
          <div className="wrap sec__grid">
            <SecHead key={lang} num={secNum(5)} cmd={t.contact.cmd} sub={t.contact.lead} />
            <div className="sec__body">
              <p>{t.contact.intro}</p>
              <div className="contact-list">
                <a className="term-link" href={`mailto:${profile.email}`}>
                  <span className="prompt">$</span> {t.contact.mailLabel}{' '}
                  {profile.email}
                  <small>mailto:</small>
                </a>
                <a
                  className="term-link"
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="prompt">$</span> {t.contact.gitLabel}
                  <small>github.com/1eandr</small>
                </a>
                {profile.linkedin !== '' && (
                  <a
                    className="term-link"
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="prompt">$</span> {t.contact.liLabel}
                    <small>
                      {profile.linkedin.replace(/^https?:\/\/(www\.)?/, '')}
                    </small>
                  </a>
                )}
                <a
                  className="term-link"
                  href="curriculo.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="prompt">$</span> {t.contact.cvLabel}
                  <small>curriculo.pdf</small>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" inert={!started}>
        <div className="wrap">
          <p>© {YEAR} Leandro De Lima Santos</p>
        </div>
      </footer>
    </>
  )
}
