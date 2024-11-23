namespace ImageProcessor
{
    public class LamdaStartup : Startup
    {
        public LamdaStartup(IConfiguration configuration) : base(configuration)
        {
        }

        public override void AddSwagger(IApplicationBuilder app, IWebHostEnvironment env)
        {
            // Enable middleware to serve generated Swagger as a JSON endpoint.
            app.UseSwagger();

            // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.),
            // specifying the Swagger JSON endpoint.
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/Prod/swagger/v1/swagger.json", "ImageProcessor API V1");
                c.RoutePrefix = string.Empty; // Set Swagger UI at the app's root
            });
        }
    }
}
