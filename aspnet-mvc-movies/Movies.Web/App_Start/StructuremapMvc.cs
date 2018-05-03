using System.Web.Mvc;
using StructureMap;
using Movies.Web;

[assembly: WebActivator.PreApplicationStartMethod(typeof(MoviesDB.Web.App_Start.StructuremapMvc), "Start")]

namespace MoviesDB.Web.App_Start {
    public static class StructuremapMvc {
        public static void Start() {
            var container = (IContainer) IoC.Initialize();
            DependencyResolver.SetResolver(new SmDependencyResolver(container));
        }
    }
}