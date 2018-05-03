using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MoviesDB.Web.Startup))]
namespace MoviesDB.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
