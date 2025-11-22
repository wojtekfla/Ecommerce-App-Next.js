type AuthContainerProps = {
  children: React.ReactNode;
};

const AuthContainer = ({ children }: AuthContainerProps) => {
  return (
    <section className="border-2 border-b-blue-400 min-h-screen flex flex-col items-center justify-center bg-[var(--color-black-one)] px-4 py-12">
      <div className="w-full max-w-[448px]">{children}</div>
    </section>
  );
};

export default AuthContainer;
