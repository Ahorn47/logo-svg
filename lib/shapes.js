class shape{

    constructor(){
        this.color=(color);
    }
}

class Circle extends Shape{
    render(){
        return`<polygon points="150, 18 244, 182 56, 182" fill= "${this.color}"/>`;

    }

    }
class Square extends Shape{
    render(){
        return`<rect x="73" 18 244, 182 56, 182" fill= "${this.color}"/>`;

    }

    }
