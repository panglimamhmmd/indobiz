export const GET_LATEST_4_POSTS = `
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

export const GET_ALL_POSTS = `
query GetAllPosts {
  posts {
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

export const GET_LATEST_POSTS = `
query GetLatestPosts($first: Int, $after: String) {
    posts(first: $first, after: $after) {
        edges {
            node {
                id  
                title
                excerpt
                date
                slug
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

export const GET_POST_BY_SLUG = `
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
