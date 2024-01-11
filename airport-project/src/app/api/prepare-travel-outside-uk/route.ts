import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { allOutsidesUK } from "./../../../../lib/prepare-outside-uk/allOutsidesUK";

export function GET(request: NextRequest) {
    return NextResponse.json(
        {
            body: allOutsidesUK,
            path: request.nextUrl.pathname,
            query: request.nextUrl.search,
            cookies: request.cookies.getAll(),
        },
        {
            status: 200
        },
    );
}

// http://localhost:3000/api/prepare-outside-uk