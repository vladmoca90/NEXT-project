import { BookingRepository } from "./bookingRepository";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    const data = await request.json();

    const bookingRepository = new BookingRepository();

    const flightDetails = bookingRepository.getBooking(data.surname, data.bookingCode);

    if (flightDetails === null) {
        return NextResponse.json({},
            {
                status: 404
            },
        );
    } else {
        return NextResponse.json(
            {
                body: flightDetails,
                path: request.nextUrl.pathname,
                query: request.nextUrl.search,
                cookies: request.cookies.getAll(),
            },
            {
                status: 200
            },
        );
    }
}

// https://airport-next-3ccx1ojiy-vladmoca90s-projects.vercel.app/api/bookings