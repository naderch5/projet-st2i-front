import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-projet-popup',
  templateUrl: './projet-popup.component.html'
})
export class ProjetPopupComponent implements OnInit {
  form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<ProjetPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      codeProjet: [this.data?.codeProjet || '', Validators.required],
      nomProjet: [this.data?.nomProjet || '', Validators.required],
      client: [this.data?.client || '', Validators.required],
      budgetTotal: [this.data?.budgetTotal || '', Validators.required]
    });
  }

  save(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
