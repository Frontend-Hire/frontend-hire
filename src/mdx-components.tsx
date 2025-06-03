import { File, Files, Folder } from 'fumadocs-ui/components/files';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import VideoEmbed from './components/video-embed';

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    File,
    Folder,
    Files,
    VideoEmbed,
  };
}
