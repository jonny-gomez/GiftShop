using GiftShopEcommerce.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace GiftShopEcommerce.DAL
{
    public class GiftShopInitializer : DropCreateDatabaseAlways<GiftShopContext>
    {
        protected override void Seed(GiftShopContext context)
        {
            var categories = new List<Category>
            {
                new Category { Id=1, Name="Teddies" },
                new Category { Id=2, Name="Cards" },
                new Category { Id=3, Name="Apparel" },
                new Category { Id=4, Name="Toys" },
                new Category { Id=5, Name="Accesories" }
            };

            categories.ForEach(c => context.Categories.Add(c));

            var products = new List<Product>
            {
                new Product { Name="Pig Teddy", Description="A beatiful pig teddy", Price=10, CategoryId=1 },
                new Product { Name="Bear Teddy", Description="A beatiful bear teddy", Price=12, CategoryId=1 },
                new Product { Name="Love Card", Description="A perfect card for any lovely occasion", Price=2, CategoryId=2 },
                new Product { Name="Congratulations Card", Description="Perfect congratulation card for any ocassion", Price=1, CategoryId=2 },
                new Product { Name="Printed T-Shirt", Description="Comfortable and cool printed t-shirt with your favorite hero!", Price=15, CategoryId=3 },
                new Product { Name="Printed Hoodie", Description="Comfortable and cool printed hoodie with your favorite picture!", Price=20, CategoryId=3 },
                new Product { Name="Max Steel", Description="You will enjoy playing with this ancient character", Price=8, CategoryId=4 },
                new Product { Name="Yugioh Cards", Description="Do you enjoy trading or collecting stuff? This Yu-Gi-Oh cards will be perfect for you!", Price=10, CategoryId=4 },
                new Product { Name="Men's necklace", Description="This leather necklace is a perfect choice for any modern man", Price=5, CategoryId=5 },
            };

            products.ForEach(p => context.Products.Add(p));

            context.SaveChanges();

            base.Seed(context);
        }
    }
}