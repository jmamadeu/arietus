export type ConsultationsListProperties = {
  consultations: ConsultationProperties[];

  editFunction?: () => void;
  deleteFunction?: () => void;
}

export type ConsultationProperties = {
  id: string;
  title: string;
  date: string;
  status: "Em Andamento" |
  "Cancelado" |
  "Encerrado" |
  "Em Espera" ;

  scheduler: {
    name: string;
    phone: string;
  }
}
