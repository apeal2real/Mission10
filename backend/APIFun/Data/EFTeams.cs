namespace APIFun.Data
{
    public class EFTeams : ITeams
    {
        private BowlingLeagueContext _bowlingcontext;
        public EFTeams(BowlingLeagueContext temp)
        {
            _bowlingcontext = temp;
        }


        public IEnumerable<Team> Teams => _bowlingcontext.Teams;
    }
}
