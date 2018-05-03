 using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MoviesDB.Core
{
    public class Movie
    {
        // Making properties virtual can "add change tracking and other additional features" which I don't know about yet
        public virtual int Id { get; set; }
        public virtual string Name { get; set; }
        public virtual DateTime? ReleaseDate { get; set; }
    }
}
