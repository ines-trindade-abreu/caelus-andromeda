// ========================================
// Caelus Andromeda, Lda.
// Main JavaScript File
// ========================================
// Features:
// - Bilingual content (EN/PT) with localStorage persistence
// - iOS-style dark/light mode toggle with system preference detection
// - Alternating top bar mottos (5s cycle)
// - Smooth scrolling navigation
// ========================================

// ========================================
// 1. CONFIGURATION & CONSTANTS
// ========================================

const MOTTO_CYCLE_INTERVAL = 5000; // 5 seconds
const DEFAULT_LANG = 'en';
const STORAGE_KEYS = {
  LANG: 'lang',
  THEME: 'theme'
};

// CENTRALIZED LINKS
const COMPANY_INFO = {
  phone: '+351214151214',
  mobile: '+351966602678',
  email: 'caelusandromeda@gmail.com',
  mapsLink: 'https://maps.app.goo.gl/MhhzdSZYgxiADB7d9'  // PUT YOUR GOOGLE MAPS LINK HERE
};

// ========================================
// 2. TRANSLATIONS DATABASE
// ========================================

const translations = {
  en: {
    // -------------------- GLOBAL --------------------
    // Top Bar
    motto1: "Excellence in Financial Services",
    motto2: "Lisbon Metropolitan Area, Portugal",
    
    // Navigation
    navFirm: "The Firm",
    navServices: "Services",
    navContact: "Contact",
    
    // Footer
    copyright: "© 2026 Caelus Andromeda, Lda. All rights reserved.",

    // -------------------- INDEX PAGE (HOME) --------------------
    // Hero Section
    heroTitle: "Financial Excellence is our Practice",
    heroSubtitle: "Expert accounting, auditing, consulting, and tax solutions",
    ctaButton: "Discover our offer",
    
    // Feature Cards
    card1Title: "Professional Services",
    card1Text: "Expert accountant, economist and financial auditor with over 30 years of experience in the business.",
    card2Title: "Data-Driven Strategy",
    card2Text: "Leverage analytics and insights to make informed decisions that drive results.",
    card3Title: "New Technologies",
    card3Text: "Integrate new technologies in our practice to modernize and individualize the approach.",
    card4Title: "Trusted Partner",
    card4Text: "Reliable, transparent partnerships built on integrity and proven track record.",
        // Additional Cards (Index)
    card5Title: "Personalized Service",
    card5Text: "Every client is unique. We tailor our approach to your specific needs, goals, and industry challenges.",
    card6Title: "Regulatory Compliance",
    card6Text: "Stay ahead of regulatory changes and ensure full compliance with Portuguese and EU financial requirements.",

    
    // About Section
    aboutTitle: "About Us",
    aboutP1: "Welcome to Caelus Andromeda. We specialize in providing innovative financial solutions that help businesses thrive in today's competitive landscape.",
    aboutP2: "With over 30 years of expertise, our team is dedicated to delivering exceptional results and building long-term partnerships.",

    // -------------------- ABOUT PAGE (THE FIRM) --------------------
    // Hero Section
    aboutHeroTitle: "About Caelus Andromeda",
    aboutHeroSubtitle: "Three decades of financial expertise at your service",
    
    // Main Content
    aboutFirmTitle: "The Firm",
    aboutFirmP1: "Caelus Andromeda, Lda. was founded with a vision to provide exceptional accounting, auditing, consulting, and tax services to businesses in the Lisbon Metropolitan Area and beyond.",
    aboutFirmP2: "With over 30 years of combined experience, our firm has built a reputation for integrity, precision, and innovation in financial services.",
    aboutFirmP3: "We combine traditional financial expertise with modern technology to deliver tailored solutions that meet the evolving needs of our clients in today's competitive business environment.",
    
    // Values Cards
    aboutCard1Title: "Our Expertise",
    aboutCard1Text: "Led by experienced accountants, economists, and financial auditors with extensive industry knowledge and professional certifications.",
    aboutCard2Title: "Our Values",
    aboutCard2Text: "Integrity, transparency, and client-focused service guide everything we do, ensuring trusted partnerships built to last.",
    aboutCard3Title: "Our Approach",
    aboutCard3Text: "Combining proven financial methodologies with innovative technologies to deliver modern, efficient, and personalized solutions.",
    aboutCard4Title: "Our Commitment",
    aboutCard4Text: "Dedicated to understanding each client's unique needs and delivering measurable results that drive sustainable growth.",
    
    // Why Choose Us
    aboutWhyTitle: "Why Choose Us",
    aboutWhyP1: "In a rapidly changing financial landscape, businesses need partners who understand both traditional practices and emerging trends. Our team stays ahead of regulatory changes and technological innovations to provide you with cutting-edge advice.",
    aboutWhyP2: "Whether you're a startup navigating your first fiscal year or an established enterprise optimizing complex financial structures, we bring the expertise, dedication, and strategic insight to help you succeed.",

    // -------------------- SERVICES PAGE --------------------
    // Hero
    servicesHeroTitle: "Our Services",
    servicesHeroSubtitle: "Comprehensive financial solutions tailored to your business needs",

    // Intro
    servicesIntroTitle: "What We Offer",
    servicesIntroText: "From startups to established enterprises, we provide the expertise and strategic insight needed to navigate today's complex financial landscape with confidence.",

    // Service 1 - Accounting
    service1Title: "Accounting Services",
    service1Desc: "Complete bookkeeping and financial record management solutions designed to keep your business compliant and organized.",
    service1Item1: "Monthly financial statements and reconciliation",
    service1Item2: "Accounts payable and receivable management",
    service1Item3: "Payroll processing and compliance",
    service1Item4: "Annual financial reporting and analysis",
    service1Item5: "Cloud-based accounting system integration",

    // Service 2 - Auditing
    service2Title: "Auditing & Assurance",
    service2Desc: "Independent financial audits and assurance services that build trust with stakeholders and ensure regulatory compliance.",
    service2Item1: "Statutory financial audits",
    service2Item2: "Internal control assessments",
    service2Item3: "Compliance and regulatory reviews",
    service2Item4: "Risk management evaluations",
    service2Item5: "Due diligence for mergers and acquisitions",

    // Service 3 - Consulting
    service3Title: "Business Consulting",
    service3Desc: "Strategic financial consulting to optimize operations, improve profitability, and drive sustainable growth.",
    service3Item1: "Business planning and forecasting",
    service3Item2: "Cash flow optimization strategies",
    service3Item3: "Cost reduction and efficiency analysis",
    service3Item4: "Financial restructuring advisory",
    service3Item5: "Technology implementation support",

    // Service 4 - Tax
    service4Title: "Tax Services",
    service4Desc: "Comprehensive tax planning and compliance services to minimize liabilities and maximize efficiency.",
    service4Item1: "Corporate and individual tax preparation",
    service4Item2: "VAT and indirect tax compliance",
    service4Item3: "Tax optimization and planning strategies",
    service4Item4: "International tax advisory",
    service4Item5: "Tax dispute resolution and representation",

        // Service 5 - Financial Planning
    service5Title: "Financial Planning & Analysis",
    service5Desc: "Strategic financial planning and performance analysis to help you make informed decisions and achieve your business objectives.",
    service5Item1: "Long-term financial planning and forecasting",
    service5Item2: "Budgeting and variance analysis",
    service5Item3: "KPI development and performance tracking",
    service5Item4: "Investment analysis and ROI assessment",
    service5Item5: "Scenario modeling and sensitivity analysis",

    // Service 6 - Business Formation
    service6Title: "Business Formation & Setup",
    service6Desc: "Expert guidance for entrepreneurs and businesses establishing or restructuring operations in Portugal.",
    service6Item1: "Company registration and legal structure advisory",
    service6Item2: "Business license and permit assistance",
    service6Item3: "Startup financial planning and setup",
    service6Item4: "Corporate restructuring advisory",
    service6Item5: "Non-resident entrepreneur support",


    // Shared
    serviceLearnMore: "Learn More",

    // Process Section
    processTitle: "Our Process",
    processStep1Title: "Discovery",
    processStep1Text: "We listen to understand your unique challenges, goals, and current financial situation.",
    processStep2Title: "Analysis",
    processStep2Text: "Our experts analyze your data and identify opportunities for improvement and growth.",
    processStep3Title: "Strategy",
    processStep3Text: "We develop a tailored plan with clear milestones and measurable outcomes.",
    processStep4Title: "Implementation",
    processStep4Text: "We execute the strategy with precision, keeping you informed every step of the way.",

    // CTA Section
    ctaSectionTitle: "Ready to Get Started?",
    ctaSectionText: "Let's discuss how our services can help your business thrive. Contact us today for a free consultation.",
    ctaSectionButton: "Schedule a Consultation",

    // -------------------- CONTACT PAGE --------------------
    // Hero
    contactHeroTitle: "Get in Touch",
    contactHeroSubtitle: "We're here to help your business succeed",

    // Intro
    contactIntroTitle: "Let's Start a Conversation",
    contactIntroText: "Whether you need accounting services, tax advice, or strategic consulting, our team is ready to assist. Reach out today to schedule a free consultation.",

    // Form
    contactFormTitle: "Send us a Message",
    formLabelName: "Full Name *",
    formLabelEmail: "Email Address *",
    formLabelPhone: "Phone Number",
    formLabelCompany: "Company Name",
    formLabelService: "Service of Interest",
    formSelectDefault: "Select a service...",
    formSelectAccounting: "Accounting",
    formSelectAuditing: "Auditing",
    formSelectConsulting: "Consulting",
    formSelectTax: "Tax Services",
    formSelectFinancial: "Financial Planning & Analysis",
    formSelectFormation: "Business Formation & Setup",
    formSelectOther: "Other",
    formLabelMessage: "Message *",
    formSubmitButton: "Send Message",
    formNote: "We'll respond within 48 business hours.",

    // Contact Info
    contactInfoTitle: "Contact Information",
    infoPhoneTitle: "Phone",
    infoPhoneLandline: "(Landline)",
    infoPhoneMobile: "(Mobile)",
    infoPhoneNote: "Mon-Fri, 9:00 - 18:00",
    infoEmailTitle: "Email",
    infoEmailNote: "We respond within 48h",
    infoLocationTitle: "Location",
    infoLocationAddress: "Lisbon Metropolitan Area",
    infoLocationCountry: "Portugal",
    infoLocationMap: "View on Map",

    // Office Hours
    officeHoursTitle: "Office Hours",
    hoursMonFri: "Monday - Friday",
    hoursSat: "Saturday",
    hoursSun: "Sunday",
    hoursClosedSat: "Scheduled appointments only.",
    hoursClosedSun: "Closed",
    hoursNote: "Appointments available by request",

    // Map
    mapSectionTitle: "Find Us"
  },

  pt: {
    // -------------------- GLOBAL --------------------
    // Top Bar
    motto1: "Excelência em Serviços Financeiros",
    motto2: "Área Metropolitana de Lisboa, Portugal",
    
    // Navigation
    navFirm: "A Firma",
    navServices: "Serviços",
    navContact: "Contacto",
    
    // Footer
    copyright: "© 2026 Caelus Andromeda, Lda. Todos os direitos reservados.",

    // -------------------- INDEX PAGE (HOME) --------------------
    // Hero Section
    heroTitle: "Excelência Financeira é a nossa Prática",
    heroSubtitle: "Soluções especializadas em contabilidade, auditoria, consultoria e impostos",
    ctaButton: "Descubra a nossa oferta",
    
    // Feature Cards
    card1Title: "Serviços Profissionais",
    card1Text: "Contabilista, economista e auditor financeiro, com mais de 30 anos de experiência no ramo.",
    card2Title: "Estratégia Baseada em Dados",
    card2Text: "Aproveitar análises e insights para tomar decisões que impulsionam resultados.",
    card3Title: "Novas Tecnologias",
    card3Text: "Integração de novas tecnologias para modernizar e individualizar a abordagem.",
    card4Title: "Parceiro Confiável",
    card4Text: "Parcerias confiáveis e transparentes construídas sobre integridade e histórico comprovado.",
    card5Title: "Serviço Personalizado",
    card5Text: "Cada cliente é único. Adaptamos a nossa abordagem às suas necessidades específicas, objetivos e desafios do setor.",
    card6Title: "Conformidade Regulatória",
    card6Text: "Mantenha-se à frente das mudanças regulatórias e garanta total conformidade com os requisitos financeiros portugueses e da UE.",

    
    // About Section
    aboutTitle: "Sobre Nós",
    aboutP1: "Bem-vindo à Caelus Andromeda. Especializamo-nos em fornecer soluções financeiras inovadoras que ajudam os negócios a prosperar no cenário competitivo atual.",
    aboutP2: "Com mais de 30 anos de experiência, a nossa equipa está dedicada a entregar resultados excepcionais e construir parcerias de longo prazo.",

    // -------------------- ABOUT PAGE (THE FIRM) --------------------
    // Hero Section
    aboutHeroTitle: "Sobre a Caelus Andromeda",
    aboutHeroSubtitle: "Três décadas de experiência financeira ao seu serviço",
    
    // Main Content
    aboutFirmTitle: "A Firma",
    aboutFirmP1: "A Caelus Andromeda, Lda. foi fundada com a visão de fornecer serviços excepcionais de contabilidade, auditoria, consultoria e impostos a empresas na Área Metropolitana de Lisboa e além.",
    aboutFirmP2: "Com mais de 30 anos de experiência combinada, a nossa firma construiu uma reputação de integridade, precisão e inovação em serviços financeiros.",
    aboutFirmP3: "Combinamos experiência financeira tradicional com tecnologia moderna para entregar soluções personalizadas que atendem às necessidades em evolução dos nossos clientes no ambiente empresarial competitivo de hoje.",
    
    // Values Cards
    aboutCard1Title: "A Nossa Especialização",
    aboutCard1Text: "Liderados por contabilistas, economistas e auditores financeiros experientes com vasto conhecimento do setor e certificações profissionais.",
    aboutCard2Title: "Os Nossos Valores",
    aboutCard2Text: "Integridade, transparência e serviço focado no cliente orientam tudo o que fazemos, garantindo parcerias de confiança construídas para durar.",
    aboutCard3Title: "A Nossa Abordagem",
    aboutCard3Text: "Combinando metodologias financeiras comprovadas com tecnologias inovadoras para entregar soluções modernas, eficientes e personalizadas.",
    aboutCard4Title: "O Nosso Compromisso",
    aboutCard4Text: "Dedicados a compreender as necessidades únicas de cada cliente e entregar resultados mensuráveis que impulsionam o crescimento sustentável.",
    
    // Why Choose Us
    aboutWhyTitle: "Porquê Escolher-nos",
    aboutWhyP1: "Num panorama financeiro em rápida mudança, as empresas precisam de parceiros que compreendam tanto as práticas tradicionais como as tendências emergentes. A nossa equipa mantém-se à frente das mudanças regulatórias e inovações tecnológicas para lhe fornecer aconselhamento de ponta.",
    aboutWhyP2: "Quer seja uma startup a navegar o seu primeiro ano fiscal ou uma empresa estabelecida a otimizar estruturas financeiras complexas, trazemos a experiência, dedicação e visão estratégica para o ajudar a ter sucesso.",

    // -------------------- SERVICES PAGE --------------------
    servicesHeroTitle: "Os Nossos Serviços",
    servicesHeroSubtitle: "Soluções financeiras abrangentes adaptadas às necessidades do seu negócio",

    servicesIntroTitle: "O Que Oferecemos",
    servicesIntroText: "De startups a empresas estabelecidas, fornecemos a experiência e visão estratégica necessárias para navegar no complexo panorama financeiro de hoje com confiança.",

    service1Title: "Serviços de Contabilidade",
    service1Desc: "Soluções completas de contabilidade e gestão de registos financeiros para manter o seu negócio em conformidade e organizado.",
    service1Item1: "Demonstrações financeiras mensais e reconciliação",
    service1Item2: "Gestão de contas a pagar e a receber",
    service1Item3: "Processamento de salários e conformidade",
    service1Item4: "Relatórios financeiros anuais e análise",
    service1Item5: "Integração de sistemas de contabilidade em nuvem",

    service2Title: "Auditoria e Garantia",
    service2Desc: "Auditorias financeiras independentes e serviços de garantia que constroem confiança com as partes interessadas e garantem conformidade regulatória.",
    service2Item1: "Auditorias financeiras obrigatórias",
    service2Item2: "Avaliações de controlo interno",
    service2Item3: "Revisões de conformidade e regulamentares",
    service2Item4: "Avaliações de gestão de risco",
    service2Item5: "Due diligence para fusões e aquisições",

    service3Title: "Consultoria Empresarial",
    service3Desc: "Consultoria financeira estratégica para otimizar operações, melhorar rentabilidade e impulsionar crescimento sustentável.",
    service3Item1: "Planeamento e previsão empresarial",
    service3Item2: "Estratégias de otimização de fluxo de caixa",
    service3Item3: "Análise de redução de custos e eficiência",
    service3Item4: "Assessoria de reestruturação financeira",
    service3Item5: "Suporte de implementação tecnológica",

    service4Title: "Serviços Fiscais",
    service4Desc: "Serviços abrangentes de planeamento e conformidade fiscal para minimizar responsabilidades e maximizar eficiência.",
    service4Item1: "Preparação de impostos corporativos e individuais",
    service4Item2: "Conformidade com IVA e impostos indiretos",
    service4Item3: "Estratégias de otimização e planeamento fiscal",
    service4Item4: "Assessoria fiscal internacional",
    service4Item5: "Resolução de litígios fiscais e representação",

        // Service 5 - Financial Planning
    service5Title: "Planeamento e Análise Financeira",
    service5Desc: "Planeamento financeiro estratégico e análise de desempenho para o ajudar a tomar decisões informadas e alcançar os seus objetivos empresariais.",
    service5Item1: "Planeamento financeiro de longo prazo e previsão",
    service5Item2: "Orçamentação e análise de variações",
    service5Item3: "Desenvolvimento de KPIs e acompanhamento de desempenho",
    service5Item4: "Análise de investimentos e avaliação de ROI",
    service5Item5: "Modelagem de cenários e análise de sensibilidade",

    // Service 6 - Business Formation
    service6Title: "Formação e Constituição de Empresas",
    service6Desc: "Orientação especializada para empresários e empresas a estabelecer ou reestruturar operações em Portugal.",
    service6Item1: "Registo de empresas e assessoria de estrutura legal",
    service6Item2: "Assistência com licenças e autorizações empresariais",
    service6Item3: "Planeamento financeiro e constituição de startups",
    service6Item4: "Assessoria de reestruturação corporativa",
    service6Item5: "Apoio a empresários não residentes",


    serviceLearnMore: "Saiba Mais",

    processTitle: "O Nosso Processo",
    processStep1Title: "Descoberta",
    processStep1Text: "Ouvimos para compreender os seus desafios únicos, objetivos e situação financeira atual.",
    processStep2Title: "Análise",
    processStep2Text: "Os nossos especialistas analisam os seus dados e identificam oportunidades de melhoria e crescimento.",
    processStep3Title: "Estratégia",
    processStep3Text: "Desenvolvemos um plano personalizado com marcos claros e resultados mensuráveis.",
    processStep4Title: "Implementação",
    processStep4Text: "Executamos a estratégia com precisão, mantendo-o informado em cada passo do caminho.",

    ctaSectionTitle: "Pronto para Começar?",
    ctaSectionText: "Vamos discutir como os nossos serviços podem ajudar o seu negócio a prosperar. Contacte-nos hoje para uma consulta gratuita.",
    ctaSectionButton: "Agende uma Consulta",

    // -------------------- CONTACT PAGE --------------------
    contactHeroTitle: "Entre em Contacto",
    contactHeroSubtitle: "Estamos aqui para ajudar o seu negócio a ter sucesso",

    contactIntroTitle: "Vamos Iniciar uma Conversa",
    contactIntroText: "Seja para serviços de contabilidade, aconselhamento fiscal ou consultoria estratégica, a nossa equipa está pronta para ajudar. Entre em contacto hoje para agendar uma consulta gratuita.",

    contactFormTitle: "Envie-nos uma Mensagem",
    formLabelName: "Nome Completo *",
    formLabelEmail: "Endereço de Email *",
    formLabelPhone: "Número de Telefone",
    formLabelCompany: "Nome da Empresa",
    formLabelService: "Serviço de Interesse",
    formSelectDefault: "Selecione um serviço...",
    formSelectAccounting: "Contabilidade",
    formSelectAuditing: "Auditoria",
    formSelectConsulting: "Consultoria",
    formSelectTax: "Serviços Fiscais",
    formSelectFinancial: "Planeamento e Análise Financeira",
    formSelectFormation: "Formação e Constituição de Empresas",
    formSelectOther: "Outro",
    formLabelMessage: "Mensagem *",
    formSubmitButton: "Enviar Mensagem",
    formNote: "Responderemos dentro de 48 horas úteis.",

    contactInfoTitle: "Informações de Contacto",
    infoPhoneTitle: "Telefone",
    infoPhoneLandline: "(Fixo)",
    infoPhoneMobile: "(Móvel)",
    infoPhoneNote: "Seg-Sex, 9:00 - 18:00",
    infoEmailTitle: "Email",
    infoEmailNote: "Respondemos em 48h",
    infoLocationTitle: "Localização",
    infoLocationAddress: "Área Metropolitana de Lisboa",
    infoLocationCountry: "Portugal",
    infoLocationMap: "Ver no Mapa",

    officeHoursTitle: "Horário de Funcionamento",
    hoursMonFri: "Segunda - Sexta",
    hoursSat: "Sábado",
    hoursSun: "Domingo",
    hoursClosedSat: "Apenas mediante agendamento.",
    hoursClosedSun: "Fechado",
    hoursNote: "Agendamentos disponíveis mediante pedido",

    mapSectionTitle: "Encontre-nos"
  }
};

