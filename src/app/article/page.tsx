import React from 'react';
import { Container } from '@/components/Container';
import Image from 'next/image';
import { gql } from '@apollo/client';
import { wpApolloClient } from '../services/AppoloClient';
import { GetServerSideProps } from 'next';

type Props = {
    post: {
        title: string;
        content: string;
        date: string;
        author: {
            node: {
                name: string;
            };
        };
    };
};

const GET_POST_BY_SLUG = gql`
    query GetPostBySlug($slug: ID!) {
        post(id: $slug, idType: SLUG) {
            title
            content
            date
            author {
                node {
                    name
                }
            }
        }
    }
`;

export const getServerSideProps: GetServerSideProps<Props> = async (
    context
) => {
    const { slug } = context.params as { slug: string };

    try {
        const { data } = await wpApolloClient.query({
            query: GET_POST_BY_SLUG,
            variables: { slug },
        });

        return {
            props: {
                post: data.post,
            },
        };
    } catch (error) {
        console.error('Error fetching post:', error);
        return {
            notFound: true,
        };
    }
};

const Article = ({ post }: Props) => {
    return (
        <Container>
            <article className="max-w-2xl px-6 py-6 mx-auto space-y-12 dark:bg-gray-100 dark:text-gray-900">
                <div className="w-full mx-auto space-y-4 text-center">
                    <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                        {post.title}
                    </h1>
                    <p className="text-sm dark:text-gray-600">
                        by
                        <span className="underline dark:text-red-600">
                            {post.author.node.name}
                        </span>
                        on{' '}
                        <time>{new Date(post.date).toLocaleDateString()}</time>
                    </p>
                </div>
                <div
                    className="dark:text-gray-800"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </article>
        </Container>
    );
};

export default Article;
