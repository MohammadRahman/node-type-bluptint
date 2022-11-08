import { Static, Type } from "@sinclair/typebox";
import { envSchema } from "env-schema";

const schema = Type.Object({
    PORT: Type.Number({
        default: 3001
    }),
    ADMIN_DATABASE_URL: Type.String({
        default: process.env.ADMIN_DATABASE_URL
    }),
    DATABASE_USER: Type.String({
        default: process.env.DATABASE_USER
    }),
    DATABASE_PASSWORD: Type.String({
        default: process.env.DATABASE_PASSWORD
    }),
    CUSTOMER_DATABASE_URL: Type.String({
        default: process.env.CUSTOMER_DATABASE_URL
    }),
})

type Env = Static<typeof schema>


export const config = envSchema<Env>({
    schema,
    dotenv: true
})