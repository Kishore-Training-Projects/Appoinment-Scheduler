using System.ComponentModel.DataAnnotations;

namespace AppoinmentScheduler.Model
{
    public class PaymentModel
    {
        [Key]
        public int paymentId {  get; set; }

        public string? paymentMethod { get; set; }

        public string? paymentAmount { get; set; }

        public string? paymentRemark { get; set; }

        public string? transactionId { get; set; }

        public DateTime? paymentTimestamp { get; set; }
        public PatientModel? patient { get; set; }
    }
}
