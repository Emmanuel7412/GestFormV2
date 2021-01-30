using GestForm.Business.Dtos;
using System;
using System.Collections.Generic;
using System.Text;

namespace GestForm.Business
{
    public interface ICheckNumber
    {
        /// <summary>
        /// Return a result depending on modulo
        /// </summary>
        /// <param name="number"></param>
        /// <returns></returns>
        public ModuloResult CheckModulo(int number);
    }
}
