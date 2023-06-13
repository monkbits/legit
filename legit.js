class legit {


    constructor() {
        console.log("legit")
    }

    valName(giveId, msgId, msg) {
        var a;
        var reg;
        document.getElementById(giveId)
            .addEventListener("keyup", function () {
                a = document.getElementById(giveId).value;
                reg = /\D/;
                if (reg.test(a)) {
                    document.getElementById(giveId).value = '';
                    document.getElementById(msgId).innerText = msg;
                } else {
                    document.getElementById(msgId).innerText = '';
                };
            });
    }

}


var $l = new legit();
$l.valName("l-name", "namemsg", "please enter a valid name")