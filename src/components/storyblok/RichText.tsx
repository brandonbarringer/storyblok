import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import PrimaryNavigation from '../navigation/Primary';
import Image from '../Image';

export default function RichText({ blok }: { blok: any }) {
  return (
    <pre>
      {JSON.stringify(blok, null, 2)}
    </pre>
  );
}
