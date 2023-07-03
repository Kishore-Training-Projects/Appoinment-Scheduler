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
    public class PrescriptionController : ControllerBase
    {
        private readonly AppoinmentSchedulerContext _context;

        public PrescriptionController(AppoinmentSchedulerContext context)
        {
            _context = context;
        }

        // GET: api/Prescription
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PrescriptionModel>>> GetPrescriptionModel()
        {
          if (_context.PrescriptionModel == null)
          {
              return NotFound();
          }
            return await _context.PrescriptionModel.ToListAsync();
        }

        // GET: api/Prescription/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PrescriptionModel>> GetPrescriptionModel(int id)
        {
          if (_context.PrescriptionModel == null)
          {
              return NotFound();
          }
            var prescriptionModel = await _context.PrescriptionModel.FindAsync(id);

            if (prescriptionModel == null)
            {
                return NotFound();
            }

            return prescriptionModel;
        }

        // PUT: api/Prescription/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPrescriptionModel(int id, PrescriptionModel prescriptionModel)
        {
            if (id != prescriptionModel.PrescriptionId)
            {
                return BadRequest();
            }

            _context.Entry(prescriptionModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PrescriptionModelExists(id))
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

        // POST: api/Prescription
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PrescriptionModel>> PostPrescriptionModel(PrescriptionModel prescriptionModel)
        {
          if (_context.PrescriptionModel == null)
          {
              return Problem("Entity set 'AppoinmentSchedulerContext.PrescriptionModel'  is null.");
          }
            _context.PrescriptionModel.Add(prescriptionModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPrescriptionModel", new { id = prescriptionModel.PrescriptionId }, prescriptionModel);
        }

        // DELETE: api/Prescription/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePrescriptionModel(int id)
        {
            if (_context.PrescriptionModel == null)
            {
                return NotFound();
            }
            var prescriptionModel = await _context.PrescriptionModel.FindAsync(id);
            if (prescriptionModel == null)
            {
                return NotFound();
            }

            _context.PrescriptionModel.Remove(prescriptionModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PrescriptionModelExists(int id)
        {
            return (_context.PrescriptionModel?.Any(e => e.PrescriptionId == id)).GetValueOrDefault();
        }
    }
}
