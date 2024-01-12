import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { allHeathrowMaps } from "../../../../lib/maps-getting-to-terminals/allHeathrowMaps";

export async function GET(request: NextRequest) {
    return NextResponse.json(
        {
            body: allHeathrowMaps,
            path: request.nextUrl.pathname,
            query: request.nextUrl.search,
            cookies: request.cookies.getAll(),
        },
        {
            status: 200
        },
    );
}

// http://localhost:3000/api/maps-getting-to-terminals