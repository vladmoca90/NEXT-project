import { Booking } from "./booking";

export const allBookings: Booking[] = [
    {
        surname: "Mocanu",
        bookingCode: "ZXOAFB",
        flightDetails: {
            ticketNumber: 1760098733,
            time: "5:00",
            airlineNumber: "AH2055",
            airlineFin: "/images/tailfins/AH-tailfin.jpg",
            airlineName: "Air Algerie",
            destination: "Algiers",
            terminal: 4,
            seat: "35B",
        },
    },
    {
        surname: "Johnson",
        bookingCode: "AALXER",
        flightDetails: {
            ticketNumber: 9954476522,
            time: "5:25",
            airlineNumber: "CX150",
            airlineFin: "/images/tailfins/CX-tailfin.jpg",
            airlineName: "Cathay Pacific",
            destination: "Hong Kong",
            terminal: 2,
            seat: "7E",
        },
    },
    {
        surname: "McKinley",
        bookingCode: "ZAIGQS",
        flightDetails: {
            ticketNumber: 40009367651,
            time: "5:30",
            airlineNumber: "SQ490",
            airlineFin: "/images/tailfins/SQ-tailfin.jpg",
            airlineName: "Singapore Airlines",
            destination: "Singapore",
            terminal: 2,
            seat: "19F",
        },
    }
];