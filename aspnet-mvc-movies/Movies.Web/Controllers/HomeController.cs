using MoviesDB.Core;
using MoviesDB.Web.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MoviesDB.Web.Controllers
{
    public class HomeController : Controller
    {
        // Rather than have the controller directly aware of Movies.Core, we're creating an abstraction away from it(?)
        private IStudioDataSource _db;

        // Here we define a constructor but it's parameterless which by default, the MVC runtime can't handle 
        public HomeController(IStudioDataSource db)
        {
            _db = db;
        }

        public ActionResult Index()
        {
            // _db.Studios contains a list of all studios in the database
            var allStudios = _db.Studios;

            // Passing it directly into the view is all that's needed 
            return View(allStudios);
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}