# 2goodreads

book listing and reviews 

## Tech Stack

uses `prisma`, `mysql`, `express` on the server and `react`, `react-router`, `redux-toolkit`, `sass` on client

## API Specs

### Get All Books

- **Endpoint:** `GET /books`
- **Description:** Get a list of all books with average ratings.
- **Response:**
  - **Status:** 200 OK
  - **Body:** An array of book objects, each containing book details and average rating.

### Get Book by ID

- **Endpoint:** `GET /books/:id`
- **Description:** Get detailed information about a specific book including its average rating.
- **Parameters:**
  - `id` (number): The ID of the book to retrieve.
- **Response:**
  - **Status:** 200 OK
  - **Body:** Book details including average rating.

### Create Rating for a Book

- **Endpoint:** `POST /ratings`
- **Description:** Create a new rating and review for a book.
- **Request Body:**
  - `review` (string): The review text.
  - `rating` (number): The rating value (1-5).
  - `bookId` (number): The ID of the book being rated.
- **Response:**
  - **Status:** 201 Created
  - **Body:** The rating object.

### DB schema

```
Table Rating {
  id        UUID        [primary key]
  createdAt DateTime   [default: `now()`, not null]
  updatedAt DateTime   [not null]
  review    Text
  rating    Int
  bookId    UUID
  foreign key (bookId) references Book(id)
}

Table Book {
  id          UUID        [primary key]
  createdAt   DateTime   [default: `now()`, not null]
  updatedAt   DateTime   [not null]
  name        Text
  author      Text
  description Text
  price       Int
  img         Text?
}

Ref: Rating.bookId > Book.id
```



## Getting Started

Clone the repo

```
git clone https://github.com/33j33/2goodreads.git
```

### Server

1. `cd ./server`
2. `npm install`
3. create a mysql database. usage of any other other can be configured in schema.prisma.
4. create an `.env` file at root of server directory.
5. specify db url in MYSQL_URL in format mysql://${USER}:${PASSWORD}@${HOST}:${PORT}/${DB}
6. specify dev server port, eg PORT=3000
7. run `npx prisma generate` to create prisma client for you, using the schema.
8. run `npx prisma migrate dev` to run migrations.
9. run `npx prisma db seed` to seed db using books defined in `prisma/seed.ts`
10. run `npx run dev` to start dev server

### Client

1. `cd ./client`
2. `npm install`
3. create an `.env` file and specify backend server url in REACT_APP_API_URL
4. run `npm run start`
