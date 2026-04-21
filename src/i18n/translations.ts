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
    otherTitle: string;
    metrics: {
      contributors: string;
      modules: string;
      pages: string;
      openSource: string;
      canvasEditor: string;
      worldMap: string;
      premiumSystem: string;
      appsServed: string;
      apiModules: string;
      aiPowered: string;
      kanban: string;
      roleSystem: string;
      clientProject: string;
      seoOptimized: string;
    };
    descriptions: {
      denser: string;
      conqsite: string;
      elysiaBackend: string;
      stasiakOpal: string;
      projectHub: string;
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
    quickReply: string;
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
      otherTitle: "Other projects",
      metrics: {
        contributors: "contributors",
        modules: "modules",
        pages: "pages",
        openSource: "Open Source",
        canvasEditor: "Canvas Map Editor",
        worldMap: "Interactive World Map",
        premiumSystem: "Premium System",
        appsServed: "apps powered",
        apiModules: "API modules",
        aiPowered: "AI Powered",
        kanban: "Kanban + Calendar",
        roleSystem: "Role System",
        clientProject: "Client Project",
        seoOptimized: "SEO Optimized",
      },
      descriptions: {
        denser:
          "Decentralized social media frontend for Hive Blockchain. Successor to hive.blog with blog and wallet modules.",
        conqsite:
          "Full-featured guild management platform for Conqueror's Blade community. Interactive arena map editor built on Canvas, world map with territory tracking, unit and lineup builder, guild wiki, member dashboard with statistics, premium coin system, and in-app chat — all with Discord authentication.",
        elysiaBackend:
          "Monolithic backend powering 8 applications. 11 API modules covering auth, AI generation, real-time sync, scraping, and payment systems.",
        stasiakOpal:
          "Commercial landing page for a local business. Built with React 19 and TanStack Router, optimized for Core Web Vitals and local SEO.",
        projectHub:
          "Task management app with kanban boards, calendar view, role-based permissions, Telegram notifications, and real-time charts.",
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
      quickReply: "Drop me an email or send a message — I'll get back within a few hours.",
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
      otherTitle: "Inne projekty",
      metrics: {
        contributors: "kontrybutorów",
        modules: "moduły",
        pages: "stron",
        openSource: "Open Source",
        canvasEditor: "Edytor map Canvas",
        worldMap: "Interaktywna mapa świata",
        premiumSystem: "System premium",
        appsServed: "zasilanych aplikacji",
        apiModules: "modułów API",
        aiPowered: "AI Powered",
        kanban: "Kanban + Kalendarz",
        roleSystem: "System ról",
        clientProject: "Projekt kliencki",
        seoOptimized: "Optymalizacja SEO",
      },
      descriptions: {
        denser:
          "Frontend zdecentralizowanych mediów społecznościowych dla Hive Blockchain. Następca hive.blog z modułami blog i wallet.",
        conqsite:
          "Rozbudowana platforma do zarządzania gildią w Conqueror's Blade. Interaktywny edytor map aren na Canvas, mapa świata ze śledzeniem terytoriów, kreator jednostek i składów, wiki gildii, dashboard z statystykami, system premium z walutą, czat gildyjny — wszystko z autoryzacją przez Discord.",
        elysiaBackend:
          "Monolityczny backend zasilający 8 aplikacji. 11 modułów API obejmujących autoryzację, generowanie AI, synchronizację real-time, scraping i systemy płatności.",
        stasiakOpal:
          "Komercyjna strona internetowa lokalnej firmy. Zbudowana w React 19 z TanStack Router, zoptymalizowana pod Core Web Vitals i lokalne SEO.",
        projectHub:
          "Aplikacja do zarządzania zadaniami z tablicami kanban, widokiem kalendarza, uprawnieniami opartymi na rolach, powiadomieniami Telegram i wykresami w czasie rzeczywistym.",
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
      quickReply: "Napisz maila albo wyślij wiadomość — odezwę się w ciągu kilku godzin.",
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
