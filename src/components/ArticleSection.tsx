import React from 'react';
import Image from 'next/image';

import { gql, wpApolloClient } from '../app/services/AppoloClient';
import Link from 'next/link';

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

    return (
        <div>
            <section className="py-6 lg:py-12 dark:bg-gray-100 dark:text-gray-800">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center">
                        <h1 className="text-center text-4xl">Articles</h1>
                    </div>
                    <div id="latest" className="">
                        <div className="py-4">
                            <p className="text-lg text-[#4b5563] ">
                                Latest Articles
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-4">
                            {articles.slice(0, 4).map((article) => (
                                <>
                                    <article className="flex flex-col dark:bg-gray-50 bg-[#fff] p-2 rounded-lg  ">
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
                                        <div className="flex flex-col flex-1 p-2">
                                            <a
                                                rel="noopener noreferrer"
                                                href="#"
                                                className="mt-2 text-xs "
                                                aria-label="Te nulla oportere reprimique his dolorum"
                                            ></a>
                                            <a
                                                rel="noopener noreferrer"
                                                href="#"
                                                className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600"
                                            >
                                                Convenire
                                            </a>
                                            <Link
                                                href={`/articles/${article.slug}`}
                                                className="flex-1 py-2 text-lg font-semibold leading-snug"
                                            >
                                                {article.title}
                                            </Link>
                                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                                                {/* <span>
                                                    {article.author.node.name}
                                                </span>
                                                <span>{article.date}</span> */}
                                            </div>
                                            <Link
                                                href={`/articles/${article.slug}`}
                                                className="btn w-full bg-orange text-white rounded-lg text-lg py-1 text-center hover:bg-yellow-400"
                                            >
                                                Read More
                                            </Link>
                                        </div>
                                    </article>
                                </>
                            ))}
                        </div>
                        <div className="py-4 text-right">
                            <a
                                href="#"
                                className="text-lg text-[#4b5563] hover:text-orange"
                            >
                                More Articles {'>>>'}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Articles;
