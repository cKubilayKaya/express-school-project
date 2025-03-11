import prisma from "../../lib/prisma.js";

export const updateUser = async (id, data, user) => {
  if (user?.role === "super_admin") {
    return await prisma.user.update({
      where: {
        id: id,
      },
      data: data,
    });
  } else {
    if (user?.userId !== id) {
      throw { success: false, message: "You do not have permission to modify this data." };
    } else {
      return await prisma.user.update({
        where: {
          id: id,
        },
        data: data,
      });
    }
  }
};
