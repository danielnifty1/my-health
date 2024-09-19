
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import isAuthenticated from "../../helpers/authenticate";
// nav components
const NavBar=()=>import("../../components/HeaderFile.vue")
const HomeView=()=>import( "../../components/HomeView.vue");
const ServicePage=()=>import("../../components/ServicePage.vue");
const contactpage=()=>import( "../../components/ContactPage.vue");
const aboutpage=()=>import( "../../components/AboutPage.vue");

 
const BreadCrumb=()=>import("../../components/BreadCrumb.vue");
const FooterFile=()=>import("../../components/FooterFile.vue");
 






// const programslide=()=>import( "../../components/programslide.vue");
// const testimonialview=()=>import( "../../components/testimonialView.vue");
// const FooterFile=()=>import("../../components/FooterFile.vue");
// const Programpage=()=>import( "../../components/ProgramPage.vue");


// const contactpage=()=>import( "../../components/ContactPage.vue");
// const buttons=()=>import("../../components/Buttons.vue");
// const BreadCrumb=()=>import("../../components/BreadCrumb.vue");

// const Regform=()=>import("../../components/SignupPage.vue");
// const LoginPage=()=>import("../../components/LoginPage.vue");
// const OtpPage=()=>import("../../components/OtpPage.vue");


const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: "" },
//   { path: "/home", name: "page.home", components: {default:HomeView, NavBar: NavBar,programslide:programslide,FooterPage: FooterFile } },
  { path: "/home", name: "page.home", components: {default:HomeView, NavBar: NavBar,FooterFile:FooterFile}, },
 
    { path: "/services",name:"Our Services", components: { default: ServicePage, NavBar: NavBar, banner: BreadCrumb, FooterFile:FooterFile, } },
   { path: "/contact",name:"Contact Us", components: { default: contactpage,NavBar: NavBar, banner: BreadCrumb, FooterFile: FooterFile, } },
   { path: "/about",name:"About Us", components: { default: aboutpage,NavBar: NavBar, banner: BreadCrumb, FooterFile: FooterFile, } },
//   { path: "/signup", components: { default: Regform, NavBar: HeaderFile, FooterPage: FooterFile,buttons:buttons } },
//    { path: "/verify-email",name:"verify", components: { default: OtpPage, NavBar: HeaderFile, FooterPage: FooterFile, } },

  // { path: "/login", components: {default:LoginPage,NavBar:NavBar,FooterFile:FooterFile  }},
  // { path: "/signup", components: { default: Regform, NavBar:NavBar,FooterFile: FooterFile } },
//   { path: "/register", components: { default: RegisterPage, banner: banner, FooterPage: FooterPage, } },

  // { path: "/secure/transfer", components: { dashheader: dashheader, sideBar:sideBar,default:transfer,baldash:dashboard  }},
  {
    path: "/:catchAll(.*)",
    // components: { default: HomeView, FooterPage: FooterFile, NavBar: NavBar } ,
    components: { default: HomeView, NavBar: NavBar } ,

  },

];

const history = createWebHistory();
// const authenticate=isAuthenticated()
const router = createRouter({
  history,
  routes,

  linkActiveClass:'activepage',
});

router.beforeEach((route) => {
  if (route.meta && route.meta.requireAuth == true) {
 
    // if (authenticate == true) {
    //   return;
    // } else {
    //   return (route.path = "/login");
    // }
  } else {
    return;
  }
});

export default router;
