"use client";

import { useEffect } from "react";
import EmptyState from "./components/EmptyState";

interface ErrorStateProps {
  error: Error;
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  useEffect(() => {
    console.error(error);
  }, []);

  return (
    <EmptyState title="Oh" subtitle="Something went wrong with this page" />
  );
};

export default ErrorState;
