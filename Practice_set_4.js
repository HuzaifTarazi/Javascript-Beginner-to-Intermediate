/* 1:
   Calculate Circumference of circle
    User Enter radius. 
    You have a constant pi
    When the button is clicked > calculate Circumference. */

    let myRadius;
    const PI = 3.14159;
    
    function cal_cirumference(){
        myRadius = parseInt(document.getElementById("myRadius").value);
        const Circumference = 2 * PI * myRadius;
        document.getElementById("showRadius").textContent = `Circumference of ${myRadius} is ${Circumference}`;
        console.log(typeof Circumference, Circumference );
    }
    document.getElementById("getRadius").onclick = cal_cirumference;
/*<-------------------------->*/
