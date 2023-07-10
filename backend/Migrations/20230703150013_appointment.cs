using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AppoinmentScheduler.Migrations
{
    /// <inheritdoc />
    public partial class appointment : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AppointmentModel",
                columns: table => new
                {
                    AppointmentId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AppointmentDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    AppointmentTime = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AppointmentReason = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AppointmentStatus = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AppointmentFees = table.Column<float>(type: "real", nullable: true),
                    AppointmentRemark = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PaymentStatus = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MedicalrecordStatus = table.Column<bool>(type: "bit", nullable: true),
                    PatientId = table.Column<int>(type: "int", nullable: true),
                    DoctorId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppointmentModel", x => x.AppointmentId);
                    table.ForeignKey(
                        name: "FK_AppointmentModel_DoctorModel_DoctorId",
                        column: x => x.DoctorId,
                        principalTable: "DoctorModel",
                        principalColumn: "DoctorId");
                    table.ForeignKey(
                        name: "FK_AppointmentModel_PatientModel_PatientId",
                        column: x => x.PatientId,
                        principalTable: "PatientModel",
                        principalColumn: "PatientId");
                });

            migrationBuilder.CreateTable(
                name: "MedicalRecordModel",
                columns: table => new
                {
                    MedicalRecordId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Height = table.Column<float>(type: "real", nullable: true),
                    Weight = table.Column<float>(type: "real", nullable: true),
                    Pressure = table.Column<float>(type: "real", nullable: true),
                    Temperature = table.Column<float>(type: "real", nullable: true),
                    MedicalRecordRemark = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MedicalRecordTimestamp = table.Column<DateTime>(type: "datetime2", nullable: true),
                    AttenderName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PatientId = table.Column<int>(type: "int", nullable: true),
                    AppointmentId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MedicalRecordModel", x => x.MedicalRecordId);
                    table.ForeignKey(
                        name: "FK_MedicalRecordModel_AppointmentModel_AppointmentId",
                        column: x => x.AppointmentId,
                        principalTable: "AppointmentModel",
                        principalColumn: "AppointmentId");
                    table.ForeignKey(
                        name: "FK_MedicalRecordModel_PatientModel_PatientId",
                        column: x => x.PatientId,
                        principalTable: "PatientModel",
                        principalColumn: "PatientId");
                });

            migrationBuilder.CreateTable(
                name: "PrescriptionModel",
                columns: table => new
                {
                    PrescriptionId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Disease = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Allergy = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Prescription = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PrescriptionRemark = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PrescriptionTimestamp = table.Column<DateTime>(type: "datetime2", nullable: true),
                    DoctorId = table.Column<int>(type: "int", nullable: true),
                    AppointmentId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PrescriptionModel", x => x.PrescriptionId);
                    table.ForeignKey(
                        name: "FK_PrescriptionModel_AppointmentModel_AppointmentId",
                        column: x => x.AppointmentId,
                        principalTable: "AppointmentModel",
                        principalColumn: "AppointmentId");
                    table.ForeignKey(
                        name: "FK_PrescriptionModel_DoctorModel_DoctorId",
                        column: x => x.DoctorId,
                        principalTable: "DoctorModel",
                        principalColumn: "DoctorId");
                });

            migrationBuilder.CreateIndex(
                name: "IX_AppointmentModel_DoctorId",
                table: "AppointmentModel",
                column: "DoctorId");

            migrationBuilder.CreateIndex(
                name: "IX_AppointmentModel_PatientId",
                table: "AppointmentModel",
                column: "PatientId");

            migrationBuilder.CreateIndex(
                name: "IX_MedicalRecordModel_AppointmentId",
                table: "MedicalRecordModel",
                column: "AppointmentId");

            migrationBuilder.CreateIndex(
                name: "IX_MedicalRecordModel_PatientId",
                table: "MedicalRecordModel",
                column: "PatientId");

            migrationBuilder.CreateIndex(
                name: "IX_PrescriptionModel_AppointmentId",
                table: "PrescriptionModel",
                column: "AppointmentId");

            migrationBuilder.CreateIndex(
                name: "IX_PrescriptionModel_DoctorId",
                table: "PrescriptionModel",
                column: "DoctorId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MedicalRecordModel");

            migrationBuilder.DropTable(
                name: "PrescriptionModel");

            migrationBuilder.DropTable(
                name: "AppointmentModel");
        }
    }
}
