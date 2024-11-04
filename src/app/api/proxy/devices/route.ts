import axios from "axios";
import { createHmac, randomUUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const data = await request.json();
    const token = data.token;
    const client_secret = data.client_secret;
    const t = new Date().getTime()
    const nonce = randomUUID();
    const sign = createHmac('sha256', client_secret).update(Buffer.from(token+t+nonce, 'utf-8')).digest().toString('base64');

    const response = await axios.get('https://api.switch-bot.com/v1.1/devices', {
        headers: {
            'Authorization': token,
            'sign': sign,
            't': t,
            'nonce': nonce,
        }
    })
    return NextResponse.json(response.data)
}