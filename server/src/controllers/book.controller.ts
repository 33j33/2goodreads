import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getBooks = async (req: Request, res: Response) => {
  const { skip, take } = req.query;
  try {
    const books = await prisma.book.findMany({
      include: {
        ratings: {
          orderBy: {
            createdAt: "desc",
          },
        },
      },
      take: Number(take) || undefined,
      skip: Number(skip) || undefined,
      orderBy: {
        createdAt: "desc",
      },
    });
    const booksWithAverageRatings = books.map((book) => {
      const avgRating =
        book.ratings.reduce((sum, rating) => sum + rating.rating, 0) /
        book.ratings.length;
      return {
        ...book,
        avgRating,
      };
    });
    res.status(200).json(booksWithAverageRatings);
  } catch (error: any) {
    res.status(500).json({ msg: error?.message });
  }
};

export const getBookById = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const book = await prisma.book.findUnique({
      where: {
        id,
      },
      include: {
        ratings: {
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });
    if (!book) {
      throw new Error("Not found");
    }
    const avgRating =
      book.ratings.reduce((sum, rating) => sum + rating.rating, 0) /
      book.ratings.length;
    return res.status(200).json({ ...book, avgRating });
  } catch (error: any) {
    res.status(404).json({ msg: error.message });
  }
};
