export function Nav({ loggedIn }) {
  const pathname = window.location.pathname;
  const hash = window.location.hash;

  const getActiveClass = (path) => {
    if (hash) {
      return `#${path}` === hash;
    }
    return path === pathname;
  };

  const navItems = loggedIn
    ? /* HTML */ `
        <li>
          <a
            href="/profile"
            class="${getActiveClass("/profile")
              ? "text-blue-600"
              : "text-gray-600"}"
            >프로필</a
          >
        </li>
        <li>
          <a href="#" id="logout" class="text-gray-600">로그아웃</a>
        </li>
      `
    : /* HTML */ `
        <li>
          <a
            href="/login"
            class="${getActiveClass("/login")
              ? "text-blue-600"
              : "text-gray-600"}"
            >로그인</a
          >
        </li>
      `;

  return /* HTML */ `
    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        <li>
          <a
            href="/"
            class="${getActiveClass("/") ? "text-blue-600" : "text-gray-600"}"
            >홈</a
          >
        </li>
        ${navItems}
      </ul>
    </nav>
  `;
}
