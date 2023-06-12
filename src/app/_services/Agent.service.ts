import { ChangePasswordRequestAgent } from './../interfaces/ChangePasswordRequestAgent';
import { Client } from '../interfaces/Client';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
  providedIn: 'root'
})
export class AgentService {

    private agentUrl: string;

	// tslint:disable-next-line: indent
	constructor(private http: HttpClient) {
		// tslint:disable-next-line: indent
		this.agentUrl = 'http://localhost:8080/api/auth/';
	}

  public saveClient(
	username:String,
	nom:String,
	prenom:String,
	numTel:String,
	email:String,

	
	) {
		return this.http.post(this.agentUrl + 'client/add',
		 {
			username,nom,prenom,email,numTel
		},
		
		{responseType: 'text'}
		);
	}


  public findAllClients(): Observable<Client[]> {
		return this.http.get<Client[]>(
		'http://localhost:8080/adminController/listClients'
		);


}
public deleteClient(clientId: number): Observable<any> {
  return this.http.delete(`${this.agentUrl}/deleteClient/${clientId}`);
}

public ChangePassword(
	changePasswordRequestAgent:ChangePasswordRequestAgent
){

   return this.http.post(this.agentUrl + "agent/changePassword",
   changePasswordRequestAgent,
   {responseType: 'text'}
   
  );
}

public getAgentHasFirstAuth(
	username:string
){
	return this.http.post<any>(this.agentUrl + "agent/changedPassword",username,httpOptions)
}
}
