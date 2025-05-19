import defaultMdxComponents from 'fumadocs-ui/mdx';
import { File, Folder, Files } from 'fumadocs-ui/components/files';
import type { MDXComponents } from 'mdx/types';
import VideoEmbed from './components/video-embed';

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    VideoEmbed: VideoEmbed,
    ...components,
    File,
    Folder,
    Files,
  };
}
