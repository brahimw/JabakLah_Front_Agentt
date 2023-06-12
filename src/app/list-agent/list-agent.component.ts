import { Component, OnInit } from '@angular/core';
import { AgentService } from './../_services/Agent.service';
import { Client } from '../interfaces/Client';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router } from '@angular/router';




const AgentHasntChangedPassword = false;

@Component({
  selector: 'app-list-agent',
  templateUrl: './list-agent.component.html',
  styleUrls: ['./list-agent.component.css']
})
export class ListAgentComponent implements OnInit {

  

username=window.sessionStorage.getItem("username");
AgentHasFirstAuthentication :Boolean;
clients: Client[] = [];
filteredClients: Client[] = [];
searchTerm: string = '';


constructor(private agentService: AgentService,
private tokenService :TokenStorageService,
private router: Router) { }

ngOnInit(): void {

if(this.tokenService.getToken()==null){
this.router.navigate(['/home']);
}

if(this.tokenService.getToken()!=null){
this.agentService.getAgentHasFirstAuth(this.username).subscribe({
next: data => {
console.log(data);
if(data==AgentHasntChangedPassword){
this.router.navigate(['admin/changePassword']);
}

},
error: err => {
console.log("error while getting firstauth")
}
});

this.loadClients();
}
}

loadClients(): void {
this.agentService.findAllClients().subscribe(
(clients: Client[]) => {
this.clients = clients;
this.filterClients();
},
error => {
console.error('Error retrieving clients:', error);
}
);
}

filterClients(): void {
if (this.searchTerm.trim() === '') {
this.filteredClients = this.clients;
} else {
this.filteredClients = this.clients.filter(client =>
client.nom.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
client.prenom.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
client.numTel.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
client.email.toLowerCase().includes(this.searchTerm.toLowerCase())
);
}
}

}
