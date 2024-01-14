import { FlightStatus } from "./flightStatus";

export interface Arrival {
    time: string;
    airlineCode: string;
    airlineFin: string;
    airlineName: string;
    origin: string;
    terminal: string;
    belt: number;
    status: FlightStatus;
}
