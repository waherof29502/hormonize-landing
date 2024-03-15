import { MetadataRoute } from "next";

export default async function sitemap():Promise<MetadataRoute.Sitemap>{
    const response = await fetch("https://cddev.creer-design.com/harmonize/api/blog/BlogList")
    const data = await response.json();
    const blogEntries:MetadataRoute.Sitemap = data.List.map(({BlogID}:{ BlogID: number }) =>({
         url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${BlogID}`
    }))
    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
            lastModified:new Date(),
        },
        ...blogEntries
    ]
}