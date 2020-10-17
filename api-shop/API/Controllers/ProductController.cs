﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BLL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Model;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private IProductBusiness _ProductBusiness;
        public ProductController(IProductBusiness ProductBusiness)
        {
            _ProductBusiness = ProductBusiness;
        }

        [Route("create-product")]
        [HttpPost]
        public ProductModel CreateProduct([FromBody] ProductModel model)
        {
            
            _ProductBusiness.Create(model);
            return model;
        }

    
        [Route("update-product/{id}")]
        [HttpPost]
        public ProductModel Edit(string id, [FromBody] ProductModel model)
        {
            _ProductBusiness.Edit(id, model);
            return model;
        }
        [Route("delete-product/{id}")]

        public bool Delete(string id)
        {
            return _ProductBusiness.Delete(id);

        }

        [Route("get-by-id/{id}")]
        [HttpGet]
        public ProductModel GetDatabyID(string id)
        {
            return _ProductBusiness.GetDatabyID(id);
        }
        [Route("get-all")]
        [HttpGet]
        public IEnumerable<ProductModel> GetDatabAll()
        {
            return _ProductBusiness.GetDataAll();
        }

        [Route("get-product-related/{id}/{category_id}")]
        [HttpGet]
        public IEnumerable<ProductModel> GetProductRelated(int id, string category_id)
        {
            return _ProductBusiness.GetProductRelated(id, category_id);
        }

        [Route("search")]
        [HttpPost]
        public ResponseModel Search([FromBody] Dictionary<string, object> formData)
        {
            var response = new ResponseModel();
            try
            {
                var page = int.Parse(formData["page"].ToString());
                var pageSize = int.Parse(formData["pageSize"].ToString());
                string category_id = "";
                if (formData.Keys.Contains("category_id") && !string.IsNullOrEmpty(Convert.ToString(formData["category_id"]))) { category_id = Convert.ToString(formData["category_id"]); }
                long total = 0;
                var data = _ProductBusiness.Search(page, pageSize, out total, category_id);
                response.TotalItems = total;
                response.Data = data;
                response.Page = page;
                response.PageSize = pageSize;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
            return response;
        }
    }
}
