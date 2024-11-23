import React from 'react';
import Image from 'next/image';

import { gql, wpApolloClient } from '../app/services/AppoloClient';

const GET_PAGE_CONTENT = gql`
    {
        posts {
            nodes {
                id
                slug
                title
                content
                date
                author {
                    node {
                        name
                    }
                }
                categories {
                    nodes {
                        name
                    }
                }
                featuredImage {
                    node {
                        sourceUrl
                    }
                }
            }
        }
    }
`;

interface Article {
    id: string;
    slug: string;
    date: string;
    title: string;
    author: {
        node: {
            name: string;
        };
    };
    categories: {
        nodes: { name: string }[];
    };
    featuredImage: {
        node: {
            sourceUrl: string;
        };
    };
}

export const Articles = async () => {
    // Fetch data from WordPress GraphQL
    const { data } = await wpApolloClient.query({
        // fetchPolicy: 'no-cache',
        query: GET_PAGE_CONTENT,
    });

    const articles: Article[] = data.posts.nodes;

    console.log(articles);

    return (
        <div>
            <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center">
                        <h1 className="text-center text-4xl">Articles</h1>
                        <p className="font-serif text-sm dark:text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nesciunt, nisi.
                        </p>
                    </div>
                    <div id="latest">
                        <a href="#" className="text-base mb-5">
                            Latest Articles {'>>>'}
                        </a>
                        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                            {articles.slice(0, 4).map((article) => (
                                <>
                                    <article className="flex flex-col dark:bg-gray-50 border-spacing-1">
                                        <a
                                            rel="noopener noreferrer"
                                            href="#"
                                            aria-label="Te nulla oportere reprimique his dolorum"
                                        >
                                            <Image
                                                alt=""
                                                className="object-cover w-full h-52 dark:bg-gray-500 "
                                                src={
                                                    article.featuredImage?.node
                                                        .sourceUrl ||
                                                    '/img/default.jpg'
                                                }
                                                width={500}
                                                height={500}
                                            />
                                        </a>
                                        <div className="flex flex-col flex-1 p-6">
                                            <a
                                                rel="noopener noreferrer"
                                                href="#"
                                                aria-label="Te nulla oportere reprimique his dolorum"
                                            ></a>
                                            <a
                                                rel="noopener noreferrer"
                                                href="#"
                                                className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600"
                                            >
                                                Convenire
                                            </a>
                                            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                                                {article.title}
                                            </h3>
                                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                                                {/* <span>
                                                    {article.author.node.name}
                                                </span>
                                                <span>{article.date}</span> */}
                                            </div>
                                        </div>
                                    </article>
                                </>
                            ))}
                        </div>
                    </div>
                    <div id="more-articles">
                        <a href="#" className="text-base mb-5">
                            More Articles {'>>>'}
                        </a>
                        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                            {articles.slice(0, 4).map((article) => (
                                <>
                                    <article className="flex flex-col dark:bg-gray-50">
                                        <a
                                            rel="noopener noreferrer"
                                            href="#"
                                            aria-label="Te nulla oportere reprimique his dolorum"
                                        >
                                            <Image
                                                alt=""
                                                className="object-cover w-full h-52 dark:bg-gray-500"
                                                src={
                                                    article.featuredImage?.node
                                                        .sourceUrl ||
                                                    '/img/default.jpg'
                                                }
                                                width={500}
                                                height={500}
                                            />
                                        </a>
                                        <div className="flex flex-col flex-1 p-6">
                                            <a
                                                rel="noopener noreferrer"
                                                href="#"
                                                aria-label="Te nulla oportere reprimique his dolorum"
                                            ></a>
                                            <a
                                                rel="noopener noreferrer"
                                                href="#"
                                                className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600"
                                            >
                                                Convenire
                                            </a>
                                            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                                                {article.title}
                                            </h3>
                                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600"></div>
                                        </div>
                                    </article>
                                </>
                            ))}
                            {articles.slice(0, 4).map((article) => (
                                <>
                                    <article className="flex flex-col dark:bg-gray-50">
                                        <a
                                            rel="noopener noreferrer"
                                            href="#"
                                            aria-label="Te nulla oportere reprimique his dolorum"
                                        >
                                            <Image
                                                alt=""
                                                className="object-cover w-full h-52 dark:bg-gray-500"
                                                src={
                                                    article.featuredImage?.node
                                                        .sourceUrl ||
                                                    '/img/default.jpg'
                                                }
                                                width={500}
                                                height={500}
                                            />
                                        </a>
                                        <div className="flex flex-col flex-1 p-6">
                                            <a
                                                rel="noopener noreferrer"
                                                href="#"
                                                aria-label="Te nulla oportere reprimique his dolorum"
                                            ></a>
                                            <a
                                                rel="noopener noreferrer"
                                                href="#"
                                                className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600"
                                            >
                                                Convenire
                                            </a>
                                            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                                                {article.title}
                                            </h3>
                                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600"></div>
                                        </div>
                                    </article>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Articles;
