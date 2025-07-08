import { ReactNode } from 'react';
import { Metadata } from 'next';

type Props = {
  children: ReactNode;
};

export default function PageLayout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">{children}</main>
    </div>
  );
}
