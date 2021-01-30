using GestForm.Business;
using GestForm.Business.Dtos;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GestForm.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TestGestFormController : Controller
    {
        private readonly ICheckNumber checkNumberBC;

        public TestGestFormController(ICheckNumber checkNumberBC)
        {
            this.checkNumberBC = checkNumberBC;
        }

        [HttpPost]
        [Route("results", Name = "getResults")]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]

        public ActionResult<IEnumerable<ModuloResult>> GetResults( [FromBody] IEnumerable<int> numbers)
        {
            IEnumerable<ModuloResult> res = null;
            try
            {
                 res = numbers.Select(number => { return this.checkNumberBC.CheckModulo(number); });
            } catch( Exception ex)
            {
                return BadRequest(ex);
            }           
            return Ok(res);
        }
    }
}
