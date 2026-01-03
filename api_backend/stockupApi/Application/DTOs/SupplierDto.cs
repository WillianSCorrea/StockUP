using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.NetworkInformation;
using System.Threading.Tasks;

namespace stockupApi.Application.DTOs
{
    public class SupplierDto
    {
        public record supplierResponseDto
        {
            public Guid Id { get; set; }
            public string Name { get; set; }
            public string ContactEmail { get; set; }
            public string PhoneNumber { get; set; }
            public string Address { get; set; }
        }
        public record SupplierCreateDto
        {
            public string Name { get; set; }
            public string ContactEmail { get; set; }
            public string PhoneNumber { get; set; }
            public string Address { get; set; }
        }
        public record SupplierUpdateDto
        {
            public string Name { get; set; }
            public string ContactEmail { get; set; }
            public string PhoneNumber { get; set; }
            public string Address { get; set; }
            public bool IsActive { get; set; }
        }
        
    }
}