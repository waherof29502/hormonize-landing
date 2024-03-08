import React from 'react'
import BlogDetail from '@/src/components/layouts/blog-detail'
import { GetServerSideProps } from 'next';
import {client, urlFor} from '@/src/lib/sanity'
type BlogDetailProps ={
    _id: string;
    name: string;
    description: string;
    images: string[]; // Replace with the actual type for images
    releaseDate: string;
    slug: string;
    content:string[],
    tags: {
      name: string;
    }[];
    categories: {
      name: string;
    }[];
  };
  export const revalidate = 30;  
const getData = async(slug:string)  =>{
  const query= `*[_type == 'blog' && slug.current == '${slug}']{
  _id,
    name,
    description,
    images,
    releaseDate,
    content,
    'slug':slug.current,
    'tags': tags[]->{
      name
    },
    'categories':categories[]->{
    name
    }
}[0]`;
const data = await client.fetch(query);
return data
}


const BlogDetailPage = async({params}:{params:{slug:string}})=> {
  const blog:BlogDetailProps = await getData(params.slug)
  return (
    <BlogDetail blog={blog}/>
  )
}

export default BlogDetailPage