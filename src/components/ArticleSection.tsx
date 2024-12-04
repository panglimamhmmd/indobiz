import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getClient } from '@/middleware/AppoloClient';
import { GET_LATEST_4_POSTS } from '../middleware/GraphqlQuery';

import {
    calculateReadingTime,
    sanitizeExcerpt,
} from '@/middleware/ArticleHandling';

export const Articles = async () => {
    try {
    } catch (error) {}
    const { data } = await getClient().query({ query: GET_LATEST_4_POSTS });

    return (
        <div>
            <section id="articles" className="pt-20 pb-5 ">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h1 className="text-4xl font-bold text-gray-900 mb-6">
                            Latest <span className="text-orange">Articles</span>
                        </h1>
                        <p className="text-gray-600 text-lg">
                            Berita dan Wawasan dari Dunia Legalitas Bisnis
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* article cards */}

                        {data.posts.nodes.map((article: any) => (
                            <article
                                key={article.id}
                                className="bg-[#fff] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
                            >
                                <div className="relative overflow-hidden">
                                    <Image
                                        src={
                                            article.featuredImage?.node
                                                .sourceUrl || '/img/default.jpg'
                                        }
                                        alt={article.title.split(' ')[0]}
                                        width={400}
                                        height={300}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="inline-block bg-orange text-white text-sm px-3 py-1 rounded-full">
                                            {article.categories.nodes[0]
                                                ?.name || 'Category'}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="text-sm text-gray-500 mb-2">
                                        {`${calculateReadingTime(
                                            article.content
                                        )} read`}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        {sanitizeExcerpt(article.excerpt) ||
                                            'Summary of the article goes here...'}
                                    </p>
                                    <Link
                                        href={`/articles/${article.slug}`}
                                        className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors text-orange"
                                    >
                                        Read More
                                        <svg
                                            className="w-4 h-4 ml-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="py-4 text-right">
                        <a
                            href="#"
                            className="text-lg text-gray-600 hover:text-orange"
                        >
                            More Articles {'>>>'}
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Articles;
