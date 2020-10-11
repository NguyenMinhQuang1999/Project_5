using Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace BLL
{
    public partial interface IBillBusiness
    {
        bool Create(BillModel model);
        bool Delete(string id);
        bool changeStatus(string id, string msg);
        List<int> ThongKeDoanhThuTheoThang();
        List<BillModel> GetAllBill();
        BillDetailModel GetBillByID(string id);
    }
}
