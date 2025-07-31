export const convertStaticImage = (path: string) =>{
    if(!path) return '/home-background.jpg'
    return (process.env.NEXT_PUBLIC_STATIC_URL ?? "") + path.split("/").pop()
}
export const convertStaticAvatar = (path: string) =>{
    if(!path) return 'https://www.rophim.me/images/avatars/pack6/03.jpg'
    return (process.env.NEXT_PUBLIC_STATIC_AVATAR ?? "") + path
}