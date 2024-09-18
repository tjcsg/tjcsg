import { Locale } from '@/i18n-config';
import { Aof } from './articles-of-faith';
import { Book, books } from './bible-books';

export type MarkdownType = {
  json: any;
  links: {
    assets: {
      block: [
        {
          sys: { id: string };
          url: string;
          description: string;
          width: number;
          height: number;
        },
      ];
    };
  };
};

const WEBCONTENT_GRAPHQL_FIELDS = `
  welcomeText
  homepageWorshipTrueGodText
  footerText
  aboutWhoweare {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          url
          description
          width
          height
        }
      }
    }
  }
  aboutWhoweareIframe
  aboutWhywearehere {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          url
          description
          width
          height
        }
      }
    }
  }
  aboutWhytrue {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          url
          description
          width
          height
        }
      }
    }
  }
  worshipInpersonTitle
  worshipInpersonText
  worshipInpersonMedia {
    url
  }
  worshipHowtoprayTitle
  worshipHowtoprayText {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          url
          description
          width
          height
        }
      }
    }
  }
  worshipHowtoprayMedia {
    url
  }
  livestreamGlobalTitle
  livestreamGlobalText
  livestreamGlobalMedia {
    url
  }
`;
type WebContent = {
  welcomeText: string;
  homepageWorshipTrueGodText: string;
  footerText: string;
  aboutWhoweareIframe: string;
  aboutWhoweare: MarkdownType;
  aboutWhywearehere: MarkdownType;
  aboutWhytrue: MarkdownType;
  worshipInpersonTitle: string;
  worshipInpersonText: string;
  worshipInpersonMedia: {
    url: string;
  };
  worshipHowtoprayTitle: string;
  worshipHowtoprayText: MarkdownType;
  worshipHowtoprayMedia: {
    url: string;
  };
  livestreamGlobalTitle: string;
  livestreamGlobalText: string;
  livestreamGlobalMedia: {
    url: string;
  };
  globalTjciaTitle: string;
  globalTjciaText: string;
  globalTjciaMedia: {
    url: string;
  };

};

const EVENTS_GRAPHQL_FIELDS = `
  slug
  title
  date
  duration
  title2
  date2
  duration2
  church
  poster {
    url
    description
    width
    height
  }
  summary {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          url
          description
          width
          height
        }
      }
    }
  }
`;

export type EventEntry = {
  slug: string;
  title: string;
  title2: string;
  date: string;
  duration: number;
  date2: string | null;
  duration2: number | null;
  church: 'adam' | 'tk' | 'sembawang' | 'serangoon';
  poster: {
    url: string;
    description: string;
    width: number;
    height: number;
  };
  summary: MarkdownType;
};

// Need to separate out "content" because of the query complexity limit of 11000, and "content.links" has a complexity of 1000.
const ARTICLE_GRAPHQL_FIELDS = `
  slug
  title
  author
  date
  description
  image {
    url
    description
    width
    height
  }
  relatedArticlesCollection {
    items {
      slug
      title
    }
  }
  contentfulMetadata {
    tags {
      id
      name
    }
  }
`;

export type ArticleEntry = {
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  content: {
    json: any;
    links: {
      assets: {
        block: [
          {
            sys: { id: string };
            url: string;
            description: string;
            width: number;
            height: number;
          },
        ];
      };
    };
  };
  image: {
    url: string;
    description: string;
    width: number;
    height: number;
  };
  relatedArticlesCollection: {
    items: {
      slug: string;
      title: string;
    }[];
  };
  contentfulMetadata: {
    tags: {
      id: string;
      name: string;
    }[];
  };
};

async function fetchGraphQL(query: string, preview = false): Promise<any> {
  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      next: { tags: ['posts'] },
    },
  );
  const result = await response.json();
  return result;
}

function extractPost(fetchResponse: any): EventEntry {
  return fetchResponse?.data?.eventsCollection?.items?.[0];
}

function extractPostEntries(fetchResponse: any): any[] {
  return fetchResponse?.data?.eventsCollection?.items;
}

function extractWebContent(fetchResponse: any): WebContent {
  return fetchResponse?.data?.webContentCollection?.items?.[0];
}

function extractCdbdSchedule(fetchResponse: any): any {
  return fetchResponse?.data?.cdbdScheduleCollection?.items?.[0];
}

