import React from "react";
import { BookOpen, ArrowRight } from "lucide-react";

const KnowledgeCenter = ({ data }) => {
  if (!data) return null;

  return (
    <div className="bg-white rounded-md border border-neutral-300 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-neutral-300">
        <div className="flex items-center">
          <BookOpen className="w-6 h-6 mr-3 text-black" />
          <h2 className="text-xl md:text-2xl font-bold text-neutral-800">
            {data.title}
          </h2>
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        {data.description && (
          <p className="text-sm text-neutral-500 mb-4">{data.description}</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.articles.map((article, index) => (
            <a
              key={index}
              href={article.link}
              className="group flex justify-between items-center p-4 bg-neutral-50 hover:bg-gray-200 border border-neutral-300 rounded-lg transition-all"
            >
              <span className="text-sm font-medium text-neutral-700 group-hover:text-black">
                {article.title}
              </span>
              <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-black transition-transform group-hover:translate-x-1" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KnowledgeCenter;
