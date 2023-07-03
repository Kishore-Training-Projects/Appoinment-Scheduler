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
    public class MedicalRecordController : ControllerBase
    {
        private readonly AppoinmentSchedulerContext _context;

        public MedicalRecordController(AppoinmentSchedulerContext context)
        {
            _context = context;
        }

        // GET: api/MedicalRecord
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MedicalRecordModel>>> GetMedicalRecordModel()
        {
          if (_context.MedicalRecordModel == null)
          {
              return NotFound();
          }
            return await _context.MedicalRecordModel.ToListAsync();
        }

        // GET: api/MedicalRecord/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MedicalRecordModel>> GetMedicalRecordModel(int id)
        {
          if (_context.MedicalRecordModel == null)
          {
              return NotFound();
          }
            var medicalRecordModel = await _context.MedicalRecordModel.FindAsync(id);

            if (medicalRecordModel == null)
            {
                return NotFound();
            }

            return medicalRecordModel;
        }

        // PUT: api/MedicalRecord/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMedicalRecordModel(int id, MedicalRecordModel medicalRecordModel)
        {
            if (id != medicalRecordModel.MedicalRecordId)
            {
                return BadRequest();
            }

            _context.Entry(medicalRecordModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MedicalRecordModelExists(id))
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

        // POST: api/MedicalRecord
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<MedicalRecordModel>> PostMedicalRecordModel(MedicalRecordModel medicalRecordModel)
        {
          if (_context.MedicalRecordModel == null)
          {
              return Problem("Entity set 'AppoinmentSchedulerContext.MedicalRecordModel'  is null.");
          }
            _context.MedicalRecordModel.Add(medicalRecordModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMedicalRecordModel", new { id = medicalRecordModel.MedicalRecordId }, medicalRecordModel);
        }

        // DELETE: api/MedicalRecord/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMedicalRecordModel(int id)
        {
            if (_context.MedicalRecordModel == null)
            {
                return NotFound();
            }
            var medicalRecordModel = await _context.MedicalRecordModel.FindAsync(id);
            if (medicalRecordModel == null)
            {
                return NotFound();
            }

            _context.MedicalRecordModel.Remove(medicalRecordModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MedicalRecordModelExists(int id)
        {
            return (_context.MedicalRecordModel?.Any(e => e.MedicalRecordId == id)).GetValueOrDefault();
        }
    }
}
