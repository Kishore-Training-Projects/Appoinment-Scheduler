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
    public class PatientController : ControllerBase
    {
        private readonly AppoinmentSchedulerContext _context;

        public PatientController(AppoinmentSchedulerContext context)
        {
            _context = context;
        }

        // GET: api/Patient
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PatientModel>>> GetPatientModel()
        {
          if (_context.PatientModel == null)
          {
              return NotFound();
          }
            return await _context.PatientModel.ToListAsync();
        }

        // GET: api/Patient/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PatientModel>> GetPatientModel(int id)
        {
          if (_context.PatientModel == null)
          {
              return NotFound();
          }
            var patientModel = await _context.PatientModel.FindAsync(id);

            if (patientModel == null)
            {
                return NotFound();
            }

            return patientModel;
        }



        // GET: api/Patient/search/9562513517
        [HttpGet("search/{mobile}")]
        public async Task<ActionResult<PatientModel>> GetPatientMobileModel(string mobile)
        {
            if (_context.PatientModel == null)
            {
                return NotFound();
            }
            var patientModel = await _context.PatientModel.Where(x=>x.PatientMobile==mobile).FirstOrDefaultAsync();

            if (patientModel == null)
            {
                return NotFound();
            }

            return patientModel;
        }




        // PUT: api/Patient/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPatientModel(int id, PatientModel patientModel)
        {
            if (id != patientModel.PatientId)
            {
                return BadRequest();
            }

            _context.Entry(patientModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PatientModelExists(id))
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

        // POST: api/Patient
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PatientModel>> PostPatientModel(PatientModel patientModel)
        {
          if (_context.PatientModel == null)
          {
              return Problem("Entity set 'AppoinmentSchedulerContext.PatientModel'  is null.");
          }
            _context.PatientModel.Add(patientModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPatientModel", new { id = patientModel.PatientId }, patientModel);
        }

        // DELETE: api/Patient/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePatientModel(int id)
        {
            if (_context.PatientModel == null)
            {
                return NotFound();
            }
            var patientModel = await _context.PatientModel.FindAsync(id);
            if (patientModel == null)
            {
                return NotFound();
            }

            _context.PatientModel.Remove(patientModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PatientModelExists(int id)
        {
            return (_context.PatientModel?.Any(e => e.PatientId == id)).GetValueOrDefault();
        }
    }
}
