
import { getAllPosts } from '@/utils/GetPost'
 
export default async function sitemap() {
    const baseUrl = 'https://panglimamuhammad.me/graphql';
    const response = await getAllPosts();

    const articles = response?.map((article: any) => {
        return {
            url: `${baseUrl}/articles/${article.slug}`,
            lastModified: article.date
        }
    })
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...articles
    
  ]
}