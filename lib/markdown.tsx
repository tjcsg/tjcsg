import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Link from "next/link";
import ContentfulImage from "./contentful-image";

interface Asset {
  sys: {
    id: string;
  };
  url: string;
  description: string;
}

interface AssetLink {
  block: Asset[];
}

interface Content {
  json: any;
  links: {
    assets: AssetLink;
  };
}

function RichTextAsset({
  id,
  assets,
}: {
  id: string;
  assets: Asset[] | undefined;
}) {
  const asset = assets?.find((asset) => asset.sys.id === id);

  if (asset?.url) {
    return <ContentfulImage src={asset.url} layout="fill" alt={asset.description} />;
  }

  return null;
}

export function Markdown({ content }: { content: Content }) {
  return documentToReactComponents(content.json, {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => (
        <RichTextAsset
          id={node.data.target.sys.id}
          assets={content.links.assets.block}
        />
      ),
      [INLINES.HYPERLINK]: (node: any, children) => {
        if (node.data.uri.includes("youtube.com/embed")) {
          return <div>
            <iframe
              src={node.data.uri}
              height="315"
              width="560"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>;
        } else {
          const urlString: string = node.data.uri;
          const isSiteLink = urlString.includes("tjc.sg");
          if (isSiteLink) {
            const url = new URL(urlString);
            const relative = url.pathname + url.search;
            return <Link href={relative}>{children}</Link>;
          } else {
            return <a href={node.data.uri} target="_blank" rel="noopener noreferrer">{children}</a>;
          }
        }
      }
    },
  });
}