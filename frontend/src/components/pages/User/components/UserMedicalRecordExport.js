import React from "react";
import jsPDF from "jspdf";
import 'jspdf-autotable';

 const UserMedicalRecordExport = ({ rowData }) => {
  const handleExport = () => {
    // Create a new jsPDF instance
    const doc = new jsPDF({ orientation: "landscape",});

    // Set the table headers
    const headers = [["Date", "Height"]]; // Modify this array for more columns

        //console.log(rowData);
    // Prepare the data for the table
    const rows = [[""+rowData.Date, ""+rowData.height]]; // Modify this for more columns

    console.log(rows);

    // // Add the table to the document
    doc.autoTable({
      head: headers,
      body: rows,
    });

    // // Save the PDF file
     doc.save("row.pdf");
  };

  return (
    <button
      onClick={handleExport}
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
    >
      Export
    </button>
  );
};
export default UserMedicalRecordExport;