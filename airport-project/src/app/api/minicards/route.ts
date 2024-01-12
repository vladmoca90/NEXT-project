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
            headers: { "Content-Type": "application/json" }
        },
        {
            status: 200,
        },
    );
}

// http://localhost:3000/api/minicards