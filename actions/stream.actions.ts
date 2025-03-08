"use server"

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async () => {

    const user = await currentUser();

    if (!user) throw new Error("User not found");
    if (!apiKey) throw new Error("Stream API key not found");
    if (!apiSecret) throw new Error("Stream API secret not found");

    const Client = new StreamClient(apiKey, apiSecret);

    const expiry = Math.floor(Date.now() / 1000) + 60 * 60;
    const init = Math.floor(Date.now() / 1000) - 300;

    const token = Client.generateUserToken({ user_id: user.id, expiration: expiry, init_time: init });


    return token;

}
