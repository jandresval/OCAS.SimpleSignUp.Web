using Microsoft.EntityFrameworkCore;
using OCAS.SimpleSignUp.Web.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OCAS.SimpleSignUp.Web.Data
{
    public class SignUpContext : DbContext
    {
        public SignUpContext(DbContextOptions<SignUpContext> options) : base(options)
        {

        }

        public DbSet<SignUp> signUp { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<SignUp>().ToTable("SignUpTable");
        }
    }
}
