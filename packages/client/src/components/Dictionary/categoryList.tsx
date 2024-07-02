import React from "react";
import { DictionaryCategoryType } from "@momentum/shared";
import { Link } from "react-router-dom";

interface CategoryListProps {
  categories: DictionaryCategoryType[];
}

export const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  return (
    <div className="space-y-4">
      {categories.map((category) => (
        <Link key={category.id} to={`/dictionary/${category.id}`}>
          <div className="block p-4 bg-blue-800 rounded-lg shadow-md text-white">
            {category.name}
          </div>
        </Link>
      ))}
    </div>
  );
};
