import { ICategory } from "@/data";

export function getMostRecentFromEachCategory(allCategories:{[key: string]: ICategory[]}) {
  // Get the most recent post from each category
  const mostRecentPosts = Object.values(allCategories)
    .map(posts => {
      // Sort posts in this category by date descending
      return posts.slice().sort((a, b) => b.date.localeCompare(a.date))[0];
    })
    .filter(Boolean); // Remove undefined if any category is empty

  // Sort all most recent posts by date descending
  mostRecentPosts.sort((a, b) => b.date.localeCompare(a.date));

  return mostRecentPosts;
}

