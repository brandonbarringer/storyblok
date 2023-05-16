import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

interface Props {
  blok: any; 
}

export default function Callouts(props: Props) {
  return (
    <div {...storyblokEditable}>
      <h2>Callouts</h2>
      <ul>
        {
          props.blok.items.map((nestedBlok: any) => (
            <li key={nestedBlok._uid}>
              <StoryblokComponent blok={nestedBlok}  />
            </li>
          ))
        }
      </ul>
      
    </div>
  )
}
