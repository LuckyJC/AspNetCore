using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AspNetCore.Models
{
    [Table("Referrals")]
    public class Referral
    {
        public int Id { get; set; }

        [Required]
        [StringLength(255)]
        public string Name { get; set; }

        public User User { get; set; }

        //entity framework should know that User and UserId are the same; will create one column for both properties
        public int UserId { get; set; } 
    }
}
