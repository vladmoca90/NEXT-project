import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { allDestinations } from "../../../../lib/guide-destinations/allDestinations";

export function GET(request: NextRequest) {
    return NextResponse.json(
        {
            body: allDestinations,
            path: request.nextUrl.pathname,
            query: request.nextUrl.search,
            cookies: request.cookies.getAll(),
        },
        {
            status: 200
        },
    );
}

// http://localhost:3000/api/guide-destinations