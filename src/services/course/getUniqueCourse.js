import prisma from "../../lib/prisma.js";

// UUID formatını kontrol etmek için regex
const isUUID = (value) => {
  const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
  return uuidRegex.test(value);
};

export const getUniqueCourse = async (courseIdOrSlug) => {
  if (isUUID(courseIdOrSlug)) {
    // Eğer parametre UUID ise, ID ile arama yapalım
    return await prisma.course.findUnique({
      where: {
        id: courseIdOrSlug, // UUID ID ile sorgulama
      },
      include: {
        teachers: true,
        students: true,
        createdBy: {
          select: {
            fullName: true,
            userName: true,
            bio: true,
          },
        },
      },
    });
  } else {
    // Eğer UUID değilse, slug ile arama yapalım
    return await prisma.course.findUnique({
      where: {
        slug: courseIdOrSlug, // Slug ile sorgulama
      },
      include: {
        teachers: true,
        students: true,
        createdBy: {
          select: {
            fullName: true,
            userName: true,
            bio: true,
          },
        },
      },
    });
  }
};
