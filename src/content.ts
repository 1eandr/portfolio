export type Lang = 'pt' | 'en'

const pt = {
  nav: {
    about: 'Sobre',
    experience: 'Experiência',
    journey: 'Trilha',
    tech: 'Tecnologias',
    next: 'Próximos passos',
    languages: 'Idiomas',
    contact: 'Contato',
  },
  ui: {
    theme: 'Alternar tema',
    lang: 'Mudar idioma',
    openToWork: 'Aberto a oportunidades',
    current: 'Atual',
    inProgress: 'Em andamento',
    results: 'Resultados que destaco',
    note: 'Projetos internos da empresa não são expostos publicamente — posso detalhar em conversa.',
    viewOn: 'Ver no',
  },
  hero: {
    name: 'Leandro De Lima Santos',
    role: 'Analista de Suporte de TI · Estudante de ADS',
    tagline:
      'Transformo processos manuais e repetitivos em soluções automatizadas — de scripts Python a integrações que resolvem problemas reais.',
    ctaContact: 'Fale comigo',
    ctaTech: 'Ver tecnologias',
  },
  about: {
    title: 'Sobre mim',
    body: [
      'Sou Analista de Suporte de TI em uma empresa que desenvolve sistemas para documentos fiscais, e graduando em Análise e Desenvolvimento de Sistemas, com conclusão prevista para junho de 2027.',
      'No dia a dia eu atendo usuários, resolvo problemas em sistemas fiscais (NFe/CTe) e crio automações que eliminam trabalho repetitivo. Gosto de entender como as coisas funcionam por baixo dos panos e de transformar isso em algo útil para o time.',
      'Me movem resolver problemas de verdade, aprender continuamente e evoluir na área de TI — cada vez mais para o lado técnico.',
    ],
    stats: [
      { value: 2027, label: 'Conclusão do curso de ADS', prefix: '' },
      { value: 6, label: 'Tecnologias no stack atual', prefix: '' },
      { value: 3, label: 'Idiomas (PT, IT, EN)', prefix: '' },
    ],
  },
  experience: {
    title: 'Experiência',
    role: 'Analista de Suporte de TI',
    company: 'Empresa de software · Sistemas para documentos fiscais',
    period: '1+ ano · momento atual',
    intro:
      'Suporte de ponta a ponta para sistemas que emitem documentos fiscais, com foco em resolver rápido e deixar tudo documentado.',
    activities: [
      {
        title: 'Suporte a usuários e chamados',
        text: 'Diagnóstico e resolução de chamados, do primeiro contato até a confirmação da solução, com comunicação clara com o cliente.',
      },
      {
        title: 'Sistemas fiscais (NFe/CTe)',
        text: 'Apoio na operação e integração de sistemas de emissão de documentos fiscais, ambiente onde erro não é opção.',
      },
      {
        title: 'Automação e scripts',
        text: 'Scripts em Python para reduzir tarefas repetitivas, cortar erros manuais e devolver tempo ao time.',
      },
      {
        title: 'Documentação e treinamento',
        text: 'Procedimentos documentados e treinamento de usuários, para que as soluções continuem funcionando depois de mim.',
      },
    ],
    results: [
      'Rotinas manuais reduzidas com scripts em Python',
      'Procedimentos de atendimento padronizados e documentados',
      'Menos erros em tarefas críticas depois da automação',
    ],
  },
  journey: {
    title: 'Minha trilha',
    intro: 'O caminho até aqui — prática profissional, estudo autodidata e formação acadêmica.',
    items: [
      {
        tag: 'Prática',
        title: 'Entrada em TI · Suporte',
        text: 'Primeiro contato com sistemas em produção: atendimento a usuários e resolução de problemas em tempo real, com o fiscal como campo de teste exigente.',
      },
      {
        tag: 'Autodidata',
        title: 'Python, SQL e desenvolvimento web',
        text: 'Estudo por conta própria de Python, bancos SQL e web (HTML, CSS, JavaScript e Flask), aplicado em projetos próprios.',
      },
      {
        tag: 'Acadêmico',
        title: 'Graduação em ADS',
        text: 'Análise e Desenvolvimento de Sistemas — conclusão prevista para junho de 2027, consolidando lógica, estruturas de dados e engenharia de software.',
      },
      {
        tag: 'Foco',
        title: 'Automação e integração de APIs',
        text: 'Direção atual: conectar automação, APIs e desenvolvimento para gerar impacto real no trabalho e na carreira.',
      },
    ],
  },
  tech: {
    title: 'Tecnologias',
    intro: 'Ferramentas que uso hoje para construir, automatizar e integrar.',
    groups: [
      {
        name: 'Linguagens',
        items: ['Python', 'JavaScript', 'SQL'],
      },
      {
        name: 'Web & Backend',
        items: ['HTML5', 'CSS3', 'Flask'],
      },
      {
        name: 'Ferramentas & práticas',
        items: ['Git', 'GitHub', 'APIs REST', 'Automação'],
      },
    ],
  },
  next: {
    title: 'Próximos passos',
    intro: 'Para onde vou daqui — carreira, formação e especialização.',
    cards: [
      {
        n: '01',
        title: 'Evoluir na TI',
        text: 'Dar o próximo passo além do suporte: um papel mais técnico, conectando automação, APIs e desenvolvimento ao dia a dia.',
      },
      {
        n: '02',
        title: 'Pós em Inteligência Artificial',
        text: 'Iniciar a pós-graduação em IA e conectar o estudo à automação que já pratico no trabalho.',
      },
      {
        n: '03',
        title: 'Inglês formal',
        text: 'Transformar o inglês autodidata em certificação reconhecida, com um curso próprio.',
      },
      {
        n: '04',
        title: 'Concluir o curso',
        text: 'Finalizar Análise e Desenvolvimento de Sistemas em junho de 2027.',
      },
    ],
  },
  languages: {
    title: 'Idiomas',
    items: [
      { name: 'Português', level: 'Nativo' },
      { name: 'Italiano', level: 'Conversação fluente' },
      { name: 'Inglês', level: 'Autodidata · autoavaliação ~C2 · curso em planejamento' },
    ],
  },
  contact: {
    title: 'Contato',
    intro: 'Estou aberto a conversas sobre oportunidades, projetos e colaborações.',
    email: 'E-mail',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    linkedinLabel: 'em breve',
  },
  footer: {
    text: 'Feito com React, Vite e React Bits',
  },
}

