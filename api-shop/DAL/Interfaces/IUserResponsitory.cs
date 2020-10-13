using Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL
{
    public  partial interface  IUserResponsitory
    {
        UserModel GetUser(string usename, string password);
        IEnumerable<UserModel> GetAll();
        UserModel GetById(int id);
    }
}
