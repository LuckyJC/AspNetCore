using AspNetCore.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AspNetCore.Persistence
{
    public class SDDbContext : DbContext
    {
        public SDDbContext(DbContextOptions<SDDbContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Referral> Referrals { get; set; }

    }
}
