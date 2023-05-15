import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import PrimaryNavigation from '../navigation/Primary';
import Image from '../Image';

export default function BasicBlok({ blok }: { blok: any }) {
  console.log('BasicBlok', blok);
  return (
    <pre>
      {JSON.stringify(blok, null, 2)}
    </pre>
  );
}
