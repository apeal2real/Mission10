using APIFun.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace APIFun.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BowlingLeagueController : ControllerBase
    {
        private IBowlingLeague _bowlingLeague;
        public BowlingLeagueController(IBowlingLeague temp) {
            _bowlingLeague = temp;
        }
        [HttpGet]
        public IEnumerable<Bowler> Get()
        {
            var BowlerData = _bowlingLeague.bowlers.Where(bowler => bowler.TeamId == 1 || bowler.TeamId == 2).ToArray();

            return BowlerData;
        }
    }
}
