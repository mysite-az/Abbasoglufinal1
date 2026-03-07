import { db } from "@/lib/db";
import { blogs } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import BlogForm from "@/components/BlogForm";
import { notFound } from "next/navigation";

export default async function EditBlogPage({ params }: { params: { id: string } }) {
    const { id } = await params;
    const blog = await db.query.blogs.findFirst({
        where: eq(blogs.id, id),
    });

    if (!blog) {
        notFound();
    }

    const initialData = {
        id: blog.id,
        title: blog.title,
        slug: blog.slug,
        content: blog.content,
        image: blog.image || undefined,
        published: blog.published,
    };

    return (
        <div className="space-y-6">
            <BlogForm initialData={initialData} />
        </div>
    );
}
