import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Image from '../Image';
import type { Blok, Asset, Text, TextArea } from '@/types';

interface Props {
  blok: {
    image: Asset;
    title: Text;
    text: TextArea;
    button: Blok[];
  } & Blok;    
}

export default function Calllout({ blok: callout }: Props) {
  return (
    <div {...storyblokEditable(callout)} key={callout._uid} data-test="callout">
      media: <Image {...callout.image} /> <br/>
      title: {callout.title} <br/>
      text: {callout.text} <br/>
      button: &nbsp;
      {
        callout.button.map((nestedBlok: Blok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))
      }
    </div>
  );
}
