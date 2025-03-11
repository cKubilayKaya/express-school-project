import prisma from "../../lib/prisma.js";
import { createSlug } from "../../lib/createSlug.js";
import { isCourseExist } from "../../lib/isCourseExist.js";

export const createCourse = async (data) => {
  let newSlug;
  const { slug, name } = data;

  if (slug && slug !== "" && slug !== undefined && slug !== null) {
    newSlug = await createSlug(slug);
  } else {
    newSlug = await createSlug(name);
  }

  await isCourseExist(newSlug);

  data.slug = newSlug;

  return await prisma.course.create({
    data: data,
  });
};
