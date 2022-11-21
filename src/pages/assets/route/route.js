import axios from "axios";
import Cookies from "universal-cookie";

class Auth {
  constructor() {
    const  CookieService = new Cookies();
    const token = CookieService.get("access_token");
    token ? (this.authenticated = true) : (this.authenticated = false);
  }
  state = {
    username: "",
    password: "",
    isChecked: false,
  };
 
  async login( cb) {
    
    const postData = {
      username: this.state.username,
      password: this.state.password,
    }
  
    
    const user = response = await axios.post("http://localhost:8000/api/login",
    postData);

    if (!user) {
      cb(false);
      return false;
    }

    localStorage.setItem("accessToken", user.access_token);
    this.authenticated = true;
    cb(true);
  }

  logout(cb) {
    CookieService.remove("access_token");
    this.authenticated = false;
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }

  getAccessToken() {
    return  CookieService.get("access_token");
  }
}

export default new Auth();
