using System.Collections.Generic;
using System.Threading.Tasks;
using AspNetCore.Models;
using AspNetCore.Models.Resources;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace AspNetCore.Persistence
{
    public interface IMakeRepository
    {
        Task<IEnumerable<Make>> GetMakes();
    }

    public class MakeRepository : IMakeRepository
    {
        private readonly SdDbContext _context;
        private readonly IMapper _mapper;
        public MakeRepository(SdDbContext context, IMapper mapper)
        {
            this._mapper = mapper;
            this._context = context;
        }

        public async Task<IEnumerable<Make>> GetMakes()
        {
            return await _context.Makes.Include(m => m.Models).ToListAsync();

            //return _mapper.Map<List<Make>, List<MakeResource>>(makes);
        }
    }
}