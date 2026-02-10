import { Medication, MedicationCategory } from '../types';
import { generateId } from './helpers';

// Default medication categories
export const defaultCategories: MedicationCategory[] = [
  { id: 'cat-antibiotics', name: 'Antibiotics / المضادات الحيوية' },
  { id: 'cat-painkillers', name: 'Painkillers / مسكنات الألم' },
  { id: 'cat-antiinflamm', name: 'Anti-inflammatory / مضادات الالتهاب' },
  { id: 'cat-antihist', name: 'Antihistamines / مضادات الحساسية' },
  { id: 'cat-gastro', name: 'Gastrointestinal / أدوية المعدة' },
  { id: 'cat-cardiov', name: 'Cardiovascular / أدوية القلب' },
  { id: 'cat-diabetes', name: 'Diabetes / أدوية السكري' },
  { id: 'cat-vitamins', name: 'Vitamins / الفيتامينات' },
  { id: 'cat-respiratory', name: 'Respiratory / أدوية الجهاز التنفسي' },
  { id: 'cat-topical', name: 'Topical / الأدوية الموضعية' },
];

// Default medications organized by category
export const defaultMedications: Medication[] = [
  // Antibiotics
  { id: generateId(), name: 'Amoxicillin', dose: '500mg', form: 'Capsule', frequency: '1x3', notes: '', categoryId: 'cat-antibiotics' },
  { id: generateId(), name: 'Amoxicillin + Clavulanic Acid', dose: '1g', form: 'Tablet', frequency: '1x2', notes: 'Augmentin', categoryId: 'cat-antibiotics' },
  { id: generateId(), name: 'Azithromycin', dose: '500mg', form: 'Tablet', frequency: '1x1', notes: 'Zithromax', categoryId: 'cat-antibiotics' },
  { id: generateId(), name: 'Ciprofloxacin', dose: '500mg', form: 'Tablet', frequency: '1x2', notes: '', categoryId: 'cat-antibiotics' },
  { id: generateId(), name: 'Metronidazole', dose: '500mg', form: 'Tablet', frequency: '1x3', notes: 'Flagyl', categoryId: 'cat-antibiotics' },
  { id: generateId(), name: 'Cephalexin', dose: '500mg', form: 'Capsule', frequency: '1x4', notes: 'Keflex', categoryId: 'cat-antibiotics' },
  { id: generateId(), name: 'Clarithromycin', dose: '500mg', form: 'Tablet', frequency: '1x2', notes: '', categoryId: 'cat-antibiotics' },
  { id: generateId(), name: 'Doxycycline', dose: '100mg', form: 'Capsule', frequency: '1x2', notes: '', categoryId: 'cat-antibiotics' },
  { id: generateId(), name: 'Levofloxacin', dose: '500mg', form: 'Tablet', frequency: '1x1', notes: '', categoryId: 'cat-antibiotics' },
  { id: generateId(), name: 'Cefixime', dose: '400mg', form: 'Tablet', frequency: '1x1', notes: 'Suprax', categoryId: 'cat-antibiotics' },
  
  // Painkillers
  { id: generateId(), name: 'Paracetamol', dose: '500mg', form: 'Tablet', frequency: '1x3', notes: 'Panadol', categoryId: 'cat-painkillers' },
  { id: generateId(), name: 'Paracetamol', dose: '1000mg', form: 'Tablet', frequency: '1x3', notes: '', categoryId: 'cat-painkillers' },
  { id: generateId(), name: 'Ibuprofen', dose: '400mg', form: 'Tablet', frequency: '1x3', notes: 'Brufen', categoryId: 'cat-painkillers' },
  { id: generateId(), name: 'Ibuprofen', dose: '600mg', form: 'Tablet', frequency: '1x3', notes: '', categoryId: 'cat-painkillers' },
  { id: generateId(), name: 'Diclofenac', dose: '50mg', form: 'Tablet', frequency: '1x3', notes: 'Voltaren', categoryId: 'cat-painkillers' },
  { id: generateId(), name: 'Diclofenac', dose: '75mg', form: 'IM Injection', frequency: '1x1', notes: '', categoryId: 'cat-painkillers' },
  { id: generateId(), name: 'Naproxen', dose: '500mg', form: 'Tablet', frequency: '1x2', notes: '', categoryId: 'cat-painkillers' },
  { id: generateId(), name: 'Tramadol', dose: '50mg', form: 'Capsule', frequency: '1x2', notes: '', categoryId: 'cat-painkillers' },
  { id: generateId(), name: 'Ketorolac', dose: '10mg', form: 'Tablet', frequency: '1x3', notes: 'Toradol', categoryId: 'cat-painkillers' },
  { id: generateId(), name: 'Celecoxib', dose: '200mg', form: 'Capsule', frequency: '1x2', notes: 'Celebrex', categoryId: 'cat-painkillers' },
  
  // Anti-inflammatory
  { id: generateId(), name: 'Prednisolone', dose: '5mg', form: 'Tablet', frequency: '1x3', notes: '', categoryId: 'cat-antiinflamm' },
  { id: generateId(), name: 'Dexamethasone', dose: '4mg', form: 'Tablet', frequency: '1x2', notes: '', categoryId: 'cat-antiinflamm' },
  { id: generateId(), name: 'Methylprednisolone', dose: '4mg', form: 'Tablet', frequency: '1x3', notes: 'Medrol', categoryId: 'cat-antiinflamm' },
  { id: generateId(), name: 'Hydrocortisone', dose: '10mg', form: 'Tablet', frequency: '1x3', notes: '', categoryId: 'cat-antiinflamm' },
  { id: generateId(), name: 'Betamethasone', dose: '0.5mg', form: 'Tablet', frequency: '1x2', notes: '', categoryId: 'cat-antiinflamm' },
  
  // Antihistamines
  { id: generateId(), name: 'Cetirizine', dose: '10mg', form: 'Tablet', frequency: '1x1', notes: 'Zyrtec', categoryId: 'cat-antihist' },
  { id: generateId(), name: 'Loratadine', dose: '10mg', form: 'Tablet', frequency: '1x1', notes: 'Claritin', categoryId: 'cat-antihist' },
  { id: generateId(), name: 'Fexofenadine', dose: '180mg', form: 'Tablet', frequency: '1x1', notes: 'Telfast', categoryId: 'cat-antihist' },
  { id: generateId(), name: 'Diphenhydramine', dose: '25mg', form: 'Tablet', frequency: '1x3', notes: 'Benadryl', categoryId: 'cat-antihist' },
  { id: generateId(), name: 'Chlorpheniramine', dose: '4mg', form: 'Tablet', frequency: '1x3', notes: '', categoryId: 'cat-antihist' },
  { id: generateId(), name: 'Desloratadine', dose: '5mg', form: 'Tablet', frequency: '1x1', notes: '', categoryId: 'cat-antihist' },
  
  // Gastrointestinal
  { id: generateId(), name: 'Omeprazole', dose: '20mg', form: 'Capsule', frequency: '1x1', notes: 'Before breakfast', categoryId: 'cat-gastro' },
  { id: generateId(), name: 'Omeprazole', dose: '40mg', form: 'Capsule', frequency: '1x1', notes: '', categoryId: 'cat-gastro' },
  { id: generateId(), name: 'Pantoprazole', dose: '40mg', form: 'Tablet', frequency: '1x1', notes: '', categoryId: 'cat-gastro' },
  { id: generateId(), name: 'Esomeprazole', dose: '40mg', form: 'Tablet', frequency: '1x1', notes: 'Nexium', categoryId: 'cat-gastro' },
  { id: generateId(), name: 'Ranitidine', dose: '150mg', form: 'Tablet', frequency: '1x2', notes: 'Zantac', categoryId: 'cat-gastro' },
  { id: generateId(), name: 'Domperidone', dose: '10mg', form: 'Tablet', frequency: '1x3', notes: 'Motilium', categoryId: 'cat-gastro' },
  { id: generateId(), name: 'Metoclopramide', dose: '10mg', form: 'Tablet', frequency: '1x3', notes: '', categoryId: 'cat-gastro' },
  { id: generateId(), name: 'Loperamide', dose: '2mg', form: 'Capsule', frequency: 'PRN', notes: 'Imodium', categoryId: 'cat-gastro' },
  { id: generateId(), name: 'Ondansetron', dose: '4mg', form: 'Tablet', frequency: '1x3', notes: 'Zofran', categoryId: 'cat-gastro' },
  { id: generateId(), name: 'Mebeverine', dose: '135mg', form: 'Tablet', frequency: '1x3', notes: '', categoryId: 'cat-gastro' },
  
  // Cardiovascular
  { id: generateId(), name: 'Aspirin', dose: '81mg', form: 'Tablet', frequency: '1x1', notes: 'Baby aspirin', categoryId: 'cat-cardiov' },
  { id: generateId(), name: 'Amlodipine', dose: '5mg', form: 'Tablet', frequency: '1x1', notes: '', categoryId: 'cat-cardiov' },
  { id: generateId(), name: 'Amlodipine', dose: '10mg', form: 'Tablet', frequency: '1x1', notes: '', categoryId: 'cat-cardiov' },
  { id: generateId(), name: 'Atenolol', dose: '50mg', form: 'Tablet', frequency: '1x1', notes: '', categoryId: 'cat-cardiov' },
  { id: generateId(), name: 'Losartan', dose: '50mg', form: 'Tablet', frequency: '1x1', notes: '', categoryId: 'cat-cardiov' },
  { id: generateId(), name: 'Lisinopril', dose: '10mg', form: 'Tablet', frequency: '1x1', notes: '', categoryId: 'cat-cardiov' },
  { id: generateId(), name: 'Bisoprolol', dose: '5mg', form: 'Tablet', frequency: '1x1', notes: '', categoryId: 'cat-cardiov' },
  { id: generateId(), name: 'Clopidogrel', dose: '75mg', form: 'Tablet', frequency: '1x1', notes: 'Plavix', categoryId: 'cat-cardiov' },
  { id: generateId(), name: 'Atorvastatin', dose: '20mg', form: 'Tablet', frequency: '1x1', notes: 'Lipitor', categoryId: 'cat-cardiov' },
  { id: generateId(), name: 'Simvastatin', dose: '20mg', form: 'Tablet', frequency: '1x1', notes: '', categoryId: 'cat-cardiov' },
  
  // Diabetes
  { id: generateId(), name: 'Metformin', dose: '500mg', form: 'Tablet', frequency: '1x2', notes: '', categoryId: 'cat-diabetes' },
  { id: generateId(), name: 'Metformin', dose: '850mg', form: 'Tablet', frequency: '1x2', notes: '', categoryId: 'cat-diabetes' },
  { id: generateId(), name: 'Glibenclamide', dose: '5mg', form: 'Tablet', frequency: '1x2', notes: '', categoryId: 'cat-diabetes' },
  { id: generateId(), name: 'Gliclazide', dose: '80mg', form: 'Tablet', frequency: '1x2', notes: '', categoryId: 'cat-diabetes' },
  { id: generateId(), name: 'Glimepiride', dose: '2mg', form: 'Tablet', frequency: '1x1', notes: '', categoryId: 'cat-diabetes' },
  { id: generateId(), name: 'Sitagliptin', dose: '100mg', form: 'Tablet', frequency: '1x1', notes: 'Januvia', categoryId: 'cat-diabetes' },
  
  // Vitamins
  { id: generateId(), name: 'Vitamin C', dose: '1000mg', form: 'Tablet', frequency: '1x1', notes: '', categoryId: 'cat-vitamins' },
  { id: generateId(), name: 'Vitamin D3', dose: '1000IU', form: 'Tablet', frequency: '1x1', notes: '', categoryId: 'cat-vitamins' },
  { id: generateId(), name: 'Vitamin D3', dose: '50000IU', form: 'Capsule', frequency: '1x week', notes: '', categoryId: 'cat-vitamins' },
  { id: generateId(), name: 'Vitamin B12', dose: '1000mcg', form: 'Tablet', frequency: '1x1', notes: '', categoryId: 'cat-vitamins' },
  { id: generateId(), name: 'Vitamin B Complex', dose: '', form: 'Tablet', frequency: '1x1', notes: '', categoryId: 'cat-vitamins' },
  { id: generateId(), name: 'Folic Acid', dose: '5mg', form: 'Tablet', frequency: '1x1', notes: '', categoryId: 'cat-vitamins' },
  { id: generateId(), name: 'Ferrous Sulfate', dose: '325mg', form: 'Tablet', frequency: '1x1', notes: 'Iron', categoryId: 'cat-vitamins' },
  { id: generateId(), name: 'Calcium + Vitamin D', dose: '600mg', form: 'Tablet', frequency: '1x2', notes: 'Caltrate', categoryId: 'cat-vitamins' },
  { id: generateId(), name: 'Zinc', dose: '50mg', form: 'Tablet', frequency: '1x1', notes: '', categoryId: 'cat-vitamins' },
  { id: generateId(), name: 'Omega-3', dose: '1000mg', form: 'Softgel', frequency: '1x1', notes: 'Fish Oil', categoryId: 'cat-vitamins' },
  
  // Respiratory
  { id: generateId(), name: 'Salbutamol', dose: '100mcg', form: 'Inhaler', frequency: 'PRN', notes: 'Ventolin', categoryId: 'cat-respiratory' },
  { id: generateId(), name: 'Budesonide', dose: '200mcg', form: 'Inhaler', frequency: '1x2', notes: '', categoryId: 'cat-respiratory' },
  { id: generateId(), name: 'Montelukast', dose: '10mg', form: 'Tablet', frequency: '1x1', notes: 'Singulair', categoryId: 'cat-respiratory' },
  { id: generateId(), name: 'Dextromethorphan', dose: '15mg', form: 'Syrup', frequency: '1x3', notes: 'Cough syrup', categoryId: 'cat-respiratory' },
  { id: generateId(), name: 'Bromhexine', dose: '8mg', form: 'Tablet', frequency: '1x3', notes: '', categoryId: 'cat-respiratory' },
  { id: generateId(), name: 'Acetylcysteine', dose: '600mg', form: 'Sachet', frequency: '1x1', notes: 'NAC', categoryId: 'cat-respiratory' },
  { id: generateId(), name: 'Pseudoephedrine', dose: '60mg', form: 'Tablet', frequency: '1x3', notes: 'Sudafed', categoryId: 'cat-respiratory' },
  
  // Topical
  { id: generateId(), name: 'Fusidic Acid', dose: '2%', form: 'Cream', frequency: '1x3', notes: 'Fucidin', categoryId: 'cat-topical' },
  { id: generateId(), name: 'Betamethasone', dose: '0.1%', form: 'Cream', frequency: '1x2', notes: '', categoryId: 'cat-topical' },
  { id: generateId(), name: 'Hydrocortisone', dose: '1%', form: 'Cream', frequency: '1x2', notes: '', categoryId: 'cat-topical' },
  { id: generateId(), name: 'Clotrimazole', dose: '1%', form: 'Cream', frequency: '1x2', notes: '', categoryId: 'cat-topical' },
  { id: generateId(), name: 'Mupirocin', dose: '2%', form: 'Ointment', frequency: '1x3', notes: 'Bactroban', categoryId: 'cat-topical' },
  { id: generateId(), name: 'Diclofenac', dose: '1%', form: 'Gel', frequency: '1x3', notes: 'Voltaren Gel', categoryId: 'cat-topical' },
];
