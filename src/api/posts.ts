import { PostProps } from "../interfaces/IPostProps";

const posts = [
  {
    id: "c346ced1-7f35-471f-b0c5-c6a3e9a2eeae",
    author: {
      avatarUrl: "https://github.com/rodrigordgfs.png",
      name: "Rodrigo V. Rodrigues",
      role: "Desenvolvedor Pleno",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Esse é o primeiro projeto em React com Typescript do bootcam Ignite da Rocketseat.",
      },
      {
        type: "paragraph",
        content:
          "Bora pro proximo projeto entao!!! 🚀",
      },
      { type: "link", content: "https://ignite-feed-abf3.vercel.app/" },
    ],
    tags: ["novoprojeto", "ignite", "rocketseat", "react"],
    publishedAt: new Date("2022-11-28 22:59:25"),
  },
  {
    id: "8b5da569-7d1d-42d0-a048-db4431f47575",
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Mayk Brito",
      role: "Educator @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz",
      },
      {
        type: "paragraph",
        content:
          "no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "https://jane.design/doctorcare" },
    ],
    tags: ["novoprojeto", "nlw", "rocketseat"],
    publishedAt: new Date("2022-11-10 16:45:25"),
  },
] as PostProps[];

export default posts;
