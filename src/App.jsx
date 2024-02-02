import { Suspense } from "react";
import { Header } from "./Components/Header";
import { Ctas, QuoteBlock } from "./Components/QuoteBlock";

export const App = () => {
    return (
        <>
            <Suspense>
                <main>
                    <Header />
                    <QuoteBlock />
                </main>
            </Suspense>
        </>
    )
}