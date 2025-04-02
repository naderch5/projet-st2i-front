export interface Facturation {
    id: number;
    montantTotal: number;
    montantPaye: number;
    dateEmission: string;
    dateEcheance: string;
    statut: string;
    projectId: number;
  }
  
  export interface FacturationDTO {
    montantTotal: number;
    montantPaye: number;
    dateEmission: string;
    dateEcheance: string;
    statut: string;
    projectId: number;
  }
  