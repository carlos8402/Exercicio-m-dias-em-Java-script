/* Crie um programa que receba as notas e através da média diga que se o aluno está aprovado ,reprovado ou em recuperação:
*/

let nota1 = 5;
let nota2 = 4;
let nota3 = 6;
let media = ((nota1+nota2+nota3) /3);

if(media<5){
    console.log('REPROVADO')
}
else if(media>= 5 && media <=7){
    console.log('RECUPERAÇÃO')
}
if(media>7){
    console.log('APROVADO')
}