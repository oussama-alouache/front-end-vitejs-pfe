
 import Cookies from 'universal-cookie';
 function  HandleCookies(response :any , remember:Boolean)
 
 {
   const CookieService = new Cookies();
 
   const expiresAt = 60 * 24;
 
 console.log(response , remember) 
 
 
 console.log(CookieService.get('access_token'));
  
 
  if (!remember) {
   const options = { path: "/" };
   CookieService.set("access_token", response.data.access_token
   , options)
 return true;
  }
 let date = new Date();
 date.setTime(date.getTime() + expiresAt * 60 * 1000);
 const options = { path: "/", expires: date ,secure :true };
 CookieService.set("access_token", response.data.access_token
 , options);
 return true;
 
 
  }
 
 
  
 
 export default HandleCookies
 