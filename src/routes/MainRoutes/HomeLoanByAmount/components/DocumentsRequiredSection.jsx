import React from "react";
import { Container } from "../../../../components/Layout";


const DocumentsRequiredSection = ({documentsRequiredData}) => {

  if (!documentsRequiredData) return null;

  return (
    <Container>
      <section className="mx-auto rounded-2xl my-10">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-5 text-center">
          {documentsRequiredData.title}
        </h2>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <tbody>
              {documentsRequiredData.table.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 transition-colors duration-150"
                >
                  <td className="px-4 py-3 border-b text-gray-800 text-sm font-medium">
                    {item.particular}
                  </td>
                  <td className="px-4 py-3 border-b text-gray-600 text-sm">
                    {item.details}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Note */}
        {documentsRequiredData.note && (
          <p className="mt-4 text-sm text-gray-500 text-center italic">
            {documentsRequiredData.note}
          </p>
        )}
      </section>
    </Container>
  );
};

export default DocumentsRequiredSection;
