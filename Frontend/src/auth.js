export default function auth(nextState, replace) {
      if (localStorage.getIem("username") == null || localStorage.getItem("token") == null) {
          browserHistory.replace("/login")
      }
}
