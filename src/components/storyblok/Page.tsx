import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Container from '../Container';

export default function Page({ blok }: { blok: any }) {
  console.log('Page', blok);
  return (
    <main {...storyblokEditable(blok)}>
      <Container size="small">
        {
          blok.body.map((nestedBlok: any) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))
        }
      </Container>
    </main>
  );
}