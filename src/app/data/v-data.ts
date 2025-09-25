import { Instagram, MessageCircle } from "lucide-react";

export const navbarData = [
    {
        logo: "/Logo.svg",
        navItems: [
            {
                href: "#home",
                name: "Início"
            },
            {
                href: "#about",
                name: "Sobre mim"
            },
            {
                href: "#projects",
                name: "Projetos"
            },
            {
                href: "#services",
                name: "Serviços"
            },
            {
                href: "#faq",
                name: "Perguntas Frequentes"
            },
            {
                href: "#",
                btnText: "Contato"
            }
        ]
    }
];

export const aboutData = {
    title: "Sobre mim",
    description: "Me chamo Luciana Menezes estou no 4 semestre de arquitetura e urbanismo tenho grande interesse por projetos estruturais, buscando sempre unir funcionalidade e beleza arquitetônica.",
    btnText: "Saiba mais",
};

export const serviceData = [
    {
        title: "Serviços",
        description: "Cada projeto é pensado para unir estética, funcionalidade e identidade. Ofereço soluções arquitetônicas personalizadas que valorizam o espaço e traduzem a essência de cada cliente.",
        img: "/draw-house.svg",
        cards: [
            {
                title: "Modelagem 3D",
                description: "Criação de modelos tridimensionais que permitem visualizar o projeto com precisão e compreender cada detalhe antes da execução.",
            },
            {
                title: "projeto técnico",
                description: "Desenvolvimento de plantas e documentos técnicos essenciais para orientar a construção com segurança e fidelidade ao conceito arquitetônico.",
            },
            {
                title: "Renderização",
                description: "Produção de imagens realistas do projeto, simulando materiais, iluminação e acabamentos para transmitir a experiência do espaço finalizado.",
            },
        ]
    }
]

export const contactData = {
    href: "#",
    title: "Transforme suas ideias em realidade",
    description: "Entre em contato e vamos criar juntos um projeto que reflita sua visão, estilo e necessidades.",
    btnText: "Entre em contato",
};

export const footerData = [
    {
        logo: "Logo-white.svg",
        href: "/",
        imgBg: "",
        description: "Criando espaços únicos que unem estética, funcionalidade e identidade, projetados para refletir a personalidade de cada cliente e proporcionar experiências memoráveis em cada detalhe arquitetônico.",
        navLinks: [
            {
                href: "#home",
                name: "Início",
            },
            {
                href: "#about",
                name: "Sobre mim",
            },
            {
                href: "#projects",
                name: "Projetos",
            },
            {
                href: "#services",
                name: "Serviços"
            },
            {
                href: "#faq",
                name: "Perguntas Frequentes"
            },
        ],
        socialLinks: [
            {
                href: "https://www.instagram.com/arq.lucianamenezes/",
                icon: Instagram
            },
            {
                href: "#",
                icon: MessageCircle
            },
        ],
        copyright: "© 2025 @devgustavogantois_ — Arquitetura & Engenharia. Todos os direitos reservados. Em parceria com Luciana Menezes, Arquiteta."
    }
]