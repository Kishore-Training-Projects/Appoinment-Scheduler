using System.ComponentModel.DataAnnotations;

namespace AppoinmentScheduler.Model
{
    public class MedicalRecordModel
    {
        [Key]
        public int MedicalRecordId { get; set; }

        public float? Height { get; set; }

        public float? Weight { get; set; }

        public float? Pressure { get; set; }

        public float? Temperature { get; set;}

        public string? MedicalRecordRemark { get; set; }

        [DataType(DataType.DateTime)]
        public DateTime? MedicalRecordTimestamp { get; set; }

        public string? AttenderName { get; set; }

        public PatientModel? Patient { get; set; }  

        public AppointmentModel? Appointment { get; set; }

    }
}
