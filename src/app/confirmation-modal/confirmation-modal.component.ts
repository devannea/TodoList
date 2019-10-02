import {Component, Input, OnInit} from '@angular/core';
import { TodoService } from '../services/todo.service'
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { ITodo } from '../interfaces/ITodo';

@Component({
  selector: 'confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent implements OnInit {
  closeResult: string;
  @Input()
  todo: ITodo 
  constructor(
    private modalService: NgbModal,
    private TodoService: TodoService
    ) {
  }
  ngOnInit() {
  }
  yesDeleteTodo(todo:any) {
    console.log("Delete button in Modal was clicked: " + todo)
    this.TodoService.deleteTodo(todo)
    this.modalService.dismissAll();
    
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}