export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div data-scroll-reveal className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground text-sm">
            © 2025 Nikitesh Bhadade. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-accent transition">Privacy</a>
            <a href="#" className="hover:text-accent transition">Terms</a>
            <a href="#" className="hover:text-accent transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
