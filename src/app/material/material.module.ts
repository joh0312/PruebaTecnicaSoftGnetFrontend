import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatCommonModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTreeModule } from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { LayoutModule } from '@angular/cdk/layout';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatNativeDateModule, MatButtonModule, MatIconModule
 
  ],
  exports: [
    FormsModule,
    MatOptionModule,
    MatMenuModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatDividerModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatTableModule,
    MatIconModule,
    MatTabsModule,
    MatCommonModule,
    MatTooltipModule,
    LayoutModule,
    MatSnackBarModule,
    MatGridListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTreeModule,
    MatButtonModule,
    MatExpansionModule,
    MatNativeDateModule
  ],
})
export class MaterialModule { }
