import React from 'react';
import { Container } from '@/components/Container';
import Link from 'next/link';
import Image from 'next/image';
import {
    calculateReadingTime,
    sanitizeExcerpt,
    formatDate,
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
                                className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-[#fff]"
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
                                    <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                                        {articles[0].node.title}
                                    </h3>
                                    <span className="text-xs dark:text-gray-600">
                                        {formatDate(articles[0].node.date)}
                                    </span>
                                    <p>
                                        {sanitizeExcerpt(
                                            articles[0].node.excerpt
                                        )}
                                    </p>
                                    <Link
                                        className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors text-orange"
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
                                        rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow "
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
                                                {article.node.title}
                                            </h3>
                                            <span className="text-xs dark:text-gray-600">
                                                {formatDate(article.node.date)}
                                            </span>
                                            <p>
                                                {sanitizeExcerpt(
                                                    article.node.excerpt
                                                )}
                                            </p>

                                            <Link
                                                className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors text-orange"
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

{
    /* {articles.map((article: any) => (
                    <div
                        key={article.node.id}
                        className="group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-transparent"
                    >
                        <div className="relative">
                            <div
                                className="h-56 bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-105"
                                style={{
                                    backgroundImage: `url(${article.node.featuredImage.node.sourceUrl})`,
                                    backgroundBlendMode: 'multiply',
                                }}
                            >
                                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                                    {article.node.date}
                                </div>
                            </div>

                            <div className="p-6 space-y-3">
                                <Link
                                    href={`/articles/${article.node.slug}`}
                                    className="block text-xl font-bold text-gray-800 dark:text-white hover:text-red-600 transition-colors duration-300"
                                >
                                    {article.node.title}
                                </Link>

                                <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                                    {sanitizeExcerpt(article.node.excerpt)}
                                </p>

                                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                                    <div className="flex items-center space-x-3">
                                        <Image
                                            src={
                                                article.node.author.node.avatar
                                                    .url
                                            }
                                            alt={`${article.node.author.node.name}'s avatar`}
                                            width={40}
                                            height={40}
                                            className="rounded-full border-2 border-white dark:border-gray-700"
                                        />
                                        <div>
                                            <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                                {article.node.author.node.name}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                        {calculateReadingTime(
                                            article.node.content
                                        )}{' '}
                                        read
                                    </div>
                                </div>

                                <Link
                                    href={`/articles/${article.node.slug}`}
                                    className="inline-flex items-center text-red-600 hover:text-red-800 font-semibold transition-colors duration-300 group/link"
                                >
                                    Read more
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))} */
}
