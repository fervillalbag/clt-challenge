export interface Payment {
  id?: string;
  serviceId: number;
  userId: string;
  amount: number;
  nroFactura: string;
  created_at: string;
}
