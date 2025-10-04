import type { FormOngData, FormOngResponse } from '../types/Data';
export class FormsOngAdapter {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async submitForm(data: FormOngData): Promise<FormOngResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/metas-ong`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Aquí puedes agregar headers adicionales como Authorization
          // 'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Error al enviar el formulario');
      }

      return await response.json();
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Error desconocido al enviar el formulario');
    }
  }
}