import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Container from '../Container';
import type { Blok } from '@/types';

interface Props {
  blok: {
    body: Blok[];
  } & Blok;
}

export default function Page({ blok: page }: Props) {
  return (
    <main {...storyblokEditable(page)} key={page._uid} data-test="page">
      <Container size="small">
        {
          page.body.map((nestedBlok: Blok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))
        }
      </Container>
    </main>
  );
}