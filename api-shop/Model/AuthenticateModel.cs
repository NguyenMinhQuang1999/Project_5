using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Model
{
    public class AuthenticateModel
    {
        [Required]
        public string Username {set; get;}
        [Required]
        public string Password { set; get; }
    }
}
