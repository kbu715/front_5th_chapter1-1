import { MainPage } from "./pages/MainPage";
import { ProfilePage } from "./pages/ProfilePage";
import { LoginPage } from "./pages/LoginPage";
import { ErrorPage } from "./pages/ErrorPage";
import { $ } from "./dom";

const routes = {
  "/": MainPage,
  "/profile": ProfilePage,
  "/login": LoginPage,
  notFound: ErrorPage,
};

function navigate(pathname) {
  window.history.pushState({}, "", pathname);
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

function render() {
  const $root = $("#root");

  const pathname = window.location.pathname;
  const comp = routes[pathname] || routes.notFound;

  $root.innerHTML = comp();
}

render();
