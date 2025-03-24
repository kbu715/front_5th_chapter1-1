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

document.addEventListener("click", (e) => {
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

const $root = $("#root");

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
    const password = $form.querySelector("#password").value;

    if (!username || !password) {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }

    user.login(username);

    navigate("/");
  }

  if ($form.id === "profile-update-form") {
    const username = $form.querySelector("#username").value;
    const email = $form.querySelector("#email").value;
    const bio = $form.querySelector("#bio").value;

    user.setUser({ username, email, bio });
    render();
  }
});

function render() {
  const pathname = window.location.pathname;
  const route = routes.find((route) => route.path === pathname);

  if (route.authRequired && !user.loggedIn) {
    window.history.pushState(null, "", "/login");
    $root.innerHTML = LoginPage();
  }
  const comp = route ? route.component : ErrorPage;

  $root.innerHTML = comp();
}

render();
