import { allBookings } from "../../../../lib/booking/allBookings";
import { Booking } from "../../../../lib/booking/booking";

export class BookingRepository {
    getBooking(surname: string, bookingCode: string): Booking | null {
        const booking = allBookings.find((booking) => booking.surname === surname && booking.bookingCode === bookingCode);

        if (!booking) {
            return null;
        } else {
            return booking;
        }
    }
}