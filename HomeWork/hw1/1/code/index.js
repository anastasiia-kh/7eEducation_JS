var firstName = prompt("Please enter your First name");
var lastName = prompt("Please enter your Last name");
var age = prompt("Please enter your Age");
var firstNumber = prompt("Please enter first number");
var secondNumber = prompt("Please enter second number");
var thirdNumber = prompt("Please enter third number");

var newFirstNumber = parseInt(firstNumber);
var newSecondNumber = parseInt(secondNumber);
var newThirdNumber = parseInt(thirdNumber);
var sum = newFirstNumber + newSecondNumber + newThirdNumber;
var avarage = Math.round(sum/3)

document.write('<header></header>');
document.write('<nav>', '<div>', avarage, '</div>',  '</nav>');
document.write('<section>', '<div>', firstName, '<br>',lastName, '<br>', age,'</div>', '</section>');
document.write('<footer></footer>');