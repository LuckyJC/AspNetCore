using AspNetCore.Models;
using AspNetCore.Persistence;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AspNetCore.Controllers
{
    public class UsersController : Controller
    {
        private readonly SDDbContext context;
        public UsersController(SDDbContext context)
        {
            this.context = context;
        }

        [HttpGet("/api/users")]
        public async Task<IEnumerable<User>> GetUsers()
        {
            return await context.Users.Include(m => m.Referrals).ToListAsync();
        }
    }
}
