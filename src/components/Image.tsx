import { storyblokEditable } from "@storyblok/react";
import RouterLink from 'next/link';
import { inEditor } from '@/helpers';
import NextImage from 'next/image';
import type { Asset } from '@/types';

export function getDimensions(filename:string) {
  // 1-4 numbers x 1-4 numbers
  const regex = /(\d{1,4})x(\d{1,4})/gm;
  const match = regex.exec(filename);
  if (match) {
    return {
      width: parseInt(match[1]),
      height: parseInt(match[2])
    };
  }
}

export default function Image(image: Asset) {
  const dimensions = getDimensions(image.filename);
  return (
    <NextImage
      src={image.filename}
      alt={image.alt}
      width={dimensions?.width}
      height={dimensions?.height}
    />
  );
}
