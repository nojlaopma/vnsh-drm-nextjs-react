export interface PageProps {
  params: { pageId: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}
