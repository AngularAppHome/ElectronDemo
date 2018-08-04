import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
 import {
     MatButtonModule, MatCardModule, MatIconModule, MatSidenavModule, MatToolbarModule,
     MatTooltipModule, MatProgressBarModule, MatSlideToggleModule, MatMenuModule, MatSliderModule,
     MatTabsModule, MatCheckboxModule, MatRadioModule, MatChipsModule, MatDatepickerModule, MatNativeDateModule, MatTableModule,
     MatSortModule, MatPaginatorModule
 } from "@angular/material";
 import {MatListModule} from '@angular/material/list';
 import {MatInputModule} from '@angular/material/input';
//import {MatButtonModule, MatCheckboxModule, MatTooltipModule} from '@angular/material';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {FlexLayoutModule} from "@angular/flex-layout";
//import {NgxChartsModule} from '@swimlane/ngx-charts';
import {MainLayoutModule} from "./layouts/main-layout/main-layout.module";
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    imports: [
        // Angular Modules
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule,
        FlexLayoutModule,
        // Material Modules
        //MatButtonModule, MatCheckboxModule,
        MatTooltipModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatInputModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatProgressBarModule,
        MatSlideToggleModule,
        MatMenuModule,
        MatSliderModule,
        MatTabsModule,
        MatCheckboxModule,
        MatRadioModule,
        MatChipsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTableModule,        
        MatDialogModule,
        //MatCoreModule,
        MatSortModule,
        MatPaginatorModule,

        CdkTableModule,
        // Chart module
        //NgxChartsModule,
        MainLayoutModule
    ],
    exports: [
        // Angular Modules
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule,
        FlexLayoutModule,
        // Material Modules
        //MatButtonModule, MatCheckboxModule,
        MatTooltipModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatInputModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatProgressBarModule,
        MatSlideToggleModule,
        MatMenuModule,
        MatSliderModule,
        MatTabsModule,
        MatCheckboxModule,
        MatRadioModule,
        MatChipsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTableModule,     
        MatDialogModule,   
        //MatCoreModule,
        MatSortModule,
        MatPaginatorModule,
        CdkTableModule,
        // Chart module
        //NgxChartsModule,
        MainLayoutModule
    ],
    declarations: [],
    providers: [
    ],
    entryComponents: []
})
export class SharedModule {
}
