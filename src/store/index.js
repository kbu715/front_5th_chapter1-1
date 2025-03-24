export const user = {
  getUser() {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  },

  setUser(user) {
    const currentUserData = this.getUser();
    const newUserData = {
      ...currentUserData,
      ...user,
    };

    localStorage.setItem("user", JSON.stringify(newUserData));
  },

  login(username, email = "", description = "") {
    const user = { username, email, description };
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  },

  logout() {
    localStorage.removeItem("user");
  },
};
