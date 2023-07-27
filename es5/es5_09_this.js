const car1 = {
    color : "red",
    logColor : function(){
        console.log("color : " + this.color);
        console.log("this(객체자신) : " + this);
    }
};

car1.logColor();

function logThis(){
    console.log("\n전역범위에서의 this는 Window객체 참조\n" );
    console.log(this);
}
logThis();