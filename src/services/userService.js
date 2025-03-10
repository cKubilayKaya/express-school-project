import prisma from "../lib/prisma.js";

export const getUsers = async () => {
  return await prisma.user.findMany();
};

export const getUniqueUser = async (id) => {
  return await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
};

export const createUser = async (data) => {
  return await prisma.user.create({
    data: data,
  });
};

export const updateUser = async (id, data) => {
  return await prisma.user.update({
    where: {
      id: id,
    },
    data: data,
  });
};

export const deleteUser = async (id) => {
  return await prisma.user.delete({
    where: {
      id: id,
    },
  });
};
