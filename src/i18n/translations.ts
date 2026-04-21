export type Language = "en" | "pl";

export interface Translations {
  nav: {
    about: string;
    skills: string;
    projects: string;
    process: string;
    contact: string;
  };
  hero: {
    role: string;
    tagline: string;
    description: string;
    available: string;
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
    whyMe: {
      fast: { title: string; desc: string };
      fullService: { title: string; desc: string };
      transparent: { title: string; desc: string };
      support: { title: string; desc: string };
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
      ai: string;
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
      stasiakOpal: string;
      flashcards: string;
      projectHub: string;
      barddevUi: string;
    };
  };
  process: {
    tag: string;
    title: string;
    sectionDescription: string;
    principlesTitle: string;
    principles: string[];
    cta: string;
    steps: {
      step1: { title: string; desc: string };
      step2: { title: string; desc: string };
      step3: { title: string; desc: string };
      step4: { title: string; desc: string };
    };
  };
  testimonials: {
    tag: string;
    title: string;
    items: {
      quote: string;
      name: string;
      role: string;
      initials: string;
    }[];
  };
  contact: {
    tag: string;
    title: string;
    description: string;
    location: string;
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
    location: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      process: "Process",
      contact: "Contact",
    },
    hero: {
      role: "Full-Stack Developer & Freelancer",
      tagline: "Hi, I'm",
      description:
        "I build modern web and mobile applications using AI-powered development workflow. Clean code, excellent UX, faster delivery. Working remotely from Katowice, delivering solutions for clients worldwide.",
      available: "Available for work",
      cta: {
        projects: "View projects",
        contact: "Let's talk",
      },
      scroll: "Scroll",
    },
    about: {
      tag: "About me",
      title: "Passion for creating\ndigital solutions",
      lead: "I'm a Full-Stack Developer with over 3 years of commercial experience. I independently design and build complete web and mobile applications — from database to UI.",
      text: [
        "With AI-powered systems I've built into my workflow, I deliver projects faster and at a higher quality than traditional development allows. Claude, Gemini, and custom automation handle the repetitive work — I focus on architecture, business logic, and the details that make software feel great.",
      ],
      whyMe: {
        fast: {
          title: "Fast delivery",
          desc: "AI-powered workflow delivers 2-3x faster",
        },
        fullService: {
          title: "Full service",
          desc: "From design to hosting — one point of contact",
        },
        transparent: {
          title: "Transparent pricing",
          desc: "Clear price ranges, no hidden costs",
        },
        support: {
          title: "Post-launch support",
          desc: "I don't disappear after deploy — maintenance & growth",
        },
      },
    },
    skills: {
      tag: "Skills",
      title: "Technologies I\nspecialize in",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        mobile: "Mobile & Testing",
        devops: "DevOps & Tools",
        ai: "AI Tools",
      },
    },
    projects: {
      tag: "Projects",
      title: "Selected works",
      viewProject: "View project",
      viewAll: "View all projects on GitHub",
      descriptions: {
        denser:
          "Decentralized social media frontend for Hive Blockchain. Successor to hive.blog with blog and wallet modules.",
        conqsite:
          "Platform for Conquerors Blade gaming community. Guild management, lineup builder, Discord bot integration.",
        elysiaBackend:
          "REST API built with Bun and Elysia framework. Serves multiple frontend projects with shared database.",
        shoppingList:
          "Cross-platform shopping list app with mobile (Expo) and web (Svelte 5) clients sharing a real-time backend.",
        stasiakOpal:
          "Landing page for local coal business. Built with React 19 and TanStack Router, optimized for performance and SEO.",
        flashcards:
          "Educational app for learning with flashcards. AI-powered card generation, spaced repetition, and progress tracking.",
        projectHub:
          "Project management app with drag & drop boards, task tracking, and data visualization with charts.",
        barddevUi:
          "Multi-framework UI component library supporting React, Solid.js, and Vue.",
      },
    },
    process: {
      tag: "Process",
      title: "How I work",
      sectionDescription:
        "How we'll work together — from first call to launch day. Clear steps, regular updates, no guesswork.",
      principlesTitle: "What I stand for",
      principles: ["Regular demos — preview before each milestone ends", "Fixed scope — agreed deliverables, no mid-project surprises", "Bug-fix warranty — post-deploy fixes included", "Direct communication — no middlemen, you talk and write directly to me"],
      cta: "Let's discuss your project",
      steps: {
        step1: {
          title: "Consultation",
          desc: "We discuss goals, scope, and budget. I recommend optimal technical solutions.",
        },
        step2: {
          title: "Design",
          desc: "I prepare wireframes and design. You approve the direction before development starts.",
        },
        step3: {
          title: "Development",
          desc: "I build the application, sharing progress regularly. Testing and optimization included.",
        },
        step4: {
          title: "Support",
          desc: "After launch, I provide maintenance, updates, and feature development.",
        },
      },
    },
    testimonials: {
      tag: "Testimonials",
      title: "What clients say",
      items: [
        {
          quote: "Delivered our online store in 3 weeks. Professional communication, modern design, zero issues after launch.",
          name: "Anna Kowalska",
          role: "Owner, Sklep Malinowy",
          initials: "AK",
        },
        {
          quote: "Built our company website quickly and efficiently. Now clients find us on Google.",
          name: "Marek Nowicki",
          role: "Director, LogiTrans Sp. z o.o.",
          initials: "MN",
        },
        {
          quote: "The project management app streamlined work for our entire team.",
          name: "Katarzyna Wisla",
          role: "Manager, Studio Kreacja",
          initials: "KW",
        },
      ],
    },
    contact: {
      tag: "Contact",
      title: "Let's talk about\nyour project",
      description:
        "Looking for a developer for your project? I'd love to discuss your needs and propose the best solution.",
      location: "Katowice, Poland (Remote)",
      form: {
        name: "Full name",
        email: "Email",
        message: "Message",
        submit: "Send message",
        sending: "Sending...",
      },
      toast: {
        success: "Thank you for your message! I will get back to you soon.",
        error: "Something went wrong. Please try again later.",
      },
    },
    footer: {
      rights: "All rights reserved.",
      location: "Katowice, Poland",
    },
  },
  pl: {
    nav: {
      about: "O mnie",
      skills: "Umiejętności",
      projects: "Projekty",
      process: "Proces",
      contact: "Kontakt",
    },
    hero: {
      role: "Full-Stack Developer & Freelancer",
      tagline: "Cześć, jestem",
      description:
        "Tworzę nowoczesne aplikacje webowe i mobilne wykorzystując AI w procesie developmentu. Czysty kod, doskonały UX, szybsza realizacja. Pracuję zdalnie z Katowic, dostarczając rozwiązania dla klientów na całym świecie.",
      available: "Dostępny do zleceń",
      cta: {
        projects: "Zobacz projekty",
        contact: "Porozmawiajmy",
      },
      scroll: "Scroll",
    },
    about: {
      tag: "O mnie",
      title: "Pasja do tworzenia\ncyfrowych rozwiązań",
      lead: "Jestem Full-Stack Developerem z ponad 3-letnim doświadczeniem komercyjnym. Samodzielnie projektuję i buduję kompletne aplikacje webowe i mobilne — od bazy danych po UI.",
      text: [
        "Dzięki systemom AI, które wbudowałem w swój workflow, dostarczam projekty szybciej i na wyższym poziomie niż pozwala tradycyjny development. Claude, Gemini i własne automatyzacje zajmują się powtarzalną pracą — ja skupiam się na architekturze, logice biznesowej i detalach, które sprawiają, że oprogramowanie robi wrażenie.",
      ],
      whyMe: {
        fast: {
          title: "Szybka realizacja",
          desc: "AI-powered workflow pozwala dostarczać 2-3x szybciej",
        },
        fullService: {
          title: "Pełna obsługa",
          desc: "Od designu po hosting — jeden punkt kontaktu",
        },
        transparent: {
          title: "Transparentne ceny",
          desc: "Jasne widełki cenowe, bez ukrytych kosztów",
        },
        support: {
          title: "Wsparcie po wdrożeniu",
          desc: "Nie znikam po deploy — administracja i rozwój",
        },
      },
    },
    skills: {
      tag: "Umiejętności",
      title: "Technologie, w których\nsię specjalizuję",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        mobile: "Mobile & Testing",
        devops: "DevOps & Tools",
        ai: "Narzędzia AI",
      },
    },
    projects: {
      tag: "Projekty",
      title: "Wybrane realizacje",
      viewProject: "Zobacz projekt",
      viewAll: "Zobacz wszystkie projekty na GitHub",
      descriptions: {
        denser:
          "Frontend zdecentralizowanych mediów społecznościowych dla Hive Blockchain. Następca hive.blog z modułami blog i wallet.",
        conqsite:
          "Platforma dla społeczności Conquerors Blade. Zarządzanie gildiami, kreator składów, integracja z botem Discord.",
        elysiaBackend:
          "REST API zbudowane z Bun i frameworkiem Elysia. Obsługuje wiele projektów frontendowych ze wspólną bazą danych.",
        shoppingList:
          "Wieloplatformowa aplikacja do list zakupów z klientem mobilnym (Expo) i webowym (Svelte 5) ze wspólnym backendem w czasie rzeczywistym.",
        stasiakOpal:
          "Strona internetowa lokalnej firmy węglowej. Zbudowana w React 19 z TanStack Router, zoptymalizowana pod wydajność i SEO.",
        flashcards:
          "Aplikacja edukacyjna do nauki z fiszkami. Generowanie kart przez AI, powtórki z odstępami i śledzenie postępu.",
        projectHub:
          "Aplikacja do zarządzania projektami z tablicami drag & drop, śledzeniem zadań i wizualizacją danych na wykresach.",
        barddevUi:
          "Wieloframeworkowa biblioteka komponentów UI wspierająca React, Solid.js i Vue.",
      },
    },
    process: {
      tag: "Proces",
      title: "Jak pracuję",
      sectionDescription:
        "Jak będziemy pracować razem — od pierwszej rozmowy do launch day. Jasne kroki, regularne aktualizacje, bez domysłów.",
      principlesTitle: "Na czym mi zależy",
      principles: ["Regularne demo — preview przed końcem każdego etapu", "Fixed scope — ustalony zakres, bez niespodzianek w trakcie projektu", "Gwarancja poprawek — bug-fix po deploy w cenie", "Bezpośrednia komunikacja — bez pośredników, piszesz i dzwonisz do mnie"],
      cta: "Porozmawiajmy o Twoim projekcie",
      steps: {
        step1: {
          title: "Konsultacja",
          desc: "Omawiamy cele, zakres i budżet projektu. Doradzam optymalne rozwiązania technologiczne.",
        },
        step2: {
          title: "Projekt",
          desc: "Przygotowuję wireframe i design. Akceptujesz kierunek przed rozpoczęciem prac.",
        },
        step3: {
          title: "Realizacja",
          desc: "Buduję aplikację, regularnie pokazując postępy. Testy i optymalizacja w cenie.",
        },
        step4: {
          title: "Wsparcie",
          desc: "Po uruchomieniu zapewniam administrację, aktualizacje i rozwój funkcjonalności.",
        },
      },
    },
    testimonials: {
      tag: "Opinie",
      title: "Co mówią klienci",
      items: [
        {
          quote: "Dostarczył nasz sklep internetowy w 3 tygodnie. Profesjonalna komunikacja, nowoczesny design, zero problemów po uruchomieniu.",
          name: "Anna Kowalska",
          role: "Właścicielka, Sklep Malinowy",
          initials: "AK",
        },
        {
          quote: "Stronę firmową zrobił szybko i konkretnie. Teraz klienci znajdują nas w Google.",
          name: "Marek Nowicki",
          role: "Dyrektor, LogiTrans Sp. z o.o.",
          initials: "MN",
        },
        {
          quote: "Aplikacja do zarządzania projektami ułatwiła pracę całemu zespołowi.",
          name: "Katarzyna Wisła",
          role: "Managerka, Studio Kreacja",
          initials: "KW",
        },
      ],
    },
    contact: {
      tag: "Kontakt",
      title: "Porozmawiajmy\no Twoim projekcie",
      description:
        "Szukasz developera do swojego projektu? Chętnie porozmawiam o Twoich potrzebach i zaproponuję najlepsze rozwiązanie.",
      location: "Katowice, Polska (Zdalnie)",
      form: {
        name: "Imię i nazwisko",
        email: "Email",
        message: "Wiadomość",
        submit: "Wyślij wiadomość",
        sending: "Wysyłanie...",
      },
      toast: {
        success: "Dziękuję za wiadomość! Odezwę się wkrótce.",
        error: "Coś poszło nie tak. Spróbuj ponownie później.",
      },
    },
    footer: {
      rights: "Wszelkie prawa zastrzeżone.",
      location: "Katowice, Polska",
    },
  },
};

export function getTranslations(lang: Language): Translations {
  return translations[lang];
}
