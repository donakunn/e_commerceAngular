import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Utente } from '../model/utente.model';
import { UtentiService } from '../services/utenti.service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {

  @ViewChild('labelNome') labelNome: ElementRef;
  @ViewChild('labelCognome') labeCognome: ElementRef;
  @ViewChild('inputCognome') inputCognome: ElementRef;

  registrazioneCompleta : boolean = false;

  formUtente = this.fb.group({  
    nome: ['', Validators.required],
    cognome: ['',Validators.required],
    piva: [''],
    codfiscale: ['',Validators.required],
    tipoUtente: 1,
    via: [''],
    cap: [''],
    comune: [''],
    provincia: [''],
    nazione: [''],
    telefono: ['',[Validators.required, Validators.minLength(7), Validators.maxLength(15)]],
    email: ['',Validators.required],
    username: ['',Validators.required],
    password: ['',Validators.required]
  })


  constructor(private fb: FormBuilder, private utenteService : UtentiService) {

  }

  ngOnInit(): void {

  }

  registrati(): void {
    let utenteInserito = new Utente('',this.formUtente.value.nome, this.formUtente.value.cognome,
      this.formUtente.value.piva, this.formUtente.value.codfiscale, this.formUtente.value.tipoUtente,
      this.formUtente.value.nazione, this.formUtente.value.via, this.formUtente.value.cap,
      this.formUtente.value.comune, this.formUtente.value.provincia, this.formUtente.value.telefono,
      this.formUtente.value.email, this.formUtente.value.username, this.formUtente.value.password);

      this.utenteService.registrati(utenteInserito).subscribe((res) => {
        alert('Utente Inserito correttamente');
      });
  }


  cambiaEtichetta(): void {
    if (this.formUtente.value.tipoUtente == 1) {
      this.labelNome.nativeElement.innerHTML = 'Nome';
      this.labeCognome.nativeElement.innerHTML = 'Cognome';
      this.inputCognome.nativeElement.hidden = false;
    }
    else {
      this.labelNome.nativeElement.innerHTML = 'Ragione sociale';
      this.labeCognome.nativeElement.innerHTML = '';
      this.inputCognome.nativeElement.hidden = true;
    }
  }
}
