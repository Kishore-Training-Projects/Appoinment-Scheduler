using System.ComponentModel.DataAnnotations;

namespace AppoinmentScheduler.Model
{
    public class DoctorLeaveModel
    {
        [Key]
        public int LeaveId { get; set; }

        [DataType(DataType.Date)]
        public DateTime? LeaveFrom { get; set; }

        [DataType(DataType.Date)]
        public DateTime? LeaveTo { get; set; }

        public string? LeaveReason { get; set; }

        public DoctorModel? doctor { get; set; }
    }
}
