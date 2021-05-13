import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../services/clients.service';
import { Client } from '../models/client.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  clients: Client[];
  client: Client;


  constructor(private clientsService: ClientsService, private router: Router) { }

  ngOnInit(): void {
    this.clientsService.getAllClients().subscribe(res => {
      this.clients = res;
    });
    this.clientsService.client = {
      id: 0,
      nCin: null,
      nomComplet: null,
      dateNaissance: null,
      lieuNaissance: null,
      prenomMere: null,
      prenomPere: null,
      satatMatrimoniale: null,
      nomConjoint: null,
      dateMariage: null,
      lieuMariage: null,
      adresseHabitat: null,
      adresseCin: null,
      numTel: null,
      email: null,
      profession: null,
    }
  }

  onFillData(client: Client){
    this.clientsService.client.id = client.id;
    this.clientsService.client.nCin = client.nCin;
    this.clientsService.client.nomComplet = client.nomComplet;
    this.clientsService.client.dateNaissance = client.dateNaissance;
    this.clientsService.client.lieuNaissance = client.lieuNaissance;
    this.clientsService.client.prenomMere = client.prenomMere;
    this.clientsService.client.prenomPere = client.prenomPere;
    this.clientsService.client.satatMatrimoniale = client.satatMatrimoniale;
    this.clientsService.client.nomConjoint = client.nomConjoint;
    this.clientsService.client.dateMariage = client.dateMariage;
    this.clientsService.client.lieuMariage = client.lieuMariage;
    this.clientsService.client.adresseHabitat = client.adresseHabitat;
    this.clientsService.client.adresseCin = client.adresseCin;
    this.clientsService.client.numTel = client.numTel;
    this.clientsService.client.email = client.email;
    this.clientsService.client.profession = client.profession;
    this.router.navigate(['clients', 'new']);
  }

  onDelete(id : number){
    this.clientsService.deleteClient(id).subscribe(res => {
      this.clientsService.getAllClients().subscribe(res => {
        this.clients = res;
      });
    });
  }

}
