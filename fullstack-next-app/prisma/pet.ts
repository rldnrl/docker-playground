import prisma from "./prisma";

export const getAllPets = async () => {
  const pets = await prisma.pet.findMany({});
  return pets;
};

export const getPet = async (id: string) => {
  const pet = await prisma.pet.findUnique({
    where: {
      id,
    },
  });

  return pet;
};
