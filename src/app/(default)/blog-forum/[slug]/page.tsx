import React from 'react'
import BlogDetail from '@/src/components/layouts/blog-detail-client';
export async function generateStaticParams() {
    const response = await fetch("https://cddev.creer-design.com/harmonize/api/blog/BlogList")
    const data = await response.json();
    return data.List.map(({ BlogID }: { BlogID: number }) => ({
        slug: String(BlogID)
    }))
}
type PageProps = {
    params: {
        slug: string;
    };
}
export default function Page({ params }: PageProps) {
    const { slug } = params

    return (
        <BlogDetail slug={slug} />
    )
}