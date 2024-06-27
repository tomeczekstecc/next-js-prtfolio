'use server'
import * as process from "node:process";

const getAllProjects = async () => {
    const data = await fetch(process.env.NEXT_PUBLIC_STRAPI_URL + '/api/projects?populate=*', {
        next: {
            revalidate: 60
        }
    })
    const projects = await data.json()
    return projects.data
}
export default getAllProjects
