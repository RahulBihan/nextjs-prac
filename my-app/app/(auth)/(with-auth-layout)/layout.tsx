

export default function AuthLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div>
        <h2>InnerLayout</h2>
          {children}
        </div>
  
    );
  }
  