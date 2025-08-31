const SimpleIcon = ({ icon, label }: { icon: any; label: string }) => (
  <svg
    role="img"
    aria-label={label} // accessibility label
    viewBox="0 0 24 24"
    className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors"
    xmlns="http://www.w3.org/2000/svg"
    dangerouslySetInnerHTML={{ 
      __html: `<path fill="currentColor" d="${icon.path}" />` 
    }}
  />
);
export default SimpleIcon;