const BASE_URL = import.meta.env.BASE_URL || '/';

export const personalInfo = {
  name: "Guilherme dos Santos Benedito",
  role: "Engenharia de Dados & Desenvolvimento Backend",
  currentEducation: "Cursando Desenvolvimento de Software Multiplataforma (DSM) – FATEC São José dos Campos",
  period: "2024 – Presente",
  location: "São José dos Campos - SP, Brasil",
  avatar: `${BASE_URL}img/foto_guilherme.jpg`,
  summary: "Desenvolvedor de software com foco em Engenharia de Dados e Backend. Experiência na concepção da arquitetura de servidores backend, modelagem de bancos de dados relacionais e NoSQL, captação e processamento de telemetria com IoT e análise de dados.",
  academicObjective: "Consolidar a formação tecnológica em DSM na FATEC SJC, aprofundando o desenvolvimento de arquiteturas de dados e engenharia de backend escalável.",
  professionalObjective: "Atuar como Engenheiro de Dados / Desenvolvedor Backend, construindo pipelines analíticos eficientes, modelagem de bancos de dados e APIs resilientes.",
  interests: [
    "Engenharia de Dados",
    "Desenvolvimento Backend",
    "Bancos de Dados Relacionais e NoSQL",
    "Pipelines e Processamento de Dados",
    "Cloud Computing (GCP)",
    "Metodologias Ágeis (Scrum)"
  ],
  social: {
    github: "https://github.com/gui-benedito",
    linkedin: "https://www.linkedin.com/in/guilherme-benedito/",
    instagram: "https://www.instagram.com/guisantos.b/",
    email: "guilherme.benedito@fatec.sp.gov.br"
  }
};

// Tecnologias gerais do desenvolvedor (conforme Roteiro do Portfólio)
export const technicalSkills = [
  {
    category: "Linguagens de Programação",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "Dart", "SQL", "Shell Script (Bash)", "HTML5", "CSS3"]
  },
  {
    category: "Backend & Frameworks",
    skills: ["Node.js", "Django", "NestJS", "Express", "Flask", "Spring Boot", "React", "Flutter", "Sequelize ORM"]
  },
  {
    category: "Bancos de Dados & Vetoriais",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "pgvector", "SQLite"]
  },
  {
    category: "DevOps, Cloud & Metodologias",
    skills: ["Docker", "AWS S3", "Google Cloud Platform (GCP)", "Git", "GitHub", "Scrum", "Vite"]
  }
];

