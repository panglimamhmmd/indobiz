import Image from 'next/image';
import { GET_POST_BY_SLUG } from '@/middleware/GraphqlQuery';
import { formatDate } from '@/middleware/ArticleHandling';

async function ArticleDetails({ params }: { params: { slug: string } }) {
    try {
        const response = await fetch('https://panglimamuhammad.me/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: GET_POST_BY_SLUG,
                variables: { slug: params.slug },
            }),
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.statusText}`);
        }

        const result = await response.json();
        const article = result.data?.postBy || [];

        return (
            <article className="max-w-2xl px-6 py-12 mx-auto space-y-12 dark:bg-gray-100 dark:text-gray-900">
                <div className="w-full mx-auto space-y-4 text-center">
                    <p className="text-xs font-semibold tracking-wider uppercase">
                        #{article.categories.nodes[0].name}
                    </p>
                    <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                        {article.title}
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
                                {article.author.node.name}
                            </span>
                        </a>{' '}
                        on {formatDate(article.date)}
                    </p>
                </div>
                <div className="dark:text-gray-800">
                    <Image
                        src={article.featuredImage.node.sourceUrl}
                        alt={article.title}
                        width={1200}
                        height={400}
                    />
                    <br />
                    <div className="w-full mt-5">
                        <div
                            className="blog-content"
                            dangerouslySetInnerHTML={{
                                __html: article.content,
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
