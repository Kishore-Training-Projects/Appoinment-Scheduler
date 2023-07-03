using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using AppoinmentScheduler.Data;
namespace AppoinmentScheduler
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);



            builder.Services.AddDbContext<AppoinmentSchedulerContext>(options =>
                options.UseSqlServer(builder.Configuration.GetConnectionString("AppoinmentSchedulerContext") ?? throw new InvalidOperationException("Connection string 'AppoinmentSchedulerContext' not found.")));

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddCors(p => p.AddPolicy("corspolicy", build =>
            {
                build.WithOrigins("http://localhost:3000").AllowAnyMethod().AllowAnyHeader();
                build.WithOrigins("https://localhost:3000").AllowAnyMethod().AllowAnyHeader();

            }));

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseCors("corspolicy");


            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}