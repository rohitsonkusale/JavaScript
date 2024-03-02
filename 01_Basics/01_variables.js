const accountId = 123;
let accountEmail = "rohit@gmail.com"
var accountPassword = "java8520"
accountCity = "Jaipur"
let accountState;

// accountId = 5 // not allowed
accountEmail = "hc.gmail.com"
accountPassword = "123"
accountCity = "Nagpur"

console.table([accountEmail, accountId, accountPassword, accountCity, accountState])

/*
prefer not to use var
because of issue in block scope and functional scope
*/