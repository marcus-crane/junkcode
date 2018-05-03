using MoviesDB.Core;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace MoviesDB.Web.Infrastructure
{
    // DbContext derives from System.Data.Entity and takes care of SQL connection etc(?)
    // IStudioDataSource is to abstract away from MovieDB so controller aren't hardcoded(?)
    public class MovieDB : DbContext, IStudioDataSource
    {
        public MovieDB() : base("DefaultConnection")
        {

        }

        public DbSet<Movie> Movies { get; set; }
        public DbSet<Studio> Studios { get; set; }

        // Need to implement a Save method so we can save the data into the database
        void IStudioDataSource.Save()
        {
            // EntityFramework API call that handles CRUD actions
            SaveChanges();
        }

        // We need to implement an IQueryable instance as the default MovieDB versions are protected
        IQueryable<Movie> IStudioDataSource.Movies
        {
            get
            {
                return Movies;
            }
        }

        IQueryable<Studio> IStudioDataSource.Studios
        {
            get
            {
                return Studios;
            }
        }
    }
}