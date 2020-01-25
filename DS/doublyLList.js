class Node{
    constructor(prev,value,next){
        this.prev=prev;
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
       const newNode = new Node(null,value,this.head);
       if(this.head){
           this.head.prev= newNode;
       }
       else{
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
         this.head.prev=null;
     }
    }

    addToTail(value){
        const newNode = new Node(this.tail,value,null);
       if(this.tail){
           this.tail.next= newNode;
       }
       else{
           this.head = newNode;
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
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
    }

}    

const ll = new LinkedList();
ll.addToHead(200);
ll.addToHead(300);
ll.addToTail(100);
ll.addToTail(400);
ll.removeHead();
ll.removeTail();
console.log(ll);