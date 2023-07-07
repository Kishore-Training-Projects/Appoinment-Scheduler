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
            return await _context.MedicalRecordModel.Include(x=>x.Appointment).Include(x=>x.Patient).Include(x=>x.Appointment.Doctor).ToListAsync();
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

        // GET: api/MedicalRecord/5
        [HttpGet("reception")]
        public async Task<ActionResult<MedicalRecordModel>> GetMedicalRecordModelpatient(int id1,int id2)
        {
            if (_context.MedicalRecordModel == null)
            {
                return NotFound();
            }
            var medicalRecordModel = await _context.MedicalRecordModel.Where(x=>x.Patient.PatientId==id1 && x.Appointment.AppointmentId == id2).FirstOrDefaultAsync();

            if (medicalRecordModel == null)
            {
                return NotFound();
            }

            return medicalRecordModel;
        }


        // GET: api/MedicalRecord/5
        [HttpGet("patient/last/{id}")]
        public async Task<ActionResult<MedicalRecordModel>> GetlastMedicalRecordModelofpatient(int id)
        {
            if (_context.MedicalRecordModel == null)
            {
                return NotFound();
            }
            var medicalRecordModel = await _context.MedicalRecordModel.Where(x=>x.Patient.PatientId == id).OrderByDescending(x => x.MedicalRecordTimestamp).FirstOrDefaultAsync();

            if (medicalRecordModel == null)
            {
                return NotFound();
            }

            return medicalRecordModel;
        }


        // GET: api/MedicalRecord/5
        [HttpGet("patient/{id}")]
        public async Task<ActionResult<IEnumerable<MedicalRecordModel>>> GetMedicalRecordModelbypatient(int id)
        {
            if (_context.MedicalRecordModel == null)
            {
                return NotFound();
            }
            return await _context.MedicalRecordModel.Include(x => x.Appointment).Where(x=>x.Patient.PatientId == id).ToListAsync();
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


            DateTime currentTimestamp = DateTime.Now;


            medicalRecordModel.MedicalRecordTimestamp = currentTimestamp;

            

            var appointmentModel = await _context.AppointmentModel.Where(x => x.AppointmentId == medicalRecordModel.Appointment.AppointmentId).Include(x=>x.Patient).FirstOrDefaultAsync();
            var patientModel = await _context.PatientModel.Where(x => x.PatientId == appointmentModel.Patient.PatientId).FirstOrDefaultAsync();

            medicalRecordModel.Patient = patientModel;
            medicalRecordModel.Appointment = appointmentModel;

            appointmentModel.MedicalrecordStatus = true;
            appointmentModel.AppointmentStatus = "waiting";

            try
            {

            _context.MedicalRecordModel.Add(medicalRecordModel);
            await _context.SaveChangesAsync();


                _context.Entry(appointmentModel).State = EntityState.Modified;

                try
                {
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    return NotFound();
                }


            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }

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
