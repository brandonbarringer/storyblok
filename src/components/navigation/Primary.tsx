import { StoryblokComponent } from "@storyblok/react";

interface Props {
  blok: any; 
}

export default function PrimaryNavigation(props: Props) {
  return (
    <nav>
      <h2>Primary Nav: </h2>
      {
        props.blok.map((nestedBlok: any) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))
      }
    </nav>
  )
}
