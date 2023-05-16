const kvjs = require('@heyputer/kv.js');
import { Redis } from '@upstash/redis'
import path from 'path';
const dotenv = require("dotenv");
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })

const memkv = new kvjs();

let redis: Redis;

if (process.env.USE_REDIS) {
    redis = new Redis({
        url: process.env.REDIS_URL || 'redis://localhost:6379',
        token: process.env.REDIS_TOKEN || 'token',
    })
}

class kv {

    async get(key: string): Promise<string> {

        if (process.env.USE_REDIS) {
            return await redis.get(key) || "";
        } else {
            return await memkv.get(key) || "";
        }

    }

    async set(key: string, value: any): Promise<Boolean> {

        if (process.env.USE_REDIS) {
            const set = await redis.set(key, value);
            if (set == "OK") {
                return true;
            } else {
                return false;
            }
        } else {
            return await memkv.set(key, value);
        }

    }

}

export default new kv();