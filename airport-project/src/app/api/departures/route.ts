import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { allDepartures } from "../../../../lib/departures/allDepartures";

export async function GET(request: NextRequest) {
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

// https://airport-next-new.vercel.app/api/departures