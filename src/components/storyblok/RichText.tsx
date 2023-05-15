import { storyblokEditable, StoryblokComponent, renderRichText } from "@storyblok/react";

export default function RichText({ blok }: { blok: any }) {
  const renderedRichText = renderRichText(blok.Content);
  return (
    <div {...storyblokEditable(blok)}>
      <h2>Rich Text</h2>
      <div dangerouslySetInnerHTML={{__html: renderedRichText}}></div>
    </div>
  );
}
