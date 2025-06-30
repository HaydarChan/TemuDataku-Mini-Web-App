export default function KatalogLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div>
            {children}
        </div>
    )
}