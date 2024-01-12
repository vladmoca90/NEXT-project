import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { allGuides } from "../../../../lib/guide-cards/allGuides";

export async function GET(request: NextRequest) {
    return NextResponse.json(
        {
            body: allGuides,
            path: request.nextUrl.pathname,
            query: request.nextUrl.search,
            cookies: request.cookies.getAll(),
        },
        {
            status: 200
        },
    );
}

// https://airport-next-new.vercel.app/api/guide-cards