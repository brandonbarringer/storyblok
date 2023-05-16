import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Image from '../Image';
import Link from './Link';
import type { Asset, Blok, Text } from "@/types"

export default function Hero({ blok }: { blok: any }) {
  const {
    title,
    text,
    images,
    buttons,
  }: {
    title: Text;
    text: Text;
    images: Asset[];
    buttons: Blok[];
  } = blok;

  const imageEls = images.map((image: Asset) => (
    <Image {...image}  key={image.id}/>
  ));

  const buttonEls = buttons.map((button: Blok) => (
    <Link blok={button} key={button._uid}/>
  ));

  return (
    <div className='hero'>
      <h2>Hero</h2>
      images: {imageEls} <br/>
      title: {title} <br/>
      text: {text} <br/>
      buttons: {buttonEls} <br/>
    </div>
  );
}
