import NextAuth from "next-auth";
import authConfig from "./auth.config";
// import { auth } from "@auth";

import {
    DEFAULT_LOGIN_REDIRECT,
    apiAuthPrefix,
    publicRoutes,
    authRoutes,

} from "@routes";
import { NextURL } from "next/dist/server/web/next-url";
import { NEXT_URL } from "next/dist/client/components/app-router-headers";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
    const { nexturl } = req;
    const isLoggedIn = !!req.auth
    const isApiAuthRoute = nexturl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(nexturl.pathname);
    const isAuthRoute = authRoutes.includes(nexturl.pathname);

    if(isApiAuthRoute){
        return null;
    }

    if(isAuthRoute){
        if(isLoggedIn){
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nexturl))
        }
        return null;

    }

    if(!isLoggedIn && !isPublicRoute){
        return Response.redirect(new URL("/auth/sign-in", nexturl))

    }
    return null;


});

export const config ={
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)" , "/" , "/(api|trpc)(.*)"],
}
