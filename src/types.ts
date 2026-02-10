export interface TextStyleConfig {
  fontSize: number;
  color: string;
  isBold: boolean;
}

export interface LineStyleConfig {
  color: string;
  thickness: number;
  style: 'solid' | 'dashed';
}

export interface RxTemplateSettings {
  rxSymbol: TextStyleConfig;
  medications: TextStyleConfig;
  headerInfo: TextStyleConfig;
  headerLine: LineStyleConfig;
  topMargin: number;
  paperSize: 'A4' | 'A5';
}

export interface Medication {
  id: string;
  name: string;
  dose: string;
  form: string;
  frequency: string;
  notes: string;
  categoryId?: string;
}

export interface MedicationCategory {
  id: string;
  name: string;
}

export interface Prescription {
  id: string;
  date: string;
  patientName: string;
  patientAge: number;
  medications: Medication[];
  createdAt: number;
}

export interface AppSettings {
  language: 'ar' | 'en' | 'ku';
  rxBackgroundImage: string;
  rxTemplate: RxTemplateSettings;
}

export interface AppData {
  prescriptions: Prescription[];
  medications: Medication[];
  medicationCategories: MedicationCategory[];
  settings: AppSettings;
  lastUpdated: number;
}

export type Language = 'ar' | 'en' | 'ku';
