import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Image from '../Image';
import type { Blok, Asset, Text, TextArea } from '@/types';

export default function TextMedia({ blok }: { blok: any }) {
  const {
    media,
    title,
    text,
  }: {
    media: Asset;
    title: Text;
    text: TextArea;
  } = blok;
  
  return (
    <div className="text-media">
      <h2>Text Media</h2>
      media: <Image {...media} /> <br/>
      title: {title} <br/>
      text: {text} <br/>
    </div>
  );
}
