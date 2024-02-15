import { QuoteBlock } from "../../Components/QuoteBlock";
import { Hero } from "../../Components/Hero";
import { PostHero } from "../../Components/PostHero";
import { Services } from "../../Components/Services";
import { FAQ } from "../../Components/FAQ";
import { MarketsSectors } from "../../Components/MarketsSectors";

export const Home = () => {
    return (
        <>
            <Hero />
            <PostHero />
            <QuoteBlock />
            <Services />
            <FAQ />
            <MarketsSectors />
        </>
    )
}