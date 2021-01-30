using GestForm.Business.Dtos;
using System;
using Xunit;

namespace GestForm.Business.UnitTests
{
    public class CheckNumberTests
    {
        private readonly CheckNumber checkNumber;

        public CheckNumberTests()
        {
            this.checkNumber = new CheckNumber();
        }

        [Theory()]
        [InlineData(10)]
        [InlineData(50)]
        [InlineData(20)]
        [InlineData(550)]
        [InlineData(100)]
        [InlineData(-40)]
        public void CheckModulo_WhenCalledWithNumber_ShouldReturnResultWithForm(int number)
        {
            // Arranges
            var num = number;
            var expectedReult = new ModuloResult { Number = num, Result = "Forme" };
           
            // Act
            var actualResult = this.checkNumber.CheckModulo(num);

            // Assert
            AssertResult(expectedReult, actualResult);
        }

        [Theory()]
        [InlineData(3)]
        [InlineData(9)]
        [InlineData(66)]
        [InlineData(27)]
        [InlineData(-999)]
        public void CheckModulo_WhenCalledWithNumber_ShouldReturnResultWithGeste(int number)
        {
            // Arranges
            var num = number;
            var expectedReult = new ModuloResult { Number = num, Result = "Geste" };

            // Act
            var actualResult = this.checkNumber.CheckModulo(num);

            // Assert
            AssertResult(expectedReult, actualResult);
        }

        [Theory()]
        [InlineData(15)]
        [InlineData(45)]
        [InlineData(1500)]
        [InlineData(-150)]
        public void CheckModulo_WhenCalledWithNumber_ShouldReturnResultWithGestForm(int number)
        {
            // Arranges
            var num = number;
            var expectedReult = new ModuloResult { Number = num, Result = "GestForm" };

            // Act
            var actualResult = this.checkNumber.CheckModulo(num);

            // Assert
            AssertResult(expectedReult, actualResult);
        }

        [Theory()]
        [InlineData(0)]
        [InlineData(13)]
        [InlineData(82)]
        [InlineData(854)]
        [InlineData(-514)]
        public void CheckModulo_WhenCalledWithNumber_ShouldReturnResultWithNull(int number)
        {
            // Arranges
            var num = number;
            var expectedReult = new ModuloResult { Number = num, Result = null };

            // Act
            var actualResult = this.checkNumber.CheckModulo(num);

            // Assert
            AssertResult(expectedReult, actualResult);
        }

        private void AssertResult (ModuloResult expected, ModuloResult actual)
        {
            Assert.Equal(expected.Number, actual.Number);
            Assert.Equal(expected.Result, actual.Result);
        }
    }
}
