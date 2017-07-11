using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;

namespace AspNetCore.Models.Resources
{
    public class SaveVehicleResource
    {
        public int Id { get; set; }

        //add foreign key property
        public int ModelId { get; set; }

        public bool IsRegistered { get; set; }
        
        [Required]
        public ContactResource Contact { get; set; }

        public ICollection<int> Features { get; set; }

        public SaveVehicleResource()
        {
            Features = new Collection<int>();
        }
    }
}