// Projetos Acadêmicos Integradores (1º ao 6º Semestre)
export const academicProjects = [
  {
    id: "api-1",
    semester: "1º Semestre",
    title: "Smart Farm",
    role: "Dev Team",
    partner: "Interno",
    repoUrl: "https://github.com/SkyFlyTeam/SmartFarm",
    image: `${BASE_URL}img/apiI.svg`,
    problem: "Necessidade de monitorar e analisar continuamente as variáveis ambientais de uma estufa indoor (como temperatura, umidade do solo e luminosidade) através de sensores para apoiar o manejo eficiente das culturas agrícolas.",
    solution: "Aplicação web para acompanhamento em tempo real dos valores captados pelos sensores de uma estufa indoor, fornecendo visualização gráfica interativa das leituras de telemetria.",
    technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript", "SQLite", "Arduino / IoT"],
    personalContributions: "Responsável por estruturar a captação dos dados através de Arduino e estruturar o backend em Python/Flask: implementação da comunicação com os microcontroladores, recepção dos sinais analógicos e digitais, pré-processamento das leituras brutas e criação dos endpoints REST para disponibilização dos dados aos gráficos.",
    hardSkills: [
      { skill: "Estruturação de Backend com Python & Flask", level: "Autônomo" },
      { skill: "Captação de Dados e Integração com Arduino", level: "Autônomo" },
      { skill: "Tratamento de Dados de Sensores para Plotagem", level: "Autônomo" },
      { skill: "Controle de Versão com Git & GitHub", level: "Básico" }
    ],
    softSkills: [
      { skill: "Trabalho em Equipe", context: "Colaboração direta entre os membros responsáveis pelos circuitos eletrônicos e a equipe de desenvolvimento de software." },
      { skill: "Resolução de Problemas Técnicos", context: "Identificação e saneamento de ruídos nas medições analógicas enviadas pelo microcontrolador." }
    ]
  },
  {
    id: "api-2",
    semester: "2º Semestre",
    title: "CloudStock",
    role: "Dev Team",
    partner: "Interno",
    repoUrl: "https://github.com/SkyFlyTeam/cloudStock",
    image: `${BASE_URL}img/apiII.png`,
    problem: "Necessidade de organizar, controlar e registrar as movimentações de mercadorias e os níveis de estoque de armazéns de forma centralizada, ágil e livre de inconsistências manuais.",
    solution: "Aplicação web completa para gerenciamento e controle de estoque, permitindo o acompanhamento de inventário, cadastro de itens, fornecedores e rastreio de entradas e saídas.",
    technologies: ["TypeScript", "Node.js", "Express", "Sequelize ORM", "MySQL", "HTML", "CSS"],
    personalContributions: "Responsável por estruturar a arquitetura do backend: definição do padrão em camadas, configuração do servidor em Node.js com TypeScript, modelagem das tabelas e relacionamentos no banco MySQL utilizando o Sequelize ORM, além da implementação das regras de negócio e validações para movimentações de estoque.",
    hardSkills: [
      { skill: "Arquitetura de Backend com Node.js & TypeScript", level: "Autônomo" },
      { skill: "Modelagem Relacional com Sequelize ORM", level: "Autônomo" },
      { skill: "Banco de Dados MySQL & Transações", level: "Autônomo" },
      { skill: "Estruturação de APIs RESTful", level: "Autônomo" }
    ],
    softSkills: [
      { skill: "Organização e Padronização", context: "Estruturação clara de pastas, middlewares e tipagens para facilitar a manutenção coletiva do código." },
      { skill: "Comunicação", context: "Alinhamento com o time sobre os contratos de rotas para integração com o frontend." }
    ]
  },
  {
    id: "api-3",
    semester: "3º Semestre",
    title: "Bee On Time",
    role: "Dev Team",
    partner: "Necto Systems",
    repoUrl: "https://github.com/SkyFlyTeam/BeeOnTime-documentation",
    image: `${BASE_URL}img/bot.png`,
    problem: "Necessidade de registrar, monitorar e auditar os horários de entrada e saída dos colaboradores de uma empresa com segurança, integridade dos registros e interface responsiva para diferentes dispositivos.",
    solution: "Aplicação web moderna e responsiva para o controle de ponto eletrônico corporativo, fornecendo controle de jornada, relatórios e auditoria.",
    technologies: ["Java", "Spring Boot", "React", "Sequelize", "MongoDB", "NoSQL"],
    personalContributions: "Responsável pela arquitetura do backend e pela estruturação do banco de dados não estruturado NoSQL (MongoDB): modelagem dos documentos e coleções para armazenamento das batidas de ponto e logs de auditoria, além do desenvolvimento de serviços de backend em Java integrados à aplicação.",
    hardSkills: [
      { skill: "Arquitetura de Backend com Java", level: "Autônomo" },
      { skill: "Estruturação de Bancos Não Estruturados (NoSQL MongoDB)", level: "Autônomo" },
      { skill: "Modelagem de Documentos e Consultas NoSQL", level: "Autônomo" },
      { skill: "Integração de Serviços com React", level: "Autônomo" }
    ],
    softSkills: [
      { skill: "Adaptabilidade Tecnológica", context: "Aprendizado e aplicação prática de banco de dados NoSQL e ecossistema Java para atender aos requisitos da Necto." },
      { skill: "Trabalho em Equipe Ágil", context: "Acompanhamento do cronograma e entregas das sprints no framework Scrum." }
    ]
  },
  {
    id: "api-4",
    semester: "4º Semestre",
    title: "Atmos",
    role: "Dev Team",
    partner: "Tecsus",
    repoUrl: "https://github.com/SkyFlyTeam/Atmos-documentation",
    image: `${BASE_URL}img/atmos.png`,
    problem: "Crescimento de desastres e incidentes decorrentes de eventos meteorológicos severos (como deslizamentos e inundações) em áreas vulneráveis de São José dos Campos sem alertas preventivos estruturados.",
    solution: "Aplicação web moderna e responsiva conectada a estações meteorológicas físicas distribuídas pela cidade, capaz de coletar parâmetros dinâmicos de solo e clima, calcular métricas críticas, emitir alertas preventivos de risco e exibir dashboards analíticos.",
    technologies: ["TypeScript", "React", "Node.js", "Python", "Arduino / IoT", "MongoDB", "PostgreSQL", "Docker"],
    personalContributions: "Atuação no desenvolvimento do backend e nos pipelines de ingestão de dados meteorológicos: implementação de rotas em Node.js com TypeScript para recepção dos dados dos sensores das estações, persistência no banco de dados, regras determinísticas para cálculo de risco com disparo de alertas e criação de endpoints para alimentar os dashboards.",
    hardSkills: [
      { skill: "Desenvolvimento de APIs com Node.js & TypeScript", level: "Fluente" },
      { skill: "Persistência e Modelagem com MongoDB & PostgreSQL", level: "Autônomo" },
      { skill: "Ingestão e Processamento de Dados de Telemetria", level: "Autônomo" },
      { skill: "Containerização com Docker", level: "Autônomo" }
    ],
    softSkills: [
      { skill: "Colaboração Multidisciplinar", context: "Integração constante com a equipe de hardware/sensores para garantir conformidade dos payloads transmitidos." },
      { skill: "Comprometimento com Prazos", context: "Entrega contínua de funcionalidades alinhadas aos períodos oficiais de cada sprint Scrum." }
    ]
  },
  {
    id: "api-5",
    semester: "5º Semestre",
    title: "Veredito",
    role: "Dev Team",
    partner: "Xertica",
    repoUrl: "https://github.com/SkyFlyTeam/veredito-documentation",
    image: `${BASE_URL}img/veredito.png`,
    problem: "Elevado volume de processos judiciais e complexidade na localização de precedentes relevantes, ocasionando lentidão na análise de petições iniciais e na fundamentação de decisões jurídicas por magistrados e assessores.",
    solution: "Aplicativo mobile voltado para magistrados que recebe petições iniciais (PDF/DOCX), extrai e sintetiza teses automaticamente, ranqueia precedentes judiciais com base em cálculo de similaridade semântica e probabilidade de aplicação, e viabiliza a geração e edição de minutas jurídicas.",
    technologies: ["Flutter", "Dart", "Node.js", "NestJS", "PostgreSQL", "Docker"],
    personalContributions: "Atuação no desenvolvimento do backend construído em NestJS com TypeScript e banco PostgreSQL containerizado: implementação dos endpoints de upload e tratamento de arquivos jurídicos, modelagem de dados relacionais para histórico de análises e precedentes, e integração com algoritmos de similaridade para classificação de aplicabilidade das peças.",
    hardSkills: [
      { skill: "Desenvolvimento Backend com NestJS & TypeScript", level: "Fluente" },
      { skill: "Modelagem Relacional Avançada em PostgreSQL", level: "Fluente" },
      { skill: "Arquitetura em Microsserviços e Docker", level: "Autônomo" },
      { skill: "Integração com Pipelines de IA e Similaridade", level: "Autônomo" }
    ],
    softSkills: [
      { skill: "Pensamento Analítico", context: "Compreensão de regras de negócio complexas do domínio jurídico e tradução em fluxos de software confiáveis." },
      { skill: "Qualidade de Software", context: "Estruturação de código modular e testes de integração com foco em estabilidade e segurança." }
    ]
  },
  {
    id: "api-6",
    semester: "6º Semestre",
    title: "VariSkill",
    role: "Product Owner",
    partner: "GSW",
    repoUrl: "https://github.com/SkyFlyTeam/VariSkill-documentantion",
    image: `${BASE_URL}img/variskill.png`,
    problem: "Trilhas corporativas lineares e despersonalizadas de aprendizagem técnica causam desmotivação, alto índice de evasão e dificuldade na identificação de lacunas práticas de conhecimento dos colaboradores.",
    solution: "Plataforma inteligente de aprendizagem adaptativa que personaliza a jornada por meio de teste diagnóstico de nivelamento, módulos com mecânicas de gamificação (XP, níveis, streaks, recompensas) e assistente virtual inteligente com Processamento de Linguagem Natural (PLN) híbrido e busca vetorial (pgvector no PostgreSQL) para suporte contextual sem entrega direta de gabaritos.",
    technologies: ["Python", "Django", "PostgreSQL", "pgvector", "React", "TypeScript", "Tailwind CSS", "Docker", "AWS S3"],
    personalContributions: "Atuação como Product Owner (PO) da equipe SkyFlyTeam: liderança estratégica do produto, concepção e priorização contínua do Product Backlog e User Stories ao longo das 3 sprints, definição dos critérios de aceitação, DoR (Definition of Ready) e DoD (Definition of Done), alinhamento constante com stakeholders e condução das Sprint Reviews, assegurando o cumprimento dos requisitos pedagógicos, de inteligência artificial e a entrega completa no cronograma acadêmico oficial da FATEC.",
    hardSkills: [
      { skill: "Gestão Ágil de Produto (Product Owner / Scrum)", level: "Fluente" },
      { skill: "Criação e Refinamento de Backlog & User Stories", level: "Fluente" },
      { skill: "Definição de Requisitos, DoR e DoD", level: "Fluente" },
      { skill: "Visão Arquitetural (Django, pgvector, React)", level: "Autônomo" }
    ],
    softSkills: [
      { skill: "Liderança de Produto & Visão Estratégica", context: "Orientação da equipe técnica quanto às prioridades de valor de negócio e experiência do usuário." },
      { skill: "Comunicação com Stakeholders & Negociação", context: "Alinhamento constante de expectativas, validação de protótipos e apresentação formal de resultados nas entregas de sprint." },
      { skill: "Tomada de Decisão Ágil", context: "Resolução rápida de impedimentos e ajustes de escopo para garantir 100% de entregas no prazo." }
    ]
  }
];

