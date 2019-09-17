function Bongden(status) {
     status=false;
    this.status = status;
    this.turnOn = function () {
        if (this.status) {
            console.log('den bat')
        }
    };
    this.turnOff = function () {
        if (!this.status) {
            console.log('den tat')
        }
    }
}

function Congtac(status) {
    status=false;
    this.connect = null;
    this.status = status;
    this.connect = function (connect) {
        this.connect = connect;
    };
    this.on = function () {
        this.status = true;
        this.connect.status = this.status;
        this.connect.turnOn();
    };
    this.off = function () {
        this.status = false;
        this.connect.status = this.status;
        this.connect.turnOff();
    }

}

let bongden = new Bongden();
let congtac =new  Congtac();
congtac.connect(bongden);
congtac.on();
congtac.off();