const readlineSync = require('readline-sync');
const inquirer = require('inquirer');

console.log("=== PERKIRAAN TINGGI BADAN ANAK ===\n");

//RUMUS
//laki (TBA + TBU + 13cm /2)
//Perempuan (TBA + TBU - 13cm /2)
//max : hasil + 8,5cm & min : hasil - 8,5cm

const TBA = parseInt(readlineSync.question('[?] Tinggi badan ayah (cm) : '));
const TBI = parseInt(readlineSync.question('[?] Tinggi badan ibu (cm) : '));

inquirer
  .prompt([
    {
      type: 'list',
      name: 'gender',
      message: 'Janis kelamin?',
      choices: ['Laki-laki', 'Perempuan'],
    },
  ])
  .then(answers => {
    let hasil = Math.round(parseInt(answers.gender == "Laki-laki" ? (TBA + TBI + 13) / 2 : (TBA + TBI - 13) / 2));

    let min = Math.round(hasil - 8.5);
    let max = Math.round(hasil + 8.5);

    console.log("\n=== HASIL PERKIRAAN ===");
    console.log(`Min : ${min}cm`);
    console.log(`Max : ${max}cm`);
  });