import Guide from '../views/guide';
import InstallHelper from "../views/guide/InstallHelper";
import UsageGuide from "../views/guide/UsageGuide";

const GuideRouter = {
    path: "/guide",
    component: Guide,
    redirect: () => {
      let path = '/guide/install';
      return {path:path};
    },
    children: [
        {path: '/guide/install', component: InstallHelper},
        {path: '/guide/usage', component: UsageGuide},

    ]

};

export default GuideRouter;