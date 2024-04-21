export interface AirlineOrFlight {
    airlineFin: string;
    flightType: "Arrival" | "Departure" | undefined;
    name: string;
    type: "Airline" | "Flight" | "No airline or flight";
}
