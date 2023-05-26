import { Static, Type } from "@sinclair/typebox";
import { envSchema } from "env-schema";

const schema = Type.Object({
    PORT: Type.Number({
        default: 3001
    }),
    DB_URL: Type.String()
})

type Env = Static<typeof schema>


export const config = envSchema<Env>({
    schema,
    dotenv: true
})