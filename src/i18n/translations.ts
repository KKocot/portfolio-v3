export type Language = 'en' | 'pl';

export interface Translations {
  nav: {
    about: string;
    skills: string;
    projects: string;
    contact: string;
  };
  hero: {
    role: string;
    tagline: string;
    description: string;
    cta: {
      projects: string;
      contact: string;
    };
    scroll: string;
  };
  about: {
    tag: string;
    title: string;
    lead: string;
    text: string[];
    stats: {
      experience: string;
      projects: string;
      remote: string;
    };
  };
  skills: {
    tag: string;
    title: string;
    categories: {
      frontend: string;
      backend: string;
      mobile: string;
      devops: string;
    };
  };
  projects: {
    tag: string;
    title: string;
    viewProject: string;
    viewAll: string;
    descriptions: {
      denser: string;
      conqsite: string;
      elysiaBackend: string;
      shoppingList: string;
      excelReader: string;
      stasiakOpal: string;
      flashcards: string;
    };
  };
  contact: {
    tag: string;
    title: string;
    description: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
      sending: string;
    };
    toast: {
      success: string;
      error: string;
    };
  };
  footer: {
    rights: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      role: 'Full-Stack Developer & Freelancer',
      tagline: "Hi, I'm",
      description:
        'I build modern web and mobile applications with a passion for clean code and excellent UX. Working remotely from Katowice, delivering solutions for clients worldwide.',
      cta: {
        projects: 'View projects',
        contact: "Let's talk",
      },
      scroll: 'Scroll',
    },
    about: {
      tag: 'About me',
      title: 'Passion for creating\ndigital solutions',
      lead: "I'm a Full-Stack Developer with nearly 2 years of commercial experience. I specialize in building scalable web and mobile applications.",
      text: [
        'I work as a freelancer, which allows me to take a flexible approach to each project and collaborate directly with clients. My goal is to deliver solutions that not only work but also delight users.',
        'I value clean code, best practices, and continuous growth. I am active on GitHub, where I have earned Pull Shark and Quickdraw badges.',
      ],
      stats: {
        experience: 'Years of experience',
        projects: 'Completed projects',
        remote: 'Remote work',
      },
    },
    skills: {
      tag: 'Skills',
      title: 'Technologies I\nspecialize in',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        mobile: 'Mobile & Testing',
        devops: 'DevOps & Tools',
      },
    },
    projects: {
      tag: 'Projects',
      title: 'Selected works',
      viewProject: 'View project',
      viewAll: 'View all projects on GitHub',
      descriptions: {
        denser:
          'Decentralized social media for Hive Blockchain. Blog and wallet modules, E2E testing with Playwright, monorepo with Turbo.',
        conqsite:
          'Gaming community platform with guild management, Discord bot integration, real-time features, and social tools.',
        elysiaBackend:
          'Universal REST API powering multiple projects. Rate limiting, Telegram notifications, multi-database support.',
        shoppingList:
          'Cross-platform mobile app for shared shopping lists. Real-time sync, family sharing, offline support.',
        excelReader:
          'CSV data analysis tool with interactive visualizations. Drag & drop upload, chart generation, data filtering.',
        stasiakOpal:
          'Business landing page with focus on Core Web Vitals, SEO optimization, and conversion-oriented design.',
        flashcards:
          'Learning app with spaced repetition algorithm. Progress tracking, multiple decks, keyboard shortcuts.',
      },
    },
    contact: {
      tag: 'Contact',
      title: "Let's talk about\nyour project",
      description:
        "Looking for a developer for your project? I'd love to discuss your needs and propose the best solution.",
      form: {
        name: 'Full name',
        email: 'Email',
        message: 'Message',
        submit: 'Send message',
        sending: 'Sending...',
      },
      toast: {
        success: 'Thank you for your message! I will get back to you soon.',
        error: 'Something went wrong. Please try again later.',
      },
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },
  pl: {
    nav: {
      about: 'O mnie',
      skills: 'Umiejętności',
      projects: 'Projekty',
      contact: 'Kontakt',
    },
    hero: {
      role: 'Full-Stack Developer & Freelancer',
      tagline: 'Cześć, jestem',
      description:
        'Tworzę nowoczesne aplikacje webowe i mobilne z pasją do czystego kodu i doskonałego UX. Pracuję zdalnie z Katowic, dostarczając rozwiązania dla klientów na całym świecie.',
      cta: {
        projects: 'Zobacz projekty',
        contact: 'Porozmawiajmy',
      },
      scroll: 'Scroll',
    },
    about: {
      tag: 'O mnie',
      title: 'Pasja do tworzenia\ncyfrowych rozwiązań',
      lead: 'Jestem Full-Stack Developerem z niemal 2-letnim doświadczeniem komercyjnym. Specjalizuję się w budowaniu skalowalnych aplikacji webowych i mobilnych.',
      text: [
        'Pracuję jako freelancer, co pozwala mi na elastyczne podejście do każdego projektu i bezpośrednią współpracę z klientami. Moim celem jest dostarczanie rozwiązań, które nie tylko działają, ale też zachwycają użytkowników.',
        'Cenię czysty kod, dobre praktyki i ciągły rozwój. Aktywnie działam na GitHubie, gdzie zdobyłem odznaki Pull Shark i Quickdraw.',
      ],
      stats: {
        experience: 'Lata doświadczenia',
        projects: 'Ukończonych projektów',
        remote: 'Praca zdalna',
      },
    },
    skills: {
      tag: 'Umiejętności',
      title: 'Technologie, w których\nsię specjalizuję',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        mobile: 'Mobile & Testing',
        devops: 'DevOps & Tools',
      },
    },
    projects: {
      tag: 'Projekty',
      title: 'Wybrane realizacje',
      viewProject: 'Zobacz projekt',
      viewAll: 'Zobacz wszystkie projekty na GitHub',
      descriptions: {
        denser:
          'Zdecentralizowane media społecznościowe dla Hive Blockchain. Moduły blog i wallet, testy E2E z Playwright, monorepo z Turbo.',
        conqsite:
          'Platforma dla społeczności graczy z zarządzaniem gildiami, integracją bota Discord, funkcjami real-time.',
        elysiaBackend:
          'Uniwersalne REST API obsługujące wiele projektów. Rate limiting, powiadomienia Telegram, multi-database.',
        shoppingList:
          'Wieloplatformowa aplikacja mobilna do list zakupów. Synchronizacja real-time, współdzielenie, tryb offline.',
        excelReader:
          'Narzędzie do analizy danych CSV z wizualizacjami. Drag & drop, generowanie wykresów, filtrowanie danych.',
        stasiakOpal:
          'Strona biznesowa z naciskiem na Core Web Vitals, optymalizację SEO i design zorientowany na konwersję.',
        flashcards:
          'Aplikacja do nauki z algorytmem powtórek. Śledzenie postępów, wiele talii, skróty klawiaturowe.',
      },
    },
    contact: {
      tag: 'Kontakt',
      title: 'Porozmawiajmy\no Twoim projekcie',
      description:
        'Szukasz developera do swojego projektu? Chętnie porozmawiam o Twoich potrzebach i zaproponuję najlepsze rozwiązanie.',
      form: {
        name: 'Imię i nazwisko',
        email: 'Email',
        message: 'Wiadomość',
        submit: 'Wyślij wiadomość',
        sending: 'Wysyłanie...',
      },
      toast: {
        success: 'Dziękuję za wiadomość! Odezwę się wkrótce.',
        error: 'Coś poszło nie tak. Spróbuj ponownie później.',
      },
    },
    footer: {
      rights: 'Wszelkie prawa zastrzeżone.',
    },
  },
};

export function getTranslations(lang: Language): Translations {
  return translations[lang];
}
