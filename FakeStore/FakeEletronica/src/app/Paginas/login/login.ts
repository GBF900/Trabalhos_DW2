import { NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Usuario, UsuarioService } from '../../Servicos/usuario-service';
import { Route, Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NgClass,RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit{
  mostrarSenha = false;

  #forms =inject(FormBuilder)
  usuarios: Usuario[]=[] 
  usuarioLogado : Usuario |undefined| null= null 

  constructor(private usuarioService: UsuarioService ,private router : Router){}
 
     loginForm=this.#forms.group({
   username:['',[Validators.required]],
   password:['',[Validators.required,Validators.minLength(6)]]

});
 
  ngOnInit(): void {
   this.usuarioService.getUsuarios().subscribe({
   next:(resp)=> this.usuarios = resp,
   error:(err)=> alert("Usuarios não foram carregados" + err.message) 
   })
  }

 Submit(){
  this.usuarioLogado = this.usuarios.find( 
  usu => usu.username == this.loginForm.get('username')?.value && 
  usu.password == this.loginForm.get('password')?.value);

if(this.usuarioLogado){
  localStorage.setItem('usuario',JSON.stringify(this.usuarioLogado));
  this.router.navigate(['/home']);
  alert("Acesso concedido")
}

else{
  alert("Suas credenciais não estão registradas em nosso Banco de dados. Voce não tem permissão para fazer login")
} 

}

irParaHome(): void{
  localStorage.setItem('usuario',JSON.stringify(this.usuarioLogado));
  this.router.navigate(['/home']);
}

toggleSenha() {
  this.mostrarSenha = !this.mostrarSenha;
}


}