function extractArticleCategories(fetchResponse: any): any {
  const categories = new Map<string, Set<string>>();
  fetchResponse?.data?.categoryCollection?.items?.forEach(
    ({ doctrine, subcategory }: { doctrine: string; subcategory: string }) => {
      if (!categories.has(doctrine)) {
        let subcat = new Set<string>();
        subcat.add(subcategory);
        categories.set(doctrine, subcat);
      } else {
        let cat = categories.get(doctrine) as Set<string>;
        cat.add(subcategory);
        categories.set(doctrine, cat);
      }
    },
  );
  return categories;
}

function extractArticleSubcategories(fetchResponse: any): any {
  const categories = new Set();
  fetchResponse?.data?.categoryCollection?.items?.forEach(
    (item: { subcategory: string }) => {
      categories.add(item.subcategory);
    },
  );
  return Array.from(categories);
}

function extractArticleEntries(fetchResponse: any): ArticleEntry[] {
  return fetchResponse?.data?.articleCollection?.items;
}

function extractArticle(fetchResponse: any): ArticleEntry {
  return fetchResponse?.data?.articleCollection?.items?.[0];
}

export async function getPreviewPostBySlug(slug: string | null): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      eventsCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${EVENTS_GRAPHQL_FIELDS}
        }
      }
    }`,
    true,
  );
  return extractPost(entry);
}

export async function getAllEvents(
  locale: Locale,
  limit: number = 100,
  skip: number = 0,
): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
      eventsCollection(
        locale: "${locale}",
        order: date_DESC,
        limit: ${limit},
        skip: ${skip}
      ) {
        items {
          slug
          title
          title2
          date
          duration
          date2
          duration2
          church
          poster {
            url
            description
          }
        }
      }
    }`,
  );
  return extractPostEntries(entries);
}

