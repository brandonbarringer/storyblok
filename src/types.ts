import type { ISbStoryData } from '@storyblok/react';

export type Blok = {
  _uid: string;
  _editable: string;
  component: string;
  [key: string]: any;
}

export type Blocks = [Blok];

export type Link = {
  id: string;
  linktype: 'url' | 'story' | 'email' | 'asset';
  cached_url: string;
  fieldtype: string;
  url: string;
  target: string;
  email?: string;
  story?: ISbStoryData;
}

export type Text = {
  [key: string]: string;
}

export type TextArea = Text;
export type DateTime = Text;
export type Markdown = Text;
export type Number = Text;
export type SingleOption = Text;

export type Boolean = {
  [key: string]: boolean;
}

export type MultiOption = {
  [key: string]: string[];
};

export type Asset = {
  id: number;
  alt: string;
  name: string;
  focus: string;
  title: string;
  source: string;
  filename: string;
  copyright: string;
  fieldtype: string;
  meta_data: {[key:string]: any};
  is_external_url: boolean;
  content_type: string;
}

export type MultiAssets = {
  [key: string]: Asset[];
}

export type TableItem = {
  component: string;
  value: string;
  _uid: string;
}

export type THead = TableItem[];

export type TBody = {
  component: string;
  _uid: string;
  body: TableItem[];
}

export type RichText = {
  type: string;
  content: RichText[];
}

