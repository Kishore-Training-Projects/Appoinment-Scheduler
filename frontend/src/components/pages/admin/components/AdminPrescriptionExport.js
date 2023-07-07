import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import logo from "../../../images/logo.png";

const AdminPrescriptionExport = ({ rowData }) => {
  const handleExport = () => {
    var date = new Date(rowData.prescriptionTimestamp).toLocaleDateString();

    // // Create a new jsPDF instance
    const doc = new jsPDF({ orientation: "landscape" });
    doc.setFont("helvetica", "normal");

    var y = 30; // Get the vertical center of the page
    doc.setLineWidth(2);
    doc.text(
      doc.internal.pageSize.getWidth() / 2,
      y,
      "Prescription Details on " + date,
      { align: "center" }
    );
    y += 10; // Move down by 10 units for the line

    // Add a line below the text
    doc.setLineWidth(0.5);
    doc.line(20, y, doc.internal.pageSize.getWidth() - 20, y);

    // Set the table headers
    const headers = [
      [
        "PrescriptionId",
        "Doctor Name",
        "Doctor Designation",
        "Disease",
        "Allergy",
        "Prescription",
        "Prescription Remark",
      ],
    ]; // Modify this array for more columns

    // Prepare the data for the table
    const rows = [
      [
        "" + rowData.prescriptionId,
        "" + rowData.doctor.doctorName,
        rowData.doctor.doctorDesignation,
        rowData.disease,
        rowData.allergy,
        rowData.prescription,
        rowData.prescriptionRemark,
      ],
    ]; // Modify this for more columns

    console.log(rows);

    doc.autoTable({
      head: headers,
      body: rows,
      startY: 70,
      theme: "grid",
    });

    // Save the document
    doc.save("prescription - " + date + ".pdf");
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
export default AdminPrescriptionExport;
