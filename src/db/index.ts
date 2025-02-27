import * as schema from './schema';
import {createClient} from '@libsql/client';
import {drizzle} from 'drizzle-orm/libsql';

const client = createClient({
    url: process.env.NEXT_TURSO_DB_URL!,
    authToken:process.env.NEXT_TURSO_DB_AUTH_TOKEN!
});

export const db = drizzle(client,{schema});