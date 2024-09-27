
import './globals.css';
import { ReactNode } from 'react';
import ReduxProvider from './Provider/ReduxProviders';
import ThemeProvider from './Provider/ThemeProvider';
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}