const SidebarContent = ({ children }: { children: React.ReactNode }) => {
  return <nav className="mt-5 flex-1 space-y-1 px-2">{children}</nav>;
};

export default SidebarContent;
