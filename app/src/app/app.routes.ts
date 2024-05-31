import { Routes } from '@angular/router';
import { A1Component } from './a1/a1.component';
import { A2Component } from './a2/a2.component';
import { Img1Component } from './img1/img1.component';
import { Img2Component } from './img2/img2.component';
import { Img3Component } from './img3/img3.component';
import { Img4Component } from './img4/img4.component';
import { Img5Component } from './img5/img5.component';

export const routes: Routes = [
    { path: '', component: A1Component },
    { path: 'a2', component: A2Component },
    { path: 'img1', component: Img1Component },
    { path: 'img2', component: Img2Component },
    { path: 'img3', component: Img3Component },
    { path: 'img4', component: Img4Component },
    { path: 'img5', component: Img5Component },
];
