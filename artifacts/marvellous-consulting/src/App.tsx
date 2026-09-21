import { type ReactNode, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

import Home from '@/pages/home';
import About from '@/pages/about';
import Contact from '@/pages/contact';
import PrivacyPolicy from '@/pages/privacy';
import TermsOfService from '@/pages/terms';
import NotFound from '@/pages/not-found';

import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <main className="flex-1">
        <RoutedErrorBoundary>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/odoo">{() => <LegacySectionRedirect section="erp-delivery" />}</Route>
            <Route path="/about" component={About} />
            <Route path="/how-we-work">{() => <LegacySectionRedirect section="how-we-work" />}</Route>
            <Route path="/for-partners">{() => <LegacySectionRedirect section="erp-delivery" />}</Route>
            <Route path="/contact" component={Contact} />
            <Route path="/privacy" component={PrivacyPolicy} />
            <Route path="/terms" component={TermsOfService} />
            <Route component={NotFound} />
          </Switch>
        </RoutedErrorBoundary>
      </main>
      <Footer />
    </div>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function LegacySectionRedirect({ section }: { section: string }) {
  useEffect(() => { window.location.replace(`/#${section}`) }, [section]);
  return null;
}

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="marvellous-theme">
      <QueryClientProvider client={queryClient}>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
        <Analytics />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
