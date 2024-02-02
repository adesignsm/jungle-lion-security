import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: "1nkheeh9",
    dataset: "production",
    useCdn: true,
});