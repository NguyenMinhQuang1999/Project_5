using Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace BLL
{
   public partial interface IUserBusiness
    {
        UserModel Authenticate(string username, string email);

        IEnumerable<UserModel> GetAll();
        UserModel GetById(int id);
    }
}