// ========================================
// 3. STATE MANAGEMENT
// ========================================

let currentLang = localStorage.getItem(STORAGE_KEYS.LANG) || DEFAULT_LANG;
let currentTheme = localStorage.getItem(STORAGE_KEYS.THEME) || 
                   (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
let mottoIndex = 0;

// ========================================
// 4. LANGUAGE FUNCTIONS
// ========================================

/**
 * Switches the site language and updates all translated elements
 * @param {string} lang - Language code ('en' or 'pt')
 */
function switchLang(lang) {
  currentLang = lang;
  localStorage.setItem(STORAGE_KEYS.LANG, lang);
  document.documentElement.lang = lang;
  
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  
  // Update active language button
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`[onclick="switchLang('${lang}')"]`)?.classList.add('active');
  
  // Refresh motto display for new language
  updateMottoDisplay();
}

// ========================================
// 5. THEME FUNCTIONS
// ========================================

/**
 * Toggles or sets dark/light theme
 * @param {string} [theme] - Optional: 'dark' or 'light'. If omitted, toggles current theme
 */
function switchTheme(theme) {
  currentTheme = theme || (currentTheme === 'dark' ? 'light' : 'dark');
  document.documentElement.setAttribute('data-theme', currentTheme);
  localStorage.setItem(STORAGE_KEYS.THEME, currentTheme);
  
  // Update iOS-style toggle checkbox
  const checkbox = document.getElementById('theme-toggle-checkbox');
  if (checkbox) {
    checkbox.checked = (currentTheme === 'dark');
  }
}

