using System.ComponentModel.DataAnnotations;

namespace AppoinmentScheduler.Model
{
    public class PrescriptionModel
    {
        [Key]
        public int PrescriptionId { get; set; }

        public string? Disease { get; set; }

        public string? Allergy { get; set; }

        public string? Prescription { get; set; }

        public string? PrescriptionRemark { get; set; }

        public DateTime? PrescriptionTimestamp { get; set; }


        public DoctorModel? Doctor { get; set; }

        public AppointmentModel? Appointment { get; set; }
    }
}
