import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskmgrApiService } from '../../taskmgr-api.service';

@Component({
  selector: 'app-show-taskmgr',
  templateUrl: './show-taskmgr.component.html',
  styleUrl: './show-taskmgr.component.css'
})
export class ShowTaskmgrComponent implements OnInit{

  taskmgrList$!:Observable<any[]>;
  taskmgrTiposList$!:Observable<any[]>;
  taskmgrTiposList:any=[];

  // Map para mostrar a assosiação entre as tabelas (FK)
  taskmgrTiposMap:Map<number, string> = new Map();

  constructor(private service:TaskmgrApiService) {}

  ngOnInit(): void {
    this.taskmgrList$ = this.service.getTarefaList();
    this.taskmgrTiposList$ = this.service.getTarefaTiposList();
    this.refreshTaskmgrTiposMap();
  }

  // Variável (propriedades)
  modalTitle:string = "";
  activateAddEditTaskmgrComponent:boolean = false;
  taskmgr:any;

  modalAdd(){
    this.taskmgr = {
      id:0,
      status:null,
      comentario:null,
      tarefaTipoId:null
    }
    this.modalTitle = "Nova tarefa";
    this.activateAddEditTaskmgrComponent = true;
  }

  modalEdit(item:any){
    this.taskmgr = item;
    this.modalTitle = "Editar tarefa";
    this.activateAddEditTaskmgrComponent = true;
  }

  deleteTarefa(item: any) {

    if(confirm('você tem certeza que quer excluir a tarefa ${item.id}?')){
      this.service.deleteTarefa(item.id).subscribe(res => {
        var closeModalBtn = document.getElementById('add-edit-modal-close');
        if(closeModalBtn){
          closeModalBtn.click();
        }
  
        var showDeleteSuccess = document.getElementById('delete-success-alert');
        if (showDeleteSuccess) {
          showDeleteSuccess.style.display = 'block';
        }
        setTimeout(function(){
          if(showDeleteSuccess){
            showDeleteSuccess.style.display = 'none';
          }
        }, 4000);
      })
    }
  }

  modalClose(){
    this.activateAddEditTaskmgrComponent = false;
    this.taskmgrList$ = this.service.getTarefaList();
  }

  refreshTaskmgrTiposMap(){
    this.service.getTarefaTiposList().subscribe(data => {
      this.taskmgrTiposList = data;

      for(let i = 0; i < data.length; i++){
        this.taskmgrTiposMap.set(this.taskmgrTiposList[i].id, this.taskmgrTiposList[i].tarefaNome)
      }
    })
  }


}