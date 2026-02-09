// Caelus Andromeda, Lda. - Complete Interactive JS
const translations = {
  en: {
    location: "Location: Lisbon Metropolitan Area, Portugal",
    page1: "Home", page2: "Services", page3: "About", page4: "Contact",
    heroTitle: "Build Your Future With Us",
    heroSub: "Strategic insights and innovative solutions for your business",
    getStarted: "Get Started",
    professional: "Professional Services",
    dataDriven: "Data-Driven Strategy",
    dedicated: "Dedicated Team",
    trusted: "Trusted Partner",
    about: "About Us",
    copyright: "© 2026 Caelus Andromeda, Lda. All rights reserved."
  },
  pt: {
    location: "Localização: Área Metropolitana de Lisboa, Portugal",
    page1: "Início", page2: "Serviços", page3: "Sobre", page4: "Contacto",
    heroTitle: "Construa Seu Futuro Conosco",
    heroSub: "Insights estratégicos e soluções inovadoras para seu negócio",
    getStarted: "Começar",
    professional: "Serviços Profissionais",
    dataDriven: "Estratégia Baseada em Dados",
    dedicated: "Equipe Dedicada",
    trusted: "Parceiro Confiável",
    about: "Sobre Nós",
    copyright: "© 2026 Caelus Andromeda, Lda. Todos os direitos reservados."
  }
};

let currentLang = localStorage.getItem('lang') || 'en';
let currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

function switchLang(lang) {
  currentLang = lang; 
  localStorage.setItem('lang', lang); 
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = translations[lang][key] || el.textContent;
  });
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`[onclick="switchLang('${lang}')"]`)?.classList.add('active');
  updateMottoDisplay();
}

function switchTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  localStorage.setItem('theme', currentTheme);
  const icon = document.querySelector('#theme-toggle i');
  icon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

let mottoIndex = 0;
function updateMottoDisplay() {
  document.querySelectorAll('.motto-text').forEach((text, i) => {
    text.style.display = i === mottoIndex ? 'inline' : 'none';
  });
}
function cycleMotto() { 
  mottoIndex = 1 - mottoIndex; 
  updateMottoDisplay(); 
}

document.addEventListener('DOMContentLoaded', () => {
  switchLang(currentLang);
  switchTheme();
  setInterval(cycleMotto, 5000);
  
  document.getElementById('theme-toggle')?.addEventListener('click', switchTheme);
  
  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(anchor.getAttribute('href'))?.scrollIntoView({behavior: 'smooth'});
    });
  });
});
