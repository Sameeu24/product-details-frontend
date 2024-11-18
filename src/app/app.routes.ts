import { Routes } from '@angular/router';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [


    {path:'',component:ProductDetailsComponent},
    { path: 'order-confirmation', component: OrderConfirmationComponent },
];
