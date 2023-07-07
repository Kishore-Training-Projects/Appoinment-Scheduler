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
    public class PaymentController : ControllerBase
    {
        private readonly AppoinmentSchedulerContext _context;

        public PaymentController(AppoinmentSchedulerContext context)
        {
            _context = context;
        }

        // GET: api/Payment
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PaymentModel>>> GetPaymentModel()
        {
          if (_context.PaymentModel == null)
          {
              return NotFound();
          }
            return await _context.PaymentModel.Include(x=>x.patient).ToListAsync();
        }


        // GET: api/Payment
        [HttpGet("patient/{id}")]
        public async Task<ActionResult<IEnumerable<PaymentModel>>> GetPaymentModelbypatient(int id)
        {
            if (_context.PaymentModel == null)
            {
                return NotFound();
            }
            return await _context.PaymentModel.Include(x=>x.patient).Where(x=>x.patient.PatientId == id).ToListAsync();
        }


        // GET: api/Payment/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PaymentModel>> GetPaymentModel(int id)
        {
          if (_context.PaymentModel == null)
          {
              return NotFound();
          }
            var paymentModel = await _context.PaymentModel.FindAsync(id);

            if (paymentModel == null)
            {
                return NotFound();
            }

            return paymentModel;
        }

        // PUT: api/Payment/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPaymentModel(int id, PaymentModel paymentModel)
        {
            if (id != paymentModel.paymentId)
            {
                return BadRequest();
            }

            _context.Entry(paymentModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PaymentModelExists(id))
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

        // POST: api/Payment
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PaymentModel>> PostPaymentModel(PaymentModel paymentModel)
        {
            DateTime today = DateTime.Now;

          if (_context.PaymentModel == null)
          {
              return Problem("Entity set 'AppoinmentSchedulerContext.PaymentModel'  is null.");
          }

            var patient = await _context.PatientModel.Where(x=>x.PatientId==paymentModel.patient.PatientId).FirstOrDefaultAsync();

            if (patient == null)
            {
                return Problem("patient missing");
            }

            paymentModel.paymentTimestamp = today;
            paymentModel.patient = patient;


            _context.PaymentModel.Add(paymentModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPaymentModel", new { id = paymentModel.paymentId }, paymentModel);
        }

        // DELETE: api/Payment/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePaymentModel(int id)
        {
            if (_context.PaymentModel == null)
            {
                return NotFound();
            }
            var paymentModel = await _context.PaymentModel.FindAsync(id);
            if (paymentModel == null)
            {
                return NotFound();
            }

            _context.PaymentModel.Remove(paymentModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PaymentModelExists(int id)
        {
            return (_context.PaymentModel?.Any(e => e.paymentId == id)).GetValueOrDefault();
        }
    }
}
