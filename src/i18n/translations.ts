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
      conqsite: string;
      excelReader: string;
      flashcards: string;
      stasiakOpal: string;
      shoppingList: string;
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
        conqsite:
          'A platform for gaming communities with advanced guild management, Discord integration, and extensive social features.',
        excelReader:
          'A tool for analyzing and visualizing CSV data. An intuitive interface allows for quick work with large datasets.',
        flashcards:
          'An educational app using spaced repetition method. Ideal for language learning and memorizing information.',
        stasiakOpal:
          'An optimized landing page for a local business. Focus on performance, SEO, and excellent user experience.',
        shoppingList:
          'A mobile app for managing shopping lists. Easy to use, with the ability to share lists with family.',
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
        conqsite:
          'Platforma dla społeczności graczy z zaawansowanym systemem zarządzania gildiami, integracją z Discordem oraz rozbudowanymi funkcjami społecznościowymi.',
        excelReader:
          'Narzędzie do analizy i wizualizacji danych z plików CSV. Intuicyjny interfejs pozwala na szybką pracę z dużymi zbiorami danych.',
        flashcards:
          'Aplikacja edukacyjna wykorzystująca metodę powtórek rozłożonych w czasie. Idealna do nauki języków i zapamiętywania informacji.',
        stasiakOpal:
          'Zoptymalizowana strona landingowa dla lokalnego biznesu. Nacisk na wydajność, SEO i doskonałe doświadczenie użytkownika.',
        shoppingList:
          'Mobilna aplikacja do zarządzania listami zakupów. Prosta w obsłudze, z możliwością współdzielenia list z rodziną.',
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
