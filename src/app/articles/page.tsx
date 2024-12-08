import React from 'react';
import { Container } from '@/components/Container';
import Link from 'next/link';
import Image from 'next/image';
import {
    calculateReadingTime,
    sanitizeExcerpt,
    formatDate,
    truncateString,
} from '@/middleware/ArticleHandling';

import { getClient } from '@/middleware/AppoloClient';
import { GET_LATEST_POSTS } from '@/middleware/GraphqlQuery';

export default async function Articles() {
    try {
        const { data } = await getClient().query({
            query: GET_LATEST_POSTS,
            variables: { first: 10, after: null },
        });
        const articles = data.posts.edges;
        return (
            <Container>
                <div id="Header">
                    <h1 className="text-center font-bold text-4xl">
                        Latest <span className="text-orange">Articles</span>
                    </h1>
                </div>
                <div>
                    <section className="dark:bg-gray-100 dark:text-gray-800">
                        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                            <Link
                                rel="noopener noreferrer"
                                href={`/articles/${articles[0].node.slug}`}
                                className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-[#fff]"
                            >
                                <Image
                                    src={
                                        articles[0].node.featuredImage.node
                                            .sourceUrl
                                    }
                                    alt=""
                                    className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
                                    width={500}
                                    height={500}
                                />
                                <div className="p-6 space-y-2 lg:col-span-5">
                                    <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline ">
                                        {articles[0].node.title}
                                    </h3>
                                    <span className="text-xs dark:text-gray-600">
                                        {formatDate(articles[0].node.date)}
                                    </span>
                                    <p>
                                        {sanitizeExcerpt(
                                            articles[0].node.excerpt,
                                            2
                                        )}
                                    </p>
                                    <Link
                                        className="group-hover:text-amber-400 inline-flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors text-orange"
                                        href={`/articles/${articles[0].node.slug}`}
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </Link>
                            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {articles.slice(1, 6).map((article: any) => (
                                    <Link
                                        rel="noopener noreferrer"
                                        href={`/articles/${article.node.slug}`}
                                        className="max-w-sm mx-auto group hover:no-underline focus:no-underline 
                                        rounded-2xl bg-[#fff] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow "
                                        key={article.node.id}
                                    >
                                        <Image
                                            role="presentation"
                                            className="object-cover w-full rounded h-44 dark:bg-gray-500"
                                            src={
                                                article.node.featuredImage.node
                                                    .sourceUrl
                                            }
                                            width={200}
                                            height={200}
                                            alt={article.node.title}
                                        />
                                        <div className="p-6 space-y-2">
                                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                                                {truncateString(
                                                    article.node.title,
                                                    42
                                                )}
                                            </h3>
                                            <span className="text-xs dark:text-gray-600">
                                                {formatDate(article.node.date)}
                                            </span>
                                            <p>
                                                {sanitizeExcerpt(
                                                    truncateString(
                                                        article.node.excerpt,
                                                        80
                                                    )
                                                )}
                                            </p>

                                            <Link
                                                className="group-hover:text-amber-400   inline-flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors text-orange"
                                                href={`/articles/${article.node.slug}`}
                                            >
                                                Read More
                                            </Link>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            <div className="flex justify-center">
                                <button
                                    type="button"
                                    className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600"
                                >
                                    Load more posts...
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </Container>
        );
    } catch (error) {
        console.log('Terjadi Fetch Error', error);
    }
}
