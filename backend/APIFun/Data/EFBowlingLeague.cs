namespace APIFun.Data
{
    public class EFBowlingLeague : IBowlingLeague
    {
        private BowlingLeagueContext _bowlingcontext;
        public EFBowlingLeague(BowlingLeagueContext temp)
        {
            _bowlingcontext = temp;
        }


        public IEnumerable<Bowler> bowlers => _bowlingcontext.Bowlers;
    }
}
