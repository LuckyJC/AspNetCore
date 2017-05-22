using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AspNetCore.Models
{
    public class User
    {
        public int Id { get; set; }

        [Required]
        [StringLength(255)]
        public string Name { get; set; }

        public string LoginName { get; set; }

        public string Email { get; set; }

        public string Phone { get; set; }

        public IList<Referral> Referrals { get; set; }

        //constructor to initialize Collection so I don't forget to do it later
        public User()
        {
            Referrals = new List<Referral>();
        }
    }
}
