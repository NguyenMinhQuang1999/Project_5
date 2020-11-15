using Microsoft.VisualBasic;
using System;
using System.Collections.Generic;
using System.Text;

namespace Model
{
   public class BillDetailModel
    {
        public string id { get; set; }
        public string bill_id { get; set; }
        public int product_id { get; set; }
        public int  quantity_sale { get; set; }
        public int price { get; set; }
        public string name  {   set; get;   }
        public string address { get; set; }
        public string customer_name { get; set; }
        public string note { get; set; }
        public DateTime? created_at { get; set; }
        public string phone { get; set; }
        public int total { get; set; }
    }
}
