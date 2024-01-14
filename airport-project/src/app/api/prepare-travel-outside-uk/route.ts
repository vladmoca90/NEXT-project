import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { allOutsidesUK } from "../../../../lib/prepareOutsideUK/allOutsidesUK";

export async function GET(request: NextRequest) {
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

// https://airport-next-new.vercel.app/api/prepare-outside-uk