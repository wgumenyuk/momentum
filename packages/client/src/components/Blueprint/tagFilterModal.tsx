import React from "react";

interface TagFilterModalProps {
  tags: string[];
  selectedTags: string[];
  onSelectTag: (tag: string) => void;
  onDeselectTag: (tag: string) => void;
  onClose: () => void;
}

export const TagFilterModal: React.FC<TagFilterModalProps> = ({
  tags,
  selectedTags,
  onSelectTag,
  onDeselectTag,
  onClose
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold text-white mb-4">Filter by Tags</h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <div
              key={tag}
              className={`p-2 rounded-lg ${selectedTags.includes(tag) ? "bg-blue-600" : "bg-blue-800"} text-white`}
            >
              <button
                onClick={() =>
                  selectedTags.includes(tag) ? onDeselectTag(tag) : onSelectTag(tag)
                }
                className="focus:outline-none"
              >
                {tag}
              </button>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-end">
          <button onClick={onClose} className="p-2 bg-blue-500 rounded-lg text-white">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
