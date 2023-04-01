import Input from 'components/input';

export default function Layout({
  className,
  children,
  withSearch = false,
  title,
}) {
  return (
    <div className={`${className} container pt-24`}>
      {withSearch ? (
        <div className="flex flex-row justify-between items-center mb-4">
          <h1 className="text-[37px] font-medium">{title}</h1>
          <Input
            className=" max-w-[250px] h-12"
            type="search"
            placeholder="Browse job seekers"
          />
        </div>
      ) : (
        <h1 className="text-[37px] font-medium mb-4">{title}</h1>
      )}
      {children}
    </div>
  );
}
