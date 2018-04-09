using GiftShopEcommerce.DAL;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace GiftShopEcommerce.Models
{
    public class GiftShopContext : DbContext
    {
        public GiftShopContext() : base("GiftShopContext")
        {
            Database.SetInitializer(new GiftShopInitializer());
        }

        public DbSet<Product> Products { get; set; }

        public DbSet<Category> Categories { get; set; }
    }
}