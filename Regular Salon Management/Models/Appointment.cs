using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Regular_Salon_Management.Models
{
    public class Appointment
    {
        public int Id { get; set; }
        public DateTime ClientAppointment { get; set; }
        public DateTime Created { get; set; }
        [ForeignKey("Client")]
        public Guid ClientId { get; set; }

        public virtual Client Client { get; set; }

    }
}