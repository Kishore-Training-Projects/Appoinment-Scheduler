using System.ComponentModel.DataAnnotations;

namespace AppoinmentScheduler.Model
{
    public class AppointmentModel
    {
        [Key]
        public int AppointmentId { get; set; }

        [DataType(DataType.Date)]
        public DateTime? AppointmentDate { get; set; }

        public String? AppointmentTime { get; set; }

        public string? AppointmentReason { get; set; }

        public string? AppointmentStatus { get; set; }

        public float? AppointmentFees { get; set; }

        public string? AppointmentRemark { get; set; }

        public string? PaymentStatus { get; set; }

        public bool? MedicalrecordStatus { get; set; }

        public PatientModel? Patient { get; set; }

        public DoctorModel? Doctor { get; set; }


    }
}
