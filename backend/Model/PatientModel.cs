using System.ComponentModel.DataAnnotations;

namespace AppoinmentScheduler.Model
{
    public class PatientModel
    {
        [Key]
        public int PatientId { get; set; }

        
        public String? PatientName { get; set; }

        public int? PatientAge { get; set; }

        public string? PatientGender { get; set; }

        [DataType(DataType.Date)]
        public DateTime? PatientDOB { get; set; }

        public String? PatientEmail { get; set; }

        public String? PatientMobile { get; set; }

        public String? PatientBloodGroup { get; set; }

        public String? PatientAddress { get; set; }

        public Boolean? PatientAccountStatus { get; set; }
    }
}
