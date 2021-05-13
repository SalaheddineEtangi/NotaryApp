import { Injectable } from '@angular/core';
import { Client } from '../models/client.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  clients: Client[] = [];
  url = 'https://localhost:44388/api/Clients';
  client: Client;

  constructor(private http: HttpClient) { }

  getAllClients()  {
   return this.http.get<Client[]>(this.url);
  }

  saveClient(client:Client){
    return this.http.post(this.url, client);
  }

  actualiserClient(client:Client){
    return this.http.put(this.url + "/" + client.id, client);
  }

  deleteClient(id: number){
    return this.http.delete(this.url + "/" + id);
    }
}
