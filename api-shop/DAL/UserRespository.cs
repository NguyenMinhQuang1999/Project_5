using DAL.Helper;
using Helper;
using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;

namespace DAL
{
    public partial class UserRespository:IUserResponsitory
    {

        private IDatabaseHelper _dbHelper;
        public UserRespository(IDatabaseHelper dbHelper)
        {
            _dbHelper = dbHelper;
        }

        public List<UserModel> _users = new List<UserModel>()
        {
            new UserModel {Id = 1, FirstName ="Quang", LastName ="Nguyen", Username ="admin", Password="admin", Role=Role.Admin },
            new UserModel {Id = 1, FirstName ="Hoang", LastName ="Nguyen", Username ="user", Password="123456", Role=Role.Admin },
        };


        public UserModel GetUser (string username, string password)
        {
            var user = _users.SingleOrDefault(x => x.Username == username && x.Password == password);
            if(user == null)
            {
                return null;
            }
            return user;
        }

        public IEnumerable<UserModel> GetAll()
        {
            return _users.WithoutPasswords();
        }

        public UserModel GetById(int id)
        {
            var user = _users.FirstOrDefault(x => x.Id == id);
            return user.WithoutPassword();
        }
    }
}
