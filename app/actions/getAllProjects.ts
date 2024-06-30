'use server'
import * as process from "node:process";

type Image = {
    data: {
        attributes: {
            url: string
        }
    }
}
export type Project = {
    attributes: {
        name: string
        description: string
        image: Image
        icon: string
        repo: string
        link: string
        techs: string,
        sort: number
        hiderepo?: string
    }
}

const getAllProjects = async () => {
    const data = await fetch(process.env.NEXT_PUBLIC_STRAPI_URL + '/api/projects?populate=*', {
        next: {
            revalidate: 60
        }
    })
    const projects = await data.json()
    return projects.data.sort((a: Project, b: Project) => a.attributes.sort - b.attributes.sort)
}
export default getAllProjects
