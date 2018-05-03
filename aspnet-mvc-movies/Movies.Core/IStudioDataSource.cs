using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MoviesDB.Core
{
    public interface IStudioDataSource
    {
        // Queryable by Linq (whatever that does)
        IQueryable<Movie> Movies { get; }
        IQueryable<Studio> Studios { get; }

        void Save();
    }
}
