import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages=[]
  mensaje:string=""
  itemRef:any;
  constructor(private db:AngularFireDatabase) {
    
   }

  ngOnInit() {

    this.itemRef = this.db.object('chat');
this.itemRef.snapshotChanges().subscribe(action => {
 
  let data=action.payload.val()
        this.messages=[]
      for(let k in data){
        this.messages.push(data[k])
        console.log(data[k]);
      }
      console.log(this.messages);
});



    
  }

  send(){
     this.db.database.ref('chat').push({sms:this.mensaje})
     this.mensaje=''
  }

}
