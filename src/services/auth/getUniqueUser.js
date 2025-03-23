import prisma from "../../lib/prisma.js";

const isUUID = (value) => {
  const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
  return uuidRegex.test(value);
};

export const getUniqueUser = async (idOrUserName) => {
  if (isUUID(idOrUserName)) {
    return await prisma.user.findUnique({
      where: {
        id: idOrUserName,
      },
      include: {
        coursesCreated: {
          include: {
            createdBy: {
              select: {
                fullName: true,
                userName: true,
              },
            },
          },
        },
        taughtCourses: {
          include: {
            createdBy: {
              select: {
                fullName: true,
                userName: true,
              },
            },
          },
        },
      },
    });
  } else {
    return await prisma.user.findUnique({
      where: {
        userName: idOrUserName,
      },
      include: {
        coursesCreated: {
          include: {
            createdBy: {
              select: {
                fullName: true,
                userName: true,
              },
            },
          },
        },
        taughtCourses: {
          include: {
            createdBy: {
              select: {
                fullName: true,
                userName: true,
              },
            },
          },
        },
      },
    });
  }
};
