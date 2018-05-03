using Movies.Web.Models;
using MoviesDB.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Movies.Web.Controllers
{
    public class MovieController : Controller
    {
        private readonly IStudioDataSource _db;

        public MovieController(IStudioDataSource db)
        {
            _db = db;
        }

        [HttpGet]
        public ActionResult Create(int studioId)
        {
            var model = new CreateMovieViewModel();
            model.StudioId = studioId;

            return View(model);
        }

        [HttpPost]
        public ActionResult Create(CreateMovieViewModel viewModel)
        {
            if (ModelState.IsValid)
            {
                var studio = _db.Studios.Single(d => d.Id == viewModel.StudioId);
                var movie = new Movie();
                movie.Name = viewModel.Name;
                movie.ReleaseDate = viewModel.ReleaseDate;
                studio.Movies.Add(movie);

                _db.Save();

                return RedirectToAction("detail", "studio", new { id = viewModel.StudioId });

            }
            return View(viewModel);
        }
    }
}