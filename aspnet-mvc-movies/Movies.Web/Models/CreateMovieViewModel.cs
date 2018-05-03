using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Movies.Web.Models
{
    public class CreateMovieViewModel
    {
        [HiddenInput(DisplayValue=false)]
        public int StudioId { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public DateTime? ReleaseDate { get; set; }
    }
}