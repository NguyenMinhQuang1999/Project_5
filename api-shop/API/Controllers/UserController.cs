using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BLL;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Model;

namespace API.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class UsersController : ControllerBase
    {
        private IUserBusiness _userBusiness;

        public UsersController(IUserBusiness userService)
        {
            _userBusiness = userService;
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public IActionResult Authenticate([FromBody] AuthenticateModel model)
        {
            var user = _userBusiness.Authenticate(model.Username, model.Password);

            if (user == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            return Ok(user);
        }

        //[Authorize(Roles = Role.User)]
        [HttpGet]
        [Route("get-all")]
        public IActionResult GetAll()
        {
            var users = _userBusiness.GetAll();
            return Ok(users);
        }

        //[Authorize(Roles = Role.User)]
        [HttpGet("get-by-id/{id}")]
        public IActionResult GetById(int id)
        {
            // only allow admins to access other user records
            var currentUserId = int.Parse(User.Identity.Name);
            //  if (id != currentUserId && !User.IsInRole(Role.Admin))
            //      return Forbid();

            var user = _userBusiness.GetById(id);

            if (user == null)
                return NotFound();

            return Ok(user);
        }
    }
}
