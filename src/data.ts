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

export const categoryPostItems=[
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
                  }[]
