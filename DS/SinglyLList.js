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
    
    removeHead(){
        if(this.head===null && this.tail===null){
            console.log("List is empty");
        }
        else if(this.head===this.tail){
            this.head= null;
            this.tail=null;
        }
        else{
            this.head = this.head.next;
        }
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
     removeTail(){
        if(this.head===null && this.tail===null){
            console.log("List is empty");
        }
        else if(this.head===this.tail){
            this.head= null;
            this.tail=null;
        }
        else{
            var curr = new Node();
            var prev = new Node();
            curr = this.head;
            while(curr.next!==null){
                prev = curr;
                curr = curr.next;
            }
            this.tail=prev;
            prev.next=null;

        }
    }
}   

const ll = new LinkedList();
ll.addToHead(100);
ll.addToHead(200);
ll.addToTail(700);
ll.addToTail(8000);
ll.removeTail();
console.log(ll);