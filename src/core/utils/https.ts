import Axios from "axios";
console.log("dddd"+import.meta.env.VITE_APP_ENV)

const http = Axios.create({ baseURL:import.meta.env.VITE_APP_ENV === "production"? "https://vitfitv2server.onrender.com/v1/": "https://vitfitv2server.onrender.com/v1/",
 
  });

  // http.defaults.headers.common.accept = "application/json";

// before a request is made start  anything
http.interceptors.request.use((config) => {
    return config;
  });
  



  const base_url = http.defaults.baseURL;

export { http, base_url };