import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { allFaqs } from "../../../../lib/helpFaqs/allFaqs";

export async function GET(request: NextRequest) {
    return NextResponse.json(
        {
            body: allFaqs,
            path: request.nextUrl.pathname,
            query: request.nextUrl.search,
            cookies: request.cookies.getAll(),
        },
        {
            status: 200
        },
    );
}

// https://airport-next-3ccx1ojiy-vladmoca90s-projects.vercel.app/api/help-faqs