import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Usuario, UsuarioService } from '../../Servicos/usuario-service';
import { AutenticacaoService } from '../../Servicos/autenticacao-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-usuario',
  imports: [ReactiveFormsModule],
  templateUrl: './perfil-usuario.html',
  styleUrl: './perfil-usuario.css',
})
export class PerfilUsuario implements OnInit{
  mostrarModalSucesso =false
  mostrarModalFracasso= false

  formsUsuario = inject(FormBuilder)
  usuarioLogado:Usuario | null = null
  usuarioAtualizado:Usuario = {
    address:{
     zipcode:'',
     city:'',
     street:'',
     number:0
    } ,
    email: '',
    username: '',
    password: '',
    name: {
      firstname:'',
      lastname:''
    },
    phone: ''
  }
  

constructor(  private autenticacao:AutenticacaoService, private router:Router) {}
  
  usuarioForm = this.formsUsuario.group({

    primeiroNome: [''],
    ultimoNome: [''],
    email: ['',Validators.email],
    telefone: ['',[Validators.required, Validators.pattern(/^\(\d{2}\)\s\d{5}-\d{4}$/)]],
    cep:['',[Validators.required, Validators.maxLength(11),Validators.pattern(/^\d{5}-\d{3}$/)]],
    cidade:['',Validators.required],
    rua:['',Validators.required],
    numero:[0,[Validators.required, Validators.maxLength(5)]],
    usuario:['',Validators.required],
    senha:['',Validators.required]
  });

  ngOnInit(): void {
    this.carregarUsuario();
  }

  carregarUsuario(): void {
   this.usuarioLogado = this.autenticacao.getUsuarioLogado();
   this.usuarioForm.get('primeiroNome')?.setValue(this.usuarioLogado!.name.firstname);
   this.usuarioForm.get('ultimoNome')?.setValue(this.usuarioLogado!.name.lastname);
   this.usuarioForm.get('email')?.setValue(this.usuarioLogado!.email);
   this.usuarioForm.get('telefone')?.setValue(this.usuarioLogado!.phone);
   this.usuarioForm.get('cep')?.setValue(this.usuarioLogado!.address.zipcode);
   this.usuarioForm.get('cidade')?.setValue(this.usuarioLogado!.address.city);
   this.usuarioForm.get('numero')?.setValue(this.usuarioLogado!.address.number);
   this.usuarioForm.get('rua')?.setValue(this.usuarioLogado!.address.street);
   this.usuarioForm.get('usuario')?.setValue(this.usuarioLogado!.username);
   this.usuarioForm.get('senha')?.setValue(this.usuarioLogado!.password);
  }

  salvar(): void {
    if(this.usuarioForm.invalid){ 
      this.usuarioForm.markAllAsTouched();
      return;
    }
    else{
      this.salvarDados()
      this.mostrarModalSucesso= true;
      this.router.navigate(['/home']);
    }
  }

  salvarDados(){
   if(this.usuarioForm.invalid){

    this.mostrarModalFracasso = true;
    return;
  }

  this.usuarioAtualizado = {
 address:{
     zipcode:this.usuarioForm.get('cep')?.value ?? '',
     city:this.usuarioForm.get('cidade')?.value ?? '',
     street:this.usuarioForm.get('rua')?.value ?? '',
     number:this.usuarioForm.get('numero')?.value ?? 0
    } ,
    email: this.usuarioForm.get('email')?.value ?? '',
    username: this.usuarioForm.get('usuario')?.value ?? '',
    password: this.usuarioForm.get('senha')?.value ?? '',
    name: {
      firstname:this.usuarioForm.get('primeiroNome')?.value ?? '',
      lastname:this.usuarioForm.get('ultimoNome')?.value ?? ''
    },
    phone: this.usuarioForm.get('telefone')?.value ?? ''
  };

  localStorage.setItem('usuario',JSON.stringify(this.usuarioAtualizado));

  this.usuarioLogado = this.usuarioAtualizado;

  this.mostrarModalSucesso = true;
  }

  limpar(){
     this.usuarioForm.reset()
  }

}


