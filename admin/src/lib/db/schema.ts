import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

// Users table for admin authentication
export const users = sqliteTable("users", {
    id: text("id").primaryKey(),
    username: text("username").notNull().unique(),
    password: text("password").notNull(),
    createdAt: integer("created_at", { mode: "timestamp" }).notNull().default(sql`(unixepoch())`),
});

// Blogs table
export const blogs = sqliteTable("blogs", {
    id: text("id").primaryKey(),
    title: text("title").notNull(),
    slug: text("slug").notNull().unique(),
    content: text("content").notNull(), // Markdown or HTML content
    image: text("image"), // Cover image URL
    published: integer("published", { mode: "boolean" }).notNull().default(true),
    createdAt: integer("created_at", { mode: "timestamp" }).notNull().default(sql`(unixepoch())`),
    updatedAt: integer("updated_at", { mode: "timestamp" }).notNull().default(sql`(unixepoch())`),
});

// Form Submissions (Fərdi Təklif Al)
export const submissions = sqliteTable("submissions", {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    phone: text("phone").notNull(),
    service: text("service").notNull(),
    location: text("location"),
    date: text("date"),
    status: text("status").notNull().default("new"), // new, contacted, completed
    createdAt: integer("created_at", { mode: "timestamp" }).notNull().default(sql`(unixepoch())`),
});
