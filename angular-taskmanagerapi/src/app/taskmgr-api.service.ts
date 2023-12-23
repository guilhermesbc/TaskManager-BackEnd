import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskmgrApiService {

  readonly taskmgrAPIURL = "https://localhost:7161/api";

  constructor(private http:HttpClient) { }

  // Tarefas
  getTarefaList():Observable<any[]> { 
    return this.http.get<any>(this.taskmgrAPIURL + '/tarefas');
  }

  addTarefa(data:any) {
    return this.http.post(this.taskmgrAPIURL + '/tarefas', data);
  }

  updateTarefa(id:number|string, data:any) {
    return this.http.put(this.taskmgrAPIURL + `/tarefas/${id}`, data);
  }

  deleteTarefa(id:number|string) {  
    return this.http.delete(this.taskmgrAPIURL + `/tarefas/${id}`);
  }

  // TarefaTipos
  getTarefaTiposList():Observable<any[]> { 
    return this.http.get<any>(this.taskmgrAPIURL + '/tarefaTipos');
  }

  addTarefaTipos(data:any) {
    return this.http.post(this.taskmgrAPIURL + '/tarefaTipos', data);
  }

  updateTarefaTipos(id:number|string, data:any) {
    return this.http.put(this.taskmgrAPIURL + `/tarefaTipos/${id}`, data);
  }

  deleteTarefaTipos(id:number|string) {  
    return this.http.delete(this.taskmgrAPIURL + `/tarefaTipos/${id}`);
  }

  // Status
  getStatusList():Observable<any[]> { 
    return this.http.get<any>(this.taskmgrAPIURL + '/status');
  }

  addStatus(data:any) {
    return this.http.post(this.taskmgrAPIURL + '/status', data);
  }

  updateStatus(id:number|string, data:any) {
    return this.http.put(this.taskmgrAPIURL + `/status/${id}`, data);
  }

  deleteStatus(id:number|string) {  
    return this.http.delete(this.taskmgrAPIURL + `/status/${id}`);
  }

}

