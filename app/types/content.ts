import type { MarkdownParsedContent } from '@nuxt/content';

interface PostContent extends MarkdownParsedContent {
  title: string;
  subtitle: string;
  date: string;
  tags: string;
}

export type { PostContent };
