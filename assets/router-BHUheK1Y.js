(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(s){if(s.ep)return;s.ep=!0;const l=e(s);fetch(s.href,l)}})();const y=r=>document.querySelector(r),i={loggedIn(){return!!this.getUser()},getUser(){const r=localStorage.getItem("user");return r?JSON.parse(r):null},setUser(r){const e={...this.getUser(),...r};localStorage.setItem("user",JSON.stringify(e))},login(r,t="",e=""){const o={username:r,email:t,bio:e};return localStorage.setItem("user",JSON.stringify(o)),o},logout(){localStorage.removeItem("user")}};function b(){return`
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div
        class="bg-white p-8 rounded-lg shadow-md w-full text-center"
        style="max-width: 480px"
      >
        <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
        <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
        <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
        <p class="text-gray-600 mb-8">
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>
        <a
          href=${a.HOME}
          class="bg-blue-600 text-white px-4 py-2 rounded font-bold"
        >
          홈으로 돌아가기
        </a>
      </div>
    </main>
  `}function m(){return`
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">
          항해플러스
        </h1>
        <form id="login-form">
          <div class="mb-4">
            <input
              id="username"
              name="username"
              type="text"
              placeholder="사용자 이름"
              class="w-full p-2 border rounded"
            />
          </div>
          <div class="mb-4">
            <input
              type="text"
              placeholder="이메일 또는 전화번호"
              class="w-full p-2 border rounded"
            />
          </div>
          <div class="mb-6">
            <input
              type="password"
              id="password"
              placeholder="비밀번호"
              class="w-full p-2 border rounded"
            />
          </div>
          <button
            type="submit"
            class="w-full bg-blue-600 text-white p-2 rounded font-bold"
          >
            로그인
          </button>
        </form>
        <div class="mt-4 text-center">
          <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
        </div>
        <hr class="my-6" />
        <div class="text-center">
          <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">
            새 계정 만들기
          </button>
        </div>
      </div>
    </main>
  `}function d(){return`
    <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>
  `}function u(){return`
    <footer class="bg-gray-200 p-4 text-center">
      <p>&copy; 2024 항해플러스. All rights reserved.</p>
    </footer>
  `}function c(){const r=i.loggedIn(),t=window.location.pathname,e=s=>t===s,o=r?`
        <li>
          <a
            href=${a.PROFILE}
            class="${e(a.PROFILE)?"text-blue-600 font-bold":"text-gray-600"}"
            >프로필</a
          >
        </li>
        <li>
          <a href="#" id="logout" class="text-gray-600">로그아웃</a>
        </li>
      `:`
        <li>
          <a
            href=${a.LOGIN}
            class="${e(a.LOGIN)?"text-blue-600 font-bold":"text-gray-600"}"
            >로그인</a
          >
        </li>
      `;return`
    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        <li>
          <a
            href=${a.HOME}
            class="${e(a.HOME)?"text-blue-600 font-bold":"text-gray-600"}"
            >홈</a
          >
        </li>
        ${o}
      </ul>
    </nav>
  `}function f(){return`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${d()} ${c()}

        <main class="p-4">
          <div class="mb-4 bg-white rounded-lg shadow p-4">
            <textarea
              class="w-full p-2 border rounded"
              placeholder="무슨 생각을 하고 계신가요?"
            ></textarea>
            <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">
              게시
            </button>
          </div>

          <div class="space-y-4">
            <div class="bg-white rounded-lg shadow p-4">
              <div class="flex items-center mb-2">
                <img
                  src="https://placehold.co/40"
                  alt="프로필"
                  class="rounded-full mr-2"
                />
                <div>
                  <p class="font-bold">홍길동</p>
                  <p class="text-sm text-gray-500">5분 전</p>
                </div>
              </div>
              <p>오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!</p>
              <div class="mt-2 flex justify-between text-gray-500">
                <button>좋아요</button>
                <button>댓글</button>
                <button>공유</button>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow p-4">
              <div class="flex items-center mb-2">
                <img
                  src="https://placehold.co/40"
                  alt="프로필"
                  class="rounded-full mr-2"
                />
                <div>
                  <p class="font-bold">김철수</p>
                  <p class="text-sm text-gray-500">15분 전</p>
                </div>
              </div>
              <p>새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!</p>
              <div class="mt-2 flex justify-between text-gray-500">
                <button>좋아요</button>
                <button>댓글</button>
                <button>공유</button>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow p-4">
              <div class="flex items-center mb-2">
                <img
                  src="https://placehold.co/40"
                  alt="프로필"
                  class="rounded-full mr-2"
                />
                <div>
                  <p class="font-bold">이영희</p>
                  <p class="text-sm text-gray-500">30분 전</p>
                </div>
              </div>
              <p>오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?</p>
              <div class="mt-2 flex justify-between text-gray-500">
                <button>좋아요</button>
                <button>댓글</button>
                <button>공유</button>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow p-4">
              <div class="flex items-center mb-2">
                <img
                  src="https://placehold.co/40"
                  alt="프로필"
                  class="rounded-full mr-2"
                />
                <div>
                  <p class="font-bold">박민수</p>
                  <p class="text-sm text-gray-500">1시간 전</p>
                </div>
              </div>
              <p>주말에 등산 가실 분 계신가요? 함께 가요!</p>
              <div class="mt-2 flex justify-between text-gray-500">
                <button>좋아요</button>
                <button>댓글</button>
                <button>공유</button>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow p-4">
              <div class="flex items-center mb-2">
                <img
                  src="https://placehold.co/40"
                  alt="프로필"
                  class="rounded-full mr-2"
                />
                <div>
                  <p class="font-bold">정수연</p>
                  <p class="text-sm text-gray-500">2시간 전</p>
                </div>
              </div>
              <p>새로 나온 영화 재미있대요. 같이 보러 갈 사람?</p>
              <div class="mt-2 flex justify-between text-gray-500">
                <button>좋아요</button>
                <button>댓글</button>
                <button>공유</button>
              </div>
            </div>
          </div>
        </main>

        ${u()}
      </div>
    </div>
  `}function h(){const r=i.getUser(),{username:t,email:e,bio:o}=r||{};return`
    <div id="root">
      <div class="bg-gray-100 min-h-screen flex justify-center">
        <div class="max-w-md w-full">
          ${d()} ${c()}

          <main class="p-4">
            <div class="bg-white p-8 rounded-lg shadow-md">
              <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
                내 프로필
              </h2>
              <form id="profile-form">
                <div class="mb-4">
                  <label
                    for="username"
                    class="block text-gray-700 text-sm font-bold mb-2"
                    >사용자 이름</label
                  >
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value="${t??""}"
                    class="w-full p-2 border rounded"
                  />
                </div>
                <div class="mb-4">
                  <label
                    for="email"
                    class="block text-gray-700 text-sm font-bold mb-2"
                    >이메일</label
                  >
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value="${e??""}"
                    class="w-full p-2 border rounded"
                  />
                </div>
                <div class="mb-6">
                  <label
                    for="bio"
                    class="block text-gray-700 text-sm font-bold mb-2"
                    >자기소개</label
                  >
                  <textarea
                    id="bio"
                    name="bio"
                    rows="4"
                    class="w-full p-2 border rounded"
                  >
${o??""}</textarea
                  >
                </div>
                <button
                  type="submit"
                  class="w-full bg-blue-600 text-white p-2 rounded font-bold"
                >
                  프로필 업데이트
                </button>
              </form>
            </div>
          </main>

          ${u()}
        </div>
      </div>
    </div>
  `}const g="/front_5th_chapter1-1";function v(r="/",t={}){const e=r.replace(/\/+$/,"");return Object.fromEntries(Object.entries(t).map(([o,s])=>s==="*"?[o,s]:[o,`${e}/${s.replace(/^\/+/,"")}`]))}const a=v(g,{HOME:"/",LOGIN:"/login",PROFILE:"/profile",NOT_FOUND:"*"}),x=[{path:a.HOME,component:f,authRequired:!1},{path:a.PROFILE,component:h,authRequired:!0},{path:a.LOGIN,component:m,authRequired:!1},{path:a.NOT_FOUND,component:b,authRequired:!1}];class p{constructor({guardRoute:t,getCurrentPath:e,navigate:o,eventType:s}){this.root=document.querySelector("#root"),this.routes=x,this.guardRoute=t,this.getCurrentPath=e,this.navigate=o,this.eventType=s,this.init()}render(t){this.root.innerHTML=t()}getRoute(t=this.getCurrentPath()){return this.routes.find(e=>e.path===t)||this.getRoute("*")}handleRouting(t=this.getCurrentPath()){const e=this.getRoute(t);if(!this.guardRoute){this.render(e.component);return}this.guardRoute(e,o=>{o&&o!==t?this.navigate(o,!0):this.render(e.component)})}push(t){this.navigate(t,!1)}replace(t){this.navigate(t,!0)}init(){window.addEventListener(this.eventType,()=>this.handleRouting()),this.handleRouting()}}class w extends p{constructor({guardRoute:t}){super({guardRoute:t,getCurrentPath:()=>location.pathname,navigate:(e,o)=>{window.history[o?"replaceState":"pushState"](null,"",e),window.dispatchEvent(new PopStateEvent("popstate"))},eventType:"popstate"})}}class O extends p{constructor({guardRoute:t}){super({guardRoute:t,getCurrentPath:()=>location.hash.replace(/^#\/?/,"/")||"/",navigate:e=>{location.hash=`#${e.replace(/^\/?/,"")}`},eventType:"hashchange"})}}export{y as $,w as B,O as H,a as R,i as u};
