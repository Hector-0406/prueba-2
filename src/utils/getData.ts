import { client, ResponseAPI } from "../api/client"

export const getPosts = async (): Promise<ResponseAPI[]> => {
    const { data } = await client.get<ResponseAPI[]>('')
    return data
}