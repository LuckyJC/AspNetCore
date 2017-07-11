
using System.Collections.Generic;
using System.Threading.Tasks;
using AspNetCore.Models;
using AspNetCore.Persistence;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace AspNetCore.Controllers
{
    public class FeaturesController
    {
        private readonly IMapper _mapper;
        private readonly IFeatureRepository _repository;
        private readonly IUnitOfWork _unitOfWork;
        public FeaturesController(IMapper _mapper, IFeatureRepository _repository, IUnitOfWork _unitOfWork)
        {
            this._unitOfWork = _unitOfWork;
            this._repository = _repository;
            this._mapper = _mapper;
        }

        [HttpGet("/api/features")]
        public async Task<IEnumerable<Feature>> GetFeatures()
        {
            //var features = await _context.Features.ToListAsync();
            var features = await _repository.GetFeatures();

            return _mapper.Map<IEnumerable<Feature>, IEnumerable<Feature>>(features);
        }

    }
}