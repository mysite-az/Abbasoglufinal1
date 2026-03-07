import { db } from "@/lib/db";
import { blogs } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function OPTIONS() {
    const response = new NextResponse(null, { status: 204 });
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
    return response;
}

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
    } catch (_error) {

        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
