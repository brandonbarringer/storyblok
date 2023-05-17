import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import type { Blok } from '@/types';

interface Props {
  blok: {
    items: Blok[];
  } & Blok;
}

export default function Callouts({ blok: { items: callouts } }: Props) {
  return (
    <div>
      <h2>Callouts</h2>
      <ul>
        {
          callouts.map((callout: Blok) => (
            <li key={callout._uid} {...storyblokEditable(callout)} data-test="callouts">
              <StoryblokComponent blok={callout}  />
            </li>
          ))
        }
      </ul>
      
    </div>
  )
}
