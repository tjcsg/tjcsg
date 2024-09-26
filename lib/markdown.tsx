import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import Link from 'next/link';
import ContentfulImage from './contentful-image';
import type { EventEntry } from './api';

type Asset = EventEntry['summary']['links']['assets']['block'][number];

function RichTextAsset({
  id,
  assets,
}: {
  id: string;
  assets: Asset[] | undefined;
}) {
  const asset = assets?.find((asset) => asset.sys.id === id);

  if (asset?.url) {
    return (
      <ContentfulImage
        src={asset.url}
        width={asset.width}
        height={asset.height}
        alt={asset.description}
      />
    );
  }

  return null;
}

export function Markdown({ content }: { content: EventEntry['summary'] }) {
  return documentToReactComponents(content.json, {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => (
        <RichTextAsset
          id={node.data.target.sys.id}
          assets={content.links.assets.block}
        />
      ),
      [BLOCKS.HEADING_1]: (node: any, children) => (
        <h1 className="font-bold">{children}</h1>
      ),
      [INLINES.HYPERLINK]: (node: any, children) => {
        if (node.data.uri.includes('youtube.com/embed')) {
          return (
            <div className="relative w-full pt-[56.25%]">
              <iframe
                src={node.data.uri}
                height="315"
                width="560"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full"
              />
            </div>
          );
        } else {
          const urlString: string = node.data.uri;
          const isSiteLink = urlString.includes('tjc.sg');
          if (isSiteLink) {
            const url = new URL(urlString);
            const relative = url.pathname + url.search;
            return (
              <Link
                href={relative}
                className="text-button hover:text-button_hover"
              >
                {children}
              </Link>
            );
          } else {
            return (
              <a
                href={node.data.uri}
                className="text-button hover:text-button_hover"
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
              </a>
            );
          }
        }
      },
    },
    renderMark: {
      [MARKS.BOLD]: (text) => <span className="font-bold">{text}</span>,
    },
    renderText: (text) =>
      text.split('\n').flatMap((text, i) => [i > 0 && <br />, text]),
  });
}
