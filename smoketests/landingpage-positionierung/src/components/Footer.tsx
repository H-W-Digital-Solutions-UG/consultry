/** Footer row inside the dark closing block. Legal links point at the existing marketing site. */
export function Footer() {
  return (
    <footer className="border-t border-hair-dark text-on-dark-soft">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-4 py-8 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex items-center gap-2.5 text-on-dark">
          <span className="logo-mark inline-block size-5 rounded-[6px]" aria-hidden="true" />
          <span className="font-semibold">Consultry</span>
        </div>
        <ul className="t-body-sm flex flex-wrap gap-x-6 gap-y-2">
          <li>
            <a href="mailto:contact@consultry.de" className="hover:text-on-dark">
              contact@consultry.de
            </a>
          </li>
          <li>
            <a href="https://consultry.de/impressum" className="hover:text-on-dark">
              Impressum
            </a>
          </li>
          <li>
            <a href="https://consultry.de/datenschutz" className="hover:text-on-dark">
              Datenschutz
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
