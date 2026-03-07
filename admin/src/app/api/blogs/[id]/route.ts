import { db } from "@/lib/db";
import { blogs } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = await params;
        const data = await req.json();

        await db.update(blogs).set({
            ...data,
            updatedAt: new Date(),
        }).where(eq(blogs.id, id));

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = await params;
        await db.delete(blogs).where(eq(blogs.id, id));
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
