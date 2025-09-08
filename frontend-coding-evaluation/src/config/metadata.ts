const { applicationName, description, domain } = {
  applicationName: 'Frontend Evaluation Project',
  description: 'A React-based e-commerce project designed to evaluate frontend development skills',
  domain: 'http://localhost:5173', // Default Vite dev server URL
};

export const metadata = {
  /**
   * Basic metadata
   */
  title: {
    default: applicationName,
    template: `%s | ${applicationName}`,
  },
  description,
  applicationName,
  keywords: ['React', 'TypeScript', 'E-commerce', 'Vite'],
  authors: [{ name: 'Frontend Evaluation Project' }],
  creator: 'Frontend Evaluation Project',
  metadataBase: new URL(domain),

  /**
   * Icons
   */
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  /**
   * Open Graph
   */
  openGraph: {
    title: applicationName,
    description,
    url: domain,
    siteName: applicationName,
    type: 'website',
    locale: 'en-US',
  },

  /**
   * Languages
   */
  alternates: {
    canonical: domain,
    languages: {
      en: `${domain}/en`,
      nl: `${domain}/nl`,
    },
  },

  /**
   * Robots
   */
  robots: {
    index: true,
    follow: true,
  },
};
