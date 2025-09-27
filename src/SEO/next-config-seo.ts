import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luciana Menezes Arquitetura | Projetos Modernos e Funcionais",
  description: "Descubra os projetos de arquitetura de Luciana Menezes. Designs modernos, funcionais e personalizados para residências, escritórios e espaços comerciais.",
  keywords: [
    "Arquitetura", 
    "Design de Interiores", 
    "Projetos de Arquitetura", 
    "Luciana Menezes", 
    "Arquitetura Residencial", 
    "Arquitetura Comercial", 
    "Arquitetura Moderna"
  ],
  authors: [
    {
      name: "Luciana Menezes",
      url: "https://luciana-menezes-arquitetura.vercel.app/" 
    }
  ],
  creator: "Luciana Menezes",
  publisher: "Luciana Menezes Arquitetura",
  metadataBase: new URL("https://luciana-menezes-arquitetura.vercel.app/"), 
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Luciana Menezes Arquitetura | Projetos Modernos e Funcionais",
    description: "Descubra os projetos de arquitetura de Luciana Menezes. Designs modernos, funcionais e personalizados para residências, escritórios e espaços comerciais.",
    url: "https://luciana-menezes-arquitetura.vercel.app/",
    siteName: "Luciana Menezes Arquitetura",
    type: "website",
    images: [
      {
        url: "/Logo.svg", 
        width: 1200,
        height: 630,
        alt: "Projetos de Arquitetura Luciana Menezes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luciana Menezes Arquitetura",
    description: "Projetos de arquitetura modernos e personalizados.",
    creator: "@lucianamenezes", 
    images: ["/og-image.jpg"],
  },
};
