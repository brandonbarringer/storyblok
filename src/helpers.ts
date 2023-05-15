declare global {
  interface Window {
    storyblok: any;
  }
}

export function inEditor() {
  return typeof window !== 'undefined' && window.storyblok;
}