const variable = () => {

    try {
        let x = "10" + 10 + 10;
        let y = 10 + 10 + "10";

        console.log("x : " + x);
        console.log("y : " + y);
        
    } catch (error) {
        console.log("error " + error);
    }
}

const result = variable();