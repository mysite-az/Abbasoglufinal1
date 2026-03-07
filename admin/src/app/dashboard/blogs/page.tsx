import { db } from "@/lib/db";
import { blogs } from "@/lib/db/schema";
import { desc } from "drizzle-orm";
import BlogList from "@/components/BlogList";

export const dynamic = "force-dynamic";

export default async function BlogsPage() {
    const allBlogs = await db.query.blogs.findMany({
        orderBy: [desc(blogs.createdAt)],
    });

    // Map to serializable format for client component
    const b = allBlogs.map((blog) => ({
        id: blog.id,
        title: blog.title,
        slug: blog.slug,
        published: blog.published,
        createdAt: blog.createdAt.toISOString(),
    }));

    return <BlogList initialBlogs={b} />;
}
