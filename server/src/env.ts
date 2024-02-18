import { z } from "zod"
import { config } from "dotenv"

import path from "node:path"

config({ path: path.resolve('./.env') })

const portScheme = z.number().int().min(0).max(2**16 - 1)
const envScheme = z.object({
    PORT: z.preprocess(arg => arg !== '' ? Number(arg) : undefined, portScheme)
})


const result = envScheme.safeParse(process.env)

if(!result.success){
    console.error('❌ Invalid environment variables:',
        JSON.stringify(result.error.format(), null, 4))
    process.exit(1)
}

export const env = result.data