import { Suspense } from "react";
import { Header } from "./Components/Header";

export const App = () => {
    return (
        <>
            <Suspense>
                <main className='page'>
                    <Header />
                </main>
            </Suspense>
        </>
    )
}