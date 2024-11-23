using ImageProcessor.Models;
using ImageProcessor.ViewModels;

using Microsoft.AspNetCore.Mvc;

using ResultNet;

namespace ImageProcessor.Controllers;

[Route("api/images")]
public class ImagesController : ControllerBase
{
    [HttpGet("last-event")]
    public Result<ImageEvent> GetLastEvent()
    {
        var result = Startup.EventStorage.OrderByDescending(e => e.ReceivedAt).FirstOrDefault();

        return Result.Success(result);
    }

    [HttpGet("last-hour-event-count")]
    public Result<int> GetLastHourEventCount()
    {
        var from = DateTime.UtcNow.AddHours(-1);
        var result = Startup.EventStorage.Count(e => e.ReceivedAt >= from);

        return Result.Success(result);
    }

    [HttpPost]
    public Result<string> Post([FromBody] ImageEventViewModel payload)
    {
        if (!ModelState.IsValid)
        {
            return Result.Failure<string>().WithMessage("Invalid payload").WithCode("error_001");
        }

        Startup.EventStorage.Add(new ImageEvent
        {
            ImageUrl = payload.ImageUrl,
            Description = payload.Description,
            ReceivedAt = DateTime.UtcNow
        });

        return Result.Success("Event received");
    }
}