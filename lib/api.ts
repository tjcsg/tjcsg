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
        }
      }
    }
  }
`;

type EventEntry = {
  slug: string,
  title: string,
  date: string,
  duration: number,
  date2: string | null,
  duration2: number | null,
  church: string,
  poster: {
    url: string,
    description: string
  }
  summary: {
    json: any
    links: {
      assets: {
        block: [
          {
            sys: { id: string },
            url: string,
            description: string
          }
        ]
      }
    }
  }
}

async function fetchGraphQL(query: string, preview = false): Promise<any> {
  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      next: { tags: ["posts"] },
    }
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

export async function getPreviewPostBySlug(slug: string | null): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      eventsCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${EVENTS_GRAPHQL_FIELDS}  
        }
      }
    }`,
    true
  );
  return extractPost(entry);
}

export async function getAllEvents(isDraftMode: boolean): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
      eventsCollection(order: date_DESC, preview: ${
        isDraftMode ? "true" : "false" 
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
    isDraftMode
  );
  return extractPostEntries(entries);
}

export async function getAllEventsSlug(isDraftMode: boolean): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
      eventsCollection(order: date_DESC, preview: ${
        isDraftMode ? "true" : "false"
      }) {
        items {
          slug
        }
      }
    }`,
    isDraftMode
  );
  return extractPostEntries(entries);
}

export async function getEvent(
  slug: string,
  preview: boolean
) {
  const entry = await fetchGraphQL(
    `query {
      eventsCollection(where: { slug: "${slug}" }, preview: ${
      preview ? "true" : "false"
    }, limit: 1) {
        items {
          ${EVENTS_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );

  return {
    event: extractPost(entry),
  };
}
