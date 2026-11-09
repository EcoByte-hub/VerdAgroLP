/**
 * Conteúdo da landing page do VerdAgro.
 * Baseado no documento de concepção do projeto (equipe EcoByte · HackBrasil).
 */

export const nav = [
  { label: 'Problema', href: '#problema' },
  { label: 'Solução', href: '#solucao' },
  { label: 'Diagnóstico', href: '#diagnostico' },
  { label: 'Plataforma', href: '#plataforma' },
  { label: 'Negócio', href: '#negocio' },
];

export const problems = {
  produtor: {
    title: 'Para o produtor rural',
    items: [
      'Não sabe por onde começar no mercado de carbono',
      'Não tem ferramentas de monitoramento ambiental',
      'Enfrenta complexidade técnica e documental',
      'Paga caro por consultoria, validação e certificação',
      'Não encontra empresas interessadas nos créditos',
      'Desconhece o potencial ambiental da própria terra',
    ],
  },
  empresa: {
    title: 'Para a empresa compradora',
    items: [
      'Tem dificuldade para encontrar projetos confiáveis',
      'Não enxerga a origem dos créditos',
      'Não consegue comparar projetos e oportunidades',
      'Precisa acompanhar procedência e certificação',
      'Lida com informações de mercado fragmentadas',
    ],
  },
};

export const audiences = {
  produtor: {
    label: 'Produtor rural',
    headline: 'Descubra o potencial ambiental da sua terra.',
    text: 'Cadastre a propriedade, veja seus limites no mapa e receba um diagnóstico com as práticas sustentáveis que podem virar projeto.',
    items: [
      'Cadastro da propriedade com localização, área e cultura',
      'Mapa interativo com os limites do talhão',
      'Diagnóstico ambiental inicial com IA',
      'Cadastro de projetos, documentos e evidências',
      'Vitrine no marketplace e propostas de empresas',
    ],
  },
  empresa: {
    label: 'Empresa compradora',
    headline: 'Encontre projetos com origem clara.',
    text: 'Busque e compare projetos por região, cultura e tipo. Veja indicadores, evidências e o estágio de certificação antes de negociar.',
    items: [
      'Perfil empresarial e busca de projetos de carbono',
      'Filtros por localização, cultura e tipo de projeto',
      'Indicadores ambientais e documentação disponível',
      'Estágio de certificação e volume efetivamente emitido',
      'Manifestação de interesse, propostas e negociação',
    ],
  },
};

export const modules = [
  {
    n: '01',
    title: 'Cadastro e mapeamento',
    text: 'Propriedade, área em hectares, culturas, histórico de manejo e práticas sustentáveis, com os limites desenhados no mapa.',
    icon: 'map',
  },
  {
    n: '02',
    title: 'Inteligência ambiental',
    text: 'IA, dados climáticos e geográficos para diagnóstico inicial, cobertura vegetal, uso do solo e recomendações de manejo.',
    icon: 'sparkles',
  },
  {
    n: '03',
    title: 'Gestão de projetos',
    text: 'Área envolvida, prática adotada, objetivo, período, evidências e situação de validação, com histórico de acompanhamento.',
    icon: 'folder',
  },
  {
    n: '04',
    title: 'Marketplace de créditos',
    text: 'Página do projeto com localização aproximada, metodologia, indicadores, status de certificação e volume emitido.',
    icon: 'store',
  },
  {
    n: '05',
    title: 'Negociação comercial',
    text: 'Solicitação de contato, envio de propostas, negociação de volumes e histórico, tudo intermediado pela plataforma.',
    icon: 'handshake',
  },
  {
    n: '06',
    title: 'Rastreabilidade',
    text: 'Cada projeto carrega sua linha do tempo, do cadastro à comercialização. Estimativa nunca se passa por crédito emitido.',
    icon: 'route',
  },
] as const;

export const stages = [
  { title: 'Cadastro', kind: 'estimativa' },
  { title: 'Análise inicial', kind: 'estimativa' },
  { title: 'Desenvolvimento', kind: 'estimativa' },
  { title: 'Validação', kind: 'processo' },
  { title: 'Monitoramento', kind: 'processo' },
  { title: 'Verificação independente', kind: 'processo' },
  { title: 'Emissão de créditos', kind: 'certificado' },
  { title: 'Comercialização', kind: 'certificado' },
] as const;

export const journey = [
  { step: 'Produtor', text: 'Cadastra uma propriedade demonstrativa de 200 hectares.' },
  { step: 'Diagnóstico', text: 'Recebe mapa e diagnóstico ambiental com oportunidades.' },
  { step: 'Projeto', text: 'Cadastra o projeto, registra práticas e anexa evidências.' },
  { step: 'Marketplace', text: 'O projeto aparece com dados e estágio de desenvolvimento.' },
  { step: 'Empresa', text: 'Uma empresa pesquisa projetos e consulta as informações.' },
  { step: 'Negociação', text: 'A empresa manifesta interesse e envia uma solicitação.' },
  { step: 'Resultado', text: 'O produtor recebe o interesse direto no seu painel.' },
];

export const practices = [
  'Plantio direto',
  'Rotação de culturas',
  'Recuperação de pastagens',
  'Culturas de cobertura',
  'Integração lavoura-pecuária',
  'Manejo do solo',
];

export const business = [
  {
    who: 'Produtores rurais',
    items: ['Plano gratuito: cadastro e diagnóstico', 'Planos de monitoramento e gestão', 'Estruturação de projetos'],
  },
  {
    who: 'Empresas compradoras',
    items: ['Assinatura de busca e análise', 'Inteligência e relatórios', 'Rastreabilidade avançada'],
  },
  {
    who: 'Intermediação',
    items: ['Comissão sobre transações, quando juridicamente adequada', 'Conexão produtor ↔ comprador'],
  },
  {
    who: 'Gestão de projetos',
    items: ['Organização documental e acompanhamento', 'Gestão de projetos coletivos'],
  },
];

export const differentials = [
  {
    title: 'Democratização',
    text: 'Pequenos e médios produtores entram no mercado sem precisar de estrutura técnica própria.',
  },
  {
    title: 'Projetos coletivos',
    text: 'Vários produtores agrupados dividem custos de monitoramento e desenvolvimento.',
  },
  {
    title: 'Atuamos antes do crédito',
    text: 'Enquanto a maioria vende créditos prontos, o VerdAgro ajuda a estruturar o projeto desde o início.',
  },
  {
    title: 'Um ambiente para cada público',
    text: 'Ambientes e jornadas diferentes para quem produz e para quem compra.',
  },
];

export const trust = {
  principles: [
    'Adicionalidade',
    'Linha de base',
    'Permanência',
    'Vazamento de emissões',
    'Metodologias reconhecidas',
    'Evidências e monitoramento',
    'Verificação independente',
  ],
  references: [
    { name: 'Verra VM0042', desc: 'Metodologia para manejo agrícola aprimorado' },
    { name: 'SBCE', desc: 'Sistema Brasileiro de Comércio de Emissões' },
    { name: 'Lei 15.042/2024', desc: 'Marco legal do mercado de carbono no Brasil' },
  ],
};

export const expansion = [
  'Cooperativas e associações',
  'Consultorias ambientais',
  'Certificadoras',
  'Gestão de indicadores ESG',
  'Cadeia de suprimentos',
];
