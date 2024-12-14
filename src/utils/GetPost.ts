
import { GET_LATEST_4_POSTS , GET_POST_BY_SLUG , GET_ALL_POSTS, GET_LATEST_POSTS } from "@/middleware/GraphqlQuery";

// GET ALL ARTICLES
const baseUrl = 'https://demo.wpgraphql.com/graphql';
// const baseUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;


export const getAllPosts = async () => {
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API_URL || baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'indobiz',
           

            },
            body: JSON.stringify({
                query: GET_ALL_POSTS,
            }),
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.statusText}`);
        }

        const result = await response.json();
        const articles = result.data.posts.nodes || [];
        
        // const articles = result.data?.posts?.nodes || [];
        return articles
    } catch (error) {
        console.error('Error fetching posts:',  error );
    }
}


export const getPostBySlug = async (slug: string) => {
    try {   
        const response = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API_URL || baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'indobiz',
       

        },
        body: JSON.stringify({
            query: GET_POST_BY_SLUG,
            variables: { slug: slug },
        }),
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const result = await response.json();
    const article = result.data?.postBy || [];

    return article;
        
    } catch (error) {
        console.error('Error fetching posts:',  error );
        return 0;
    }
  
}


export const getLatestPosts = async () => {
    try {
        const response = await fetch( process.env.NEXT_PUBLIC_WORDPRESS_API_URL || baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'indobiz',
            },
            body: JSON.stringify({
                query: GET_LATEST_POSTS,
            }),
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.statusText}`);
        }

        const result = await response.json();
        const articles = result.data?.posts?.edges || [];
        return articles
    } catch (error) {
        console.error('Error fetching posts:',  error );
    }
}


export const get4LatestPosts = async () => {
    try {
        const response = await fetch( process.env.NEXT_PUBLIC_WORDPRESS_API_URL || baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'indobiz',   
 
            },
            body: JSON.stringify({
                query: GET_LATEST_4_POSTS,
            }),
        }); 

        if (!response.ok) { 
            throw new Error(`Failed to fetch: ${response.statusText}`);
        }

        const result = await response.json();
        const articles = result.data?.posts?.nodes || [];
        return articles
    } catch (error) {
        console.error('Error fetching posts:',  error );
    }
}