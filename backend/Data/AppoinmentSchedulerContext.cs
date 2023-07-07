using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using AppoinmentScheduler.Model;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage;

namespace AppoinmentScheduler.Data
{
    public class AppoinmentSchedulerContext : DbContext
    {
        public AppoinmentSchedulerContext (DbContextOptions<AppoinmentSchedulerContext> options)
            : base(options)
        {
            try
            {
                Database.EnsureCreated(); // Create the database if it doesn't exist

                // Check if the tables exist in the database
                bool hasTables = Database.GetPendingMigrations().Any();

                if (!hasTables)
                {
                    // Run the database migrations to create/update tables
                    Database.Migrate();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }

        public DbSet<AppoinmentScheduler.Model.PatientModel> PatientModel { get; set; } = default!;

        public DbSet<AppoinmentScheduler.Model.DoctorModel> DoctorModel { get; set; } = default!;

        public DbSet<AppoinmentScheduler.Model.UserModel> UserModel { get; set; } = default!;

        public DbSet<AppoinmentScheduler.Model.MedicalRecordModel>? MedicalRecordModel { get; set; }

        public DbSet<AppoinmentScheduler.Model.PrescriptionModel>? PrescriptionModel { get; set; }

        public DbSet<AppoinmentScheduler.Model.AppointmentModel>? AppointmentModel { get; set; }

        public DbSet<AppoinmentScheduler.Model.DoctorLeaveModel>? DoctorLeaveModel { get; set; }

        public DbSet<AppoinmentScheduler.Model.PaymentModel>? PaymentModel { get; set; }
    }
}
