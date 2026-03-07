import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSession } from "@/lib/auth";

export async function middleware(request: NextRequest) {
    const session = await getSession();

    // If trying to access /login while already logged in
    if (session && request.nextUrl.pathname.startsWith("/login")) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    // If the user is not logged in and trying to access protected routes
    if (!session && !request.nextUrl.pathname.startsWith("/login")) {
        // Allow public access to GET blogs
        if (request.nextUrl.pathname.startsWith("/api/blogs") && request.method === "GET") {
            return NextResponse.next();
        }

        // Allow public access to login API
        if (request.nextUrl.pathname === "/api/login" && request.method === "POST") {
            return NextResponse.next();
        }

        // Allow public access to POST submissions
        if (request.nextUrl.pathname === "/api/submissions" && request.method === "POST") {
            return NextResponse.next();
        }


        if (request.nextUrl.pathname.startsWith("/api")) {

            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
