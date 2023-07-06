using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using AppoinmentScheduler.Data;
using Hangfire;
using Microsoft.OpenApi.Models;
using System.Configuration;

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

            //hangfire

            builder.Services.AddControllers();
            builder.Services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "HangfireApplication", Version = "v1" });
            });

            builder.Services.AddHangfire(x =>
            {
                x.UseSqlServerStorage(builder.Configuration.GetConnectionString("AppoinmentSchedulerContext"));
            });
            builder.Services.AddHangfireServer();


            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
                //hangfire
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "HangfireApplication v1"));

            }

            app.UseCors("corspolicy");

            //hangfire

            app.UseHangfireDashboard();


            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}