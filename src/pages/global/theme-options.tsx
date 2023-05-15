import Head from 'next/head'
import {
  getStoryblokApi,
  StoryblokComponent,
  useStoryblokState
} from '@storyblok/react'
import type { ISbStoriesParams, ISbStoryData } from '@storyblok/react'

export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  const slug = "global/theme-options";

  const storiesParams: ISbStoriesParams = {
    version: "draft", // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, storiesParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 60 // seconds
  };
}

export default function ThemeOptions({ story: initialStory }: { story: ISbStoryData }) {
  const story = useStoryblokState(initialStory);
  return (
    <>
      <Head>
        <title>Theme Options</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Theme Options: </h1>
      {story?.content &&
        <StoryblokComponent blok={story.content} />
      }
    </>
  )
}
