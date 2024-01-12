import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { allFaqs } from "../../../../lib/help-faqs/allFaqs";

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

// https://airport-next-new.vercel.app/api/help-faqs