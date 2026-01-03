using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace stockupApi.Application.DTOs
{
    public class MovementDto
    {
        public record MovementResponseDto
        {
            public Guid Id { get; set; }
            public Guid ProductId { get; set; }
            public int QuantityChanged { get; set; }
            public DateTime MovementDate { get; set; }
            public string MovementType { get; set; } // e.g., "IN" for stock in, "OUT" for stock out
            public int UserId { get; set; }
        }

        public record MovementCreateDto
        {
            public Guid ProductId { get; set; }
            public int QuantityChanged { get; set; }
            public string MovementType { get; set; } // e.g., "IN" for stock in, "OUT" for stock out
            public int UserId { get; set; }
        }

        public record MovementUpdateDto
        {
            public int QuantityChanged { get; set; }
            public string MovementType { get; set; } // e.g., "IN" for stock in, "OUT" for stock out
            public DateTime? UpdatedAt { get; set; }
        }

        
    }
}