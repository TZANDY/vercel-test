import { cwd } from 'node:process';
import type { Config } from 'drizzle-kit';
import { loadEnvConfig } from '@next/env';

loadEnvConfig(cwd());

export default {
    dialect:'turso',
    schema: './src/db/schema.ts',
    out: './src/db/migrations',
    dbCredentials:{
        url: process.env.NEXT_TURSO_DB_URL!,
        authToken: process.env.NEXT_TURSO_DB_AUTH_TOKEN!
    },
} satisfies Config;