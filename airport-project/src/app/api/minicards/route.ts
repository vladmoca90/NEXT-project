import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { allMinicards } from "../../../../lib/minicards/allMinicards";

export async function GET(request: NextRequest) {
    return NextResponse.json(
        {
            body: allMinicards,
            path: request.nextUrl.pathname,
            query: request.nextUrl.search,
            cookies: request.cookies.getAll(),
        },
        {
            status: 200,
            headers: {
                "Access-Control-Allow-Private-Network": "true",
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Allow-Origin": "https://airport-next-new.vercel.app",
                "Access-Control-Allow-Methods": "GET,DELETE,PATCH,POST,PUT",
                "Access-Control-Allow-Headers": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
            }
        },
    );
}

// http://localhost:3000/api/minicards