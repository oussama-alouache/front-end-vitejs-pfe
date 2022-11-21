import decode from 'jwt-decode';
import Cookies from 'universal-cookie';
const isAuthenticated = () => {
  const  CookieService = new Cookies();
  const token = CookieService.get("access_token");
  const refreshToken = CookieService.get("access_token");
  try {
    decode(token);
    decode(refreshToken);
    console.log([decode(token),decode(refreshToken)])
    return true;
  } catch (error) {
    return false;
  }
}
export default isAuthenticated