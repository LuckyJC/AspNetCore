using System.Collections.Generic;
using System.Threading.Tasks;
using AspNetCore.Models;
using AspNetCore.Models.Resources;
using AspNetCore.Persistence;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AspNetCore.Controllers
{
    public class MakesController : Controller
    {
        private readonly IMapper _mapper;
        private readonly IMakeRepository _repository;
        private readonly IUnitOfWork _unitOfWork;
        public MakesController(IMapper mapper, IMakeRepository repository, IUnitOfWork unitOfWork)
        {
            this._unitOfWork = unitOfWork;
            this._repository = repository;
            this._mapper = mapper;
        }

        [HttpGet("/api/makes")]
        public async Task<IEnumerable<MakeResource>> GetMakes()
        {
           var makes = await _repository.GetMakes();

           return _mapper.Map<IEnumerable<Make>, IEnumerable<MakeResource>>(makes);
        }
    }
}