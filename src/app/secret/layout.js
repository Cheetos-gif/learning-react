import DrugsCatalogue from "@/components/DrugsCatalogue";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DrugsCatalogue />
        {children}
      </body>
    </html>
  );
}
