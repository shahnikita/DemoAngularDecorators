using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(DemoAngularDecorater.Startup))]
namespace DemoAngularDecorater
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
