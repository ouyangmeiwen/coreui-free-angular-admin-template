import { Routes } from '@angular/router';
import { InvengoBookComponent } from './invengo-book/invengo-book.component'

export const routes: Routes = [
    {
        path: '',
        data: {
            title: 'invengo'
        },
        children: [
            {
                path: '',
                redirectTo: 'invengo-book',  //缺省项
                pathMatch: 'full'
            },
            {
                path: 'invengo-book', //第二级菜单
                loadComponent: () => import('./invengo-book/invengo-book.component').then(m => m.InvengoBookComponent),
                data: {
                    title: 'bookinfo'
                }
            },
        ]
    }
];

