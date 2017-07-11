using System.Collections.Generic;
using System.Threading.Tasks;
using AspNetCore.Models;
using Microsoft.EntityFrameworkCore;

namespace AspNetCore.Persistence
{
    public interface IFeatureRepository
    {
         Task<IEnumerable<Feature>> GetFeatures();
    }
    
    public class FeatureRepository : IFeatureRepository
    {
        private readonly SdDbContext _context;
        public FeatureRepository(SdDbContext context)
        {
            this._context = context;
        }

        public async Task<IEnumerable<Feature>> GetFeatures()
        {
            return await _context.Features.ToListAsync();
        }

    }
}