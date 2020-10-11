using Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL
{
   public partial interface IBillResponsitory
    {
        bool Create(BillModel model);
        bool Delete(string id);
        bool changeStatus(string id, string msg);

         List<int> ThongKeDoanhThuTheoThang();
         List<BillModel> GetAllBill();
        BillDetailModel GetBillByID(string id);
    }
}
