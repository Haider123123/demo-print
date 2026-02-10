import { openDB, DBSchema, IDBPDatabase } from 'idb';
import { AppData, Prescription, Medication, MedicationCategory, AppSettings } from '../types';
import { defaultCategories, defaultMedications } from './defaultData';

interface DentroDB extends DBSchema {
  prescriptions: {
    key: string;
    value: Prescription;
    indexes: { 'by-date': string };
  };
  medications: {
    key: string;
    value: Medication;
    indexes: { 'by-category': string };
  };
  categories: {
    key: string;
    value: MedicationCategory;
  };
  settings: {
    key: string;
    value: AppSettings & { id: string };
  };
  cache: {
    key: string;
    value: { key: string; data: string; timestamp: number };
  };
  meta: {
    key: string;
    value: { key: string; value: string };
  };
}

const DB_NAME = 'dentro-db';
const DB_VERSION = 2;

let dbInstance: IDBPDatabase<DentroDB> | null = null;

export const getDB = async (): Promise<IDBPDatabase<DentroDB>> => {
  if (dbInstance) return dbInstance;

  dbInstance = await openDB<DentroDB>(DB_NAME, DB_VERSION, {
    upgrade(db, oldVersion, _newVersion, transaction) {
      // Prescriptions store
      if (!db.objectStoreNames.contains('prescriptions')) {
        const prescriptionStore = db.createObjectStore('prescriptions', { keyPath: 'id' });
        prescriptionStore.createIndex('by-date', 'date');
      }

      // Medications store
      if (!db.objectStoreNames.contains('medications')) {
        const medicationStore = db.createObjectStore('medications', { keyPath: 'id' });
        medicationStore.createIndex('by-category', 'categoryId');
      }

      // Categories store
      if (!db.objectStoreNames.contains('categories')) {
        db.createObjectStore('categories', { keyPath: 'id' });
      }

      // Settings store
      if (!db.objectStoreNames.contains('settings')) {
        db.createObjectStore('settings', { keyPath: 'id' });
      }

      // Cache store for fonts and resources
      if (!db.objectStoreNames.contains('cache')) {
        db.createObjectStore('cache', { keyPath: 'key' });
      }

      // Meta store for tracking initialization
      if (!db.objectStoreNames.contains('meta')) {
        db.createObjectStore('meta', { keyPath: 'key' });
      }

      // Seed default data on first install
      if (oldVersion === 0) {
        const categoriesStore = transaction.objectStore('categories');
        const medicationsStore = transaction.objectStore('medications');
        const metaStore = transaction.objectStore('meta');

        // Add default categories
        defaultCategories.forEach(cat => {
          categoriesStore.put(cat);
        });

        // Add default medications
        defaultMedications.forEach(med => {
          medicationsStore.put(med);
        });

        // Mark as initialized
        metaStore.put({ key: 'initialized', value: 'true' });
      }
    },
  });

  return dbInstance;
};

// Default settings
const defaultSettings: AppSettings = {
  language: 'ar',
  rxBackgroundImage: '',
  rxTemplate: {
    rxSymbol: { fontSize: 30, color: '#000000', isBold: true },
    medications: { fontSize: 14, color: '#000000', isBold: true },
    headerInfo: { fontSize: 12, color: '#000000', isBold: true },
    headerLine: { color: '#000000', thickness: 1, style: 'solid' },
    topMargin: 100,
    paperSize: 'A5',
  },
};

// Prescriptions
export const getAllPrescriptions = async (): Promise<Prescription[]> => {
  const db = await getDB();
  const prescriptions = await db.getAll('prescriptions');
  return prescriptions.sort((a, b) => b.createdAt - a.createdAt);
};

export const savePrescription = async (prescription: Prescription): Promise<void> => {
  const db = await getDB();
  await db.put('prescriptions', prescription);
};

export const deletePrescription = async (id: string): Promise<void> => {
  const db = await getDB();
  await db.delete('prescriptions', id);
};

// Medications
export const getAllMedications = async (): Promise<Medication[]> => {
  const db = await getDB();
  return db.getAll('medications');
};

export const saveMedication = async (medication: Medication): Promise<void> => {
  const db = await getDB();
  await db.put('medications', medication);
};

export const deleteMedication = async (id: string): Promise<void> => {
  const db = await getDB();
  await db.delete('medications', id);
};

// Categories
export const getAllCategories = async (): Promise<MedicationCategory[]> => {
  const db = await getDB();
  return db.getAll('categories');
};

export const saveCategory = async (category: MedicationCategory): Promise<void> => {
  const db = await getDB();
  await db.put('categories', category);
};

export const deleteCategory = async (id: string): Promise<void> => {
  const db = await getDB();
  await db.delete('categories', id);
};

// Settings
export const getSettings = async (): Promise<AppSettings> => {
  const db = await getDB();
  const settings = await db.get('settings', 'app-settings');
  if (settings) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, ...rest } = settings;
    return rest as AppSettings;
  }
  return defaultSettings;
};

export const saveSettings = async (settings: AppSettings): Promise<void> => {
  const db = await getDB();
  await db.put('settings', { ...settings, id: 'app-settings' });
};

// Cache for fonts
export const getCachedData = async (key: string): Promise<string | null> => {
  const db = await getDB();
  const cached = await db.get('cache', key);
  return cached?.data || null;
};

export const setCachedData = async (key: string, data: string): Promise<void> => {
  const db = await getDB();
  await db.put('cache', { key, data, timestamp: Date.now() });
};

// Load all data
export const loadAllData = async (): Promise<AppData> => {
  const [prescriptions, medications, medicationCategories, settings] = await Promise.all([
    getAllPrescriptions(),
    getAllMedications(),
    getAllCategories(),
    getSettings(),
  ]);

  return {
    prescriptions,
    medications,
    medicationCategories,
    settings,
    lastUpdated: Date.now(),
  };
};

// Check if app is initialized
export const isAppInitialized = async (): Promise<boolean> => {
  const db = await getDB();
  const meta = await db.get('meta', 'initialized');
  return meta?.value === 'true';
};
