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

    const now = Math.floor(Date.now() / 1000); // Current time in seconds
    const init = now - 5; // Issued 5 seconds ago to avoid clock skew
    const expiry = now + 60 * 60; // Expires in 1 hour

    const token = Client.generateUserToken({ user_id: user.id, expiration: expiry, init_time: init });


    return token;

}
