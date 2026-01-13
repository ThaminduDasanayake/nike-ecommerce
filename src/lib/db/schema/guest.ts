import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const guest = pgTable('guest', {
  id: uuid('id').primaryKey().defaultRandom(),
  sessionToken: text('session_token').unique().notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  expiresAt: timestamp('expires_at').notNull(),
});
