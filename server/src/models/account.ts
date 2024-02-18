import {z} from 'zod'

export const CreateAccountSchema = z.object({
    id: z.string().optional(),
    email: z.string().email(),
    password: z.string().min(8).regex(/^(?=.*[A-Z])(?=.*\d).+$/)
})