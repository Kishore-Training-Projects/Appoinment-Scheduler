using MimeKit;

namespace AppoinmentScheduler.service
{
    public class MailService
    {
        public static void sendConfirmationEmail(String emailSubject, String emailMessage, String toEmail)
        {
           // toEmail = "kishoredurai7@gmail.com";//for testing purposes
            try
            {

                var email = new MimeMessage();
                email.From.Add(MailboxAddress.Parse("kishoredurai7@gmail.com"));
                email.To.Add(MailboxAddress.Parse(toEmail));
                email.Subject = emailSubject;

                email.Body = new TextPart(MimeKit.Text.TextFormat.Html)
                {
                    Text = emailMessage,

                };

                using var smtp = new MailKit.Net.Smtp.SmtpClient();
                smtp.Connect("smtp.gmail.com", 587, MailKit.Security.SecureSocketOptions.StartTls);

                smtp.Authenticate("kishoredurai7@gmail.com", "ohdniglsvofpisix");

                smtp.Send(email);
                smtp.Disconnect(true);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }
    }
}
