import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskmgrApiService } from '../../taskmgr-api.service';

@Component({
  selector: 'app-add-edit-taskmgr',
  templateUrl: './add-edit-taskmgr.component.html',
  styleUrl: './add-edit-taskmgr.component.css'
})
export class AddEditTaskmgrComponent implements OnInit {

  tarefaList$!: Observable<any[]>;
  statusList$!: Observable<any[]>;
  tarefaTiposList$!: Observable<any[]>;

  constructor(private service:TaskmgrApiService) { }

  @Input() tarefa:any;
  id: number = 0;
  status: string = "";
  comentario: string = "";
  tarefaTipoId!: number;

  ngOnInit(): void {
    this.id = this.tarefa.id;
    this.status = this.tarefa.status;
    this.comentario = this.tarefa.comentario;
    this.tarefaTipoId = this.tarefa.tarefaTipoId;
    this.statusList$ = this.service.getStatusList();
    this.tarefaTiposList$ = this.service.getTarefaTiposList();
    this.tarefaList$ = this.service.getTarefaList();
  }

  addTarefa() {
    var tarefa = {
      status:this.status,
      comentario:this.comentario,
      tarefaTipoId:this.tarefaTipoId
    }
    this.service.addTarefa(tarefa).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn){
        closeModalBtn.click();
      }

      var showAddSuccess = document.getElementById('add-success-alert');
      if (showAddSuccess) {
        showAddSuccess.style.display = 'block';
      }
      setTimeout(function(){
        if(showAddSuccess){
          showAddSuccess.style.display = 'none';
        }
      }, 4000);
    })
  }

  updateTarefa() {
    var tarefa = {
      id: this.id,
      status:this.status,
      comentario:this.comentario,
      tarefaTipoId:this.tarefaTipoId
    }
    var id:number = this.id;
    this.service.updateTarefa(id,tarefa).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn){
        closeModalBtn.click();
      }

      var showUpdateSuccess = document.getElementById('update-success-alert');
      if (showUpdateSuccess) {
        showUpdateSuccess.style.display = 'block';
      }
      setTimeout(function(){
        if(showUpdateSuccess){
          showUpdateSuccess.style.display = 'none';
        }
      }, 4000);
    })
  }

}