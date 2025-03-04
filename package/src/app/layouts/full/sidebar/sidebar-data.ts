import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Dashboard',
    iconName: 'layout-grid-add',
    route: '/dashboard',
  },
  {
    displayName: 'Api',
    iconName: 'api',
    route: '/api',
  },
  {
    displayName: 'eCommerce',
    iconName: 'shopping-cart',
    route: 'https://flexy-angular-main.netlify.app/dashboards/dashboard2',
    chip: true,
    external: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Modern',
    iconName: 'inbox',
    route: 'https://flexy-angular-main.netlify.app/dashboards/dashboard3',
    chip: true,
    external: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
  },

  {
    navCap: 'Apps',
  },
  {
    displayName: 'Chat',
    iconName: 'message-dots',
    route: 'https://flexy-angular-main.netlify.app/apps/chat',
    chip: true,
    external: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Calendar',
    iconName: 'calendar',
    route: 'https://flexy-angular-main.netlify.app/apps/calendar',
    chip: true,
    external: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Email',
    iconName: 'mail',
    route: 'https://flexy-angular-main.netlify.app/apps/email/inbox',
    chip: true,
    external: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Kanban',
    iconName: 'checklist',
    route: 'https://flexy-angular-main.netlify.app/apps/kanban',
    chip: true,
    external: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Contacts',
    iconName: 'phone',
    route: 'https://flexy-angular-main.netlify.app/apps/contacts',
    chip: true,
    external: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Contact List',
    iconName: 'list-details',
    route: 'https://flexy-angular-main.netlify.app/apps/contact-list',
    chip: true,
    external: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Courses',
    iconName: 'certificate',
    route: 'https://flexy-angular-main.netlify.app/apps/courses',
    chip: true,
    external: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Employee',
    iconName: 'brand-ctemplar',
    route: 'https://flexy-angular-main.netlify.app/apps/employee',
    chip: true,
    external: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Notes',
    iconName: 'note',
    route: 'https://flexy-angular-main.netlify.app/apps/notes',
    chip: true,
    external: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Tickets',
    iconName: 'ticket',
    route: 'https://flexy-angular-main.netlify.app/apps/tickets',
    chip: true,
    external: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'ToDo',
    iconName: 'edit',
    route: 'https://flexy-angular-main.netlify.app/apps/todo',
    external: true,
    chip: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Invoice',
    iconName: 'file-invoice',
    chip: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
    route: '',
    children: [
      {
        displayName: 'List',
        iconName: 'point',
        external: true,
        chip: true,
        chipClass: 'bg-primary text-white',
        chipContent: 'PRO',
        route: '/https://flexy-angular-main.netlify.app/apps/invoice',
      },
      {
        displayName: 'Detail',
        iconName: 'point',
        external: true,
        chip: true,
        chipClass: 'bg-primary text-white',
        chipContent: 'PRO',
        route:
          '/https://flexy-angular-main.netlify.app/apps/viewInvoice/101',
      },
      {
        displayName: 'Create',
        iconName: 'point',
        external: true,
        chip: true,
        chipClass: 'bg-primary text-white',
        chipContent: 'PRO',
        route: '/https://flexy-angular-main.netlify.app/apps/addInvoice',
      },
      {
        displayName: 'Edit',
        iconName: 'point',
        external: true,
        chip: true,
        chipClass: 'bg-primary text-white',
        chipContent: 'PRO',
        route:
          '/https://flexy-angular-main.netlify.app/apps/editinvoice/101',
      },
    ],
  },
  
  {
    displayName: 'Blog',
    iconName: 'chart-donut-3',
    chip: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
    route: 'apps/blog',
    children: [
      {
        displayName: 'Post',
        iconName: 'point',
        external: true,
        chip: true,
        chipClass: 'bg-primary text-white',
        chipContent: 'PRO',
        route: 'https://flexy-angular-main.netlify.app/apps/blog/post',
      },
      {
        displayName: 'Detail',
        iconName: 'point',
        external: true,
        chip: true,
        chipClass: 'bg-primary text-white',
        chipContent: 'PRO',
        route:
          'https://flexy-angular-main.netlify.app/apps/blog/detail/Early Black Friday Amazon deals: cheap TVs, headphones, laptops',
      },
    ],
  },

  {
    navCap: 'Ui Components',
  },
  {
    displayName: 'Badge',
    iconName: 'archive',
    route: '/ui-components/badge',
  },
  {
    displayName: 'Chips',
    iconName: 'info-circle',
    route: '/ui-components/chips',
  },
  {
    displayName: 'Lists',
    iconName: 'list-details',
    route: '/ui-components/lists',
  },
  {
    displayName: 'Menu',
    iconName: 'file-text',
    route: '/ui-components/menu',
  },
  {
    displayName: 'Tooltips',
    iconName: 'file-text-ai',
    route: '/ui-components/tooltips',
  },
  {
    displayName: 'Forms',
    iconName: 'clipboard-text',
    route: '/ui-components/forms',
  },
  {
    displayName: 'Tables',
    iconName: 'table',
    route: '/ui-components/tables',
  },
  {
    displayName: 'Expansion Panel',
    iconName: 'layout-bottombar-inactive',
    route: 'https://flexy-angular-main.netlify.app/ui-components/expansion',
    external: true,
    chip: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Dialog',
    iconName: 'diabolo',
    route: 'https://flexy-angular-main.netlify.app/ui-components/dialog',
    external: true,
    chip: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Divider',
    iconName: 'separator',
    route: 'https://flexy-angular-main.netlify.app/ui-components/divider',
    external: true,
    chip: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Paginator',
    iconName: 'text-wrap',
    route: 'https://flexy-angular-main.netlify.app/ui-components/paginator',
    external: true,
    chip: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Progress Bar',
    iconName: 'progress',
    route: 'https://flexy-angular-main.netlify.app/ui-components/progress',
    external: true,
    chip: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Progress Spinner',
    iconName: 'rotate-2',
    route: 'https://flexy-angular-main.netlify.app/ui-components/progress-spinner',
    external: true,
    chip: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Ripples',
    iconName: 'ripple',
    route: 'https://flexy-angular-main.netlify.app/ui-components/ripples',
    external: true,
    chip: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Slide Toggle',
    iconName: 'toggle-left',
    route: 'https://flexy-angular-main.netlify.app/ui-components/slide-toggle',
    external: true,
    chip: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Slider',
    iconName: 'adjustments-alt',
    route: 'https://flexy-angular-main.netlify.app/ui-components/slider',
    external: true,
    chip: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Snackbar',
    iconName: 'stack-backward',
    route: 'https://flexy-angular-main.netlify.app/ui-components/snackbar',
    external: true,
    chip: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Tabs',
    iconName: 'border-all',
    route: 'https://flexy-angular-main.netlify.app/ui-components/tabs',
    external: true,
    chip: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Toolbar',
    iconName: 'tools-kitchen',
    route: 'https://flexy-angular-main.netlify.app/ui-components/toolbar',
    external: true,
    chip: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Tooltips',
    iconName: 'tooltip',
    route: 'https://flexy-angular-main.netlify.app/ui-components/tooltips',
    external: true,
    chip: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
  },

  {
    navCap: 'Pages',
  },
  {
    displayName: 'Roll Base Access',
    iconName: 'lock-access',
    route: 'https://flexy-angular-main.netlify.app/apps/permission',
    external: true,
    chip: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Treeview',
    iconName: 'git-merge',
    route: 'https://flexy-angular-main.netlify.app/theme-pages/treeview',
    external: true,
    chip: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Pricing',
    iconName: 'currency-dollar',
    route: 'https://flexy-angular-main.netlify.app/theme-pages/pricing',
    external: true,
    chip: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Account Setting',
    iconName: 'user-circle',
    route:
      'https://flexy-angular-main.netlify.app/theme-pages/account-setting',
    external: true,
    chip: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'FAQ',
    iconName: 'help',
    route: 'https://flexy-angular-main.netlify.app/theme-pages/faq',
    external: true,
    chip: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Landingpage',
    iconName: 'app-window',
    route: 'https://flexy-angular-main.netlify.app/landingpage',
    external: true,
    chip: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Widgets',
    iconName: 'layout',
    route: 'widgets',
    chip: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
    children: [
      {
        displayName: 'Cards',
        iconName: 'point',
        route: 'https://flexy-angular-main.netlify.app/widgets/cards',
        external: true,
        chip: true,
        chipClass: 'bg-primary text-white',
        chipContent: 'PRO',
      },
      {
        displayName: 'Banners',
        iconName: 'point',
        route: 'https://flexy-angular-main.netlify.app/widgets/banners',
        external: true,
        chip: true,
        chipClass: 'bg-primary text-white',
        chipContent: 'PRO',
      },
      {
        displayName: 'Charts',
        iconName: 'point',
        route: 'https://flexy-angular-main.netlify.app/widgets/charts',
        external: true,
        chip: true,
        chipClass: 'bg-primary text-white',
        chipContent: 'PRO',
      },
    ],
  },
  {
    navCap: 'Extra',
  },
  {
    displayName: 'Icons',
    iconName: 'mood-smile',
    route: '/extra/icons',
  },
  {
    displayName: 'Sample Page',
    iconName: 'brand-dribbble',
    route: '/extra/sample-page',
  },
  {
    navCap: 'Forms',
  },
  {
    displayName: 'Elements',
    iconName: 'apps',
    chip: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
    route: 'forms/forms-elements',
    children: [
      {
        displayName: 'Autocomplete',
        iconName: 'point',
        route:
          'https://flexy-angular-main.netlify.app/forms/forms-elements/autocomplete',
        external: true,
        chip: true,
        chipClass: 'bg-primary text-white',
        chipContent: 'PRO',
      },
      {
        displayName: 'Button',
        iconName: 'point',
        route:
          'https://flexy-angular-main.netlify.app/forms/forms-elements/button',
        external: true,
        chip: true,
        chipClass: 'bg-primary text-white',
        chipContent: 'PRO',
      },
      {
        displayName: 'Checkbox',
        iconName: 'point',
        route:
          'https://flexy-angular-main.netlify.app/forms/forms-elements/checkbox',
        external: true,
        chip: true,
        chipClass: 'bg-primary text-white',
        chipContent: 'PRO',
      },
      {
        displayName: 'Radio',
        iconName: 'point',
        route:
          'https://flexy-angular-main.netlify.app/forms/forms-elements/radio',
        external: true,
        chip: true,
        chipClass: 'bg-primary text-white',
        chipContent: 'PRO',
      },
      {
        displayName: 'Datepicker',
        iconName: 'point',
        route:
          'https://flexy-angular-main.netlify.app/forms/forms-elements/datepicker',
        external: true,
        chip: true,
        chipClass: 'bg-primary text-white',
        chipContent: 'PRO',
      },
    ],
  },
  {
    displayName: 'Form Layouts',
    iconName: 'file-description',
    route: 'https://flexy-angular-main.netlify.app/forms/form-layouts',
    external: true,
    chip: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Form Horizontal',
    iconName: 'box-align-bottom',
    route: 'https://flexy-angular-main.netlify.app/forms/form-horizontal',
    external: true,
    chip: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Form Vertical',
    iconName: 'box-align-left',
    route: 'https://flexy-angular-main.netlify.app/forms/form-vertical',
    external: true,
    chip: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Form Wizard',
    iconName: 'files',
    route: 'https://flexy-angular-main.netlify.app/forms/form-wizard',
    external: true,
    chip: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Toastr',
    iconName: 'notification',
    route: 'https://flexy-angular-main.netlify.app/forms/form-toastr',
    external: true,
    chip: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
  },
  
  {
    navCap: 'Tables',
  },
  {
    displayName: 'Tables',
    iconName: 'layout',
    route: 'tables',
    chip: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
    children: [
      {
        displayName: 'Basic Table',
        iconName: 'point',
        route: 'https://flexy-angular-main.netlify.app/tables/basic-table',
        external: true,
        chip: true,
        chipClass: 'bg-primary text-white',
        chipContent: 'PRO',
      },
      {
        displayName: 'Dynamic Table',
        iconName: 'point',
        route: 'https://flexy-angular-main.netlify.app/tables/dynamic-table',
        external: true,
        chip: true,
        chipClass: 'bg-primary text-white',
        chipContent: 'PRO',
      },
      {
        displayName: 'Expand Table',
        iconName: 'point',
        route: 'https://flexy-angular-main.netlify.app/tables/expand-table',
        external: true,
        chip: true,
        chipClass: 'bg-primary text-white',
        chipContent: 'PRO',
      },
      {
        displayName: 'Filterable Table',
        iconName: 'point',
        route:
          'https://flexy-angular-main.netlify.app/tables/filterable-table',
        external: true,
        chip: true,
        chipClass: 'bg-primary text-white',
        chipContent: 'PRO',
      },
      {
        displayName: 'Footer Row Table',
        iconName: 'point',
        route:
          'https://flexy-angular-main.netlify.app/tables/footer-row-table',
        external: true,
        chip: true,
        chipClass: 'bg-primary text-white',
        chipContent: 'PRO',
      },
      {
        displayName: 'HTTP Table',
        iconName: 'point',
        route: 'https://flexy-angular-main.netlify.app/tables/http-table',
        external: true,
        chip: true,
        chipClass: 'bg-primary text-white',
        chipContent: 'PRO',
      },
      {
        displayName: 'Mix Table',
        iconName: 'point',
        route: 'https://flexy-angular-main.netlify.app/tables/mix-table',
        external: true,
        chip: true,
        chipClass: 'bg-primary text-white',
        chipContent: 'PRO',
      },
      {
        displayName: 'Multi Header Footer',
        iconName: 'point',
        route:
          'https://flexy-angular-main.netlify.app/tables/multi-header-footer-table',
        external: true,
        chip: true,
        chipClass: 'bg-primary text-white',
        chipContent: 'PRO',
      },
      {
        displayName: 'Pagination Table',
        iconName: 'point',
        route:
          'https://flexy-angular-main.netlify.app/tables/pagination-table',
        external: true,
        chip: true,
        chipClass: 'bg-primary text-white',
        chipContent: 'PRO',
      },
      {
        displayName: 'Row Context Table',
        iconName: 'point',
        route:
          'https://flexy-angular-main.netlify.app/tables/row-context-table',
        external: true,
        chip: true,
        chipClass: 'bg-primary text-white',
        chipContent: 'PRO',
      },
      {
        displayName: 'Selection Table',
        iconName: 'point',
        route:
          'https://flexy-angular-main.netlify.app/tables/selection-table',
        external: true,
        chip: true,
        chipClass: 'bg-primary text-white',
        chipContent: 'PRO',
      },
      {
        displayName: 'Sortable Table',
        iconName: 'point',
        route:
          'https://flexy-angular-main.netlify.app/tables/sortable-table',
        external: true,
        chip: true,
        chipClass: 'bg-primary text-white',
        chipContent: 'PRO',
      },
      {
        displayName: 'Sticky Column',
        iconName: 'point',
        route:
          'https://flexy-angular-main.netlify.app/tables/sticky-column-table',
        external: true,
        chip: true,
        chipClass: 'bg-primary text-white',
        chipContent: 'PRO',
      },
      {
        displayName: 'Sticky Header Footer',
        iconName: 'point',
        route:
          'https://flexy-angular-main.netlify.app/tables/sticky-header-footer-table',
        external: true,
        chip: true,
        chipClass: 'bg-primary text-white',
        chipContent: 'PRO',
      },
    ],
  },
  {
    displayName: 'Data table',
    iconName: 'border-outer',
    route: 'https://flexy-angular-main.netlify.app/datatable/kichen-sink',
    external: true,
    chip: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
  },
  {
    navCap: 'Chart',
  },
  {
    displayName: 'Line',
    iconName: 'chart-line',
    route: 'https://flexy-angular-main.netlify.app/charts/line',
    external: true,
    chip: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Gredient',
    iconName: 'chart-arcs',
    route: 'https://flexy-angular-main.netlify.app/charts/gredient',
    external: true,
    chip: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Area',
    iconName: 'chart-area',
    route: 'https://flexy-angular-main.netlify.app/charts/area',
    external: true,
    chip: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Candlestick',
    iconName: 'chart-candle',
    route: 'https://flexy-angular-main.netlify.app/charts/candlestick',
    external: true,
    chip: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Column',
    iconName: 'chart-dots',
    route: 'https://flexy-angular-main.netlify.app/charts/column',
    external: true,
    chip: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Doughnut & Pie',
    iconName: 'chart-donut-3',
    route: 'https://flexy-angular-main.netlify.app/charts/doughnut-pie',
    external: true,
    chip: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Radialbar & Radar',
    iconName: 'chart-radar',
    route: 'https://flexy-angular-main.netlify.app/charts/radial-radar',
    external: true,
    chip: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
  },

  {
    navCap: 'Auth',
  },
  {
    displayName: 'Login',
    iconName: 'login',
    route: '/authentication',
    children: [
      {
        displayName: 'Login',
        iconName: 'point',
        route: '/authentication/login',
      },
      {
        displayName: 'Side Login',
        iconName: 'point',
        external: true,
        chip: true,
        chipClass: 'bg-primary text-white', 
        chipContent: 'PRO',
        route: 'https://flexy-angular-main.netlify.app/authentication/login',
      },
    ],
  },
  {
    displayName: 'Register',
    iconName: 'user-plus',
    route: '/authentication',
    children: [
      {
        displayName: 'Register',
        iconName: 'point',
        route: '/authentication/register',
      },
      {
        displayName: 'Side Register',
        iconName: 'point',
        external: true,
        chip: true,
        chipClass: 'bg-primary text-white',
        chipContent: 'PRO',
        route: 'https://flexy-angular-main.netlify.app/authentication/side-register',
      },
    ],
  },
  {
    displayName: 'Forgot Pwd',
    iconName: 'rotate',
    chip: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
    route: '/authentication',
    children: [
      {
        displayName: 'Side Forgot Pwd',
        iconName: 'point',
        external: true,
        chip: true,
        chipClass: 'bg-primary text-white',
        chipContent: 'PRO',
        route: 'https://flexy-angular-main.netlify.app/authentication/side-forgot-pwd',
      },
      {
        displayName: 'Boxed Forgot Pwd',
        iconName: 'point',
        external: true,
        chip: true,
        chipClass: 'bg-primary text-white',
        chipContent: 'PRO',
        route: 'https://flexy-angular-main.netlify.app/authentication/boxed-forgot-pwd',
      },
    ],
  },
  {
    displayName: 'Two Steps',
    iconName: 'zoom-code',
    chip: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
    route: '/authentication',
    children: [
      {
        displayName: 'Side Two Steps',
        iconName: 'point',
        external: true,
        chip: true,
        chipClass: 'bg-primary text-white',
        chipContent: 'PRO',
        route: 'https://flexy-angular-main.netlify.app/authentication/side-two-steps',
      },
      {
        displayName: 'Boxed Two Steps',
        iconName: 'point',
        external: true,
        chip: true,
        chipClass: 'bg-primary text-white',
        chipContent: 'PRO',
        route: 'https://flexy-angular-main.netlify.app/authentication/boxed-two-steps',
      },
    ],
  },
  {
    displayName: 'Error',
    iconName: 'alert-circle',
    route: 'https://flexy-angular-main.netlify.app/authentication/error',
    external: true,
    chip: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Maintenance',
    iconName: 'settings',
    route: 'https://flexy-angular-main.netlify.app/authentication/maintenance',
    external: true,
    chip: true,
    chipClass: 'bg-primary text-white',
    chipContent: 'PRO',
  },
];
