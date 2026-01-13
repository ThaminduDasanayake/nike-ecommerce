import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from '../db';
import * as schema from '../db/schema';
// Note: schema export might need adjustment if I didn't export it as 'schema' in db/index.ts
// Checking db/index.ts... I exported `export const db = drizzle(sql, { schema });`
// The adapter expects the Drizzle instance or db and schema separately depending on version.
// Standard usage: drizzleAdapter(db, { provider: "pg", ... })

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema,
  }),
  emailAndPassword: {
    enabled: true,
  },
});
