using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace AppoinmentScheduler.Model
{
    public class DoctorModel
    {
        [Key]
        public int DoctorId { get; set; }

        public String? DoctorName { get; set; }

        public String? DoctorDesignation { get; set; }

        public String? DoctorQualification { get; set; }

        public float? DoctorFees { get; set; }

        public String? DoctorMobile { get; set; }

        public String? DoctorEmail { get; set; }

        public String? DoctorAddress { get; set; }

        public String? DoctorStatus { get; set; }

        internal void PostDoctorModel()
        {
            throw new NotImplementedException();
        }

        public static implicit operator DoctorModel(CreatedAtActionResult v)
        {
            throw new NotImplementedException();
        }
    }
}
