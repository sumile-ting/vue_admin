import About from './../components/about';
import TheAbout from "../components/about/TheAbout";

const aboutRouter = {
    path: '/about',
    component: About,
    redirect: () => {
      let path = '/about/project';
      return {path:path};
    },
    children: [
        {path: '/about/project', component: TheAbout},
    ]

};

export default aboutRouter;
