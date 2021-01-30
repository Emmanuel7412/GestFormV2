using GestForm.Business.Dtos;

namespace GestForm.Business
{
    public class CheckNumber : ICheckNumber
    {
        public ModuloResult CheckModulo(int number)
        {
            string res = null;
            if (number != 0)
            {
                if (number % 3 == 0 && number % 5 == 0)
                    res = "GestForm";
                else if (number % 3 == 0)
                    res = "Geste";
                else if (number % 5 == 0)
                    res = "Forme";
            }
            return new ModuloResult { Number = number, Result = res };
        }
    }
}
