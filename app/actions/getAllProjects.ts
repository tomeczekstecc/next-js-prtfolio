'use server'
import * as process from "node:process";

const getAllProjects = async () => {
    const data = await fetch(process.env.NEXT_PUBLIC_STRAPI_URL + '/projects')
    return await data.json()
}
export default getAllProjects
