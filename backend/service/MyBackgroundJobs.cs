namespace AppoinmentScheduler.service
{
    public class MyBackgroundJobs
    {
        public Task DisplayMessage()
        {
            Console.WriteLine("this is kishoredurai");

            return Task.CompletedTask;
        }
    }
}
