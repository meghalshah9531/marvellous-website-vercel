import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  children?: ReactNode;
  resetKey?: any;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public componentDidUpdate(prevProps: Props) {
    if (this.props.resetKey !== prevProps.resetKey && this.state.hasError) {
      this.setState({ hasError: false, error: null });
    }
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[50vh] flex items-center justify-center p-6 bg-background">
          <div className="max-w-md w-full bg-card p-8 rounded-2xl border border-border text-center space-y-6 shadow-sm">
            <div className="mx-auto w-16 h-16 bg-destructive/10 text-destructive flex items-center justify-center rounded-full">
              <AlertTriangle className="size-8" />
            </div>
            
            <div>
              <h2 className="text-xl font-serif font-medium text-foreground mb-2">Something went wrong</h2>
              <p className="text-muted-foreground text-sm">
                {this.state.error?.message || "An unexpected error occurred rendering this page."}
              </p>
            </div>
            
            <Button onClick={this.handleReset} className="w-full">
              Try again
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
