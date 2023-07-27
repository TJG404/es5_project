const car1 = {
    color : "red",
    logColor : function(){
        console.log("color : " + this.color);
        console.log("this(객체자신) : " + this);
    }
};

car1.logColor();

