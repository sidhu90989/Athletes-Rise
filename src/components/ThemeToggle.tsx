import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="relative h-9 w-9 rounded-full bg-background border border-border hover:bg-sai-saffron/10 hover:border-sai-saffron transition-all duration-300 hover:scale-105 group"
      aria-label="Toggle theme"
    >
      <div className="relative w-4 h-4">
        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0 text-sai-saffron group-hover:text-sai-saffron" />
        <Moon className="absolute top-0 left-0 h-4 w-4 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 text-sai-navy group-hover:text-sai-saffron" />
      </div>
    </Button>
  );
}