const arr = [ 65,73,35,2,16,null,91,3,-5,10 ];

/*Сума елементів масиву*/ 
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number'){
    sum = sum + arr[i]
    }
};

/*Найбільше та найменше значення*/
let max = arr[0];
let min = arr[0]; 

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
        if (max < arr[i]) {
            max = arr [i];
        }
        if (min > arr[i]) {
            min = arr [i];
        }
    }
}

/*Ялиночка*/
let row = '#';
for (let i = 1; i <= 5; i++) {
    console.log (row);
    row += '#';
}


console.log (sum, max, min);