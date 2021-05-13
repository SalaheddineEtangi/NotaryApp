import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';
import { Client } from '../../models/client.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {
  clientForm: FormGroup;
  client: Client;
  clients: Client[];
  constructor(private clientsService: ClientsService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.client = this.clientsService.client;
    this.initForm();
  }

  initForm(){
    this.clientForm = this.formBuilder.group({
      id: 0,
      nCin: ['', Validators.required],
      nomComplet: ['', Validators.required],
      dateNaissance: ['', Validators.required],
      lieuNaissance: ['', Validators.required],
      prenomMere: ['', Validators.required],
      prenomPere: ['', Validators.required],
      satatMatrimoniale: ['', Validators.required],
      nomConjoint: ['', Validators.required],
      dateMariage: ['', Validators.required],
      lieuMariage: ['', Validators.required],
      adresseHabitat: ['', Validators.required],
      adresseCin: ['', Validators.required],
      numTel: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      profession: ['', Validators.required],
    })
  }

  onSubmit(){
    this.client.nCin = this.clientForm.get('nCin').value;
    this.client.nomComplet = this.clientForm.get('nomComplet').value;
    this.client.dateNaissance = this.clientForm.get('dateNaissance').value;
    this.client.lieuNaissance = this.clientForm.get('lieuNaissance').value;
    this.client.prenomMere = this.clientForm.get('prenomMere').value;
    this.client.prenomPere = this.clientForm.get('prenomPere').value;
    this.client.satatMatrimoniale = this.clientForm.get('satatMatrimoniale').value;
    this.client.nomConjoint = this.clientForm.get('nomConjoint').value;
    this.client.dateMariage = this.clientForm.get('dateMariage').value;
    this.client.lieuMariage = this.clientForm.get('lieuMariage').value;
    this.client.adresseHabitat = this.clientForm.get('adresseHabitat').value;
    this.client.adresseCin = this.clientForm.get('adresseCin').value;
    this.client.numTel = this.clientForm.get('numTel').value;
    this.client.email = this.clientForm.get('email').value;
    this.client.profession = this.clientForm.get('profession').value;
    if(this.client.id === 0){
      this.clientsService.saveClient(this.client).subscribe(res => {
        this.clientsService.getAllClients().subscribe(res => {
          this.clients = res;
        });
      },
      err => {
        console.log(err);
      })
    }
    else{
      this.clientsService.actualiserClient(this.client).subscribe(res => {
        this.clientsService.getAllClients().subscribe(res => {
          this.clients = res;
        });
      },
      err => {
        console.log(err);
      })
    }
    this.router.navigate(['clients']);
  }
}
