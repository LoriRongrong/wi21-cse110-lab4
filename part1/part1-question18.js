
for (const property in statistics) {
    
    if (property.startsWith('r')){
        console.log(input[property]);
    } else if (input[property] % 2==1) {
        console.log(input[property]);
    }
}

// should print out
// 21, 45, 5, 2