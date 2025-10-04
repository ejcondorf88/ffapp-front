export interface FormOngData {
  meta2024: string;
  asistencias: number;
  personasCapacitadas: number;
  horasCapacitacion: number;
  avanceCocinas: number;
  mujeresNinas: number;
}

export interface FormOngResponse {
  success: boolean;
  message: string;
  data?: FormOngData;
  id?: string;
}

export interface ApiError {
  message: string;
  status?: number;
  errors?: Record<string, string[]>;
}