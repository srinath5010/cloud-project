export default function Footer() {
  return (
    <footer className="bg-white shadow-inner text-gray-500 text-center py-6 mt-12 border-t border-gray-200">
      <p className="text-sm">
        © {new Date().getFullYear()} Tourism Website | Explore. Travel. Enjoy.
      </p>
    </footer>
  );
}
