namespace MoviesDB.Web.Migrations
{
    using Core;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<MoviesDB.Web.Infrastructure.MovieDB>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(MoviesDB.Web.Infrastructure.MovieDB context)
        {
            context.Studios.AddOrUpdate(d => d.Name,
                new Studio() { Name="Paramount" },
                new Studio() { Name="Sony" },
                new Studio() { Name="Fox" },
                new Studio() { Name="Lionsgate" }
            );
        }
    }
}
