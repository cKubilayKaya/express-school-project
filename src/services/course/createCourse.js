import prisma from "../../lib/prisma.js";
import { createSlug } from "../../lib/createSlug.js";
import { isCourseExist } from "../../lib/isCourseExist.js";

export const createCourse = async (data, userId) => {
  let newSlug;
  const { slug, name } = data;

  if (slug && slug !== "" && slug !== undefined && slug !== null) {
    newSlug = await createSlug(slug);
  } else {
    newSlug = await createSlug(name);
  }

  await isCourseExist(newSlug);

  data.slug = newSlug;

  const userExists = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!userExists) {
    throw {
      status: 400,
      message: "Invalid user ID: User does not exist.",
    };
  }

  const courseData = {
    ...data,
    createdById: userId,
  };

  if (userExists.role === "teacher") {
    courseData.teachers = {
      connect: { id: userId },
    };
  }

  const createdCourse = await prisma.course.create({
    data: courseData,
    include: {
      teachers: true,
      students: true,
    },
  });

  return createdCourse;
};
