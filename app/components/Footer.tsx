import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        ></nav>
        <p className="mt-1 text-center text-sm leading-5 text-muted-foreground">
          © 2025 AmanEx.
        </p>
      </div>
    </footer>
  );
}

{
  /* {["Solutions", "About", "Careers", "Contact", "Privacy", "Terms", "Security"].map((item) => (
            <div key={item} className="pb-6">
              <Link
                href={`#${item.toLowerCase()}`}
                className="text-sm leading-6 text-muted-foreground hover:text-foreground"
              >
                {item}
              </Link>
            </div>
          ))} */
}
