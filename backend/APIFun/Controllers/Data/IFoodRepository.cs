namespace APIFun.Controllers.Data
{
    public interface IFoodRepository
    {
        IEnumerable<MarriottFood> Foods { get; }

    }
}
