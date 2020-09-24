const firstRow = prompt("Введите первую строку", 'мама мыла раму'); // 14 символов и 4 'a'
const secondRow = prompt("Введите первую строку", 'собака друг человекаа'); // 20 символов и 3 'a'
const symbol = prompt("Введите букву, которую необходимо посчитать в веденных строках", '');

function getRow(firstRow, secondRow) {
   let countSymbol;
   let currentText;
   let firstCounter = 0;
   let counter = 0;
   let result;

   for (let i = 0; i < 2; i++) {

      if (i === 0) {
         countSymbol = firstRow.length;
         currentText = firstRow;
      } else {
         countSymbol = secondRow.length;
         currentText = secondRow;
         firstCounter = counter;
         counter = 0;
      }

      for (let j = 0; j < countSymbol; j++) {
         if (currentText[j] === symbol) {
            counter++;
         }
      }
   }

   if (firstCounter > counter) {
      result = `В строке "${firstRow}" символов '${symbol}' больше чем в другой (${firstCounter})'`;
   } else if (counter > firstCounter) {
      result = `В строке "${secondRow}" символов '${symbol}' больше чем в другой (${counter})'`;
   } else {
      result = `В строке "${firstRow}" столько же символов '${symbol}' (${counter}), сколько и в строке "${secondRow}"`;
   }

   return result;
}

alert(getRow(firstRow, secondRow));