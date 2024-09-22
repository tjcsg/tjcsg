import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'True Jesus Church Singapore',
    short_name: 'TJC SG',
    description:
      "We're True Jesus Church, a global Bible-based church. We welcome you to join God's loving family. Our goal is simple: transform lives and make disciples of Christ through preaching God's full truth of salvation.",
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/android-chrome-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
    ],
  };
}
