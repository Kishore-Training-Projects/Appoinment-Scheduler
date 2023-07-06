using Microsoft.AspNetCore.Mvc;
using Hangfire;
using AppoinmentScheduler.service;

namespace AppoinmentScheduler.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase

    {

        private readonly IBackgroundJobClient _backgroundJobClient;
        private readonly IRecurringJobManager _recurringJobManager;


        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
                };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, IBackgroundJobClient backgroundJobClient, IRecurringJobManager recurringJobManager)
        {
            _logger = logger;
            _backgroundJobClient = backgroundJobClient;
            _recurringJobManager = recurringJobManager;


        }

        [HttpGet("enqueue-job")]
        public IActionResult EnqueueJob()
        {
            // Enqueue the background job to run once a day
            _backgroundJobClient.Schedule<MyBackgroundJobs>(x => x.DisplayMessage(), TimeSpan.FromSeconds(60));


            //_backgroundJobClient.Schedule(() => MyBackgroundJobs.DisplayMessage(), TimeSpan.FromSeconds(60));


            return Ok("Job enqueued successfully");
        }

        [HttpGet("/ReccuringJob")]
        public ActionResult CreateReccuringJob()
        {
           // _recurringJobManager.AddOrUpdate("jobId", () => _jobTestService.ReccuringJob(), Cron.Minutely);
            _recurringJobManager.AddOrUpdate<MyBackgroundJobs>("DisplayMessage", x => x.DisplayMessage(), Cron.Daily, TimeZoneInfo.Local);

            return Ok();
        }




        [HttpGet("/mail")]
        public ActionResult sendmail()
        {
            MailService.sendConfirmationEmail("summa","hi this is kishore","kishoredurai7@gmail.com");
            // _recurringJobManager.AddOrUpdate("jobId", () => _jobTestService.ReccuringJob(), Cron.Minutely);
            //  _recurringJobManager.AddOrUpdate<MyBackgroundJobs>("DisplayMessage", x => x.DisplayMessage(), Cron.Daily, TimeZoneInfo.Local);

            return Ok();
        }



        [HttpGet(Name = "GetWeatherForecast")]
        public IEnumerable<WeatherForecast> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}