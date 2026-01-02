using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace stockupApi.Models
{
    public class Product
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string Category { get; set; }
        public int CurrentStock { get; set; }
        public int MinimumStock { get; set; }
        public int UserId { get; set; }
        public int SupplierId { get; set; }
        public bool IsActive { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }

        
    }
}