// Hobbies e Atividades Pessoais
export const hobbies = [
  {
    id: "futebol",
    title: "Assistir e Jogar Futebol",
    category: "Esporte Coletivo & Lazer",
    description: "Prática e acompanhamento esportivo regular. Desenvolvimento de raciocínio estratégico sob pressão, espírito coletivo, comunicação dinâmica e sinergia em equipe dentro e fora de campo.",
    image: `${BASE_URL}img/futebol.jpg`,
    tag: "Espírito de Equipe"
  },
  {
    id: "atividades",
    title: "Atividades Físicas & Musculação",
    category: "Saúde, Foco & Bem-estar",
    description: "Rotina disciplinada de treinos de força e condicionamento físico. Cultivo diário de consistência, determinação para superar metas progressivas e equilíbrio entre saúde física e mental.",
    image: `${BASE_URL}img/exercicio.jpg`,
    tag: "Disciplina & Consistência"
  },
  {
    id: "leitura",
    title: "Leitura & Desenvolvimento Pessoal",
    category: "Conhecimento & Reflexão",
    description: "Hábito contínuo de leitura de livros de tecnologia, engenharia de dados, desenvolvimento humano e narrativas reflexivas, enriquecendo o repertório intelectual e estimulando o pensamento crítico.",
    image: `${BASE_URL}img/artes.jpg`,
    tag: "Aprendizado Contínuo"
  }
];

