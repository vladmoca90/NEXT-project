import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { allCheckIns } from "../../../../lib/prepareCheckIn/allCheckIns";

export async function GET(request: NextRequest) {
    return NextResponse.json(
        {
            body: allCheckIns,
            path: request.nextUrl.pathname,
            query: request.nextUrl.search,
            cookies: request.cookies.getAll(),
        },
        {
            status: 200
        },
    );
}

// https://airport-next-new.vercel.app/api/prepare-check-in