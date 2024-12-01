import {gql } from '@apollo/client';

export const GET_LATEST_4_POSTS = gql`
  query GetLatestPosts {
    posts(first: 4) {
      nodes {
        id
        slug
        title
        content
        date
        excerpt
        categories {
          nodes {
            name
          }
        }
        author {
          node {
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

export const GET_LATEST_POSTS = gql`
query GetLatestPosts($first: Int, $after: String) {
    posts(first: $first, after: $after) {
        edges {
            node {
                id
                title
                excerpt
                date
                slug
                featuredImage {
                    node {
                        sourceUrl
                    }
                }
                content
                author {
                    node {
                        name
                        description
                        avatar {
                            url
                        }
                    }
                }
            }
        }
        pageInfo {
            endCursor
            hasNextPage
        }
    }
}
`;

export const GET_POST_BY_SLUG = gql`
query GetPostBySlug($slug: String!) {
    postBy(slug: $slug) {
        id
        title
        content
        date
        slug
        author {
            node {
                name
                description
                avatar {
                    url
                }
            }
        }
        categories {
            nodes {
                name
            }
        }
        tags {
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
`;