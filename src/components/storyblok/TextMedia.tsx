import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Image from '../Image';

export default function Hero({ blok }: { blok: any }) {
  return (
    <>
    <pre>
      {JSON.stringify(blok, null, 2)}
    </pre>
    </>
  );
}
