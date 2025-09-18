import { DataStreamProvider } from '@/components/data-stream-provider';

export default async function AssistenteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DataStreamProvider>
      {children}
    </DataStreamProvider>
  );
}