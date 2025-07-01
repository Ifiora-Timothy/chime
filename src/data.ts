type TswiperData = {
  header: string;
  description: string;
  image: string;
};
export const swiperData: TswiperData[] = [
  {
    header: "The Best Homemade Masks for Face (keep the Pimples Away)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "url('/img/post-slide-1.jpg')",
  },
  {
    header: "Five Tips for a Successful Blog Post",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "url('/img/post-slide-2.jpg')",
  },
  {
    header:
      "  17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "url('/img/post-slide-3.jpg')",
  },
  {
    header: "How to Make Your Blog Post Pop",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "url('/img/post-slide-4.jpg')",
  },
];

export const aboutInfo = [
  {
    name: "Walter White",
    position: "Chief Executive Officer",
    image: "/img/team/team-1.jpg",
    description: "Explicabo voluptatem mollitia et repellat qui dolorum quasi",
  },
  {
    name: "Sarah Jhonson",
    position: "Product Manager",
    image: "/img/team/team-2.jpg",
    description:
      "Aut maiores voluptates amet et quis praesentium qui senda para",
  },
  {
    name: "William Anderson",
    position: "CTO",
    image: "/img/team/team-3.jpg",
    description: "Quisquam facilis cum velit laborum corrupti fuga rerum quia",
  },
  {
    name: "Amanda Jepson",
    position: "Accountant",
    image: "/img/team/team-4.jpg",
    description:
      "Dolorum tempora officiis odit laborum officiis et et accusamus",
  },
] as {
  name: string;
  position: string;
  image: string;
  description: string;
}[];

export const categoryArticles = [
  {
    title:
      "Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia",
    category: "Politics",
    date: "December 12",
    image: "/img/blog/blog-1.jpg",
    description:
      "Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.",
    author: "John Doe",
  },
  {
    title: "Nisi magni odit consequatur autem nulla dolorem",
    category: "Economics",
    date: "March 19",
    image: "/img/blog/blog-2.jpg",
    description:
      "Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam.",
    author: "Julia Parker",
  },
  {
    title:
      "Possimus soluta ut id suscipit ea ut. In quo quia et soluta libero sit sint.",
    category: "Sports",
    date: "June 24",
    image: "/img/blog/blog-3.jpg",
    description:
      "Aut iste neque ut illum qui perspiciatis similique recusandae non. Fugit autem dolorem labore omnis et. Eum temporibus fugiat voluptate enim tenetur sunt omnis.",
    author: "Michael Smith",
  },
  {
    title:
      "Non rem rerum nam cum quo minus. Dolor distinctio deleniti explicabo eius exercitationem.",
    category: "Sports",
    date: "August 05",
    image: "/img/blog/blog-4.jpg",
    description:
      "Aspernatur rerum perferendis et sint. Voluptates cupiditate voluptas atque quae. Rem veritatis rerum enim et autem. Saepe atque cum eligendi eaque iste omnis a qui.",
    author: "Maria Doe",
  },
  {
    title: "Accusamus quaerat aliquam qui debitis facilis consequatur",
    category: "Politics",
    date: "September 17",
    image: "/img/blog/blog-5.jpg",
    description:
      "In itaque assumenda aliquam voluptatem qui temporibus iusto nisi quia. Autem vitae quas aperiam nesciunt mollitia tempora odio omnis. Ipsa odit sit ut amet necessitatibus. Quo ullam ut corrupti autem consequuntur totam dolorem.",
    author: "John Parker",
  },
  {
    title: "Distinctio provident quibusdam numquam aperiam aut",
    category: "Economics",
    date: "December 07",
    image: "/img/blog/blog-6.jpg",
    description:
      "Expedita et temporibus eligendi enim molestiae est architecto praesentium dolores. Illo laboriosam officiis quis. Labore officia quia sit voluptatem nisi est dignissimos totam.",
    author: "Julia White",
  },
] as {
  title: string;
  category: string;
  date: string;
  image: string;
  description: string;
  author: string;
}[];
export type ICategory= {
  title: string;
  category: string;
  date: string;
  image: string;
  description: string;
  author: string;
}

