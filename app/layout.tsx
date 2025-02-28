import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pokémon Explorer',
  description: 'Explore and learn about your favorite Pokémon',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <div className="flex-1">
            {children}
          </div>
          <footer className="border-t py-6 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
              <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                Built with Next.js and Tailwind CSS. Data from{" "}
                <a 
                  href="https://pokeapi.co/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-medium underline underline-offset-4"
                >
                  PokéAPI
                </a>
              </p>
              <p className="text-center text-sm text-muted-foreground md:text-left">
                &copy; {new Date().getFullYear()} Pokémon Explorer
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}