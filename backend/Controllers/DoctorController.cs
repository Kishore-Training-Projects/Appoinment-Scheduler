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
    public class DoctorController : ControllerBase
    {
        private readonly AppoinmentSchedulerContext _context;

        public DoctorController(AppoinmentSchedulerContext context)
        {
            _context = context;
        }

        // GET: api/Doctor
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DoctorModel>>> GetDoctorModel()
        {
          if (_context.DoctorModel == null)
          {
              return NotFound();
          }
            return await _context.DoctorModel.ToListAsync();
        }

        // GET: api/Doctor/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DoctorModel>> GetDoctorModel(int id)
        {
          if (_context.DoctorModel == null)
          {
              return NotFound();
          }
            var doctorModel = await _context.DoctorModel.FindAsync(id);

            if (doctorModel == null)
            {
                return NotFound();
            }

            return doctorModel;
        }

        // PUT: api/Doctor/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDoctorModel(int id, DoctorModel doctorModel)
        {
            if (id != doctorModel.DoctorId)
            {
                return BadRequest();
            }

            _context.Entry(doctorModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DoctorModelExists(id))
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

        // POST: api/Doctor
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<DoctorModel>> PostDoctorModel(DoctorModel doctorModel)
        {
          if (_context.DoctorModel == null)
          {
              return Problem("Entity set 'AppoinmentSchedulerContext.DoctorModel'  is null.");
          }
            _context.DoctorModel.Add(doctorModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDoctorModel", new { id = doctorModel.DoctorId }, doctorModel);
        }

        // DELETE: api/Doctor/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDoctorModel(int id)
        {
            if (_context.DoctorModel == null)
            {
                return NotFound();
            }
            var doctorModel = await _context.DoctorModel.FindAsync(id);
            if (doctorModel == null)
            {
                return NotFound();
            }

            _context.DoctorModel.Remove(doctorModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DoctorModelExists(int id)
        {
            return (_context.DoctorModel?.Any(e => e.DoctorId == id)).GetValueOrDefault();
        }
    }
}
