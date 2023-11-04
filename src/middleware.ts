import {authMiddleware} from "@clerk/nextjs";

export default authMiddleware({
    // "/" will be accessible to all users
    publicRoutes: [
        "/api/create_folder",
        "/api/get_folders",
    ]
});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(trpc)(.*)'],
};
