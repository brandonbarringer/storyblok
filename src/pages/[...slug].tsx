import Head from "next/head";
import {
  getStoryblokApi,
  StoryblokComponent,
  useStoryblokState
} from '@storyblok/react'
import DefaultLayout from '@/layouts/default';
import type { ISbStoriesParams, ISbStoryData } from '@storyblok/react'

interface Props {
  story: ISbStoryData;
  globals: ISbStoryData;
}

interface Params {
  params: {
    slug: string[]
  }
}

export default function Page({ story: initialStory, globals }: Props) {
  const story = useStoryblokState(initialStory);

  return (
    <div>
      <Head>
        <title>{story ? story.name : "My Site"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout globals={globals}>
        {story?.content &&
          <StoryblokComponent blok={story.content} />
        }
      </DefaultLayout>
    </div>
  );
}

export async function getStaticProps(params: Params) {
  let slug = params.params.slug ? params.params.slug.join('/') : 'home';

  let sbParams: ISbStoriesParams = {
    version: "draft", // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
  const { data: globalData } = await storyblokApi.get(`cdn/stories/global/theme-options`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      globals: globalData ? globalData.story : false,
    },
    revalidate: 3600,
  };
}

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get("cdn/links/", {
    version: 'draft'
  });

  type Path = {
    params: {
      slug: string[]
    }
  }

  let paths:Path[] = [];
  
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home") {
      return;
    }

    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split("/");

    paths.push({ params: { slug: splittedSlug } });
  });

  return {
    paths,
    fallback: false,
  };
}