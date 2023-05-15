import Head from "next/head";
import {
  getStoryblokApi,
  StoryblokComponent,
  useStoryblokState
} from '@storyblok/react'
import type { ISbStoriesParams, ISbStoryData } from '@storyblok/react'

export default function Page({ story: initialStory }: { story: ISbStoryData }) {
  const story = useStoryblokState(initialStory);

  return (
    <div>
      <Head>
        <title>{story ? story.name : "My Site"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {story?.content &&
        <StoryblokComponent blok={story.content} />
      }
    </div>
  );
}

type Params = {
  params: {
    slug: string[]
  }
}

export async function getStaticProps(params: Params) {
  let slug = params.params.slug ? params.params.slug.join('/') : 'home';

  let sbParams: ISbStoriesParams = {
    version: "draft", // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
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