export type Dict = typeof pt

const en: Dict = {
  nav: {
    about: 'About',
    experience: 'Experience',
    journey: 'Journey',
    tech: 'Stack',
    next: 'Next steps',
    languages: 'Languages',
    contact: 'Contact',
  },
  ui: {
    theme: 'Toggle theme',
    lang: 'Change language',
    openToWork: 'Open to opportunities',
    current: 'Current',
    inProgress: 'In progress',
    results: 'Results I highlight',
    note: 'Internal company projects are not publicly shared — I can walk you through them in a conversation.',
    viewOn: 'View on',
  },
  hero: {
    name: 'Leandro De Lima Santos',
    role: 'IT Support Analyst · ADS Student',
    tagline:
      'I turn manual, repetitive processes into automated solutions — from Python scripts to integrations that solve real problems.',
    ctaContact: 'Get in touch',
    ctaTech: 'See my stack',
  },
  about: {
    title: 'About me',
    body: [
      "I'm an IT Support Analyst at a company that builds fiscal document systems, and a Software Analysis & Development student graduating in June 2027.",
      'On a daily basis I support users, fix issues in fiscal systems (NFe/CTe) and build automations that remove repetitive work. I like understanding how things work under the hood and turning that into something useful for the team.',
      "I'm driven by solving real problems, learning continuously and growing in tech — increasingly on the engineering side.",
    ],
    stats: [
      { value: 2027, label: 'Degree completion (ADS)', prefix: '' },
      { value: 6, label: 'Technologies in my current stack', prefix: '' },
      { value: 3, label: 'Languages (PT, IT, EN)', prefix: '' },
    ],
  },
  experience: {
    title: 'Experience',
    role: 'IT Support Analyst',
    company: 'Software company · Fiscal document systems',
    period: '1+ year · present',
    intro:
      'End-to-end support for systems that issue fiscal documents, focused on fast resolution and clear documentation.',
    activities: [
      {
        title: 'User support & tickets',
        text: 'End-to-end ticket handling, from first contact to confirmed resolution, with clear customer communication.',
      },
      {
        title: 'Fiscal systems (NFe/CTe)',
        text: 'Supporting the operation and integration of fiscal document systems — an environment where errors are not an option.',
      },
      {
        title: 'Automation & scripts',
        text: 'Python scripts that cut repetitive tasks, reduce manual errors and give time back to the team.',
      },
      {
        title: 'Documentation & training',
        text: 'Documented procedures and user training, so solutions keep working after I move on.',
      },
    ],
    results: [
      'Manual routines reduced with Python scripts',
      'Standardized, documented support procedures',
      'Fewer errors in critical tasks after automation',
    ],
  },
  journey: {
    title: 'My journey',
    intro: 'The road so far — hands-on work, self-taught learning and academia.',
    items: [
      {
        tag: 'Hands-on',
        title: 'Into tech · Support',
        text: 'First contact with production systems: supporting users and solving problems in real time, with fiscal software as a demanding playground.',
      },
      {
        tag: 'Self-taught',
        title: 'Python, SQL and web development',
        text: 'Self-study of Python, SQL databases and the web (HTML, CSS, JavaScript and Flask), applied in my own projects.',
      },
      {
        tag: 'Academic',
        title: 'ADS degree',
        text: 'Software Analysis & Development — graduating in June 2027, consolidating logic, data structures and software engineering.',
      },
      {
        tag: 'Focus',
        title: 'Automation & API integration',
        text: 'Current direction: connecting automation, APIs and development to create real impact at work and in my career.',
      },
    ],
  },
  tech: {
    title: 'Stack',
    intro: 'The tools I use today to build, automate and integrate.',
    groups: [
      {
        name: 'Languages',
        items: ['Python', 'JavaScript', 'SQL'],
      },
      {
        name: 'Web & Backend',
        items: ['HTML5', 'CSS3', 'Flask'],
      },
      {
        name: 'Tools & practices',
        items: ['Git', 'GitHub', 'REST APIs', 'Automation'],
      },
    ],
  },
  next: {
    title: 'Next steps',
    intro: 'Where I am heading — career, education and specialization.',
    cards: [
      {
        n: '01',
        title: 'Grow in tech',
        text: 'Take the next step beyond support: a more technical role, connecting automation, APIs and development to my daily work.',
      },
      {
        n: '02',
        title: 'Post-grad in Artificial Intelligence',
        text: 'Start a post-graduate program in AI and connect my studies with the automation I already practice at work.',
      },
      {
        n: '03',
        title: 'Formal English',
        text: 'Turn my self-taught English into a recognized certification through a proper course.',
      },
      {
        n: '04',
        title: 'Finish my degree',
        text: 'Complete my Software Analysis & Development degree in June 2027.',
      },
    ],
  },
  languages: {
    title: 'Languages',
    items: [
      { name: 'Portuguese', level: 'Native' },
      { name: 'Italian', level: 'Fluent conversation' },
      { name: 'English', level: 'Self-taught · ~C2 self-assessed · course planned' },
    ],
  },
  contact: {
    title: 'Contact',
    intro: 'I am open to conversations about opportunities, projects and collaborations.',
    email: 'Email',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    linkedinLabel: 'coming soon',
  },
  footer: {
    text: 'Built with React, Vite and React Bits',
  },
}

export const content: Record<Lang, Dict> = { pt, en }

export const profile = {
  github: 'https://github.com/1eandr',
  email: 'leandrolima198@hotmail.com',
  linkedin: '',
}
