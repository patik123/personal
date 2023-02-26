<template>
  <footer aria-label="Site Footer">
    <div class="pb-8 mx-auto sm:px-6 lg:px-8 bottom-0">
      <div
        class="pt-8 mt-16 sm:flex sm:items-center sm:justify-between lg:mt-24"
      >
        <nav aria-label="Footer Navigation - Support">
          <ul
            class="flex flex-wrap justify-center gap-4 text-xs lg:justify-end"
          >
            <li>
              <g-link
                to="/blog"
                class="text-slate-500 dark:text-slate-100 transition hover:opacity-75"
              >
                Blog
              </g-link>
            </li>

            <li>
              <g-link
                to="/about"
                class="text-slate-500 dark:text-slate-100 transition hover:opacity-75"
              >
                O blogu
              </g-link>
            </li>

            <li>
              <g-link
                to="/privacy-policy"
                class="text-slate-500 dark:text-slate-100 transition hover:opacity-75"
              >
                Politika zasebnosti
              </g-link>
            </li>

            <li>
              <g-link
                to="/cookie-policy"
                class="text-slate-500 dark:text-slate-100 transition hover:opacity-75"
              >
                Politika piškotkov
              </g-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
</template>
