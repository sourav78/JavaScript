```
npm install
npm run dev
```

```
npm run deploy
```

- cre D1 Database
  ```
  bunx wrangler d1 create DB_NAME

  //Ex
  bunx wrangler d1 create sampleflare-d1
  ```
  Then copy the database id and paste it in the `wrangler.toml` file.

- Miration to local db
  6. Apply migrations to local database
  ```
  bunx wrangler d1 execute <DB_NAME> --local --file=./drizzle/migrations/<migration file name here>
  bunx wrangler d1 execute sampleflare-d1 --local --file=./drizzle/migrations/0000_harsh_mercury.sql
  ```

- Miration to Remote db
  6. Apply migrations to local database
  ```
  bunx wrangler d1 execute <DB_NAME> --remote --file=./drizzle/migrations/<migration file name here>
  bunx wrangler d1 execute sampleflare-d1 --remote --file=./drizzle/migrations/0000_harsh_mercury.sql
  ```