// Produção Científica publicada
export const professionalProjects = [
  {
    id: "paper-descreve",
    type: "Publicação Científica Internacional",
    title: "Modeling Multi-Sensor Daily Fire Events in Brazil: The DescrEVE Relational Framework for Wildfire Monitoring",
    publisher: "MDPI Remote Sensing (Vol. 18, Issue 4, Art. 606)",
    year: "2026",
    link: "https://www.mdpi.com/2072-4292/18/4/606",
    doi: "10.3390/rs18040606",
    summary: "Artigo científico publicado em periódico internacional sobre o framework relacional DescrEVE para modelagem, agregação e monitoramento de queimadas no Brasil a partir de múltiplos sensores orbitais.",
    problem: "A integração de dados de múltiplos sensores orbitais apresenta desafios de compatibilidade e agregação espaço-temporal para o monitoramento contínuo de focos de queimadas.",
    solution: "Desenvolvimento de um framework relacional para correlacionar e organizar eventos diários de fogo em escala nacional.",
    technologies: ["Modelagem Relacional", "Python", "SQL", "Análise de Dados"],
    contributions: "Participação na modelagem relacional dos dados, apoio no tratamento das séries e elaboração do trabalho científico.",
    hardSkills: [
      { skill: "Modelagem Relacional de Dados", level: "Fluente" },
      { skill: "Processamento de Dados com Python & SQL", level: "Fluente" },
      { skill: "Escrita Técnica e Científica", level: "Fluente" }
    ],
    softSkills: [
      { skill: "Pensamento Analítico", context: "Análise de grandes volumes de dados e estruturação dos esquemas relacionais." }
    ]
  }
];

// Formação Acadêmica real
export const education = [
  {
    degree: "Tecnólogo em Desenvolvimento de Software Multiplataforma (DSM)",
    institution: "Faculdade de Tecnologia de São José dos Campos (FATEC SJC)",
    period: "2024 – Presente",
    description: "Curso Superior de Tecnologia focado em desenvolvimento de software multiplataforma, metodologias ágeis e engenharia de software."
  },
  {
    degree: "Técnico em Mecânica",
    institution: "ETEP",
    period: "2013 – 2014",
    description: "Curso técnico em mecânica e processos industriais."
  },
  {
    degree: "Ensino Médio",
    institution: "E. E. Major Aviador José Mariotto Ferreira",
    period: "2011 – 2013",
    description: "Ensino médio regular."
  }
];
