export interface InfoPay {
  nroDocumento: string;
  nroFactura?: string;
  serviceId: number;
  nroCta: string;
  nameCta: string;
  cvc: string;
  debtId?: string;
  amount: number;
}
