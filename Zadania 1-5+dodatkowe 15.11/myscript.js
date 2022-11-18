
const arr1 = ["Anna", "Maria"];
const arr2 = ["Adam", "Marek", "Bartek", "Tomek"];
const numbers = [1, 2, 3, 4, 5, -1];

//zad1 ... / .concat() łączenie tablic arr1 i arr2
//zad2 ... i reverse() ostatni element tablicy
//zad3 .filter() po tablicy arr2
//zad4 reduce() suma elementów w tablicy numbers
//zad 5 .map() po tablicy numbers i każdy element n^2+3

//1
const zad1 = (arr1,arr2) =>{
    return arr1.concat(arr2);
}
console.log(zad1(arr1, arr2))

//2
const zad2 = (arr2) =>{
    return arr2.reverse()[0];
}
console.log(zad2(arr2))

//3
const zad3 = (arr2, arg) =>{
    return arr2.filter(result => result === arg);
}
console.log(zad3(arr2, "Marek"))

//4
console.log(numbers.reduce((maslo,trzaslo)=>trzaslo+maslo))

//5
const zad5 = numbers.map(x => Math.pow(x, 2)+3);
console.log(zad5)



//d1
const d1 = (arr2) =>{ 
    return arr2.filter(result => result.length <= 5 && result[result.length - 1] == 'k' && result[result.length - 2] == 'e')
}
console.log(d1(arr2))

//d2
const d2 = (numbers) =>{
    return numbers.filter(result => result % 2 != 1)
}
console.log(d2(numbers))

//d3
const d3 =  (numbers, i) =>{
    i = 0;
    if(numbers[i] = Math.min(...numbers)){
        return Math.min(...numbers);
    }else{
        return d3(numbers, i+1)
    }
}
console.log(d3(numbers))