export const categoryPostItems = [
  {
    title: " Nihil blanditiis at in nihil autem",
    image: "/img/blog/blog-recent-1.jpg",
  },
  {
    title: "Quidem autem et impedit",
    image: "/img/blog/blog-recent-2.jpg",
  },
  {
    title: "Id quia et et ut maxime similique occaecati ut",
    image: "/img/blog/blog-recent-3.jpg",
  },
  {
    title: "Laborum corporis quo dara net para",
    image: "/img/blog/blog-recent-4.jpg",
  },
  {
    title: "Et dolores corrupti quae illo quod dolor",
    image: "/img/blog/blog-recent-5.jpg",
  },
] as {
  title: string;
  image: string;
}[];

export const allCategories:
{[key: string]: ICategory[]}
= {
  sport: [
    {
      title: "Praesentium explicabo maxime",
      category: "sport",
      date: "2024-06-17",
      image: "/img/blog/blog-1.jpg",
      description: "Quam nihil molestiae suscipit illum.",
      author: "Laura Wilson",
    },
    {
      title: "Dolorum suscipit commodi",
      category: "sport",
      date: "2025-04-24",
      image: "/img/blog/blog-1.jpg",
      description: "Eum facilis dolores ratione reiciendis.",
      author: "John Doe",
    },
    {
      title: "Dolorum explicabo itaque",
      category: "sport",
      date: "2023-08-09",
      image: "/img/blog/blog-1.jpg",
      description:
        "Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.",
      author: "Jane Smith",
    },
    {
      title: "Qui distinctio et",
      category: "sport",
      date: "2024-04-08",
      image: "/img/blog/blog-1.jpg",
      description: "Fugit voluptas iusto maiores temporibus autem numquam.",
      author: "Mike Brown",
    },
    {
      title: "Laboriosam facilis commodi",
      category: "sport",
      date: "2024-04-06",
      image: "/img/blog/blog-1.jpg",
      description: "Aliquid rerum mollitia qui a consectetur eum sed.",
      author: "John Doe",
    },
    {
      title: "Quibusdam facilis tempora",
      category: "sport",
      date: "2024-03-21",
      image: "/img/blog/blog-1.jpg",
      description:
        "Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.",
      author: "Alice Johnson",
    },
    {
      title: "Dolorum suscipit maxime",
      category: "sport",
      date: "2024-07-14",
      image: "/img/blog/blog-1.jpg",
      description: "Quam nihil molestiae suscipit illum.",
      author: "Jane Smith",
    },
    {
      title: "Aliquam consequuntur maxime",
      category: "sport",
      date: "2023-11-03",
      image: "/img/blog/blog-1.jpg",
      description: "Ut autem aut autem non a consequatur.",
      author: "Jane Smith",
    },
    {
      title: "Laboriosam facilis dolores",
      category: "sport",
      date: "2023-08-13",
      image: "/img/blog/blog-1.jpg",
      description:
        "Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.",
      author: "Laura Wilson",
    },
    {
      title: "Praesentium explicabo nisi",
      category: "sport",
      date: "2023-09-18",
      image: "/img/blog/blog-1.jpg",
      description: "Aliquid rerum mollitia qui a consectetur eum sed.",
      author: "John Doe",
    },
  ],
  culture: [
    {
      title: "Fuga voluptatem commodi",
      category: "culture",
      date: "2023-06-08",
      image: "/img/blog/blog-1.jpg",
      description: "Aliquid rerum mollitia qui a consectetur eum sed.",
      author: "Mike Brown",
    },
    {
      title: "Fuga temporibus qui",
      category: "culture",
      date: "2022-12-23",
      image: "/img/blog/blog-1.jpg",
      description:
        "Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium.",
      author: "Laura Wilson",
    },
    {
      title: "Quibusdam voluptatem et",
      category: "culture",
      date: "2022-12-24",
      image: "/img/blog/blog-1.jpg",
      description: "Aliquid rerum mollitia qui a consectetur eum sed.",
      author: "Jane Smith",
    },
    {
      title: "Optio cumque itaque",
      category: "culture",
      date: "2025-06-20",
      image: "/img/blog/blog-1.jpg",
      description: "Cumque aut perferendis distinctio odit.",
      author: "Jane Smith",
    },
    {
      title: "Qui distinctio dolores",
      category: "culture",
      date: "2023-03-08",
      image: "/img/blog/blog-1.jpg",
      description: "Voluptas dignissimos cumque fuga qui quibusdam quia.",
      author: "Alice Johnson",
    },
    {
      title: "Optio distinctio et",
      category: "culture",
      date: "2023-08-25",
      image: "/img/blog/blog-1.jpg",
      description: "Ut autem aut autem non a consequatur.",
      author: "Mike Brown",
    },
    {
      title: "Voluptas consequuntur qui",
      category: "culture",
      date: "2024-08-24",
      image: "/img/blog/blog-1.jpg",
      description: "Cumque aut perferendis distinctio odit.",
      author: "Jane Smith",
    },
    {
      title: "Optio voluptatem et",
      category: "culture",
      date: "2023-09-29",
      image: "/img/blog/blog-1.jpg",
      description: "Cumque aut perferendis distinctio odit.",
      author: "Jane Smith",
    },
    {
      title: "Aliquam voluptatem nisi",
      category: "culture",
      date: "2024-02-15",
      image: "/img/blog/blog-1.jpg",
      description: "Aliquid rerum mollitia qui a consectetur eum sed.",
      author: "Mike Brown",
    },
    {
      title: "Dignissimos distinctio ratione",
      category: "culture",
      date: "2025-05-08",
      image: "/img/blog/blog-1.jpg",
      description: "Eum facilis dolores ratione reiciendis.",
      author: "Alice Johnson",
    },
  ],
  business: [
    {
      title: "Fuga consequuntur itaque",
      category: "business",
      date: "2024-03-05",
      image: "/img/blog/blog-1.jpg",
      description: "Voluptas dignissimos cumque fuga qui quibusdam quia.",
      author: "Alice Johnson",
    },
    {
      title: "Voluptas suscipit ratione",
      category: "business",
      date: "2024-06-30",
      image: "/img/blog/blog-1.jpg",
      description: "Voluptas dignissimos cumque fuga qui quibusdam quia.",
      author: "Jane Smith",
    },
    {
      title: "Dignissimos voluptatem ratione",
      category: "business",
      date: "2024-07-18",
      image: "/img/blog/blog-1.jpg",
      description:
        "Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium.",
      author: "Mike Brown",
    },
    {
      title: "Dolorum distinctio maxime",
      category: "business",
      date: "2025-04-21",
      image: "/img/blog/blog-1.jpg",
      description: "Eum facilis dolores ratione reiciendis.",
      author: "Laura Wilson",
    },
    {
      title: "Voluptas cumque et",
      category: "business",
      date: "2024-11-15",
      image: "/img/blog/blog-1.jpg",
      description: "Fugit voluptas iusto maiores temporibus autem numquam.",
      author: "Mike Brown",
    },
    {
      title: "Fuga temporibus itaque",
      category: "business",
      date: "2024-01-02",
      image: "/img/blog/blog-1.jpg",
      description:
        "Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.",
      author: "Alice Johnson",
    },
    {
      title: "Aliquam suscipit nisi",
      category: "business",
      date: "2025-04-30",
      image: "/img/blog/blog-1.jpg",
      description: "Ut autem aut autem non a consequatur.",
      author: "John Doe",
    },
    {
      title: "Voluptas reiciendis dolores",
      category: "business",
      date: "2025-01-14",
      image: "/img/blog/blog-1.jpg",
      description: "Tempora officiis odit laborum iure.",
      author: "Mike Brown",
    },
    {
      title: "Quibusdam necessitatibus et",
      category: "business",
      date: "2025-04-03",
      image: "/img/blog/blog-1.jpg",
      description:
        "Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.",
      author: "Alice Johnson",
    },
    {
      title: "Praesentium necessitatibus dolores",
      category: "business",
      date: "2025-06-24",
      image: "/img/blog/blog-1.jpg",
      description: "Ut autem aut autem non a consequatur.",
      author: "John Doe",
    },
  ],
  food: [
    {
      title: "Voluptas consequuntur commodi",
      category: "food",
      date: "2024-12-04",
      image: "/img/blog/blog-1.jpg",
      description: "Cumque aut perferendis distinctio odit.",
      author: "Laura Wilson",
    },
    {
      title: "Dolorum distinctio dolores",
      category: "food",
      date: "2023-06-13",
      image: "/img/blog/blog-1.jpg",
      description:
        "Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium.",
      author: "Jane Smith",
    },
    {
      title: "Praesentium explicabo repellat",
      category: "food",
      date: "2022-11-07",
      image: "/img/blog/blog-1.jpg",
      description:
        "Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.",
      author: "Laura Wilson",
    },
    {
      title: "Dignissimos explicabo commodi",
      category: "food",
      date: "2025-03-01",
      image: "/img/blog/blog-1.jpg",
      description:
        "Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium.",
      author: "Jane Smith",
    },
    {
      title: "Praesentium temporibus dolores",
      category: "food",
      date: "2024-10-14",
      image: "/img/blog/blog-1.jpg",
      description: "Eum facilis dolores ratione reiciendis.",
      author: "Laura Wilson",
    },
    {
      title: "Voluptas reiciendis itaque",
      category: "food",
      date: "2025-01-21",
      image: "/img/blog/blog-1.jpg",
      description: "Quam nihil molestiae suscipit illum.",
      author: "John Doe",
    },
    {
      title: "Dolorum cumque nisi",
      category: "food",
      date: "2023-10-08",
      image: "/img/blog/blog-1.jpg",
      description: "Cumque aut perferendis distinctio odit.",
      author: "Mike Brown",
    },
    {
      title: "Laboriosam voluptatem ratione",
      category: "food",
      date: "2024-09-28",
      image: "/img/blog/blog-1.jpg",
      description: "Tempora officiis odit laborum iure.",
      author: "Alice Johnson",
    },
    {
      title: "Optio facilis tempora",
      category: "food",
      date: "2022-12-22",
      image: "/img/blog/blog-1.jpg",
      description: "Tempora officiis odit laborum iure.",
      author: "John Doe",
    },
    {
      title: "Laboriosam temporibus dolores",
      category: "food",
      date: "2023-04-03",
      image: "/img/blog/blog-1.jpg",
      description: "Cumque aut perferendis distinctio odit.",
      author: "Laura Wilson",
    },
  ],
  tech: [
    {
      title: "Dignissimos voluptatem dolores",
      category: "tech",
      date: "2024-02-12",
      image: "/img/blog/blog-1.jpg",
      description: "Ut autem aut autem non a consequatur.",
      author: "Laura Wilson",
    },
    {
      title: "Optio reiciendis et",
      category: "tech",
      date: "2025-05-22",
      image: "/img/blog/blog-1.jpg",
      description: "Eum facilis dolores ratione reiciendis.",
      author: "Laura Wilson",
    },
    {
      title: "Fuga consequuntur ratione",
      category: "tech",
      date: "2024-12-16",
      image: "/img/blog/blog-1.jpg",
      description: "Aliquid rerum mollitia qui a consectetur eum sed.",
      author: "Mike Brown",
    },
    {
      title: "Dolorum necessitatibus et",
      category: "tech",
      date: "2022-12-04",
      image: "/img/blog/blog-1.jpg",
      description: "Fugit voluptas iusto maiores temporibus autem numquam.",
      author: "Jane Smith",
    },
    {
      title: "Dolorum facilis commodi",
      category: "tech",
      date: "2023-07-25",
      image: "/img/blog/blog-1.jpg",
      description: "Quam nihil molestiae suscipit illum.",
      author: "Jane Smith",
    },
    {
      title: "Dignissimos necessitatibus nisi",
      category: "tech",
      date: "2024-07-13",
      image: "/img/blog/blog-1.jpg",
      description: "Tempora officiis odit laborum iure.",
      author: "Laura Wilson",
    },
    {
      title: "Praesentium temporibus et",
      category: "tech",
      date: "2023-11-26",
      image: "/img/blog/blog-1.jpg",
      description: "Cumque aut perferendis distinctio odit.",
      author: "Jane Smith",
    },
    {
      title: "Aliquam explicabo nisi",
      category: "tech",
      date: "2023-08-18",
      image: "/img/blog/blog-1.jpg",
      description: "Aliquid rerum mollitia qui a consectetur eum sed.",
      author: "Alice Johnson",
    },
    {
      title: "Optio suscipit ratione",
      category: "tech",
      date: "2023-03-31",
      image: "/img/blog/blog-1.jpg",
      description: "Quam nihil molestiae suscipit illum.",
      author: "Mike Brown",
    },
    {
      title: "Optio necessitatibus repellat",
      category: "tech",
      date: "2024-12-10",
      image: "/img/blog/blog-1.jpg",
      description: "Cumque aut perferendis distinctio odit.",
      author: "Alice Johnson",
    },
  ],
  design: [
    {
      title: "Qui facilis ratione",
      category: "design",
      date: "2024-09-26",
      image: "/img/blog/blog-1.jpg",
      description: "Quam nihil molestiae suscipit illum.",
      author: "Mike Brown",
    },
    {
      title: "Laboriosam suscipit qui",
      category: "design",
      date: "2024-01-08",
      image: "/img/blog/blog-1.jpg",
      description: "Quam nihil molestiae suscipit illum.",
      author: "John Doe",
    },
    {
      title: "Praesentium suscipit qui",
      category: "design",
      date: "2023-02-08",
      image: "/img/blog/blog-1.jpg",
      description: "Tempora officiis odit laborum iure.",
      author: "Jane Smith",
    },
    {
      title: "Laboriosam reiciendis nisi",
      category: "design",
      date: "2023-02-20",
      image: "/img/blog/blog-1.jpg",
      description: "Voluptas dignissimos cumque fuga qui quibusdam quia.",
      author: "Laura Wilson",
    },
    {
      title: "Fuga suscipit repellat",
      category: "design",
      date: "2023-08-26",
      image: "/img/blog/blog-1.jpg",
      description: "Ut autem aut autem non a consequatur.",
      author: "Mike Brown",
    },
    {
      title: "Optio voluptatem maxime",
      category: "design",
      date: "2023-12-08",
      image: "/img/blog/blog-1.jpg",
      description:
        "Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium.",
      author: "Alice Johnson",
    },
    {
      title: "Praesentium cumque itaque",
      category: "design",
      date: "2024-02-17",
      image: "/img/blog/blog-1.jpg",
      description:
        "Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.",
      author: "Laura Wilson",
    },
    {
      title: "Qui cumque maxime",
      category: "design",
      date: "2023-02-12",
      image: "/img/blog/blog-1.jpg",
      description: "Ut autem aut autem non a consequatur.",
      author: "Mike Brown",
    },
    {
      title: "Voluptas reiciendis itaque",
      category: "design",
      date: "2023-11-01",
      image: "/img/blog/blog-1.jpg",
      description: "Eum facilis dolores ratione reiciendis.",
      author: "Mike Brown",
    },
    {
      title: "Fuga explicabo dolores",
      category: "design",
      date: "2022-10-05",
      image: "/img/blog/blog-1.jpg",
      description: "Ut autem aut autem non a consequatur.",
      author: "John Doe",
    },
  ],
  travel: [
    {
      title: "Quibusdam consequuntur et",
      category: "travel",
      date: "2024-12-23",
      image: "/img/blog/blog-1.jpg",
      description: "Eum facilis dolores ratione reiciendis.",
      author: "Alice Johnson",
    },
    {
      title: "Fuga cumque maxime",
      category: "travel",
      date: "2024-12-24",
      image: "/img/blog/blog-1.jpg",
      description: "Ut autem aut autem non a consequatur.",
      author: "John Doe",
    },
    {
      title: "Optio facilis commodi",
      category: "travel",
      date: "2023-01-14",
      image: "/img/blog/blog-1.jpg",
      description:
        "Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.",
      author: "John Doe",
    },
    {
      title: "Dolorum cumque et",
      category: "travel",
      date: "2023-02-16",
      image: "/img/blog/blog-1.jpg",
      description:
        "Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium.",
      author: "Laura Wilson",
    },
    {
      title: "Quibusdam necessitatibus repellat",
      category: "travel",
      date: "2023-07-13",
      image: "/img/blog/blog-1.jpg",
      description: "Cumque aut perferendis distinctio odit.",
      author: "Mike Brown",
    },
    {
      title: "Praesentium facilis itaque",
      category: "travel",
      date: "2025-06-12",
      image: "/img/blog/blog-1.jpg",
      description:
        "Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium.",
      author: "Laura Wilson",
    },
    {
      title: "Quibusdam distinctio nisi",
      category: "travel",
      date: "2024-02-28",
      image: "/img/blog/blog-1.jpg",
      description: "Tempora officiis odit laborum iure.",
      author: "Jane Smith",
    },
    {
      title: "Voluptas necessitatibus itaque",
      category: "travel",
      date: "2022-12-06",
      image: "/img/blog/blog-1.jpg",
      description: "Ut autem aut autem non a consequatur.",
      author: "Laura Wilson",
    },
    {
      title: "Quibusdam cumque itaque",
      category: "travel",
      date: "2023-04-25",
      image: "/img/blog/blog-1.jpg",
      description: "Cumque aut perferendis distinctio odit.",
      author: "Laura Wilson",
    },
    {
      title: "Aliquam voluptatem nisi",
      category: "travel",
      date: "2025-06-12",
      image: "/img/blog/blog-1.jpg",
      description: "Cumque aut perferendis distinctio odit.",
      author: "John Doe",
    },
  ],
};
