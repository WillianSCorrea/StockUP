using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace stockupApi.Application.DTOs
{
    public class ProductDto
    {
        public record ProductResponseDto
        {
            public Guid Id { get; set; }
            public string Name { get; set; }
            public string Description { get; set; }
            public decimal Price { get; set; }
            public int CurrentStock { get; set; }
            public DateTime CreatedAt { get; set; }
            public DateTime? UpdatedAt { get; set; }
            public string Category { get; set; }
            public int MinimumStock { get; set; }
            public int UserId { get; set; }
            public int SupplierId { get; set; }
            public bool IsActive { get; set; }
            
        }

        public record ProductCreateDto
        {
            public string Name { get; set; }
            public string Description { get; set; }
            public decimal Price { get; set; }
            public int Quantity { get; set; }
            public int UserId { get; set; }
            public int SupplierId { get; set; }
            public string Category { get; set; }
            public int MinimumStock { get; set; }
        }

        public record ProductUpdateDto
        {
            public string Name { get; set; }
            public string Description { get; set; }
            public decimal Price { get; set; }
            public int Quantity { get; set; }
            public string Category { get; set; }
            public int MinimumStock { get; set; }
            public bool IsActive { get; set; }
            public int SupplierId { get; set; }
            public int UserId { get; set; }
            public DateTime? UpdatedAt { get; set; }
        }

        public record ProductMovementDto
        {
            public Guid Id { get; set; }
            public int CurrentStock { get; set; }
        }
    }
}