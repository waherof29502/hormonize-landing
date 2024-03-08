import {createClient} from 'next-sanity';
import ImageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId:'jexnpeuq',
    dataset:'production',
    apiVersion:'2024-03-06',
    useCdn:true
})

const imgBuilder = ImageUrlBuilder(client);

export function urlFor(source:any){
    return imgBuilder.image(source)
}