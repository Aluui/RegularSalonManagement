using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Regular_Salon_Management.Models
{
    public class Client
    {
        public Guid Id { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        public string Email { get; set; }
        public int PhoneNumber { get; set; }

        [ForeignKey("Service")]
        public int ServiceId { get; set; }

        [ForeignKey("Product")]
        public int ProductId { get; set; }


        public virtual Services Service { get; set; }

        public virtual Products Product { get; set; }

    }
}