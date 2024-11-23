using System.ComponentModel.DataAnnotations;

namespace ImageProcessor.ViewModels
{
    public class ImageEventViewModel
    {
        [Required, Url]
        public string ImageUrl { get; set; }
        [Required]
        public string Description { get; set; }
    }
}
