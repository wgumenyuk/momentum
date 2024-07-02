import { Schema, model } from "mongoose";
import { nanoid } from "nanoid";

export interface DictionaryCategoryType {
  id: string;
  name: string;
}

export interface DictionaryTopicType {
  id: string;
  category: string;
  title: string;
  content: string;
  references: string[];
}

const DictionaryCategorySchema = new Schema<DictionaryCategoryType>({
  id: { type: String, required: true, unique: true, default: nanoid },
  name: { type: String, required: true }
});

const DictionaryTopicSchema = new Schema<DictionaryTopicType>({
  id: { type: String, required: true, unique: true, default: nanoid },
  category: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  references: [ { type: String } ]
});

export const DictionaryCategory = model<DictionaryCategoryType>("DictionaryCategory", DictionaryCategorySchema);
export const DictionaryTopic = model<DictionaryTopicType>("DictionaryTopic", DictionaryTopicSchema);
