using System.ComponentModel.DataAnnotations;

namespace APIFun.Controllers.Data
{
    public class MarriottFood
    {
        [Key]
        public int FoodId { get; set; }
        public string EventName { get; set; }
        public string VendorName { get; set; }  
        public string FoodRating { get; set;}
    }
}
