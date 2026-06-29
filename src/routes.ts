// This file contains the routes for the application. 
// The routes are divided into two categories: public and private. 
// Public routes are accessible to all users, 
//  while private routes require authentication.


export const publicRoutes: string[] = [


]

export const privateRoutes: string[] = [


]


// an array of routes that are accessible to public users , routes that start with 
// /api/auth , prefix that do not require authentication 


export const authRoutes: string[] = [
    "/auth/sign-in",


]


// an array of routes that are accessible to public users , and start with  

export const apiAuthPrefix: string = "/api/auth"

export const DEFAULT_LOGIN_REDIRECT = "/";


