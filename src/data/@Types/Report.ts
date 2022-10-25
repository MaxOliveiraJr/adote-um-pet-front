import { Pet } from "./Pets";

export interface Report {
  id: number;
  email: string;
  value: string;
  pet: Pet;
}
