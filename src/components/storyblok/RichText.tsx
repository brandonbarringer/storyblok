import { Blok } from '@/types';
import { storyblokEditable, renderRichText } from "@storyblok/react";

interface Props {
  blok: {
    Content: any;
  } & Blok;
}

export default function RichText({ blok }: Props) {
  const renderedRichText = renderRichText(blok.Content);
  return (
    <div {...storyblokEditable(blok)} key={blok._uid} data-test="RichText">
      <h2>Rich Text</h2>
      <div dangerouslySetInnerHTML={{__html: renderedRichText}}></div>
    </div>
  );
}
