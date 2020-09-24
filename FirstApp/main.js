function getRow() {

   const firstRow = prompt("Введите первую строку", 'мама мыла раму'); // 14 символов и 4 'a'
   const secondRow = prompt("Введите вторую строку", 'собака друг человекаа'); // 20 символов и 3 'a'
   const symbol = prompt("Введите букву, которую необходимо посчитать в веденных строках", '');

   let countSymbol;
   let currentText;
   let firstCounter = 0;
   let counter = 0;
   let result;

   if (firstRow == '' || !secondRow == '') {
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
      } else if (counter === firstCounter && counter !== 0) {
         result = `В строке "${firstRow}" столько же символов '${symbol}' (${counter}), сколько и в строке "${secondRow}"`;
      } else {
         result = `Не в одной из строк не нашлось введеной буквы`;
      }

      alert(result);
   } else {
      alert('Введите обе строки и искомую букву!');
   }
}


function getPhoneNumber() {

   let newPhoneNumber = '+7 (';
   let phoneNumber = prompt("Введите номер телефона в любом удобном Вам формате!", '+7  975 1821172');
   phoneNumber = phoneNumber.replace(/\D/g, "");

   let phoneLength = phoneNumber.length;

   if (phoneLength == 10 || (phoneLength == 11 && (phoneNumber[0] == 7 || phoneNumber[0] == 8))) {
      phoneNumber = (phoneLength == 11) ? phoneNumber.replace(/\d/, "") : phoneNumber;

      for (i = 0; i < phoneNumber.length; i++) {
         newPhoneNumber += phoneNumber[i];
         switch (i) {
            case 2:
               newPhoneNumber += ') ';
               break;
            case 5:
               newPhoneNumber += '-';
               break;
            case 7:
               newPhoneNumber += '-';
               break;
            default:
               break;
         }
      }
      alert(newPhoneNumber);
   } else {
      alert("Неккоректно введен номер!")
   }

}