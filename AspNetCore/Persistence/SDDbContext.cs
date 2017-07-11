using AspNetCore.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AspNetCore.Persistence
{
    public class SdDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Referral> Referrals { get; set; }
        
        //From vega project
        public DbSet<Make> Makes { get; set; }
        public DbSet<Feature> Features { get; set; }
        public DbSet<Vehicle> Vehicles { get; set; }
        public DbSet<Model> Models { get; set; }

        //ctor
        public SdDbContext(DbContextOptions<SdDbContext> options)
            : base(options)
        {
        }

        //other methods
        //need to override OnModelCreating to make a composite primary key using vehicle id and feature id
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<VehicleFeature>().HasKey(vf =>
                new { vf.VehicleId, vf.FeatureId });
        }

    }
}
