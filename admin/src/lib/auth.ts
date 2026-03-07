import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const secret = new TextEncoder().encode(process.env.JWT_SECRET || "fallback-secret");

export async function login(payload: any) {
    const token = await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("24h")
        .sign(secret);

    (await cookies()).set("admin_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
    });
}

export async function logout() {
    (await cookies()).set("admin_token", "", { expires: new Date(0) });
}

export async function getSession() {
    const token = (await cookies()).get("admin_token")?.value;
    if (!token) return null;

    try {
        const { payload } = await jwtVerify(token, secret);
        return payload;
    } catch (err) {
        return null;
    }
}

export async function updateSession(request: NextRequest) {
    const token = request.cookies.get("admin_token")?.value;
    if (!token) return;

    const res = NextResponse.next();
    // Refresh expiration if needed
    return res;
}
