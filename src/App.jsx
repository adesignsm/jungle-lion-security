import { Suspense } from "react";
import { Header } from "./Components/Header";

export const App = () => {
    return (
        <>
            <Suspense>
                <main>
                    <Header />
                </main>
            </Suspense>
        </>
    )
}