/**
 * Listens for system theme changes and updates if user hasn't manually set preference
 */
function initSystemThemeListener() {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem(STORAGE_KEYS.THEME)) {
      switchTheme(e.matches ? 'dark' : 'light');
    }
  });
}

// ========================================
// 6. MOTTO CYCLING FUNCTIONS
// ========================================

/**
 * Updates the displayed motto based on current index
 */

// Alternating Mottos (2 per language) - SMOOTH FADE VERSION
function updateMottoDisplay() {
  const mottos = document.querySelectorAll('.motto-text');
  mottos.forEach((text, i) => {
    if (i === mottoIndex) {
      text.style.display = 'inline';
      // Trigger fade in
      setTimeout(() => {
        text.style.opacity = '1';
      }, 10);
    } else {
      // Fade out first
      text.style.opacity = '0';
      // Then hide after fade completes
      setTimeout(() => {
        text.style.display = 'none';
      }, 500);  // Match CSS transition time
    }
  });
}


/**
 * Cycles to the next motto (toggles between 0 and 1)
 */
function cycleMotto() {
  mottoIndex = 1 - mottoIndex;
  updateMottoDisplay();
}

/**
 * Starts the automatic motto cycling interval
 */
function initMottoCycling() {
  setInterval(cycleMotto, MOTTO_CYCLE_INTERVAL);
}

