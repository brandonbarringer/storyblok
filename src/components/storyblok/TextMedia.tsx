import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Image from '../Image';
import type { Blok, Asset, Text, TextArea } from '@/types';

export default function TextMedia({ blok }: { blok: any }) {
  const {
    media,
    title,
    text,
    spacing_top,
    spacing_bottom,
    media_position,
  }: {
    media: Asset;
    title: Text;
    text: TextArea;
    spacing_top: Text;
    spacing_bottom: Text;
    media_position: Text;
  } = blok;
  
  return (
    <div className="text-media">
      <h2>Text Media</h2>
      media: <Image {...media} /> <br/>
      title: {title} <br/>
      text: {text} <br/>
      <hr />
      spacer-top: {spacing_top} <br/>
      spacer-bottom: {spacing_bottom} <br/>
      text-media position: {media_position} <br/>
    </div>
  );
}
