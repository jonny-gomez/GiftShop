using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(GiftShopEcommerce.Startup))]
namespace GiftShopEcommerce
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }

    }
}