// ========================================
// 7. NAVIGATION FUNCTIONS
// ========================================

/**
 * Enables smooth scrolling for anchor links
 */
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// ========================================
// 8. EVENT LISTENERS
// ========================================

/**
 * Initializes iOS-style theme toggle checkbox
 */
function initThemeToggle() {
  const toggleCheckbox = document.getElementById('theme-toggle-checkbox');
  if (toggleCheckbox) {
    toggleCheckbox.addEventListener('change', () => switchTheme());
  }
}

// ========================================
// 9. CONTACT LINKS UPDATE
// ========================================

/**
 * Updates all contact links from centralized config
 */
function updateContactLinks() {
  // Update all map links
  document.querySelectorAll('a[aria-label="Map"]').forEach(link => {
    link.href = COMPANY_INFO.mapsLink;
  });
  
  // Update phone links (optional - in case you change numbers)
  document.querySelectorAll('a[href^="tel:+351214"]').forEach(link => {
    link.href = `tel:${COMPANY_INFO.phone}`;
  });
  
  document.querySelectorAll('a[href^="tel:+351966"]').forEach(link => {
    link.href = `tel:${COMPANY_INFO.mobile}`;
  });
  
  // Update email links
  document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.href = `mailto:${COMPANY_INFO.email}`;
  });
}

// ========================================
// 10. INITIALIZATION
// ========================================

/**
 * Main initialization function - runs when DOM is fully loaded
 */
function init() {
  // Set initial language and theme
  switchLang(currentLang);
  switchTheme(currentTheme);
  
  // Start features
  initMottoCycling();
  initSmoothScrolling();
  initThemeToggle();
  initSystemThemeListener();
  
  // UPDATE CENTRALIZED LINKS
  updateContactLinks();  // ADD THIS LINE
}


// Run initialization when DOM is ready
document.addEventListener('DOMContentLoaded', init);

// ========================================
// END OF FILE
// ========================================

