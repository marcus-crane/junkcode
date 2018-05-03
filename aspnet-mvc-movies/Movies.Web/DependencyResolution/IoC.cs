using MoviesDB.Core;
using MoviesDB.Web.Infrastructure;
using StructureMap;

namespace Movies.Web
{
    public static class IoC {
        public static IContainer Initialize() {
            ObjectFactory.Initialize(x =>
                        {
                            x.Scan(scan =>
                                    {
                                        scan.TheCallingAssembly();
                                        scan.WithDefaultConventions();
                                    });
                            x.For<IStudioDataSource>().HttpContextScoped().Use<MovieDB>();
                        });
            return ObjectFactory.Container;
        }
    }
}