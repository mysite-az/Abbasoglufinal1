import { db } from "@/lib/db";
import { submissions } from "@/lib/db/schema";
import { nanoid } from "nanoid";
import { NextResponse } from "next/server";

export async function OPTIONS() {
    const response = new NextResponse(null, { status: 204 });
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
    return response;
}

export async function POST(req: Request) {

    try {
        const data = await req.json();
        const { name, email, phone, service, location, date } = data;

        if (!name || !email || !phone || !service) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        await db.insert(submissions).values({
            id: nanoid(),
            name,
            email,
            phone,
            service,
            location: location || null,
            date: date || null,
        });

        const response = NextResponse.json({ success: true });
        response.headers.set('Access-Control-Allow-Origin', '*');
        response.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
        response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

        return response;
    } catch (error: any) {

        console.error("Submission error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function GET() {
    try {
        const allSubmissions = await db.query.submissions.findMany({
            orderBy: (submissions, { desc }) => [desc(submissions.createdAt)],
        });
        return NextResponse.json(allSubmissions);
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
