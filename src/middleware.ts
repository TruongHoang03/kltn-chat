import { convexAuthNextjsMiddleware, createRouteMatcher, isAuthenticatedNextjs, nextjsMiddlewareRedirect } from "@convex-dev/auth/nextjs/server";
 
const isPublicPage = createRouteMatcher(["/auth"])

export default convexAuthNextjsMiddleware(async (request) => {
  if(!isPublicPage(request) && !isAuthenticatedNextjs()){
      return nextjsMiddlewareRedirect(request, "/auth");
  }
  // TODO: Redirect user away from "/auth" if authenticated
  if(!isPublicPage(request) && await isAuthenticatedNextjs()) {
    return nextjsMiddlewareRedirect(request, "/");
  }
});
 
export const config = {

  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};