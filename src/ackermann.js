// Функция Аккермана — простой пример вычислимой функции, которая не является примитивно рекурсивной.
// Она принимает два неотрицательных целых числа в качестве параметров и возвращает натуральное число, обозначается A(m,n). 
// Эта функция растёт очень быстро, например, число A(4,4) настолько велико, что количество цифр в порядке этого числа 
// многократно превосходит количество атомов в наблюдаемой части Вселенной.

const A = (m, n) => {
  if (m < 0 || n < 0) {
    return undefined;
  }

  if (m == 0) return n + 1;

  if (m > 0 && n == 0) {
    return A(m - 1, 1);
  }

  if (m > 0 && n > 0) {
    return A(m-1, A(m, n-1) );
  }

}




export default A;