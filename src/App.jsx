import { Suspense } from "react";
import { Header } from "./Components/Header";
import { QuoteBlock } from "./Components/QuoteBlock";
import { Hero } from "./Components/Hero";

export const App = () => {
    return (
        <>
            <Suspense>
                <main>
                    <Header />
                    <QuoteBlock />
                    <Hero />
                </main>
            </Suspense>
        </>
    )
}