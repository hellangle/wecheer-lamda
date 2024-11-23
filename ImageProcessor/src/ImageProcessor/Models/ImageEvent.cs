namespace ImageProcessor.Models
{
    public class ImageEvent
    {
        public string ImageUrl { get; set; }
        public string Description { get; set; }
        public DateTime ReceivedAt { get; set; }
    }

    public class ImageEventCriteria
    {
        public DateTime? From { get; set; }
    }
}
