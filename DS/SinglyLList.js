class Node{
    constructor(value,next){
        this.value=value;
        this.next=next;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
    }

    addToHead(value){
        const newNode = new Node(value,this.head);
        if(!this.head){
            this.tail = newNode;
        }
        this.head= newNode;  
     }

}   

const ll = new LinkedList();
ll.addToHead(100);
ll.addToHead(200);

console.log(ll);