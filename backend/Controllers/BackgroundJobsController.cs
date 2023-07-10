using Hangfire;
using Microsoft.AspNetCore.Mvc;

namespace AppoinmentScheduler.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class BackgroundJobsController : Controller
    {
        private readonly IBackgroundJobClient _backgroundJobClient;
        private readonly IRecurringJobManager _recurringJobManager;


        public BackgroundJobsController(IBackgroundJobClient backgroundJobClient, IRecurringJobManager recurringJobManager)
        {
            _backgroundJobClient = backgroundJobClient;
            _recurringJobManager = recurringJobManager;

        }

        [HttpGet("appointment/tommorrow")]
        public ActionResult CreateReccuringJob()
        {
            _recurringJobManager.AddOrUpdate<AppointmentController>("Tommorrow Email", x => x.GettodayAppointmentModeldaily(), Cron.Daily, TimeZoneInfo.Local);

            return Ok();
        }



        [HttpGet("appointment/cancel")]
        public ActionResult cancelappointmentReccuringJob()
        {
            _recurringJobManager.AddOrUpdate<AppointmentController>("cancel yesterday appointments", x => x.changeoldappointments(), Cron.Daily, TimeZoneInfo.Local);

            return Ok();


        }
         
    }
}
