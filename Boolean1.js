/* Boolean1

Дано целое число A. Проверить истинность высказывания: 
«Число A является положительным». */

// ввід значення змінної А через модальне вікно*
let A = parseInt(prompt("Введіть число А"))

// перевірка числа на додатність
let isMore = A > 0

// вивід результата через модальне вікно
alert(isMore)

/* Трохи додаткових пояснень і теорії:

Понятие модальное означает, что пользователь не может 
взаимодействовать с интерфейсом остальной части страницы, 
нажимать на другие кнопки и т.д. до тех пор, пока взаимодействует 
с окном. В данном случае – пока не будет нажата кнопка «OK». 

Команды с модальным окном:

alert() - вывод сообщения
prompt() - ввод данных
confirm() - отображает модальное окно с текстом вопроса 
и двумя кнопками: OK и Отмена. */