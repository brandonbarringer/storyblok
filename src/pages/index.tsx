import Head from 'next/head'
import {
  getStoryblokApi,
  StoryblokComponent,
  useStoryblokState
} from '@storyblok/react'
import DefaultLayout from '@/layouts/default';
import type { ISbStoriesParams, ISbStoryData } from '@storyblok/react'

export async function getStaticProps() {

  const storiesParams: ISbStoriesParams = {
    version: "draft", // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  const { data: storyData } = await storyblokApi.get(`cdn/stories/home`, storiesParams);
  const { data: globalData } = await storyblokApi.get(`cdn/stories/global/theme-options`, storiesParams);

  return {
    props: {
      story: storyData ? storyData.story : false,
      globals: globalData ? globalData.story : false,
      key: storyData ? storyData.story.id : false,
    },
    revalidate: 60 // seconds
  };
}

interface Props {
  story: ISbStoryData;
  globals: ISbStoryData;
}

export default function Home({ story: initialStory, globals }: Props) {
  const story = useStoryblokState(initialStory);
  return (
    <>
      <Head>
        <title>Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout globals={globals}>
        {story?.content &&
          <StoryblokComponent blok={story.content} />
        }
      </DefaultLayout>
    </>
  )
}
