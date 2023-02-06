import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const bookData: Prisma.BookCreateInput[] = [
  {
    name: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description:
      "A novel about the decadence and excess of the Roaring Twenties",
    price: 300,
    ratings: {
      create: [
        {
          review: "Fantastic book, I loved it",
          rating: 5,
        },
        {
          review: "Not my cup of tea",
          rating: 2,
        },
      ],
    },
  },
  {
    name: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "A novel about racism and injustice in a small Southern town",
    price: 200,
    ratings: {
      create: [
        {
          review: "Powerful and moving",
          rating: 5,
        },
        {
          review: "Not very interesting",
          rating: 2,
        },
      ],
    },
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of bookData) {
    const book = await prisma.book.create({
      data: u,
    });
    console.log(`Created book with id: ${book.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
