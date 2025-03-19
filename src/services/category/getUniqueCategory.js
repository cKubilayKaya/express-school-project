import prisma from "../../lib/prisma.js";

export const getUniqueCategory = async (id, page, limit) => {
  const skip = (page - 1) * limit;

  const totalCourses = await prisma.course.count({
    where: {
      categoryId: id,
    },
  });

  const category = await prisma.category.findUnique({
    where: {
      id: id,
    },
    include: {
      courses: {
        skip: skip,
        take: parseInt(limit),
        include: {
          teachers: true,
          students: true,
          createdBy: {
            select: {
              id: true,
              userName: true,
              fullName: true,
            },
          },
        },
        orderBy: [{ updatedAt: "desc" }, { createdAt: "asc" }],
      },
    },
  });

  return {
    ...category,
    totalCourses,
  };
};
