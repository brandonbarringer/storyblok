import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Image from '../Image';
import type { Blok, Asset, Text, TextArea } from '@/types';

export default function Calllout({ blok }: { blok: any }) {
  const {
    image,
    title,
    text,
    button
  }: {
    image: Asset;
    title: Text;
    text: TextArea;
    button: Blok[];
  } = blok;

  console.log(blok)
  
  return (
    <div className="text-media">
      media: <Image {...image} /> <br/>
      title: {title} <br/>
      text: {text} <br/>
      button: &nbsp;
      {
        button.map((nestedBlok: Blok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))
      }
    </div>
  );
}
