import React from "react";
import jsPDF from "jspdf";
import 'jspdf-autotable';

 const UserPrescriptionExport = ({ rowData }) => {
  const handleExport = () => {
    // Create a new jsPDF instance
    const doc = new jsPDF({ orientation: "landscape",});
    var y = 10;
    doc.setLineWidth(2);
    doc.text(200, y = y + 30, "Prescription Details on "+rowData.date);

    // Set the table headers
    const headers = [["Date", "Doctorname" , "designation" , "prescription"]]; // Modify this array for more columns

        //console.log(rowData);
    // Prepare the data for the table
    const rows = [[""+rowData.date, ""+rowData.doctorName , rowData.designation , rowData.prescription]]; // Modify this for more columns

    console.log(rows);

    doc.autoTable({
        head: headers,
        body: rows,
        startY: 70,
        theme: 'grid',
                 })
                 

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
export default UserPrescriptionExport;