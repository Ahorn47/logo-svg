class shape{

    constructor(){
        this.color="";
    }

setColor(colorVar){
    this.color="colorVar";
}
}

class Triangle extends shape{
    render(){
        return`<polygon points="150, 18 244, 182 56, 182" fill= "${this.color}"/>`;
    }
}

class Circle extends shape{
    render(){
        return`<polygon points="150, 18 244, 182 56, 182" fill= "${this.color}"/>`;

    }

    }
class Square extends shape{
    render(){
        return`<rect x="73" 18 244, 182 56, 182" fill= "${this.color}"/>`;

    }

    }
module.exports = {Triangle, Square, Circle};

