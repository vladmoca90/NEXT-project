import { FlightStatus } from "./fligthStatus";

export interface Departure {
    time: string;
    airlineCode: string;
    airlineFin: string;
    airlineName: string;
    destination: string;
    terminal: string;
    checkIn: string;
    gate: number;
    status: FlightStatus;
}
