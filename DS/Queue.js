class Queue{
    constructor(){
        this.items=[];
    }
    enqueue(e){
        this.items.push(e);
    }
    dequeue(){
        if(this.items.length===0)
        return (`Queue underflow`);
        else
        return (`Deleted element: ${this.items.shift()}`);
    }
    size(){
        if(this.items.length===0)
        return (`Queue underflow`);
        else
        return (`Size: ${this.items.length}`);
    }
    rear(){
        if(this.items.length===0)
        return (`Queue underflow`);
        else
        return (`Rear element: ${this.items[this.items.length-1]}`);
    }
    front(){
        if(this.items.length===0)
        return (`Queue underflow`);
        else
        return (`Front element: ${this.items[0]}`);
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

const q = new Queue();
q.enqueue(4);
q.enqueue(3);
q.enqueue(5);
q.enqueue(7);
console.log(q.traverse());
 console.log(q.rear());
 console.log(q.front());
 console.log(q.size());
console.log(q.search(7));
// console.log(q.search(8));