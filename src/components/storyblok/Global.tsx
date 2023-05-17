import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import PrimaryNavigation from '../navigation/Primary';
import Image from '../Image';
import type { Blok, Asset } from '@/types';

interface Props {
  blok: {
    logo: Asset;
    primary_navigation: Blok[];
  } & Blok;
}

export default function Global({ blok: { logo, primary_navigation } }: Props) {
  return (
    <div>
    <Image {...logo} />
    <PrimaryNavigation blok={primary_navigation} />
    <pre>
      {JSON.stringify({...logo, ...primary_navigation}, null, 2)}
    </pre>
    </div>
  );
}
