import { db } from "@/lib/db";
import { blogs } from "@/lib/db/schema";
import { nanoid } from "nanoid";
import { NextResponse } from "next/server";
import { eq, desc } from "drizzle-orm";

export async function GET() {
    try {
        const allBlogs = await db.query.blogs.findMany({
            where: eq(blogs.published, true),
            orderBy: [desc(blogs.createdAt)],
        });
        const response = NextResponse.json(allBlogs);
        response.headers.set('Access-Control-Allow-Origin', '*');
        return response;
    } catch (_error) {

        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const { title, slug, content, image } = data;

        if (!title || !slug || !content) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        await db.insert(blogs).values({
            id: nanoid(),
            title,
            slug,
            content,
            image: image || null,
            published: true,
        });

        return NextResponse.json({ success: true });
    } catch (_error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
