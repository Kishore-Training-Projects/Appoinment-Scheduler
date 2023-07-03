using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AppoinmentScheduler.Data;
using AppoinmentScheduler.Model;

namespace AppoinmentScheduler.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentController : ControllerBase
    {
        private readonly AppoinmentSchedulerContext _context;

        public AppointmentController(AppoinmentSchedulerContext context)
        {
            _context = context;
        }

        // GET: api/Appointment
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppointmentModel>>> GetAppointmentModel()
        {
          if (_context.AppointmentModel == null)
          {
              return NotFound();
          }
            return await _context.AppointmentModel.ToListAsync();
        }

        // GET: api/Appointment/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AppointmentModel>> GetAppointmentModel(int id)
        {
          if (_context.AppointmentModel == null)
          {
              return NotFound();
          }
            var appointmentModel = await _context.AppointmentModel.FindAsync(id);

            if (appointmentModel == null)
            {
                return NotFound();
            }

            return appointmentModel;
        }

        // PUT: api/Appointment/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAppointmentModel(int id, AppointmentModel appointmentModel)
        {
            if (id != appointmentModel.AppointmentId)
            {
                return BadRequest();
            }

            _context.Entry(appointmentModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AppointmentModelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Appointment
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<AppointmentModel>> PostAppointmentModel(AppointmentModel appointmentModel)
        {
          if (_context.AppointmentModel == null)
          {
              return Problem("Entity set 'AppoinmentSchedulerContext.AppointmentModel'  is null.");
          }
            _context.AppointmentModel.Add(appointmentModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAppointmentModel", new { id = appointmentModel.AppointmentId }, appointmentModel);
        }

        // DELETE: api/Appointment/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAppointmentModel(int id)
        {
            if (_context.AppointmentModel == null)
            {
                return NotFound();
            }
            var appointmentModel = await _context.AppointmentModel.FindAsync(id);
            if (appointmentModel == null)
            {
                return NotFound();
            }

            _context.AppointmentModel.Remove(appointmentModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AppointmentModelExists(int id)
        {
            return (_context.AppointmentModel?.Any(e => e.AppointmentId == id)).GetValueOrDefault();
        }
    }
}
