import { Schema, model } from "mongoose";
import { 
  FoodItemType, 
  MacroNutrientInfoType, 
  MicroNutrientVitaminInfoType, 
  MicroNutrientMineralInfoType 
} from "@momentum/shared";

/**
 * Schema für Makronährstoffe.
 */
const MacroNutrientInfoSchema = new Schema<MacroNutrientInfoType>({
  carbohydrates: { type: Number, required: true },
  protein: { type: Number, required: true },
  fat: { type: Number, required: true },
  calories: { type: Number, required: true }
});

/**
 * Schema für Vitamine.
 */
const MicroNutrientVitaminInfoSchema = new Schema<MicroNutrientVitaminInfoType>({
  VitaminA: { type: Number, required: true },
  VitaminBThiamine: { type: Number, required: true },
  VitaminBRiboflavine: { type: Number, required: true },
  VitaminBNiacin: { type: Number, required: true },
  VitaminBPantothenicAcid: { type: Number, required: true },
  VitaminBBiotin: { type: Number, required: true },
  VitaminB6: { type: Number, required: true },
  VitaminB12: { type: Number, required: true },
  VitaminBFolate: { type: Number, required: true },
  VitaminC: { type: Number, required: true },
  VitaminD: { type: Number, required: true },
  VitaminE: { type: Number, required: true },
  VitaminK: { type: Number, required: true }
});

/**
 * Schema für Mineralstoffe.
 */
const MicroNutrientMineralInfoSchema = new Schema<MicroNutrientMineralInfoType>({
  Calcium: { type: Number, required: true },
  Chloride: { type: Number, required: true },
  Chromium: { type: Number, required: true },
  Copper: { type: Number, required: true },
  Fluoride: { type: Number, required: true },
  Iodine: { type: Number, required: true },
  Iron: { type: Number, required: true },
  Magnesium: { type: Number, required: true },
  Manganese: { type: Number, required: true },
  Molybdenum: { type: Number, required: true },
  Phosphorus: { type: Number, required: true },
  Potassium: { type: Number, required: true },
  Selenium: { type: Number, required: true },
  Sodium: { type: Number, required: true },
  Zinc: { type: Number, required: true }
});

/**
 * Schema für Lebensmittel.
 */
const FoodItemSchema = new Schema<FoodItemType>({
  name: { type: String, required: true },
  description: { type: String },
  brand: { type: String },
  universalProductCode: { type: String },
  macroNutrients: { type: MacroNutrientInfoSchema, required: true },
  vitamins: { type: MicroNutrientVitaminInfoSchema, required: true },
  minerals: { type: MicroNutrientMineralInfoSchema, required: true },
  servingSize: { type: Number, required: true },
  servingUnit: { type: String, required: true }
});

export const FoodItem = model<FoodItemType>("FoodItem", FoodItemSchema);
