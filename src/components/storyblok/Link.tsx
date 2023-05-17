import { SbBlokData, storyblokEditable } from "@storyblok/react";
import  RouterLink from 'next/link';
import type { Blok, Link } from '@/types'
import { inEditor } from '@/helpers';

interface Props {
  blok: {
    title: string;
    url: Link;
  } & Blok;
}

function url(url: Link) {
  if (inEditor()) return '#!';

  switch (url.linktype) {
    case 'story':
      return '/' + (url.cached_url || url.story?.full_slug)
    case 'url':
    case 'asset':
      return url.url
    case 'email':
      return 'mailto:' + url?.email
    default:
      return '#!'
  }
}

export default function Link({ blok: link }: Props & { blok: SbBlokData}) {
  return (
    <RouterLink
      href={url(link.url)}
      {...storyblokEditable(link)}
      key={link._uid}
    >
        {link.title}
    </RouterLink>
  );
}
