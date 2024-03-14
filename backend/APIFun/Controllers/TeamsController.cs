using APIFun.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace APIFun.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class TeamsController : ControllerBase
    {
        private ITeams _bowlingLeague;
        public TeamsController(ITeams temp)
        {
            _bowlingLeague = temp;
        }
        [HttpGet]
        public IEnumerable<Team> Get()
        {
            var TeamData = _bowlingLeague.Teams.ToArray();

            return TeamData;
        }
    }
}
