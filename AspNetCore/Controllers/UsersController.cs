using AspNetCore.Controllers.Resources;
using AspNetCore.Models;
using AspNetCore.Persistence;
using AutoMapper;
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
        private readonly SdDbContext context;

        private readonly IMapper mapper;

        public UsersController(SdDbContext context, IMapper mapper)
        {
            this.mapper = mapper;
            this.context = context;
        }

        [HttpGet("/api/users")]
        public async Task<IEnumerable<UserResource>> GetUsers()
        {
            var users = await context.Users.Include(m => m.Referrals).ToListAsync();

            return mapper.Map<List<User>, List<UserResource>>(users);
        }
    }
}
