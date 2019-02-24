
using System.Web.Http;
using System.Web.Http.Cors;
using MultiLanguageBE.Models;

namespace MultiLanguageBE.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ValuesController : ApiController
    {
        private readonly ApplicationDbContext _context;
    
        public ValuesController()
        {
            _context = new ApplicationDbContext();
        }



    }
}
