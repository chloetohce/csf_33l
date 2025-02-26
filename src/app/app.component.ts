import { AfterViewInit, ChangeDetectorRef, Component, DoCheck, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { ViewchildComponent } from './components/viewchild/viewchild.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MaterialModule } from './material/material/material.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit, DoCheck{
  title = 'csf_33l';

  private fb = inject(FormBuilder);
  private cdr = inject(ChangeDetectorRef);

  form!: FormGroup;
  
  @ViewChild(ViewchildComponent) childComponent!: ViewchildComponent; // Either provide the component name or the form reference
  @ViewChild("myImg") imageElement!: ElementRef // Accessing an element, not the whole component

  
  ngAfterViewInit(): void {
    console.info('Child component initialized:', this.childComponent);
    this.childComponent.isImageVisible = true;
    this.cdr.detectChanges(); //This forces Angular to re-run change detection and prevent the error
  }
  
  ngOnInit(): void {
    this.form = this.fb.group({
      newText: this.fb.control<string>('')
    })
    console.log('childComponent in ngOnInit():', this.childComponent);
  }
  /**
   * Every time something changes, or on init, it will do a check
   */
  ngDoCheck(): void {
    console.info('Running do check')
  }

  changeChildText() {
    this.childComponent.changeText(this.form.get('newText')?.value);
  }

  createForm(): FormGroup {
    return this.fb.group({
      newText: this.fb.control<string>('')
    })
  }
}
