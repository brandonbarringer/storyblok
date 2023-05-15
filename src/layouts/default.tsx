import {
  getStoryblokApi,
  useStoryblokState
} from '@storyblok/react'
import PrimaryNavigation from '@/components/navigation/Primary'
import type { ISbStoriesParams, ISbStoryData } from '@storyblok/react'
import React from 'react';


export default function DefaultLayout({globals, children}: {globals: ISbStoryData, children: React.ReactNode}) {
  const story = useStoryblokState(globals);
  const { primary_navigation } = story.content;
  return (
    <>
      <PrimaryNavigation blok={primary_navigation} />
      { children }
    </>
  )
}
