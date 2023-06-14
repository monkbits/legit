class legit {
/*
LIST OF ALL METHODS
---valName
---valNum
---valPan
---valEmail

---valInt

*/
    constructor() {
        console.log("legit")
    }

    valName(giveId, msgId, msg) {
        var a;
        var reg;
        document.getElementById(giveId)
            .addEventListener("keyup", function () {
                a = document.getElementById(giveId).value;
                reg = /\d/;
                if (reg.test(a)) {
                    document.getElementById(giveId).value = '';
                    document.getElementById(msgId).innerText = msg;
                } else {
                    document.getElementById(msgId).innerText = '';
                };
            });
    }

    valNum(giveId, msgId, msg){
        this.checker(/\D/, giveId, msgId, msg);
    }

    valPan(giveId, msgId, msg){
        this.panChecker(/[A-Z]{5}[0-9]{4}[A-Za-z]/i, giveId, msgId, msg )
    }

    valEmail(giveId, msgId, msg){
        this.emailChecker(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i, giveId, msgId, msg )
    }
    


    checker(regGive, giveId, msgId, msg){
        var a;
        var reg;
        document.getElementById(giveId)
            .addEventListener("keyup", function () {
                a = document.getElementById(giveId).value;
                reg = regGive;
                if (reg.test(a)) {
                    document.getElementById(giveId).value = '';
                    document.getElementById(msgId).innerText = msg;
                } else {
                    document.getElementById(msgId).innerText = '';
                };
            });
    }
    
    panChecker(regGive, giveId, msgId, msg){
        var a;
        var reg;
        document.getElementById(giveId)
            .addEventListener("keyup", function () {
                a = document.getElementById(giveId).value;
                reg = regGive;
                if(a.length >= 10){
                    if (!reg.test(a)) {
                        document.getElementById(giveId).value = '';
                        document.getElementById(msgId).innerText = msg;
                    } else {
                        document.getElementById(msgId).innerText = '';
                    };
                }else{
                    document.getElementById(msgId).innerText = msg;
                }
            });
    }
    emailChecker(regGive, giveId, msgId, msg){
        var a;
        var reg;
        document.getElementById(giveId)
            .addEventListener("keyup", function () {
                a = document.getElementById(giveId).value;
                reg = regGive;
                    if (!reg.test(a)) {
                        // document.getElementById(giveId).value = '';
                        document.getElementById(msgId).innerText = msg;
                    } else {
                        document.getElementById(msgId).innerText = '';
                    };
                
            });
    }


}


var $l = new legit();
// $l.valName("l-name", "namemsg", "<please enter a valid name>")
