import { Blok } from '@/types';
import { StoryblokComponent } from "@storyblok/react";

interface Props {
  blok: Blok[];
}

export default function PrimaryNavigation({ blok: navItems }: Props) {
  return (
    <nav>
      <h2>Primary Nav: </h2>
      {
        navItems.map((item: any) => (
          <StoryblokComponent blok={item} key={item._uid} />
        ))
      }
    </nav>
  )
}
