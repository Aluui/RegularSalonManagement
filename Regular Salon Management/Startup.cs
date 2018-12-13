using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Regular_Salon_Management.Startup))]
namespace Regular_Salon_Management
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
