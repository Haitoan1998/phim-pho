export const convertStaticImage = (path: string) =>{
    if(!path) return '/home-background.jpg'
    return (process.env.NEXT_PUBLIC_STATIC_URL ?? "") + path.split("/").pop()
}