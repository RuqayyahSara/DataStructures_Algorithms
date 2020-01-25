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
    
     addToTail(value){
        const newNode = new Node(value,null);
        if(!this.tail){
            this.head = newNode;
        }
        else{
        this.tail.next = newNode;
    }
    this.tail= newNode;  
     }
}   

const ll = new LinkedList();
ll.addToHead(100);
ll.addToHead(200);
ll.addToTail(700);
console.log(ll);