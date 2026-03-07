import { db } from "@/lib/db";
import { blogs } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { slug: string } }) {
    try {
        const { slug } = await params;
        const blog = await db.query.blogs.findFirst({
            where: eq(blogs.slug, slug),
        });

        if (!blog) {
            return NextResponse.json({ error: "Blog not found" }, { status: 404 });
        }

        const response = NextResponse.json(blog);
        response.headers.set('Access-Control-Allow-Origin', '*');
        return response;
    } catch (error) {

        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
