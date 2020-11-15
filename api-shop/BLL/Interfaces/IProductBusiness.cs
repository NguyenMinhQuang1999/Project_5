using Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace BLL
{
    public partial interface IProductBusiness
    {
        bool Create(ProductModel model);
        bool Edit(string id, ProductModel model);
        bool Delete(string id);
        ProductModel GetDatabyID(string id);
        List<ProductModel> GetDataAll();
        List<ProductModel> GetProductRelated(int id, string category_id);
        List<ProductModel> SearchName(string searchName);
        List<ProductModel> SanPhamBanChay();
        List<ProductModel> SanPhamBanCham();
        List<ProductModel> Search(int pageIndex, int pageSize, out long total,  string category_id);
        List<ProductModel> SearchHome(int pageIndex, int pageSize, out long total, string keyword);
    }
}
