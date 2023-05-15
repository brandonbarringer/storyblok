import { storyblokEditable } from "@storyblok/react";
import RouterLink from 'next/link';
import { inEditor } from '@/helpers';
import NextImage from 'next/image';

interface Props {
  id: number;
  alt: string;
  name: string;
  focus: string;
  title: string;
  source: string;
  filename: string;
  copyright: string;
  fieldtype: string;
  meta_data: {};
  is_external_url: boolean;
  content_type: string;
}

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

export default function Image(props: Props) {
  const dimensions = getDimensions(props.filename);
  return (
    <NextImage
      src={props.filename}
      alt={props.alt}
      width={dimensions?.width}
      height={dimensions?.height}
    />
  );
}
