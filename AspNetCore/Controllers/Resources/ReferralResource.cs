using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AspNetCore.Controllers.Resources
{
    public class ReferralResource
    {
        public int Id { get; set; }

        public string Name { get; set; }

        //removed inverse relationship to users- causes a loop in json
    }
}
