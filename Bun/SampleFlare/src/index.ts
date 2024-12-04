import { drizzle } from 'drizzle-orm/d1'
import { Hono } from 'hono'
import { posts } from './db/schema'

export type Env = {
  MY_VAR: string,
  PRIVATE_KEY: string,
  DB: D1Database,
}

const app = new Hono<{Bindings: Env}>()

app.get('/', (c) => {
  return c.text(`Hello Hono sapp! ${c.env.MY_VAR} and ${c.env.PRIVATE_KEY}`)
})

app.get('/post', async (c) => {

  const db = drizzle(c.env.DB)

  const result = await db.select().from(posts).all()

  console.log(result)

  return c.json(result)
})

app.post('/post', async (c) => {
  const db = drizzle(c.env.DB);
  const { title, content } = await c.req.json();
  const result = await db
    .insert(posts)
    .values({ title, content })
    .returning();
  return c.json(result);
});

export default app
