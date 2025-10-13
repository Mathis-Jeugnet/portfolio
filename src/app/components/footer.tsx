// src/app/components/footer.tsx
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative z-10 border-t border-border/50 py-6 text-center">
      <p className="text-sm text-muted-foreground">
        &copy; {currentYear} Mathis Jeugnet. Tous droits réservés.
      </p>
    </footer>
  );
}