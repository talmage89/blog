import type { CollectionEntry } from "astro:content";

export function displayTags(post: CollectionEntry<"posts">): string[] {
  if (!post.data.draft) return post.data.tags;
  return post.data.tags.includes("draft")
    ? post.data.tags
    : ["draft", ...post.data.tags];
}
