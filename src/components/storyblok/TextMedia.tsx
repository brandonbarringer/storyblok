import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Image from '../Image';
import type { Blok, Asset, Text, TextArea } from '@/types';

interface Props {
  blok: {
    media: Asset;
    title: Text;
    text: TextArea;
    spacing_top: Text;
    spacing_bottom: Text;
    media_position: Text;
  } & Blok;
}

export default function TextMedia({ blok: tm }: Props) {
  return (
    <div className="text-media" {...storyblokEditable(tm)} key={tm._uid}>
      <h2>Text Media</h2>
      media: <Image {...tm.media} /> <br/>
      title: {tm.title} <br/>
      text: {tm.text} <br/>
      <hr />
      spacer-top: {tm.spacing_top} <br/>
      spacer-bottom: {tm.spacing_bottom} <br/>
      text-media position: {tm.media_position} <br/>
    </div>
  );
}
