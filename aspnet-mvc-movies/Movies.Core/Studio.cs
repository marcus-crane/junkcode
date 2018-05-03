using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MoviesDB.Core
{
    public class Studio
    {
        public virtual int Id { get; set; }
        public virtual string Name { get; set; }
        // One studio can have multiple movies (0 or more) hence ICollection
        public virtual ICollection<Movie> Movies { get; set; }
    }
}
