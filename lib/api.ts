import { Locale } from "@/i18n-config";

const WEBCONTENT_GRAPHQL_FIELDS = `
  welcomeText
  footerText
  socialsYoutubeTitle
  socialsYoutubeText
  socialsYoutubeIframe
  socialsInstagramTitle
  socialsInstagramText
  socialsInstagramMedia {
    url
  }
  socialsFacebookTitle
  socialsFacebookText
  socialsFacebookMedia {
    url
  }
  livestreamGlobalTitle
  livestreamGlobalText
  livestreamGlobalMedia {
    url
  }
  globalTjciaTitle
  globalTjciaText
  globalTjciaMedia {
    url
  }
  globalStudyTitle
  globalStudyText
  globalStudyMedia {
    url
  }
`
type WebContent = {
  welcomeText: string;
  footerText: string;
  socialsYoutubeTitle: string;
  socialsYoutubeText: string;
  socialsYoutubeIframe: string;
  socialsInstagramTitle: string;
  socialsInstagramText: string;
  socialsInstagramMedia: {
    url: string
  };
  socialsFacebookTitle: string;
  socialsFacebookText: string;
  socialsFacebookMedia: {
    url: string
  };
  livestreamGlobalTitle: string;
  livestreamGlobalText: string;
  livestreamGlobalMedia: {
    url: string
  };
  globalTjciaTitle: string;
  globalTjciaText: string;
  globalTjciaMedia: {
    url: string;
  }
  globalStudyTitle: string;
  globalStudyText: string;
  globalStudyMedia: {
    url: string;
  }
}

const EVENTS_GRAPHQL_FIELDS = `
  slug
  title
  date
  duration
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
  date: string;
  duration: number;
  date2: string | null;
  duration2: number | null;
  church: string;
  poster: {
    url: string;
    description: string;
    width: number;
    height: number;
  };
  summary: {
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

export async function getAllEvents(isDraftMode: boolean, locale: Locale): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
      eventsCollection(locale: "${locale}", order: date_DESC, preview: ${
        isDraftMode ? 'true' : 'false'
      }) {
        items {
          slug
          title
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
    isDraftMode,
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