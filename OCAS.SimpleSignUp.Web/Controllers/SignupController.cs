using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OCAS.SimpleSignUp.Web.Model;
using OCAS.SimpleSignUp.Web.Data;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace OCAS.SimpleSignUp.Web.Controllers
{
    [Route("api/[controller]")]
    public class SignupController : Controller
    {
        private readonly SignUpContext _context;

        public SignupController(SignUpContext context)
        {
            _context = context;
        }

        [HttpGet("[action]")]
        public IEnumerable<SignUp> Get()
        {
            return _context.signUp.ToList();
        }

        

        // POST api/values
        [HttpPost]
        public void Post([FromBody]SignUp signup)
        {
            _context.Add(signup);
            _context.SaveChanges();
        }

        
    }
}
