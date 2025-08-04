import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const wellnessTips = pgTable("wellness_tips", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  category: text("category").notNull(),
  tip: text("tip").notNull(),
  benefits: text("benefits").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const products = pgTable("products", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description").notNull(),
  benefits: text("benefits").array().notNull(),
  ingredients: text("ingredients").array().notNull(),
  price: integer("price"),
  imageUrl: text("image_url"),
});

export const insertWellnessTipSchema = createInsertSchema(wellnessTips).pick({
  category: true,
  tip: true,
  benefits: true,
});

export const insertProductSchema = createInsertSchema(products).pick({
  name: true,
  description: true,
  benefits: true,
  ingredients: true,
  price: true,
  imageUrl: true,
});

export type InsertWellnessTip = z.infer<typeof insertWellnessTipSchema>;
export type WellnessTip = typeof wellnessTips.$inferSelect;
export type InsertProduct = z.infer<typeof insertProductSchema>;
export type Product = typeof products.$inferSelect;

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
