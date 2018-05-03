using MoviesDB.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Movies.Web.Controllers
{
    public class StudioController : Controller
    {
        // Create a readonly instance of the database abstraction (which is remapped through StructureMap?)
        private readonly IStudioDataSource _db;

        public StudioController(IStudioDataSource db)
        {
            _db = db;
        }

        public ActionResult Detail(int id)
        {
            // Query the DB for a single value where the provided Id matches an id in the database
            var model = _db.Studios.Single(d => d.Id == id);
            return View(model);
        }
    }
}