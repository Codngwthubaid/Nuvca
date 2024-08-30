import { NextResponse } from 'next/server'

export function middleware(request) {
    const path = request.nextUrl.pathname
    const isPublicPath = path === "/Login" || path === "/SignUp"
    const Token = request.cookies.get("Token")?.value || null;
    console.log("Token:", Token);


    if (isPublicPath && Token) {
        console.log("Redirecting to Profile");
        return NextResponse.redirect(
            new URL("/Profile", request.nextUrl)
        )
    }
    if (!isPublicPath && !Token) {
        console.log("Redirecting to Login")
        return NextResponse.redirect(
            new URL("/Login", request.nextUrl)
        )
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher:
        [
            "/Login",
            "/SignUp",
            "/Profile",
            "/"
        ]
}