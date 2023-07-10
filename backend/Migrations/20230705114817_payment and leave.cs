using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AppoinmentScheduler.Migrations
{
    /// <inheritdoc />
    public partial class paymentandleave : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DoctorLeaveModel",
                columns: table => new
                {
                    LeaveId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LeaveFrom = table.Column<DateTime>(type: "datetime2", nullable: true),
                    LeaveTo = table.Column<DateTime>(type: "datetime2", nullable: true),
                    LeaveReason = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DoctorId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DoctorLeaveModel", x => x.LeaveId);
                    table.ForeignKey(
                        name: "FK_DoctorLeaveModel_DoctorModel_DoctorId",
                        column: x => x.DoctorId,
                        principalTable: "DoctorModel",
                        principalColumn: "DoctorId");
                });

            migrationBuilder.CreateTable(
                name: "PaymentModel",
                columns: table => new
                {
                    paymentId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    paymentMethod = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    paymentAmount = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    paymentRemark = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    transactionId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    paymentTimestamp = table.Column<DateTime>(type: "datetime2", nullable: true),
                    PatientId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PaymentModel", x => x.paymentId);
                    table.ForeignKey(
                        name: "FK_PaymentModel_PatientModel_PatientId",
                        column: x => x.PatientId,
                        principalTable: "PatientModel",
                        principalColumn: "PatientId");
                });

            migrationBuilder.CreateIndex(
                name: "IX_DoctorLeaveModel_DoctorId",
                table: "DoctorLeaveModel",
                column: "DoctorId");

            migrationBuilder.CreateIndex(
                name: "IX_PaymentModel_PatientId",
                table: "PaymentModel",
                column: "PatientId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DoctorLeaveModel");

            migrationBuilder.DropTable(
                name: "PaymentModel");
        }
    }
}
