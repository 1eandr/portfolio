export type Lang = 'pt' | 'en'

const pt = {
  nav: {
    about: 'sobre',
    experience: 'experiência',
    projects: 'projetos',
    tech: 'stack',
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
      'Trabalho com suporte em sistemas fiscais e automatizo o que se repete. A emissão mensal de notas, que tomava uma manhã inteira, hoje roda em cerca de 5 minutos.',
    ctaContact: 'fale comigo',
    ctaTech: 'ver stack',
    ctaCv: 'baixar cv',
  },
  about: {
    cmd: 'sobre',
    lead: '$ cat sobre.txt',
    body: [
      'Trabalho no suporte de uma empresa que desenvolve sistemas de emissão fiscal. Atendo clientes em NF-e, NFC-e, NFS-e, NFP-e, CT-e, CT-e OS, MDF-e e CIOT. Como a empresa não oferece treinamento sobre o emissor, criei um manual online para os parceiros.',
      'Foi vendo o que se repetia no dia a dia que comecei a escrever scripts. Hoje a emissão mensal de notas e a finalização de cadastros no emissor municipal são feitas por um script, e eu só confiro o resultado no final.',
      'Faço ADS, com formatura prevista para junho de 2027, e quero levar essa experiência para uma função mais técnica, de desenvolvimento ou automação.',
    ],
    meta: [{ k: 'atuacao', v: 'suporte e automação em sistemas fiscais' }],
    langsLabel: 'idiomas',
    languages: [
      { code: 'pt', name: 'Português', level: 'Nativo' },
      { code: 'it', name: 'Italiano', level: 'Conversação fluente' },
      {
        code: 'en',
        name: 'Inglês',
        level: 'Leitura técnica fluente · conversação em desenvolvimento',
      },
    ],
  },
  experience: {
    cmd: 'experiencia',
    lead: '$ cat experiencia.log',
    role: 'Analista de Suporte de TI',
    company: 'empresa de software · sistemas para documentos fiscais',
    period: 'desde out/2025',
    intro:
      'Suporte de ponta a ponta para sistemas que emitem documentos fiscais, com foco em resolver rápido e deixar tudo documentado.',
    activities: [
      {
        title: 'Suporte a usuários e chamados',
        text: 'Diagnóstico e resolução de chamados, do primeiro contato até a confirmação da solução, com comunicação clara com o cliente.',
      },
      {
        title: 'Sistemas fiscais (NF-e e CT-e)',
        text: 'Apoio na operação e integração de sistemas de emissão de documentos fiscais.',
      },
      {
        title: 'Automação e scripts',
        text: 'Scripts em Node.js e Playwright que automatizam tarefas repetitivas, como a emissão mensal de notas e a finalização de cadastros.',
      },
      {
        title: 'Documentação e treinamento',
        text: 'Procedimentos de atendimento documentados e treinamento de usuários.',
      },
    ],
    results: [
      'Emissão mensal de notas: de uma manhã inteira para cerca de 5 minutos',
      'Finalização de cadastros no emissor municipal feita pelo robô, sem digitação manual',
      'Procedimentos de atendimento padronizados e documentados',
    ],
  },
  projects: {
    cmd: 'projetos',
    lead: '$ ls ~/projetos',
    empty: '[vazio] nenhum projeto publicado no momento.',
    note: 'Nenhum código nem informação interna é publicada aqui: os projetos contêm dados sensíveis da empresa. Posso informar tudo pessoalmente, sem problema.',
    access: '[acesso] código não exposto · posso informar pessoalmente',
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
        status: '[pronto · aguardando liberação]',
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
  tech: {
    cmd: 'stack',
    lead: '$ cat stack.txt',
    intro: 'ferramentas que uso hoje para construir, automatizar e integrar.',
    groups: [
      { name: 'linguagens', items: ['JavaScript', 'Node.js', 'Python', 'SQL'] },
      { name: 'web & dados', items: ['HTML5', 'CSS3', 'Supabase'] },
      { name: 'automação & ferramentas', items: ['Playwright', 'Git', 'GitHub'] },
      { name: 'estudando', items: ['APIs REST'] },
    ],
  },
  contact: {
    cmd: 'contato',
    lead: '$ echo $EMAIL',
    intro: 'aberto a conversas sobre oportunidades, projetos e colaborações.',
    mailLabel: 'mail',
    gitLabel: 'git remote -v',
    liLabel: 'linkedin',
    cvLabel: 'cv',
  },
}

export type Dict = typeof pt

const en: Dict = {
  nav: {
    about: 'about',
    experience: 'experience',
    projects: 'projects',
    tech: 'stack',
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
    invite: 'Have a look around.',
    start: 'start',
    hint: 'click or press enter',
  },
  hero: {
    cmd: '~/portfolio $ whoami',
    name: 'Leandro De Lima Santos',
    role: 'IT Support Analyst',
    course: 'Software Analysis & Development student · graduating Jun 2027',
    pitch:
      'I work in IT support for fiscal systems and automate whatever repeats. The monthly invoice run, which used to take a full morning, now takes about 5 minutes.',
    ctaContact: 'get in touch',
    ctaTech: 'see stack',
    ctaCv: 'download cv',
  },
  about: {
    cmd: 'about',
    lead: '$ cat about.txt',
    body: [
      'I work in support at a company that builds fiscal issuance systems. I assist clients with NF-e, NFC-e, NFS-e, NFP-e, CT-e, CT-e OS, MDF-e and CIOT. Since the company offers no training on the emitter, I created an online manual for partners.',
      'I started writing scripts by noticing what repeated in my day-to-day work. Today the monthly invoice run and finishing registrations in the municipal emitter are done by a script, and I only review the result at the end.',
      "I'm finishing an ADS degree, graduating in June 2027, and I want to take this experience into a more technical role, in development or automation.",
    ],
    meta: [{ k: 'focus', v: 'support and automation in fiscal systems' }],
    langsLabel: 'languages',
    languages: [
      { code: 'pt', name: 'Portuguese', level: 'Native' },
      { code: 'it', name: 'Italian', level: 'Conversationally fluent' },
      {
        code: 'en',
        name: 'English',
        level: 'Fluent technical reading · conversation in progress',
      },
    ],
  },
  experience: {
    cmd: 'experience',
    lead: '$ cat experience.log',
    role: 'IT Support Analyst',
    company: 'software company · fiscal document systems',
    period: 'since Oct 2025',
    intro:
      'End-to-end support for systems that issue fiscal documents, focused on fast resolution and clear documentation.',
    activities: [
      {
        title: 'User support & tickets',
        text: 'End-to-end ticket handling, from first contact to confirmed resolution, with clear customer communication.',
      },
      {
        title: 'Fiscal systems (NF-e and CT-e)',
        text: 'Supporting the operation and integration of fiscal document systems.',
      },
      {
        title: 'Automation & scripts',
        text: 'Node.js and Playwright scripts that automate repetitive tasks, such as the monthly invoice run and finishing registrations.',
      },
      {
        title: 'Documentation & training',
        text: 'Documented support procedures and user training.',
      },
    ],
    results: [
      'Monthly invoice run: from a full morning to about 5 minutes',
      'Finishing registrations in the municipal emitter done by the robot, no manual typing',
      'Support procedures standardized and documented',
    ],
  },
  projects: {
    cmd: 'projects',
    lead: '$ ls ~/projects',
    empty: '[empty] no public projects right now.',
    note: 'No internal code or information is published here: these projects contain sensitive company data. I can share the details personally.',
    access: '[access] no code exposed · I can share details personally',
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
        status: '[ready · awaiting release]',
      },
      {
        name: 'revdesk',
        problem:
          'the IT team had no single channel for requests — no priority, status or history tracking.',
        detail:
          'web panel with 3 roles (employee, manager, IT), tickets with priority and status, attachments, real-time search, notifications and a system updates module; built with a colleague.',
        note: 'permissions enforced in the app and reinforced at the database level (RLS); migrated from a LocalStorage prototype to Supabase in the cloud.',
        stack: 'html · css · javascript · supabase · vercel',
        status: '[done · awaiting domain]',
      },
    ],
  },
  tech: {
    cmd: 'stack',
    lead: '$ cat stack.txt',
    intro: 'the tools I use today to build, automate and integrate.',
    groups: [
      { name: 'languages', items: ['JavaScript', 'Node.js', 'Python', 'SQL'] },
      { name: 'web & data', items: ['HTML5', 'CSS3', 'Supabase'] },
      { name: 'automation & tools', items: ['Playwright', 'Git', 'GitHub'] },
      { name: 'learning', items: ['REST APIs'] },
    ],
  },
  contact: {
    cmd: 'contact',
    lead: '$ echo $EMAIL',
    intro: 'open to conversations about opportunities, projects and collaborations.',
    mailLabel: 'mail',
    gitLabel: 'git remote -v',
    liLabel: 'linkedin',
    cvLabel: 'cv',
  },
}

export const content: Record<Lang, Dict> = { pt, en }

export const profile = {
  github: 'https://github.com/1eandr',
  email: 'leandrolima198@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/leandro-de-lima-santos-58b83b330/',
}
