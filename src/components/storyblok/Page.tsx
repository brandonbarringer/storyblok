import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Container from '../Container';

const Page = ({ blok }: { blok: any }) => (
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

export default Page;