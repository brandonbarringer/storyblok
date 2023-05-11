import Head from 'next/head'
import {
  getStoryblokApi,
  StoryblokComponent,
  useStoryblokState
} from '@storyblok/react'
import type { ISbStoriesParams, ISbStoryData } from '@storyblok/react'

export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  const slug = "home";

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

export default function Home({ story: initialStory }: { story: ISbStoryData }) {
  const story = useStoryblokState(initialStory);
  return (
    <>
      <Head>
        <title>Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {story?.content &&
        <StoryblokComponent blok={story.content} />
      }
    </>
  )
}
