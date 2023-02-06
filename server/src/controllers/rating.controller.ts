import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const createRating = async (req: Request, res: Response) => {
  const { review, rating, bookId } = req.body;
  try {
    const product = await prisma.rating.create({
      data: {
        review,
        rating,
        bookId,
      },
    });
    res.status(201).json(product);
  } catch (error: any) {
    res.status(400).json({ msg: error?.message });
  }
};
