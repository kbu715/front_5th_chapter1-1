import { MainPage } from "./pages/MainPage";
import { ProfilePage } from "./pages/ProfilePage";
import { LoginPage } from "./pages/LoginPage";
import { ErrorPage } from "./pages/ErrorPage";
import { $ } from "./dom";

function render() {
  const $root = $("#root");

  $root.innerHTML = `
    ${MainPage()}
    ${ProfilePage()}
    ${LoginPage()}
    ${ErrorPage()}
  `;
}

render();
