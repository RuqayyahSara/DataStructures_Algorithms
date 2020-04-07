class Stack{
    constructor(){
        this.items=[];
    }
    push(e){
        this.items.push(e);
    }
    pop(){
        if(this.items.length===0)
        return (`Stack underflow`);
        else
        return (`Popped element: ${this.items.pop()}`);
    }
    peek(){
        if(this.items.length===0)
        return (`Stack underflow`);
        else
        return (`Top element: ${this.items[this.items.length-1]}`);
    }
    size(){
        if(this.items.length===0)
        return (`Stack underflow`);
        else
        return (`Size: ${this.items.length}`);
    }
    traverse(){
        var display="";
        for(var i=0;i<this.items.length;i++){
            display += this.items[i] + " ";
        }
        return display;
    }
    search(e){
        var flag=0;
        for(var i=0;i<this.items.length;i++){
            if(e === this.items[i]){
            flag=1;
            break;
            }
            else{
            flag=0;
            }
        }
        if(flag==1)
        return (`${e} found`);
        else
        return (`${e} not found`);

    }
}

const s = new Stack();
s.push(1);
s.push(5);
s.push(8);
s.push(9);
s.push(5);
s.traverse();
console.log(s.size());
console.log(s.pop());
console.log(s.peek());
console.log(s.size());
console.log(s.search(8));

