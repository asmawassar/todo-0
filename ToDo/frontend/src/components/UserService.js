import axios from "axios";

class UserService {
  async handleSignup(email, username, password) {
    axios
      .post("http://127.0.0.1/:8080/api/users/register", {
        username: username,
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(`register error ${e}`);
      });
  }
}
export default new UserService();
