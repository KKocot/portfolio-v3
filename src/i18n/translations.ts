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
          'Decentralized social media frontend for Hive Blockchain. Successor to hive.blog with blog and wallet modules.',
        conqsite:
          'Platform for Conquerors Blade gaming community. Guild management, lineup builder, Discord bot integration.',
        elysiaBackend:
          'REST API built with Bun and Elysia framework. Serves multiple frontend projects with shared database.',
        shoppingList:
          'Mobile app for managing shopping lists built with React Native and Expo.',
        excelReader:
          'Web tool for uploading and analyzing CSV files. Data visualization with interactive charts.',
        stasiakOpal:
          'Landing page for local coal business. Built with Astro, optimized for performance and SEO.',
        flashcards:
          'Educational app for learning with flashcards. Spaced repetition method, progress tracking.',
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
          'Frontend zdecentralizowanych mediów społecznościowych dla Hive Blockchain. Następca hive.blog z modułami blog i wallet.',
        conqsite:
          'Platforma dla społeczności Conquerors Blade. Zarządzanie gildiami, kreator składów, integracja z botem Discord.',
        elysiaBackend:
          'REST API zbudowane z Bun i frameworkiem Elysia. Obsługuje wiele projektów frontendowych ze wspólną bazą danych.',
        shoppingList:
          'Aplikacja mobilna do zarządzania listami zakupów zbudowana z React Native i Expo.',
        excelReader:
          'Narzędzie webowe do wgrywania i analizy plików CSV. Wizualizacja danych z interaktywnymi wykresami.',
        stasiakOpal:
          'Strona landingowa dla lokalnego biznesu węglowego. Zbudowana w Astro, zoptymalizowana pod wydajność i SEO.',
        flashcards:
          'Aplikacja edukacyjna do nauki z fiszkami. Metoda powtórek rozłożonych w czasie, śledzenie postępów.',
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
