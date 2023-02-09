# 2goodreads

book listing and reviews

demo-url - https://2goooodreads.netlify.app/

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
