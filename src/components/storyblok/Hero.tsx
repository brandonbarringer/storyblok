import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Image from '../Image';
import Link from './Link';
import type { Asset, Blok, Text, Link as tLink } from "@/types"


type Button = {
  title: Text;
  url: tLink;
} & Blok;

interface Props {
  blok: {
    title: Text;
    text: Text;
    images: Asset[];
    buttons: Button[];
  } & Blok;
}

export default function Hero({ blok: hero }: Props) {

  const imageEls = hero.images.map((image: Asset) => (
    <Image {...image}  key={image.id}/>
  ));

  const buttonEls = hero.buttons.map((button: Button) => (
    <StoryblokComponent blok={button} key={button._uid} />
  ));

  return (
    <div className='hero' {...storyblokEditable(hero)} key={hero._uid}>
      <h2>Hero</h2>
      images: {imageEls} <br/>
      title: {hero.title} <br/>
      text: {hero.text} <br/>
      buttons: {buttonEls} <br/>
    </div>
  );
}
