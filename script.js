let saldo = prompt("введите баланс ващего счета в $");
let endTask = function(){
    let phone = prompt("сколько стоит телефон который вы хотите купить в $?");
    let kiset = 10;
    let glass = 5;
    let charger = 15;
    let nalog = 0.2;
    let toKiset = prompt("хотите чехол? (yes/no)");
    let toGlass = prompt("может быть защитное стекло? (yes/no)");
    let toCharger = prompt("как насчет беспроводной зарядки? (yes/no)");
    if (toKiset === "yes"){
        phone = +phone + +kiset;
    };
    if (toGlass === "yes"){
        phone += +glass;
    };
    if (toCharger === "yes"){
        phone += +charger;
    };
    phone = (Math.round((phone*(1 + +nalog))*100))/100;
    alert(`цена вашего телефона с учетом аксессуаров и налогов составила ${phone}$`);
    if (saldo >= phone){
        alert("поздравлякм с покупкой");
        saldo -= phone;
        alert(`остаток вашего счета ${saldo}$`);
        endTask();
    } else {
        alert("извините, у вас недостаточно средств.");
    }
};
endTask();
