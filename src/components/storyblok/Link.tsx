import { SbBlokData, storyblokEditable } from "@storyblok/react";
import  RouterLink from 'next/link';
import type { Blok, Link } from '@/types'
import { inEditor } from '@/helpers';

interface Props {
  blok: Blok;
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

export default function Link(props: Props) {
  return (
    <RouterLink
      href={url(props.blok.url as Link)}
      {...storyblokEditable(props.blok as SbBlokData)}
    >
        {props.blok.title as string}
    </RouterLink>
  );
}
