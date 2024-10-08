import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'vex-components-overview-dialogs',
  templateUrl: './components-overview-dialogs.component.html',
  styleUrls: ['./components-overview-dialogs.component.scss']
})
export class ComponentsOverviewDialogsComponent {

  result: string;

  dialogHTML =
    `<button mat-raised-button type="button" (click)="openDialog()" color="primary">Open Dialog</button>
<p *ngIf="result">You chose: {{ result }}</p>
`;

  constructor(private dialog: MatDialog) {
  }

  openDialog() {
    this.dialog.open(DemoDialogComponent, {
      disableClose: false,
      width: '400px'
    }).afterClosed().subscribe(result => {
      this.result = result;
    });
  }
}
// NJPR
@Component({
  selector: 'vex-components-overview-demo-dialog',
  template: `
    <div mat-dialog-title class="flex items-center justify-between">
      <div>Question</div>
      <button type="button" mat-icon-button (click)="close('No answer')" tabindex="-1">
        <mat-icon svgIcon="mat:close"></mat-icon>
      </button>
    </div>

    <mat-dialog-content>
      <p>Do you like Pizza?</p>
    </mat-dialog-content>


    <mat-dialog-actions align="end">
      <button mat-button (click)="close('No')">No</button>
      <button mat-button color="primary" (click)="close('Yes')">Yes</button>
    </mat-dialog-actions>
  `
})
export class DemoDialogComponent {

  constructor(private dialogRef: MatDialogRef<DemoDialogComponent>) {
  }

  close(answer: string) {
    this.dialogRef.close(answer);
  }
}
