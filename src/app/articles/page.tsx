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

import { getLatestPosts } from '@/utils/GetPost';

export default async function Articles() {
    try {
        const articles = await getLatestPosts();
        // console.dir(articles, { depth: null });
        const firstArticle = articles?.[3]?.node;
        console.log(firstArticle);

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
                            {/* Article utama */}

                            {firstArticle && (
                                <Link
                                    href={`/articles/${firstArticle.slug}`}
                                    rel="noopener noreferrer"
                                    className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-[#fff]"
                                >
                                    <Image
                                        src={
                                            firstArticle?.featuredImage?.node
                                                ?.sourceUrl ||
                                            'https://placehold.co/600x400.png'
                                        }
                                        alt={firstArticle?.title || 'No Title'}
                                        className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
                                        width={500}
                                        height={500}
                                    />

                                    <div className="p-6 space-y-2 lg:col-span-5 flex flex-col h-full">
                                        {/* Added h-full */}
                                        <div className="flex-grow space-y-6 ">
                                            <span className="inline-flex items-center bg-orange-500 text-amber-100 bg-orange font-semibold text-sm px-3 py-1 rounded-2xl uppercase tracking-wide border-orange border-2">
                                                {firstArticle.categories
                                                    ?.nodes[0]?.name ||
                                                    'Uncategorized'}
                                            </span>{' '}
                                            {/* Added flex-grow to allow this div to take available space */}
                                            <h3 className="text-3xl font-semibold sm:text-4xl group-hover:underline">
                                                {/* {firstArticle?.title ||
                                                    'Untitled Article'} */}
                                                lorem12
                                            </h3>
                                            <p className="text-xs dark:text-gray-600">
                                                {formatDate(
                                                    firstArticle?.date
                                                ) || 'Unknown Date'}
                                            </p>
                                            <p>
                                                {sanitizeExcerpt(
                                                    firstArticle?.excerpt || '',
                                                    2
                                                )}
                                            </p>
                                        </div>
                                        <Link
                                            className="blgroup-hover:bg-orange-500 group-hover:text-orange inline-flex items-center text-orange-500 font-medium hover:bg-orange-600 hover:text-orange transition-colors text-sm rounded-lg py-2 mb-4 " // Added margin for spacing
                                            href={`/articles/${
                                                firstArticle?.slug || '#'
                                            }`}
                                            title="Read the full article"
                                        >
                                            <span>Read More</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 h-5 ml-1 transition-all duration-300"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M12 19l7-7-7-7M5 12h14" />
                                            </svg>
                                        </Link>
                                    </div>
                                </Link>
                            )}

                            {/* Artikel lainnya */}
                            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full">
                                {articles.slice(1, 20).map((article: any) => (
                                    <div
                                        className="max-w-sm w-full mx-auto group hover:no-underline focus:no-underline 
        rounded-2xl bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-shadow transform  
        duration-300 ease-in-out flex flex-col" // Added flex and flex-col
                                        key={article?.node?.id || Math.random()}
                                    >
                                        <Link
                                            href={`/articles/${
                                                article?.node?.slug || '#'
                                            }`}
                                            className="block relative overflow-hidden rounded-t-2xl"
                                        >
                                            <div className="h-64">
                                                <Image
                                                    role="presentation"
                                                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                                                    src={
                                                        article?.node
                                                            ?.featuredImage
                                                            ?.node?.sourceUrl ||
                                                        'https://placehold.co/600x400.png'
                                                    }
                                                    width={600}
                                                    height={400}
                                                    alt={
                                                        article?.node?.title ||
                                                        'No Title'
                                                    }
                                                />
                                            </div>
                                        </Link>

                                        <div className="p-6 space-y-4 relative bg-gradient-to-t flex-grow">
                                            {/* Added flex-grow */}
                                            <span className="inline-flex items-center bg-orange-500 text-amber-100 bg-orange font-semibold text-sm px-3 py-1 rounded-2xl uppercase tracking-wide border-orange border-2">
                                                {article?.node.categories
                                                    ?.nodes[0]?.name ||
                                                    'Uncategorized'}
                                            </span>
                                            <h3 className="relative text-2xl font-semibold text-gray-800 group">
                                                {truncateString(
                                                    article?.node?.title ||
                                                        'Untitled Article',
                                                    42
                                                )}
                                            </h3>

                                            <span className="text-xs text-gray-600 dark:text-gray-400">
                                                {formatDate(
                                                    article?.node?.date
                                                ) || 'Unknown Date'}
                                            </span>
                                            <p className="text-gray-700 text-sm mt-2">
                                                {sanitizeExcerpt(
                                                    truncateString(
                                                        article?.node
                                                            ?.excerpt || '',
                                                        80
                                                    )
                                                )}
                                            </p>
                                        </div>

                                        <Link
                                            className="blgroup-hover:bg-orange-500 group-hover:text-orange inline-flex items-center text-orange-500 font-medium hover:bg-orange-600 hover:text-orange transition-colors text-sm rounded-lg py-2 mb-4 mx-6" // Added margin for spacing
                                            href={`/articles/${
                                                article?.node?.slug || '#'
                                            }`}
                                            title="Read the full article"
                                        >
                                            <span>Read More</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 h-5 ml-1 transition-all duration-300"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M12 19l7-7-7-7M5 12h14" />
                                            </svg>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                            {/* Tombol Load More */}
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
