import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import PrimaryNavigation from '../navigation/Primary';
import Image from '../Image';

export default function Global({ blok }: { blok: any }) {
  return (
    <div {...storyblokEditable}>
    <Image {...blok.logo} />
    <PrimaryNavigation blok={blok.primary_navigation} />
    <pre>
      {JSON.stringify(blok, null, 2)}
    </pre>
    </div>
  );
}
