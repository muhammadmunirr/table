alert("Hello Saylani!")
confirm("Do you want to continue?")
var table = prompt("Enter the number")




if (table <= 20) {
    
    for(table; table<=20; table++){
        
        for (i = 1; i <= 10; i++) {
            document.write(`${table} x${i} =`, table*i + "<br>");
            
        }

    }
    
}
else{
    document.write("This number is greater than 20")
}