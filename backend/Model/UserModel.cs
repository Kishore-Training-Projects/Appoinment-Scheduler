using System.ComponentModel.DataAnnotations;

namespace AppoinmentScheduler.Model
{
    public class UserModel
    {
        [Key]
        public int UserId { get; set; }

        public string? UserEmail { get; set; }

        public string? UserPassword { get; set;}

        public bool? UserStatus { get; set; }

        public String? UserRole { get; set; }

        public DoctorModel? Doctor { get; set; }


    }
}
