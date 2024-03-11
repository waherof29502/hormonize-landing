export const metadata = {
  title: '寬堂設計 | 部落格',
  description: '住宅空間 | 辦公空間 '
};
import BlogContent from '@/src/components/layouts/blog-content';
import {client, urlFor} from '@/src/lib/sanity'

type Blog ={
   _id: string;
  name: string;
  description: string;
  images: string[]; // Replace with the actual type for images
  releaseDate:string;
  slug: string;
  tags:{
    name:string
  }[];
  categories:{
    name:string
  }[];
}
export const revalidate = 30;  

const getData = async()=>{
  const query:string = `*[_type == 'blog' && references(*[_type == 'category' ]._id,categories)]{
  _id,
    name,
    description,
    images,
    releaseDate,
    'slug':coalesce(slug.current, null),
    'tags': tags[]->{
      name
    },
    'categories':categories[]->{
    name
    }
}`;
  const data:Blog[] = await client.fetch(query);
  return data;
}
export default async function BlogForumPage() {
  const blog = await getData(); 
  return (
    <>
      <BlogContent blog={blog}/>
    </>
  );
}
