import { ArrowRight, Instagram, MessageCircle, Star } from "lucide-react";

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
                href: "#contact",
                btnText: "Contato"
            }
        ]
    }
];

export const heroData = {
    bgHero: "/project2.png",
    draw: "draw-house-2.svg",
    icon: Star,
    hate: "+5 avaliações",
    pretitle: "de clientes que confiaram no meu trabalho",
    title: "Transforme seu espaço comigo",
    description: "Transformo ideias em espaços autênticos. Arquitetura que une estética, funcionalidade e identidade.",
    hrefBtnText: "#services",
    btnText: "Saiba mais",
    hrefProject: "#projects",
    btnProject: "Ver projetos",
    tools: [
        {
        tool: "tool1.svg"  
        },
        {
        tool: "tool2.svg"  
        },
        {
        tool: "tool3.svg"  
        },
    ]
}

export const aboutData = {
    title: "Sobre mim",
    description: "Me chamo Luciana Menezes estou no 4 semestre de arquitetura e urbanismo tenho grande interesse por projetos estruturais, buscando sempre unir funcionalidade e beleza arquitetônica.",
    btnText: "Saiba mais",
};

export const projectData = {
    title: "ARQUITETURA EM DETALHES",
    description: "Cada projeto aqui apresentado traduz sonhos em espaços reais, pensados para atender às necessidades e ao estilo de vida de cada cliente.",
    href: "https://wa.me/557196127391?text=Ol%C3%A1%20Luciana!%20Queria%20solicitar%20um%20or%C3%A7amento%20para%20o%20meu%20projeto,%20podemos%20conversar?!",
    btnText: "Entre em contato",
    projects: [
        {
            btnText: "Fale comigo!",
            description: "Entre em contato para desenvolver o seu projeto!",
            href: "https://wa.me/557196127391?text=Ol%C3%A1%20Luciana!%20Queria%20solicitar%20um%20or%C3%A7amento%20para%20o%20meu%20projeto,%20podemos%20conversar?!",
            img: "/project1.png",
        },
        {
            btnText: "Fale comigo!",
            description: "Entre em contato para desenvolver o seu projeto!",
            href: "https://wa.me/557196127391?text=Ol%C3%A1%20Luciana!%20Queria%20solicitar%20um%20or%C3%A7amento%20para%20o%20meu%20projeto,%20podemos%20conversar?!",
            img: "/project2.png",
        },
        {
            btnText: "Fale comigo!",
            description: "Entre em contato para desenvolver o seu projeto!",
            href: "https://wa.me/557196127391?text=Ol%C3%A1%20Luciana!%20Queria%20solicitar%20um%20or%C3%A7amento%20para%20o%20meu%20projeto,%20podemos%20conversar?!",
            img: "/project3.png",
        },
        {
            btnText: "Fale comigo!",
            description: "Entre em contato para desenvolver o seu projeto!",
            href: "https://wa.me/557196127391?text=Ol%C3%A1%20Luciana!%20Queria%20solicitar%20um%20or%C3%A7amento%20para%20o%20meu%20projeto,%20podemos%20conversar?!",
            img: "/project4.png",
        },
        {
            btnText: "Fale comigo!",
            description: "Entre em contato para desenvolver o seu projeto!",
            href: "https://wa.me/557196127391?text=Ol%C3%A1%20Luciana!%20Queria%20solicitar%20um%20or%C3%A7amento%20para%20o%20meu%20projeto,%20podemos%20conversar?!",
            img: "/project5.png",
        },

    ]
}

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
];

export const contactData = {
    href: "https://wa.me/557196127391?text=Ol%C3%A1%20Luciana!%20Queria%20solicitar%20um%20or%C3%A7amento%20para%20o%20meu%20projeto,%20podemos%20conversar?!",
    title: "Transforme suas ideias em realidade",
    description: "Entre em contato e vamos criar juntos um projeto que reflita sua visão, estilo e necessidades.",
    btnText: "Entre em contato",
};

export const faqData = [
    {
        title: "Perguntas Frequentes",
        description: "Transparência é essencial: confira abaixo respostas rápidas sobre meu trabalho.",
        faqQuestions: [
            {
                number: "01",
                question: "Quais tipos de projetos você desenvolve?",
                answer: "Desenvolvo projetos arquitetônicos residenciais, comerciais e de interiores, sempre adaptados às necessidades de cada cliente. ",
                icon: ArrowRight
            },
            {
                number: "02",   
                question: "Oferece modelagem 3D e renderizações realistas?",
                answer: " Sim! Utilizo modelagem 3D e renderizações realistas como ferramentas para que o cliente visualize o projeto com clareza antes da execução.",
                icon: ArrowRight
            },
            {
                number: "03",   
                question: "Você faz reuniões online para apresentar os projetos?",
                answer: "Sim, realizo reuniões online para apresentar as propostas e discutir cada detalhe. Isso facilita o processo, torna a comunicação mais prática e permite acompanhar o andamento do projeto de qualquer lugar.",
                icon: ArrowRight
            },
            {
                number: "04",   
                question: "Como funciona o orçamento dos serviços?",
                answer: "O orçamento é elaborado de forma personalizada, de acordo com o tipo e a complexidade do projeto. Após entender as necessidades do cliente e o escopo que será entregue, apresento uma proposta detalhada e transparente, sempre buscando a melhor relação entre qualidade e investimento.",
                icon: ArrowRight
            }
        ]
    }
]

export const footerData = [
    {
        logo: "Logo-white.svg",
        href: "/",
        imgBg: "/project1.png",
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
                href: "https://wa.me/557196127391?text=Ol%C3%A1%20Luciana!%20Queria%20solicitar%20um%20or%C3%A7amento%20para%20o%20meu%20projeto,%20podemos%20conversar?!",
                icon: MessageCircle
            },
        ],
        copyright: "© 2025 @devgustavogantois_ — Arquitetura & Engenharia. Todos os direitos reservados. Em parceria com Luciana Menezes, Arquiteta."
    }
]