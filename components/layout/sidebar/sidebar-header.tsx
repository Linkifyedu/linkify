const SidebarHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-1 flex-col overflow-y-auto pb-4 pt-5">
      {children}
    </div>
  );
};

export default SidebarHeader;
