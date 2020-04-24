import Guide from '../components/guide';
import InstallHelper from "../components/guide/InstallHelper";
import UsageGuide from "../components/guide/UsageGuide";

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