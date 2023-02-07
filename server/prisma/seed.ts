import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const bookData: Prisma.BookCreateInput[] = [
  {
    name: "Dune",
    author: "Frank Herbert",
    description:
      "Set in the distant future amidst a sprawling feudal interstellar empire where noble houses, in control of individual planets, owe allegiance to the Padishah Emperor, Dune tells the story of young Paul Atreides",
    price: 250,
    ratings: {
      create: [
        {
          review: "Fantastic scifi classic",
          rating: 4,
        },
        {
          review: "Epic space adventure",
          rating: 5,
        },
      ],
    },
  },
  {
    name: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    description:
      "The story follows the misadventures of an unwitting human and his alien friend as they travel through space. The narrative is interspersed with comedic and surreal elements and satirical commentary on human life and society.",
    price: 2000,
    ratings: {
      create: [
        {
          review: "Hilarious and witty",
          rating: 4,
        },
        {
          review: "Out of this world comedy",
          rating: 5,
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

// [
//   {
//     name: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     description:
//       "A novel about the decadence and excess of the Roaring Twenties",
//     price: 300,
//     ratings: {
//       create: [
//         {
//           review: "Fantastic book, I loved it",
//           rating: 5,
//         },
//         {
//           review: "Not my cup of tea",
//           rating: 2,
//         },
//       ],
//     },
//   },
//   {
//     name: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     description: "A novel about racism and injustice in a small Southern town",
//     price: 200,
//     ratings: {
//       create: [
//         {
//           review: "Powerful and moving",
//           rating: 5,
//         },
//         {
//           review: "Not very interesting",
//           rating: 2,
//         },
//       ],
//     },
//   },
// ];
