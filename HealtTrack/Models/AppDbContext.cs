using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography.X509Certificates;
using HealtTrack.Models;
using Verve.Identity.Core.IdentityContext;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace HealtTrack.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Treino> Treinos { get; set; }
        public DbSet<Dieta> Dieta { get; set; }
        
    }
}
