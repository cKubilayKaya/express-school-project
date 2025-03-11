import prisma from "../../lib/prisma.js";
import { createSlug } from "../../lib/createSlug.js";
import { isCategoryExist } from "../../lib/isCategoryExist.js";

export const createCategory = async (data) => {
  let newSlug;
  const { slug, name } = data;

  if (slug && slug !== "" && slug !== undefined && slug !== null) {
    newSlug = await createSlug(slug);
  } else {
    newSlug = await createSlug(name);
  }

  await isCategoryExist(newSlug);

  data.slug = newSlug;

  return await prisma.category.create({
    data: data,
  });
};
