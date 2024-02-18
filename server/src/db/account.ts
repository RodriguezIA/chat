import { prismaClient } from "../../prisma/client";
import { CreateAccountSchema } from '../models/account'
import { z } from "zod";

export const create = async(data: z.infer<typeof CreateAccountSchema>) => {
    const query = await prismaClient.account.create({
        data: {
            email: data.email,
            password: data.password
        }
    })

    return query
}