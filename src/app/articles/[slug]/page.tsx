import Image from 'next/image';
import { GET_POST_BY_SLUG } from '@/middleware/GraphqlQuery';
import { formatDate } from '@/middleware/ArticleHandling';
import { getPostBySlug, getAllPosts } from '@/utils/GetPost';

export async function generateMeta({ params }: { params: { slug: string } }) {
    try {
        const article = await getPostBySlug(params.slug);
        if (article === 0)
            return {
                title: 'Not Found',
                desription: 'The page you are looking for does not exist.',
            };
        return {
            OpenGraph: {
                title: article.title,
                description: article.excerpt,
                images: article.featuredImage.node.sourceUrl,
            },
        };
    } catch (error) {
        return {
            title: 'Not Found',
            desription: 'The page you are looking for does not exist.',
        };
    }
}

export async function generateStaticParams() {
    try {
        const articles = await getAllPosts();
        if (articles.length === 0) {
            throw new Error('Failed to fetch posts');
        }
        return articles.map((article: any) => ({
            slug: article.slug,
        }));
    } catch (error) {
        console.error('Failed to fetch posts', error);
    }
}
export const dynamic = 'force-dynamic';
async function ArticleDetails({ params }: { params: { slug: string } }) {
    try {
        const article = await getPostBySlug(params.slug);
        return (
            <article className="max-w-2xl px-6 py-12 mx-auto space-y-12 dark:bg-gray-100 dark:text-gray-900">
                <div className="w-full mx-auto space-y-4 text-center">
                    <p className="text-xs font-semibold tracking-wider uppercase">
                        #{article.categories?.nodes?.[0]?.name || 'No Category'}
                    </p>
                    <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                        {article.title || 'Untitled Article'}
                    </h1>
                    <p className="text-sm dark:text-gray-600">
                        by{' '}
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            target="_blank"
                            className="underline dark:text-red-600"
                        >
                            <span itemProp="name">
                                {article.author?.node?.name || 'Unknown Author'}
                            </span>
                        </a>{' '}
                        on {formatDate(article.date) || 'Unknown Date'}
                    </p>
                </div>
                <div className="dark:text-gray-800">
                    <Image
                        src={
                            article.featuredImage?.node?.sourceUrl ||
                            'https://placehold.co/600x400.png'
                        }
                        alt={article.title || 'No Image Available'}
                        width={1200}
                        height={400}
                    />
                    <br />
                    <div className="w-full mt-5">
                        <div
                            className="blog-content"
                            dangerouslySetInnerHTML={{
                                __html:
                                    article.content ||
                                    '<p>No content available.</p>',
                            }}
                        ></div>
                    </div>
                </div>
            </article>
        );
    } catch (e) {
        console.log('Terjadi Fetch Error', e);
    }
}

export default ArticleDetails;
