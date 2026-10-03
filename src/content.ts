export type Lang = 'pt' | 'en'

const pt = {
  nav: {
    about: 'sobre',
    experience: 'experiência',
    projects: 'projetos',
    journey: 'trilha',
    tech: 'stack',
    next: 'próximos passos',
    languages: 'idiomas',
    contact: 'contato',
  },
  ui: {
    navLabel: 'Navegação principal',
    theme: 'Alternar tema',
    lang: 'Mudar idioma',
    skip: 'Pular para o conteúdo',
    openToWork: 'aberto a oportunidades',
    results: '[ok] resultados',
  },
  intro: {
    boot: '~/portfolio $ boot --intro',
    hello: 'Olá, meu nome é',
    name: 'Leandro.',
    pitch: 'Busco novas oportunidades em TI.',
    invite: 'Venha conhecer meu perfil.',
    start: 'start',
    hint: 'clique ou pressione enter',
  },
  hero: {
    cmd: '~/portfolio $ whoami',
    name: 'Leandro De Lima Santos',
    role: 'Analista de Suporte de TI',
    course: 'estudante de ADS · conclusão jun/2027',
    pitch:
      'Transformo processos manuais e repetitivos em soluções automatizadas — de scripts Python a integrações que resolvem problemas reais.',
    ctaContact: 'fale comigo',
    ctaTech: 'ver stack',
  },
  about: {
    cmd: 'sobre',
    lead: '$ cat sobre.txt',
    body: [
      'Sou Analista de Suporte de TI em uma empresa que desenvolve sistemas para documentos fiscais, e graduando em Análise e Desenvolvimento de Sistemas, com conclusão prevista para junho de 2027.',
      'No dia a dia atendo usuários, resolvo problemas em sistemas fiscais (NFe/CTe) e crio automações que eliminam trabalho repetitivo. Gosto de entender como as coisas funcionam por baixo dos panos e transformar isso em algo útil para o time.',
      'Me movem resolver problemas de verdade, aprender continuamente e evoluir na área de TI — cada vez mais para o lado técnico.',
    ],
    meta: [
      { k: 'curso', v: 'ADS · conclusão jun/2027' },
      { k: 'atuacao', v: 'suporte e automação em sistemas fiscais' },
      { k: 'idiomas', v: 'PT nativo · IT fluente · EN autodidata' },
    ],
  },
  experience: {
    cmd: 'experiencia',
    lead: '$ cat experiencia.log',
    role: 'Analista de Suporte de TI',
    company: 'empresa de software · sistemas para documentos fiscais',
    period: '1+ ano · atual',
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
    resultsLabel: 'resultados',
    results: [
      'Rotinas manuais reduzidas com scripts em Python',
      'Procedimentos de atendimento padronizados e documentados',
      'Menos erros em tarefas críticas depois da automação',
    ],
  },
  projects: {
    cmd: 'projetos',
    lead: '$ ls ~/projetos',
    empty: '[vazio] nenhum projeto publicado no momento.',
    note: 'Nenhum código nem informação interna é publicada aqui — os projetos contêm dados sensíveis da empresa. Posso informar tudo pessoalmente, sem problema.',
    access: '[acesso] código não exposto — posso informar pessoalmente',
    labels: {
      problem: 'problema:',
      detail: 'feito:',
      note: 'decisão:',
      stack: 'stack',
      status: 'status',
    },
    items: [
      {
        name: 'automacao-cadastros-issnet',
        problem:
          'cadastros de empresas no emissor de notas municipal eram finalizados manualmente, um a um, em alto volume diário.',
        detail:
          'robô busca as pendentes no emissor, faz as solicitações e o credenciamento no ISSNet (portal da prefeitura), completa o cadastro, salva e repete até o fim da sessão.',
        note: '',
        stack: 'node.js 20 · playwright · playwright-extra · dotenv',
        status: '[em uso · interno]',
      },
      {
        name: 'automacao-notas',
        problem:
          'a emissão mensal de notas a partir de planilha era manual — uma manhã inteira, todo mês.',
        detail:
          'lê e valida a planilha (CNPJ + valores), checa por CNPJ se a nota já foi emitida no mês (evita duplicidade) e só então preenche e emite no emissor.',
        note:
          'start manual só depois da conferência da planilha — decisão final humana (human-in-the-loop).',
        stack: 'node.js · playwright · xlsx · dotenv',
        status: '[em uso · interno]',
      },
      {
        name: 'portal-parceiro',
        problem:
          'sem treinamento oficial do emissor, dúvidas de funcionalidade viravam chamados repetitivos.',
        detail:
          'manual online estático com primeiros passos, guias de NF-e, NFC-e, NFS-e, CT-e, MDF-e e CIOT, seção de erros e rejeições com solução e botão de abrir chamado.',
        note: '',
        stack: 'html · css · javascript puro · github pages',
        status: '[no ar · interno]',
      },
      {
        name: 'revdesk',
        problem:
          'as demandas do time de TI não tinham um canal único — sem prioridade, status ou histórico.',
        detail:
          'painel web com 3 perfis (funcionário, gerente e TI), tickets com prioridade e status, anexos, busca em tempo real, notificações e módulo de atualizações do sistema; desenvolvido em dupla com um colega.',
        note:
          'permissões aplicadas no app e reforçadas no banco (RLS); migrou de protótipo em LocalStorage para Supabase na nuvem.',
        stack: 'html · css · javascript · supabase · vercel',
        status: '[finalizado · aguardando domínio]',
      },
    ],
  },
  journey: {
    cmd: 'trilha',
    lead: '$ history',
    intro: 'o caminho até aqui — prática profissional, estudo autodidata e formação acadêmica.',
    items: [
      {
        tag: 'prática',
        title: 'Entrada em TI · Suporte',
        text: 'Primeiro contato com sistemas em produção: atendimento a usuários e resolução de problemas em tempo real, com o fiscal como campo de teste exigente.',
      },
      {
        tag: 'autodidata',
        title: 'Python, SQL e desenvolvimento web',
        text: 'Estudo por conta própria de Python, bancos SQL e web (HTML, CSS, JavaScript e Flask), aplicado em projetos próprios.',
      },
      {
        tag: 'acadêmico',
        title: 'Graduação em ADS',
        text: 'Análise e Desenvolvimento de Sistemas — conclusão prevista para junho de 2027, consolidando lógica, estruturas de dados e engenharia de software.',
      },
      {
        tag: 'foco',
        title: 'Automação e integração de APIs',
        text: 'Direção atual: conectar automação, APIs e desenvolvimento para gerar impacto real no trabalho e na carreira.',
      },
    ],
  },
  tech: {
    cmd: 'stack',
    lead: '$ cat stack.txt',
    intro: 'ferramentas que uso hoje para construir, automatizar e integrar.',
    groups: [
      { name: 'linguagens', items: ['Python', 'JavaScript', 'SQL'] },
      { name: 'web & backend', items: ['HTML5', 'CSS3', 'Flask'] },
      { name: 'ferramentas & práticas', items: ['Git', 'GitHub', 'APIs REST', 'Automação'] },
    ],
  },
  next: {
    cmd: 'proximos',
    lead: '$ cat plano.txt',
    intro: 'para onde vou daqui — carreira, formação e especialização.',
    items: [
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
    cmd: 'idiomas',
    lead: '$ locale -a',
    items: [
      { code: 'pt', name: 'Português', level: 'Nativo' },
      { code: 'it', name: 'Italiano', level: 'Conversação fluente' },
      { code: 'en', name: 'Inglês', level: 'Autodidata · autoavaliação ~C2 · curso em planejamento' },
    ],
  },
  contact: {
    cmd: 'contato',
    lead: '$ echo $EMAIL',
    intro: 'aberto a conversas sobre oportunidades, projetos e colaborações.',
    mailLabel: 'mail',
    gitLabel: 'git remote -v',
  },
}

export type Dict = typeof pt

const en: Dict = {
  nav: {
    about: 'about',
    experience: 'experience',
    projects: 'projects',
    journey: 'journey',
    tech: 'stack',
    next: 'next steps',
    languages: 'languages',
    contact: 'contact',
  },
  ui: {
    navLabel: 'Main navigation',
    theme: 'Toggle theme',
    lang: 'Change language',
    skip: 'Skip to content',
    openToWork: 'open to opportunities',
    results: '[ok] results',
  },
  intro: {
    boot: '~/portfolio $ boot --intro',
    hello: 'Hello, my name is',
    name: 'Leandro.',
    pitch: 'Looking for new opportunities in IT.',
    invite: 'Come meet my profile.',
    start: 'start',
    hint: 'click or press enter',
  },
  hero: {
    cmd: '~/portfolio $ whoami',
    name: 'Leandro De Lima Santos',
    role: 'IT Support Analyst',
    course: 'Software Analysis & Development student · graduating Jun 2027',
    pitch:
      'I turn manual, repetitive processes into automated solutions — from Python scripts to integrations that solve real problems.',
    ctaContact: 'get in touch',
    ctaTech: 'see stack',
  },
  about: {
    cmd: 'about',
    lead: '$ cat about.txt',
    body: [
      "I'm an IT Support Analyst at a company that builds fiscal document systems, and a Software Analysis & Development student graduating in June 2027.",
      'On a daily basis I support users, fix issues in fiscal systems (NFe/CTe) and build automations that remove repetitive work. I like understanding how things work under the hood and turning that into something useful for the team.',
      "I'm driven by solving real problems, learning continuously and growing in tech — increasingly on the engineering side.",
    ],
    meta: [
      { k: 'degree', v: 'ADS · graduating Jun 2027' },
      { k: 'focus', v: 'support and automation in fiscal systems' },
      { k: 'languages', v: 'PT native · IT fluent · EN self-taught' },
    ],
  },
  experience: {
    cmd: 'experience',
    lead: '$ cat experience.log',
    role: 'IT Support Analyst',
    company: 'software company · fiscal document systems',
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
    resultsLabel: 'results',
    results: [
      'Manual routines reduced with Python scripts',
      'Standardized, documented support procedures',
      'Fewer errors in critical tasks after automation',
    ],
  },
  projects: {
    cmd: 'projects',
    lead: '$ ls ~/projects',
    empty: '[empty] no public projects right now.',
    note: 'No internal code or information is published here — these projects contain sensitive company data. I can share the details personally.',
    access: '[access] no code exposed — I can share details personally',
    labels: {
      problem: 'problem:',
      detail: 'built:',
      note: 'decision:',
      stack: 'stack',
      status: 'status',
    },
    items: [
      {
        name: 'automacao-cadastros-issnet',
        problem:
          'company registrations in the municipal invoice emitter were completed manually, one by one, in high daily volume.',
        detail:
          'robot fetches pending registrations in the emitter, performs the requests and enrollment on ISSNet (city hall portal), completes the record, saves and repeats until the session ends.',
        note: '',
        stack: 'node.js 20 · playwright · playwright-extra · dotenv',
        status: '[in use · internal]',
      },
      {
        name: 'automacao-notas',
        problem:
          'monthly invoice issuance from a spreadsheet was manual — a full morning, every month.',
        detail:
          'reads and validates the spreadsheet (CNPJ + amounts), checks per CNPJ whether the invoice was already issued that month (prevents duplicates), then fills and issues it in the emitter.',
        note: 'manual start after the spreadsheet review — the final decision stays human (human-in-the-loop).',
        stack: 'node.js · playwright · xlsx · dotenv',
        status: '[in use · internal]',
      },
      {
        name: 'portal-parceiro',
        problem:
          'with no official training on the emitter, functional questions turned into repetitive support tickets.',
        detail:
          'static online manual with getting-started guides, docs for NF-e, NFC-e, NFS-e, CT-e, MDF-e and CIOT, an errors and rejections section with fixes, and a support ticket button.',
        note: '',
        stack: 'html · css · vanilla javascript · github pages',
        status: '[live · internal]',
      },
      {
        name: 'revdesk',
        problem:
          'the IT team had no single channel for requests — no priority, status or history tracking.',
        detail:
          'web panel with 3 roles (employee, manager, IT), tickets with priority and status, attachments, real-time search, notifications and a system updates module; built in pair with a colleague.',
        note: 'permissions enforced in the app and reinforced at the database level (RLS); migrated from a LocalStorage prototype to Supabase in the cloud.',
        stack: 'html · css · javascript · supabase · vercel',
        status: '[done · awaiting domain]',
      },
    ],
  },
  journey: {
    cmd: 'journey',
    lead: '$ history',
    intro: 'the road so far — hands-on work, self-taught learning and academia.',
    items: [
      {
        tag: 'hands-on',
        title: 'Into tech · Support',
        text: 'First contact with production systems: supporting users and solving problems in real time, with fiscal software as a demanding playground.',
      },
      {
        tag: 'self-taught',
        title: 'Python, SQL and web development',
        text: 'Self-study of Python, SQL databases and the web (HTML, CSS, JavaScript and Flask), applied in my own projects.',
      },
      {
        tag: 'academic',
        title: 'ADS degree',
        text: 'Software Analysis & Development — graduating in June 2027, consolidating logic, data structures and software engineering.',
      },
      {
        tag: 'focus',
        title: 'Automation & API integration',
        text: 'Current direction: connecting automation, APIs and development to create real impact at work and in my career.',
      },
    ],
  },
  tech: {
    cmd: 'stack',
    lead: '$ cat stack.txt',
    intro: 'the tools I use today to build, automate and integrate.',
    groups: [
      { name: 'languages', items: ['Python', 'JavaScript', 'SQL'] },
      { name: 'web & backend', items: ['HTML5', 'CSS3', 'Flask'] },
      { name: 'tools & practices', items: ['Git', 'GitHub', 'REST APIs', 'Automation'] },
    ],
  },
  next: {
    cmd: 'next',
    lead: '$ cat plan.txt',
    intro: 'where I am heading — career, education and specialization.',
    items: [
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
    cmd: 'languages',
    lead: '$ locale -a',
    items: [
      { code: 'pt', name: 'Portuguese', level: 'Native' },
      { code: 'it', name: 'Italian', level: 'Fluent conversation' },
      { code: 'en', name: 'English', level: 'Self-taught · ~C2 self-assessed · course planned' },
    ],
  },
  contact: {
    cmd: 'contact',
    lead: '$ echo $EMAIL',
    intro: 'open to conversations about opportunities, projects and collaborations.',
    mailLabel: 'mail',
    gitLabel: 'git remote -v',
  },
}

export const content: Record<Lang, Dict> = { pt, en }

export const profile = {
  github: 'https://github.com/1eandr',
  email: 'leandrolima198@hotmail.com',
  linkedin: '',
}
