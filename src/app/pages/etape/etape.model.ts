export interface PhaseDTO {
    nom: string;
    assignedTo: string;
    category: string;  // Category as a string
    progression: number;
    dureeJours: number;
    dateDebut: string;  // Using ISO date format
    dateFin: string;
  }
  
  export interface EtapeDTO {
    id?: number;
    nom: string;
    phases: PhaseDTO[];  // List of phases in this Etape
  }
  
  