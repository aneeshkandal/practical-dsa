class Node
{
  constructor(data,next=null)
  {
    this.data=data;
    this.next=next;
  }
}
class LinkedList
{
  constructor()
  {
    this.head=null;
    this.next=0;
  }
  createlist(data)
  {
    if (!this.head) 
    {
      this.head=new Node(data);
    }
    else
    {
      let last= this.head;
      while(last.next!=null)
      {
        last=last.next;
      }
      last.next= new Node(data);
    }
    this.size++
  }
  printList()
  {
    let curr=this.head;
    console.log("Your linked list  is : ");
    while(curr)
    {
      console.log(curr.data);
      curr=curr.next;
    }
  }
  insertAtBeg(data)
  {
    this.newnode=new Node(data,this.head);
    this.newnode.next=this.head;
    this.head=this.newnode;
    this.size++;
  }
  
  insertAtPosi(data,pos)
  {
    if(pos<0||pos>this.size){
      return console.log("Invalid Position");
    }
        
    else
    {
      var newnode = new Node(data , this.head);
      var pre , curr = this.head ;
    }
    for (var i = 1; i < pos; i++) 
    {
      pre = curr;
      curr = curr.next;
    }
    newnode.next=curr;
    pre.next=newnode;
    
    this.size++;
  }
  insertAtEnd(data){
    let last = this.head;
    while(last.next!=null){
      last=last.next;
    }
    last.next=new Node(data);
    this.size++;
  }
  delete(pos){
    let tem = this.head;
    if(pos==1){
      this.head=this.head.next;
    }
    else{
      for(var i = 1;tem!=null&&i<pos-1;i++){
        tem=tem.next;
      }
      tem.next=tem.next.next;
    }
    this.size--;
  }
}

const ob = new LinkedList();
ob.createlist(23);
ob.createlist(34);
ob.createlist(32);
ob.createlist(87);
ob.printList();
ob.insertAtEnd(97);
ob.printList();
ob.insertAtBeg(44);
ob.printList();
ob.insertAtPosi(99,3);
ob.printList();
ob.delete(3);
ob.printList();
