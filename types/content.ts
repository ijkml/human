import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types';

interface PostContent extends MarkdownParsedContent {
  title: string;
  subtitle: string;
  date: string;
  tags: string;
}

export type { PostContent };
