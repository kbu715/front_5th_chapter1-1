import { MainPage } from "./pages/MainPage";
import { ProfilePage } from "./pages/ProfilePage";
import { LoginPage } from "./pages/LoginPage";
import { ErrorPage } from "./pages/ErrorPage";
import { $ } from "./dom";
import { user } from "./store";

const routes = [
  {
    path: "/",
    component: MainPage,
    authRequired: false,
  },
  {
    path: "/profile",
    component: ProfilePage,
    authRequired: true,
  },
  {
    path: "/login",
    component: LoginPage,
    authRequired: false,
  },
];

function navigate(pathname) {
  window.history.pushState(null, "", pathname);
  render();
}

window.addEventListener("popstate", render);

const $root = $("#root");

$root.addEventListener("click", (e) => {
  const target = e.target.closest("a");

  if (
    target instanceof HTMLAnchorElement &&
    target.href &&
    target.origin === window.location.origin
  ) {
    e.preventDefault();
    navigate(new URL(target.href).pathname);
  }
});

$root.addEventListener("click", (e) => {
  if (e.target.id === "logout") {
    user.logout();

    navigate("/login");
  }
});

$root.addEventListener("submit", (e) => {
  e.preventDefault();

  const $form = e.target;

  if ($form.id === "login-form") {
    const username = $form.querySelector("#username").value;

    user.login(username);

    navigate("/");
  }

  if ($form.id === "profile-form") {
    const username = $form.querySelector("#username").value;
    const email = $form.querySelector("#email").value;
    const bio = $form.querySelector("#bio").value;

    user.setUser({ username, email, bio });
    render();
  }
});

function App() {
  const pathname = window.location.pathname;
  const route = routes.find((route) => route.path === pathname);
  const loggedIn = user.loggedIn();

  if (route?.authRequired && !loggedIn) {
    window.history.pushState(null, "", "/login");
    return LoginPage();
  }

  if (loggedIn && pathname === "/login") {
    window.history.pushState(null, "", "/");
    return MainPage();
  }

  const Comp = route ? route.component : ErrorPage;
  return Comp();
}

function render() {
  $root.innerHTML = App();
}

render();
