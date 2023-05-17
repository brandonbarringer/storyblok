import { Blok } from '@/types';
import { storyblokEditable, StoryblokComponent, renderRichText } from "@storyblok/react";

interface Props {
  blok: {
    Content: any;
  } & Blok;
}

export default function RichText({ blok }: Props) {
  const renderedRichText = renderRichText(blok.Content);
  return (
    <div {...storyblokEditable(blok)} key={blok._uid}>
      <h2>Rich Text</h2>
      <div dangerouslySetInnerHTML={{__html: renderedRichText}}></div>
    </div>
  );
}
