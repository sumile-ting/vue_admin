import TheComponent from '../views/component/index';

import TheCheckboxes from "../views/component/form/TheCheckboxes";
import TheInput from "../views/component/form/TheInput";
import TheRadios from "../views/component/form/TheRadios";

import ThePaginations from "../views/component/data/ThePaginations";
import TheTables from "../views/component/data/TheTables";

const componentRouter = {
    path: "/component",
    component: TheComponent,
    redirect: () => {
      let path = '/component/form/radio';
      return {path:path};
    },
    children: [
        {path: '/component/form/radio', component: TheRadios},
        {path: '/component/form/checkbox', component: TheCheckboxes},
        {path: '/component/form/input', component: TheInput},
        {path: '/component/data/table', component: TheTables},
        {path: '/component/data/pagination', component: ThePaginations},

    ]
};

export default componentRouter;