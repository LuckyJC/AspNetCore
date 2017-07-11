using System.Collections.Generic;
using System.Threading.Tasks;
using AspNetCore.Models;
using Microsoft.EntityFrameworkCore;

namespace AspNetCore.Persistence
{
    public interface IVehicleRepository
    {
         Task<Vehicle> GetVehicle(int id, bool includeRelated = true);
         void Add(Vehicle vehcile);
         void Remove(Vehicle vehicle);
         Task<IEnumerable<Vehicle>> GetVehicles(bool includeRelated = true);
    }

    public class VehicleRepository : IVehicleRepository
    {
        private readonly SdDbContext _context;
        public VehicleRepository(SdDbContext _context)
        {
            this._context = _context;
        }

        public async Task<Vehicle> GetVehicle(int id, bool includeRelated = true) //setting to true as we need to include this by default for most things
        {
            //only return id- keeps query light
            if(!includeRelated)
                return await _context.Vehicles.FindAsync(id);

            //provides a complete representation of vehicle
            return await _context.Vehicles
                .Include(v => v.Features)
                    .ThenInclude(vf => vf.Feature) //new method in ef core allows us to eager load nested objects
                .Include(v => v.Model)
                    .ThenInclude(m => m.Make) //works with mapping profile to eager load make with model
                .SingleOrDefaultAsync(v => v.Id == id);
        }

        public void Add(Vehicle vehcile)
        {
            _context.Vehicles.Add(vehcile);
        }

        public void Remove(Vehicle vehicle)
        {
            _context.Vehicles.Remove(vehicle);
        }

        public async Task<IEnumerable<Vehicle>> GetVehicles(bool includeRelated = true) //setting to true as we need to include this by default for most things
        {
            //only return id- keeps query light
            if(!includeRelated)
                return await _context.Vehicles.ToListAsync();

            //provides a complete representation of vehicle
            return await _context.Vehicles
                .Include(v => v.Features)
                    .ThenInclude(vf => vf.Feature) //new method in ef core allows us to eager load nested objects
                .Include(v => v.Model)
                    .ThenInclude(m => m.Make) //works with mapping profile to eager load make with model
                .ToListAsync();
        }

    }
}