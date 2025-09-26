"use client";
import CurvedLoop from "@/components/CurvedLoop";

export function HomeCarouselFunctions() {
    return (
        <figure>
        <CurvedLoop 
        marqueeText="PROJETOS ARQUITETONICOS * PROJETOS MODERNOS * PROJETOS RUSTICOS *"
        speed={1}
        curveAmount={300}
        interactive={false}
        />
        </figure>
    )
}