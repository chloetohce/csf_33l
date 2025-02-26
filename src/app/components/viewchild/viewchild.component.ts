import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-viewchild',
  standalone: false,
  templateUrl: './viewchild.component.html',
  styleUrl: './viewchild.component.css'
})
export class ViewchildComponent {
  protected childText: string = 'uwuwuwuwuwu'

  isImageVisible: boolean = false;

  productForm!: FormGroup;

  rows!: FormArray;

  constructor(private fb: FormBuilder) { 
    this.productForm = this.fb.group({
      items: [null, Validators.required],
      items_value: ['no', Validators.required],
    })
    this.rows = this.fb.array([])
  }

  get dynamicRows() {
    return this.rows as FormArray;
  }

  onAddRow() {
    this.rows.push(this.fb.group({
      name: null,
      description: null,
      qty: null
    }))
  }

  /**
   * Method called by parent (root component) to change the text string stored in the child component
   * (!) Should be public to be accessible by the parent
   * @param text new text to be changed to 
   */
  changeText(text: string) {
    this.childText = text;
  }
}
