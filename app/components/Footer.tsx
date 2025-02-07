import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-amber-200 py-8 text-center text-amber-950">
      <div className="container mx-auto px-4 flex justify-between">
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} ToolBox. All rights reserved.</p>
        </div>
        <div className="other">
          <nav className="mb-4">
            <ul className="flex justify-center space-x-6">
              <li>
                <Link
                  href="/about"
                  className="hover:text-amber-900 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-amber-900 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-amber-900 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-amber-900 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
