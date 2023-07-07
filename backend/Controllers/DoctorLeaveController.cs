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
    public class DoctorLeaveController : ControllerBase
    {
        private readonly AppoinmentSchedulerContext _context;

        public DoctorLeaveController(AppoinmentSchedulerContext context)
        {
            _context = context;
        }

        // GET: api/DoctorLeave
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DoctorLeaveModel>>> GetDoctorLeaveModel()
        {
          if (_context.DoctorLeaveModel == null)
          {
              return NotFound();
          }
            return await _context.DoctorLeaveModel.Include(x=>x.doctor).ToListAsync();
        }


        // GET: api/DoctorLeave
        [HttpGet("doctor/{id}")]
        public async Task<ActionResult<IEnumerable<DoctorLeaveModel>>> GetDoctorLeaveModelbydoctor(int id)
        {
            if (_context.DoctorLeaveModel == null)
            {
                return NotFound();
            }

            return await _context.DoctorLeaveModel.Where(x=>x.doctor.DoctorId==id).ToListAsync();
        }

        // GET: api/DoctorLeave/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DoctorLeaveModel>> GetDoctorLeaveModel(int id)
        {
          if (_context.DoctorLeaveModel == null)
          {
              return NotFound();
          }
            var doctorLeaveModel = await _context.DoctorLeaveModel.FindAsync(id);

            if (doctorLeaveModel == null)
            {
                return NotFound();
            }

            return doctorLeaveModel;
        }

        // PUT: api/DoctorLeave/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDoctorLeaveModel(int id, DoctorLeaveModel doctorLeaveModel)
        {
            if (id != doctorLeaveModel.LeaveId)
            {
                return BadRequest();
            }

            _context.Entry(doctorLeaveModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DoctorLeaveModelExists(id))
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

        // POST: api/DoctorLeave
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<DoctorLeaveModel>> PostDoctorLeaveModel(DoctorLeaveModel doctorLeaveModel)
        {
          if (_context.DoctorLeaveModel == null)
          {
              return Problem("Entity set 'AppoinmentSchedulerContext.DoctorLeaveModel'  is null.");
          }

            var doctormodel = await _context.DoctorModel.Where(x=>x.DoctorId == doctorLeaveModel.doctor.DoctorId).FirstOrDefaultAsync();

            doctorLeaveModel.doctor = doctormodel;

            _context.DoctorLeaveModel.Add(doctorLeaveModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDoctorLeaveModel", new { id = doctorLeaveModel.LeaveId }, doctorLeaveModel);
        }

        // DELETE: api/DoctorLeave/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDoctorLeaveModel(int id)
        {
            if (_context.DoctorLeaveModel == null)
            {
                return NotFound();
            }
            var doctorLeaveModel = await _context.DoctorLeaveModel.FindAsync(id);
            if (doctorLeaveModel == null)
            {
                return NotFound();
            }

            _context.DoctorLeaveModel.Remove(doctorLeaveModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DoctorLeaveModelExists(int id)
        {
            return (_context.DoctorLeaveModel?.Any(e => e.LeaveId == id)).GetValueOrDefault();
        }
    }
}
