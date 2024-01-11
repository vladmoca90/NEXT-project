import { FlightDetails } from "./flightDetails";

export interface Booking {
    surname: string;
    bookingCode: string;
    flightDetails: FlightDetails;
}