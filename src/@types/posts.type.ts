export type Attributes = {
  title: string;
  author: string;
  date: string;
  summary?: string;
  tags: string[];
  image?: string;
}

export type PostType = Attributes & {
  date: string;
  slug: string;
}

export type PostWithMarkdown = PostType & {
  markdown: string;
}

export type PostMardown = {
  attributes: Attributes;
  markdown: string;
  html: string;
}