export async function getAllEventsSlug(isDraftMode: boolean): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
      eventsCollection(order: date_DESC, preview: ${
        isDraftMode ? 'true' : 'false'
      }) {
        items {
          slug
        }
      }
    }`,
    isDraftMode,
  );
  return extractPostEntries(entries);
}

export async function getEvent(slug: string, preview: boolean) {
  const entry = await fetchGraphQL(
    `query {
      eventsCollection(where: { slug: "${slug}" }, preview: ${
        preview ? 'true' : 'false'
      }, limit: 1) {
        items {
          ${EVENTS_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview,
  );

  return {
    event: extractPost(entry),
  };
}

export async function getTotalEvents(): Promise<number> {
  const entry = await fetchGraphQL(
    `query {
        eventsCollection(limit:1000) {
        total
      }
    }`,
  );
  return entry?.data?.eventsCollection?.total;
}

export async function getWebContent(locale: string, preview: boolean) {
  const entry = await fetchGraphQL(
    `query {
      webContentCollection(limit: 1, locale:"${locale}"){
        items {
          ${WEBCONTENT_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview,
  );
  return extractWebContent(entry);
}

export async function getCDBDSchedule(preview: boolean) {
  const entry = await fetchGraphQL(
    `query {
      cdbdScheduleCollection(limit: 1, order:month_DESC){
        items{
          schedule {
            url
          }
        }
      }
    }`,
    preview,
  );
  return extractCdbdSchedule(entry);
}

export async function getAllArticlesSlug(isDraftMode: boolean): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
      articleCollection(preview: ${isDraftMode ? 'true' : 'false'}) {
        items {
          slug
        }
      }
    }`,
    isDraftMode,
  );
  return extractArticleEntries(entries);
}

export async function getArticlesInSubcat(
  cat: string,
  subcat: string,
  preview: boolean,
): Promise<ArticleEntry[]> {
  const entry = await fetchGraphQL(
    `query {
      articleCollection(where: { category: { doctrine: "${cat}", subcategory: "${subcat}"} }, preview: ${
        preview ? 'true' : 'false'
      }, limit: 1) {
        items {
          ${ARTICLE_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview,
  );
  return extractArticleEntries(entry);
}

export async function getLatestArticles(
  locale: Locale,
  limit: number = 100,
  skip: number = 0,
  tags: string[] = [],
  author: string = '',
): Promise<ArticleEntry[]> {
  const entry = await fetchGraphQL(
    `query {
        articleCollection(
          limit: ${limit},
          skip: ${skip},
          locale:"${locale}",
          order: date_DESC
          where: {
            ${author ? `author: "${author}"` : ``}
            contentfulMetadata: { tags: { id_contains_all: [ ${tags.length > 0 ? `"${tags.join('","')}"` : ``} ] } }
          }
          
        ) {
        items {
          ${ARTICLE_GRAPHQL_FIELDS}
            content {
              json
            }
        }
      }
    }`,
  );
  return extractArticleEntries(entry);
}

export async function getTotalArticles(
  locale: Locale,
  tags: string[] = [],
  author: string = '',
): Promise<number> {
  const entry = await fetchGraphQL(
    `query {
        articleCollection(
          locale:"${locale}",
          order: date_DESC,
          where: {
            ${author ? `author: "${author}"` : ``}
            contentfulMetadata: { tags: { id_contains_all: [ ${tags.length > 0 ? `"${tags.join('","')}"` : ``} ] } }
          }
          
        ) {
        total
      }
    }`,
  );
  return entry?.data?.articleCollection?.total;
}

function extractArticleTags(fetchResponse: any): Map<string, string> {
  const tags = new Map();

  fetchResponse?.data?.articleCollection?.items?.forEach((item: any) => {
    item.contentfulMetadata.tags?.forEach(
      (tag: { name: string; id: string }) => {
        if (!tags.get(tag.id)) {
          tags.set(tag.id, tag.name);
        }
      },
    );
  });
  return tags;
}

export async function getAllArticleTags(): Promise<Map<string, string>> {
  const entry = await fetchGraphQL(
    `query {
      articleCollection(limit: 1000) {
        items {
          contentfulMetadata {
            tags {
              id
              name
            }
          } 
        }
      }
    }`,
  );
  return extractArticleTags(entry);
}

export async function getArticle(
  slug: string,
  preview: boolean,
): Promise<ArticleEntry> {
  const entry = await fetchGraphQL(
    `query {
      articleCollection(where: { slug: "${slug}" }, preview: ${
        preview ? 'true' : 'false'
      }, limit: 1) {
        items {
          ${ARTICLE_GRAPHQL_FIELDS}
            content {
              json
              links {
                assets {
                  block {
                    sys {
                      id
                    }
                    url
                    description
                    width
                    height
                  }
                }
              }
            }
        }
      }
    }`,
    preview,
  );
  return extractArticle(entry);
}

function extractCdbdBooks(fetchResponse: any): any {
  const books = new Set();

  fetchResponse?.data?.articleCollection?.items?.forEach((item: any) => {
    let book = item.contentfulMetadata.tags
      .find((tag: any) => tag.id.startsWith('book'))
      ?.name.split('-');
    book.shift();
    books.add(book.join('-'));
  });
  return Array.from(books);
}

export async function getAllCdbdBooks(): Promise<Book[]> {
  const entry = await fetchGraphQL(
    `query {
      articleCollection(
        where: {contentfulMetadata: { tags: { id_contains_all: [ "categoryCdbd" ] } } }
      ) {
        items {
          contentfulMetadata {
            tags {
              id
              name
            }
          }
        }
      }
    }`,
  );
  return extractCdbdBooks(entry);
}

export async function getAllCdbdSlugs(): Promise<{ slug: string }[]> {
  const entry = await fetchGraphQL(
    `query {
      articleCollection(
        order: date_DESC,
        limit:1000, 
        where: {contentfulMetadata: { tags: { id_contains_all: [ "categoryCdbd" ] } } }
      ) {
        items {
          slug
        }
      }
    }`,
  );
  return entry?.data?.articleCollection?.items;
}

function extractCdbdAuthors(fetchResponse: any): any {
  const authors = new Set();

  fetchResponse?.data?.articleCollection?.items?.forEach((item: any) => {
    authors.add(item.author?.split(' ').join('-').toLowerCase());
  });
  return Array.from(authors);
}

export async function getAllCdbdAuthors(): Promise<string[]> {
  const entry = await fetchGraphQL(
    `query {
      articleCollection(
        where: {contentfulMetadata: { tags: { id_contains_all: [ "categoryCdbd" ] } } }
      ) {
        items {
          author
        }
      }
    }`,
  );
  return extractCdbdAuthors(entry);
}
