export interface PhaseDTO {
    id?: number;
    nom: string;
    assignedTo: string;
    category: string;
    progression: number;
    dureeJours: number;
    dateDebut: string;  // Format ISO
    dateFin: string;    // Format ISO
  }
  