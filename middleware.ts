import { NextRequest, NextResponse } from "next/server";

import { authConfig } from "./auth.config";
import NextAuth from "next-auth";
import { PUBLIC_ROUTES, LOGIN, SIGNIN, ROOT, PROTECTED_SUB_ROUTES } from "@/lib/routes";

const { auth } = NextAuth(authConfig);

export async function middleware(request: NextRequest) {
	const { nextUrl } = request;
	const session = await auth();

	const isAuthenticated = !!session?.user;
	console.log(isAuthenticated, nextUrl.pathname);

	const isPublicRoute =
		(PUBLIC_ROUTES.find((route) => nextUrl.pathname.startsWith(route)) ||
			nextUrl.pathname === ROOT) &&
		!PROTECTED_SUB_ROUTES.find((route) => nextUrl.pathname.includes(route));

	console.log(isPublicRoute);

	if (!isAuthenticated && !isPublicRoute) return NextResponse.redirect(new URL(LOGIN, nextUrl));
	if (isAuthenticated && (nextUrl.pathname === LOGIN || nextUrl.pathname === SIGNIN))
		return NextResponse.redirect(new URL(ROOT, request.nextUrl));
}

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
