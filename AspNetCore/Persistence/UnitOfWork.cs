using System.Threading.Tasks;

namespace AspNetCore.Persistence
{
    public interface IUnitOfWork
    {
        Task CompleteAsync();
    }

    public class UnitOfWork : IUnitOfWork
    {
        private readonly SdDbContext _context;
        public UnitOfWork(SdDbContext _context)
        {
            this._context = _context;

        }
        
        public async Task CompleteAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}