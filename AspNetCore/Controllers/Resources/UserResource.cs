using AspNetCore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AspNetCore.Controllers.Resources
{
    public class UserResource
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string LoginName { get; set; }

        public string Email { get; set; }

        public string Phone { get; set; }

        public IList<ReferralResource> Referrals { get; set; }

        public UserResource()
        {
            Referrals = new List<ReferralResource>();
        }

    }
}
