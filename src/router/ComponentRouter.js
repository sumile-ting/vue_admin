import TheComponent from './../components/component';

import TheCheckboxes from "../components/component/form/TheCheckboxes";
import TheInput from "../components/component/form/TheInput";
import TheRadios from "../components/component/form/TheRadios";

import ThePaginations from "../components/component/data/ThePaginations";
import TheTables from "../components/component/data/TheTables";

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