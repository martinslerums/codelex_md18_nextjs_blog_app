export { default } from "next-auth/middleware"

export const config = { matcher: ["/protected/blogs", "/protected/comments", "/protected/create", "/protected/edit"]}