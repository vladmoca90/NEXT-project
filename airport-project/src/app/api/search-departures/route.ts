import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { allDepartures } from "./../../../../lib/search-departures/allDepartures";

export function GET(request: NextRequest) {
    return NextResponse.json(
        {
            body: allDepartures,
            path: request.nextUrl.pathname,
            query: request.nextUrl.search,
            cookies: request.cookies.getAll(),
        },
        {
            status: 200
        },
    );
}

// http://localhost:3000/api/search-departures