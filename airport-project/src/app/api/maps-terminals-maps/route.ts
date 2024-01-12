import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { allTerminalMaps } from "../../../../lib/maps-terminals-maps/allTerminalMaps";

export async function GET(request: NextRequest) {
    return NextResponse.json(
        {
            body: allTerminalMaps,
            path: request.nextUrl.pathname,
            query: request.nextUrl.search,
            cookies: request.cookies.getAll(),
        },
        {
            status: 200
        },
    );
}

// http://localhost:3000/api/maps-terminals-maps