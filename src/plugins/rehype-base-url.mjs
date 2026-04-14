import { visit } from "unist-util-visit";

export function rehypeBaseUrl({ base = "/" } = {}) {
  const prefix = base.replace(/\/$/, "");
  return (tree) => {
    if (!prefix) return;
    visit(tree, "element", (node) => {
      if (node.tagName === "img" && node.properties?.src?.startsWith("/")) {
        node.properties.src = `${prefix}${node.properties.src}`;
      }
      if (node.tagName === "a" && node.properties?.href?.startsWith("/")) {
        node.properties.href = `${prefix}${node.properties.href}`;
      }
    });
  };
}
