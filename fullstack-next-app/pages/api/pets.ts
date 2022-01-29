// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getAllPets } from "prisma/pet";

export type Cat = {
  id: string;
  name: string;
  phone: string;
  email: string;
  image: string;
  favored: boolean;
  gender: "male" | "female";
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const cats: Array<Cat> = [
  {
    id: "1",
    name: "Ethan",
    phone: "222-2222-2222",
    email: "ethan@gmail.com",
    image: "/images/ethan.jpg",
    favored: false,
    gender: "male",
  },
  {
    id: "2",
    name: "sydney",
    phone: "111-1111-1111",
    email: "sydeny@gmail.com",
    image: "/images/sydney.jpg",
    favored: false,
    gender: "male",
  },
  {
    id: "3",
    name: "jerry",
    phone: "333-3333-3333",
    email: "jerry@gmail.com",
    image: "/images/jerry.jpg",
    favored: false,
    gender: "female",
  },
  {
    id: "4",
    name: "tom",
    phone: "123-4567-8910",
    email: "tom@gmail.com",
    image: "/images/tom.jpg",
    favored: false,
    gender: "male",
  },
  {
    id: "5",
    name: "zoe",
    phone: "098-7654-3210",
    email: "zoe@gmail.com",
    image: "/images/zoe.jpg",
    favored: false,
    gender: "female",
  },
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Cat[]>
) {
  // res.status(200).json(cats);
  try {
    const pets = await getAllPets();
    return res.status(200).json(pets);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return res.status(500).json({ ...error, message: error.message });
  }
}
