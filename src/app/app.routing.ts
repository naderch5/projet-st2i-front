import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { AuthGuard } from './shared/guards/auth.guard';

export const rootRouterConfig: Routes =
 [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent),
        data: { title: 'Login', breadcrumb: 'LOGIN' }
      }
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'phase/list',
        loadComponent: () => import('./pages/phase/list-phase/list-phase.component').then(m => m.ListPhaseComponent),
        data: { title: 'Liste des Phases', breadcrumb: 'LIST PHASE' }
      },
      {
        path: 'phase/create',
        loadComponent: () => import('./pages/phase/create-phase/create-phase.component').then(m => m.CreatePhaseComponent),
        data: { title: 'Créer une Phase', breadcrumb: 'CREATE PHASE' }
      },
      {
        path: 'phase/update/:id',
        loadComponent: () => import('./pages/phase/update-phase/update-phase.component').then(m => m.UpdatePhaseComponent),
        data: { title: 'Modifier une Phase', breadcrumb: 'UPDATE PHASE' }
      },
      {
        path: 'phase/detail/:id',
        loadComponent: () => import('./pages/phase/phase-detail/phase-detail.component').then(m => m.PhaseDetailComponent),
        data: { title: 'Détail Phase', breadcrumb: 'DETAIL PHASE' }
      },
      

      {
        path: 'etape/create',
        loadComponent: () =>
          import('./pages/etape/create-etape/create-etape.component').then(
            (m) => m.CreateEtapeComponent
          ),
        data: { title: 'Create Etape', breadcrumb: 'CREATE ETAPE' },
      },
      {
        path: 'etape/update/:id',
        loadComponent: () =>
          import('./pages/etape/update-etape/update-etape.component').then(
            (m) => m.UpdateEtapeComponent
          ),
        data: { title: 'Update Etape', breadcrumb: 'UPDATE ETAPE' },
      },
      {
        path: 'etape/list',
        loadComponent: () =>
          import('./pages/etape/list-etape/list-etape.component').then(
            (m) => m.ListEtapeComponent
          ),
        data: { title: 'List Etapes', breadcrumb: 'LIST ETAPES' },
      },
      {
        path: 'etape/detail/:id',
        loadComponent: () =>
          import('./pages/etape/etape-detail/etape-detail.component').then(
            (m) => m.EtapeDetailComponent
          ),
        data: { title: 'Etape Details', breadcrumb: 'ETAPE DETAILS' },
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule),
        data: { title: 'Dashboard', breadcrumb: 'DASHBOARD'}
      },
      {
        path: 'dashboaard',
        loadComponent: () => import('./pages/dashboard/dashboaard.component').then(m => m.DashboardComponent),
        data: { title: 'Dashboard', breadcrumb: 'DASHBOARD'}
      },
      {
        path: 'facturation/create',
        loadComponent: () => import('./pages/facturation/create-facture/create-facture.component').then(m => m.CreateFactureComponent)
      },
      {
        path: 'facturation/update/:id',
        loadComponent: () => import('./pages/facturation/update-facture/update-facture.component').then(m => m.UpdateFactureComponent)
      },
      {
        path: 'facturation/liste',
        loadComponent: () => import('./pages/facturation/liste-facture/liste-facture.component').then(m => m.ListeFactureComponent)
      },
      
      {
        path: 'createProjet',
        loadComponent: () =>
          import('./pages/projet/create-projet/create-projet.component')
            .then(m => m.CreateProjetComponent),
        data: { title: 'Créer un projet', breadcrumb: 'CREATE PROJET' }
      },
      {
        path: 'updateProjet/:id',
        loadComponent: () =>
          import('./pages/projet/update-projet/update-projet.component')
            .then(m => m.UpdateProjetComponent),
        data: { title: 'Modifier un projet', breadcrumb: 'UPDATE PROJET' }
      },
      {
        path: 'listProjet',
        loadComponent: () =>
          import('./pages/projet/list-projet/list-projet.component')
            .then(m => m.ListeProjetsComponent),
        data: { title: 'Liste des projets', breadcrumb: 'LISTE PROJET' }
      },
      {
        path: 'material',
        loadChildren: () => import('./views/material-example-view/material-example-view.module').then(m => m.MaterialExampleViewModule),
        data: { title: 'Material', breadcrumb: 'MATERIAL'}
      },
      {
        path: 'dialogs',
        loadChildren: () => import('./views/app-dialogs/app-dialogs.module').then(m => m.AppDialogsModule),
        data: { title: 'Dialogs', breadcrumb: 'DIALOGS'}
      },
      {
        path: 'profile',
        loadChildren: () => import('./views/profile/profile.module').then(m => m.ProfileModule),
        data: { title: 'Profile', breadcrumb: 'PROFILE'}
      },
      {
        path: 'others',
        loadChildren: () => import('./views/others/others.module').then(m => m.OthersModule),
        data: { title: 'Others', breadcrumb: 'OTHERS'}
      },
      {
        path: 'tables',
        loadChildren: () => import('./views/tables/tables.module').then(m => m.TablesModule),
        data: { title: 'Tables', breadcrumb: 'TABLES'}
      },
      {
        path: 'forms',
        loadChildren: () => import('./views/forms/forms.module').then(m => m.AppFormsModule),
        data: { title: 'Forms', breadcrumb: 'FORMS'}
      },
      {
        path: 'chart',
        loadChildren: () => import('./views/chart-example-view/chart-example-view.module').then(m => m.ChartExampleViewModule),
        data: { title: 'Charts', breadcrumb: 'CHARTS'}
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/charts/charts.module').then(m => m.AppChartsModule),
        data: { title: 'Charts', breadcrumb: 'CHARTS'}
      },
      {
        path: 'inbox',
        loadChildren: () => import('./views/app-inbox/app-inbox.module').then(m => m.AppInboxModule),
        data: { title: 'Inbox', breadcrumb: 'INBOX'}
      },
      {
        path: 'calendar',
        loadChildren: () => import('./views/app-calendar/app-calendar.module').then(m => m.AppCalendarModule),
        data: { title: 'Calendar', breadcrumb: 'CALENDAR'}
      },

      {
        path: 'cruds',
        loadChildren: () => import('./views/cruds/cruds.module').then(m => m.CrudsModule),
        data: { title: 'CRUDs', breadcrumb: 'CRUDs'}
      },
      {
        path: 'search',
        loadChildren: () => import('./views/search-view/search-view.module').then(m => m.SearchViewModule)
      },
      {
        path: 'invoice',
        loadChildren: () => import('./views/invoice/invoice.module').then(m => m.InvoiceModule)
      },
    
      
    ]
  },
  {
    path: '**',
    redirectTo: 'sessions/404'
  }
];

