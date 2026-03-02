export type Language = "en" | "pl";

export interface Translations {
  nav: {
    about: string;
    skills: string;
    projects: string;
    contact: string;
    pricing: string;
  };
  hero: {
    role: string;
    tagline: string;
    description: string;
    cta: {
      projects: string;
      contact: string;
      pricing: string;
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
      commits: string;
    };
    cta: string;
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
      excelReader: string;
      stasiakOpal: string;
      flashcards: string;
      portfolio: string;
    };
  };
  contact: {
    tag: string;
    title: string;
    description: string;
    pricingCta: string;
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
  pricing: {
    tag: string;
    title: string;
    description: string;
    projectCost: string;
    adminCost: string;
    perYear: string;
    from: string;
    to: string;
    getQuote: string;
    types: {
      landing: {
        name: string;
        description: string;
        projectMin: number;
        projectMax: number;
        adminMin: number;
        adminMax: number;
      };
      business: {
        name: string;
        description: string;
        projectMin: number;
        projectMax: number;
        adminMin: number;
        adminMax: number;
      };
      ecommerce: {
        name: string;
        description: string;
        projectMin: number;
        projectMax: number;
        adminMin: number;
        adminMax: number;
      };
      webapp: {
        name: string;
        description: string;
        projectMin: number;
        projectMax: number;
        adminMin: number;
        adminMax: number;
      };
      mobile: {
        name: string;
        description: string;
        projectMin: number;
        projectMax: number;
        adminMin: number;
        adminMax: number;
      };
    };
    note: string;
  };
  quoteForm: {
    tag: string;
    title: string;
    description: string;
    form: {
      name: string;
      email: string;
      phone: string;
      phonePlaceholder: string;
      company: string;
      companyPlaceholder: string;
      projectType: string;
      projectTypePlaceholder: string;
      projectTypes: {
        landing: string;
        business: string;
        ecommerce: string;
        webapp: string;
        mobile: string;
        other: string;
      };
      budget: string;
      budgetPlaceholder: string;
      budgetRanges: {
        small: string;
        medium: string;
        large: string;
        enterprise: string;
        flexible: string;
      };
      timeline: string;
      timelinePlaceholder: string;
      timelineOptions: {
        asap: string;
        month: string;
        quarter: string;
        flexible: string;
      };
      hasDesign: string;
      hasDesignOptions: {
        yes: string;
        no: string;
        partial: string;
      };
      features: string;
      featuresPlaceholder: string;
      featuresList: {
        cms: string;
        auth: string;
        payments: string;
        analytics: string;
        seo: string;
        multilang: string;
        api: string;
        admin: string;
      };
      description: string;
      descriptionPlaceholder: string;
      submit: string;
      sending: string;
    };
    toast: {
      success: string;
      error: string;
    };
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      pricing: "Pricing",
    },
    hero: {
      role: "Full-Stack Developer & Freelancer",
      tagline: "Hi, I'm",
      description:
        "I build modern web and mobile applications with a passion for clean code and excellent UX. Working remotely from Katowice, delivering solutions for clients worldwide.",
      cta: {
        projects: "View projects",
        contact: "Let's talk",
        pricing: "Check pricing",
      },
      scroll: "Scroll",
    },
    about: {
      tag: "About me",
      title: "Passion for creating\ndigital solutions",
      lead: "I'm a Full-Stack Developer with over 3 years of commercial experience. I specialize in building scalable web and mobile applications.",
      text: [
        "I work as a freelancer, which allows me to take a flexible approach to each project and collaborate directly with clients. My goal is to deliver solutions that not only work but also delight users.",
      ],
      stats: {
        experience: "Years of experience",
        projects: "Completed projects",
        commits: "GitHub commits",
      },
      cta: "See pricing",
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
          "Mobile app for managing shopping lists built with React Native and Expo.",
        excelReader:
          "Web tool for uploading and analyzing CSV files. Data visualization with interactive charts.",
        stasiakOpal:
          "Landing page for local coal business. Built with Astro, optimized for performance and SEO.",
        flashcards:
          "Educational app for learning with flashcards. Spaced repetition method, progress tracking.",
        portfolio:
          "Personal portfolio built with Astro and Tailwind CSS. Static site with i18n support and contact form.",
      },
    },
    contact: {
      tag: "Contact",
      title: "Let's talk about\nyour project",
      description:
        "Looking for a developer for your project? I'd love to discuss your needs and propose the best solution.",
      pricingCta: "Check pricing first",
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
    },
    pricing: {
      tag: "Pricing",
      title: "Website & App\nPricing",
      description:
        "Transparent pricing ranges for web and mobile projects. Final cost depends on project complexity and specific requirements.",
      projectCost: "Project cost",
      adminCost: "Annual maintenance",
      perYear: "/year",
      from: "from",
      to: "to",
      getQuote: "Get a quote",
      types: {
        landing: {
          name: "Landing Page",
          description:
            "One-page website, perfect for product presentation or marketing campaign",
          projectMin: 1200,
          projectMax: 3000,
          adminMin: 500,
          adminMax: 1000,
        },
        business: {
          name: "Business Website",
          description:
            "Multi-page website with CMS, contact form, and SEO optimization",
          projectMin: 3000,
          projectMax: 8000,
          adminMin: 1000,
          adminMax: 2500,
        },
        ecommerce: {
          name: "E-commerce Store",
          description:
            "Online store with payment integration, inventory management, and analytics",
          projectMin: 7000,
          projectMax: 20000,
          adminMin: 2000,
          adminMax: 5000,
        },
        webapp: {
          name: "Web Application",
          description:
            "Custom web app with user authentication, database, and API integrations",
          projectMin: 10000,
          projectMax: 35000,
          adminMin: 3000,
          adminMax: 8000,
        },
        mobile: {
          name: "Mobile App",
          description: "Cross-platform mobile application for iOS and Android",
          projectMin: 12000,
          projectMax: 45000,
          adminMin: 4000,
          adminMax: 10000,
        },
      },
      note: "Prices in PLN. All estimates are approximate and may vary based on specific requirements. Final pricing will be provided after project consultation.",
    },
    quoteForm: {
      tag: "Get a Quote",
      title: "Request a\nProject Quote",
      description: "Fill out the form below and I'll get back to you with a detailed estimate within 24-48 hours.",
      form: {
        name: "Full name *",
        email: "Email *",
        phone: "Phone number",
        phonePlaceholder: "+48 123 456 789",
        company: "Company name",
        companyPlaceholder: "Your company (optional)",
        projectType: "Project type *",
        projectTypePlaceholder: "Select project type",
        projectTypes: {
          landing: "Landing Page",
          business: "Business Website",
          ecommerce: "E-commerce Store",
          webapp: "Web Application",
          mobile: "Mobile App",
          other: "Other",
        },
        budget: "Estimated budget",
        budgetPlaceholder: "Select budget range",
        budgetRanges: {
          small: "Up to 3,000 PLN",
          medium: "3,000 - 10,000 PLN",
          large: "10,000 - 30,000 PLN",
          enterprise: "30,000+ PLN",
          flexible: "Flexible / Not sure",
        },
        timeline: "Desired timeline",
        timelinePlaceholder: "When do you need it?",
        timelineOptions: {
          asap: "ASAP",
          month: "Within 1 month",
          quarter: "Within 3 months",
          flexible: "Flexible",
        },
        hasDesign: "Do you have a design?",
        hasDesignOptions: {
          yes: "Yes, ready design",
          no: "No, I need design",
          partial: "Partial / Ideas only",
        },
        features: "Required features",
        featuresPlaceholder: "Select all that apply",
        featuresList: {
          cms: "Content Management (CMS)",
          auth: "User Authentication",
          payments: "Payment Integration",
          analytics: "Analytics & Reporting",
          seo: "SEO Optimization",
          multilang: "Multi-language Support",
          api: "API Integration",
          admin: "Admin Panel",
        },
        description: "Project description *",
        descriptionPlaceholder: "Describe your project, goals, and any specific requirements...",
        submit: "Request Quote",
        sending: "Sending...",
      },
      toast: {
        success: "Thank you! I'll review your request and contact you soon.",
        error: "Something went wrong. Please try again or contact me directly.",
      },
    },
  },
  pl: {
    nav: {
      about: "O mnie",
      skills: "Umiejętności",
      projects: "Projekty",
      contact: "Kontakt",
      pricing: "Wycena",
    },
    hero: {
      role: "Full-Stack Developer & Freelancer",
      tagline: "Cześć, jestem",
      description:
        "Tworzę nowoczesne aplikacje webowe i mobilne z pasją do czystego kodu i doskonałego UX. Pracuję zdalnie z Katowic, dostarczając rozwiązania dla klientów na całym świecie.",
      cta: {
        projects: "Zobacz projekty",
        contact: "Porozmawiajmy",
        pricing: "Sprawdź cennik",
      },
      scroll: "Scroll",
    },
    about: {
      tag: "O mnie",
      title: "Pasja do tworzenia\ncyfrowych rozwiązań",
      lead: "Jestem Full-Stack Developerem z ponad 3-letnim doświadczeniem komercyjnym. Specjalizuję się w budowaniu skalowalnych aplikacji webowych i mobilnych.",
      text: [
        "Pracuję jako freelancer, co pozwala mi na elastyczne podejście do każdego projektu i bezpośrednią współpracę z klientami. Moim celem jest dostarczanie rozwiązań, które nie tylko działają, ale też zachwycają użytkowników.",
      ],
      stats: {
        experience: "Lata doświadczenia",
        projects: "Ukończonych projektów",
        commits: "Commitów na GitHub",
      },
      cta: "Zobacz cennik",
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
          "Aplikacja mobilna do zarządzania listami zakupów zbudowana z React Native i Expo.",
        excelReader:
          "Narzędzie webowe do wgrywania i analizy plików CSV. Wizualizacja danych z interaktywnymi wykresami.",
        stasiakOpal:
          "Strona landingowa dla lokalnego biznesu węglowego. Zbudowana w Astro, zoptymalizowana pod wydajność i SEO.",
        flashcards:
          "Aplikacja edukacyjna do nauki z fiszkami. Metoda powtórek rozłożonych w czasie, śledzenie postępów.",
        portfolio:
          "Portfolio osobiste zbudowane w Astro i Tailwind CSS. Statyczna strona z obsługą i18n i formularzem kontaktowym.",
      },
    },
    contact: {
      tag: "Kontakt",
      title: "Porozmawiajmy\no Twoim projekcie",
      description:
        "Szukasz developera do swojego projektu? Chętnie porozmawiam o Twoich potrzebach i zaproponuję najlepsze rozwiązanie.",
      pricingCta: "Najpierw sprawdź cennik",
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
    },
    pricing: {
      tag: "Wycena",
      title: "Cennik stron\ni aplikacji",
      description:
        "Przejrzyste widełki cenowe dla projektów webowych i mobilnych. Ostateczny koszt zależy od złożoności projektu i konkretnych wymagań.",
      projectCost: "Koszt projektu",
      adminCost: "Administracja roczna",
      perYear: "/rok",
      from: "od",
      to: "do",
      getQuote: "Zapytaj o wycenę",
      types: {
        landing: {
          name: "Landing Page",
          description:
            "Strona jednostronicowa, idealna do prezentacji produktu lub kampanii marketingowej",
          projectMin: 1200,
          projectMax: 3000,
          adminMin: 500,
          adminMax: 1000,
        },
        business: {
          name: "Strona firmowa",
          description:
            "Wielostronicowa strona z CMS, formularzem kontaktowym i optymalizacją SEO",
          projectMin: 3000,
          projectMax: 8000,
          adminMin: 1000,
          adminMax: 2500,
        },
        ecommerce: {
          name: "Sklep internetowy",
          description:
            "Sklep online z integracją płatności, zarządzaniem magazynem i analityką",
          projectMin: 7000,
          projectMax: 20000,
          adminMin: 2000,
          adminMax: 5000,
        },
        webapp: {
          name: "Aplikacja webowa",
          description:
            "Aplikacja z autoryzacją użytkowników, bazą danych i integracjami API",
          projectMin: 10000,
          projectMax: 35000,
          adminMin: 3000,
          adminMax: 8000,
        },
        mobile: {
          name: "Aplikacja mobilna",
          description: "Wieloplatformowa aplikacja mobilna na iOS i Android",
          projectMin: 12000,
          projectMax: 45000,
          adminMin: 4000,
          adminMax: 10000,
        },
      },
      note: "Ceny w PLN. Wszystkie wyceny są orientacyjne i mogą ulec zmianie w zależności od szczegółowych wymagań. Ostateczna cena zostanie ustalona po konsultacji projektowej.",
    },
    quoteForm: {
      tag: "Wycena",
      title: "Zapytaj o\nwycenę projektu",
      description: "Wypełnij formularz poniżej, a skontaktuję się z Tobą ze szczegółową wyceną w ciągu 24-48 godzin.",
      form: {
        name: "Imię i nazwisko *",
        email: "Email *",
        phone: "Numer telefonu",
        phonePlaceholder: "+48 123 456 789",
        company: "Nazwa firmy",
        companyPlaceholder: "Twoja firma (opcjonalnie)",
        projectType: "Typ projektu *",
        projectTypePlaceholder: "Wybierz typ projektu",
        projectTypes: {
          landing: "Landing Page",
          business: "Strona firmowa",
          ecommerce: "Sklep internetowy",
          webapp: "Aplikacja webowa",
          mobile: "Aplikacja mobilna",
          other: "Inne",
        },
        budget: "Przewidywany budżet",
        budgetPlaceholder: "Wybierz zakres budżetu",
        budgetRanges: {
          small: "Do 3 000 PLN",
          medium: "3 000 - 10 000 PLN",
          large: "10 000 - 30 000 PLN",
          enterprise: "30 000+ PLN",
          flexible: "Elastyczny / Nie wiem",
        },
        timeline: "Preferowany termin",
        timelinePlaceholder: "Kiedy potrzebujesz?",
        timelineOptions: {
          asap: "Jak najszybciej",
          month: "W ciągu miesiąca",
          quarter: "W ciągu 3 miesięcy",
          flexible: "Elastyczny",
        },
        hasDesign: "Czy masz projekt graficzny?",
        hasDesignOptions: {
          yes: "Tak, gotowy projekt",
          no: "Nie, potrzebuję projektu",
          partial: "Częściowo / Tylko pomysły",
        },
        features: "Wymagane funkcje",
        featuresPlaceholder: "Zaznacz wszystkie potrzebne",
        featuresList: {
          cms: "System zarządzania treścią (CMS)",
          auth: "Logowanie użytkowników",
          payments: "Integracja płatności",
          analytics: "Analityka i raporty",
          seo: "Optymalizacja SEO",
          multilang: "Wielojęzyczność",
          api: "Integracja API",
          admin: "Panel administracyjny",
        },
        description: "Opis projektu *",
        descriptionPlaceholder: "Opisz swój projekt, cele i szczególne wymagania...",
        submit: "Wyślij zapytanie",
        sending: "Wysyłanie...",
      },
      toast: {
        success: "Dziękuję! Przeanalizuję Twoje zapytanie i skontaktuję się wkrótce.",
        error: "Coś poszło nie tak. Spróbuj ponownie lub skontaktuj się bezpośrednio.",
      },
    },
  },
};

export function getTranslations(lang: Language): Translations {
  return translations[lang];
}
