import { NextResponse } from 'next/server'

export function middleware(request) {
    const path = request.nextUrl.pathname
    const isPublicPath = path === "/Login" || path === "/SignUp"
    const getToken = request.cookies.get("Token")?.value || ""

    if (isPublicPath && getToken) {
        return NextResponse.redirect(
            new URL("/Profile", request.nextUrl)
        )
    }

    if (!isPublicPath && !getToken) {
        return NextResponse.redirect(
            new URL("/Login", request.nextUrl)
        )
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        "/",
        "/Login",
        "/SignUp",
        "/Profile",
    ]
}