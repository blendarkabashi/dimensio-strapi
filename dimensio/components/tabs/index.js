function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Tabs = ({ tabs, currentTab, setCurrentTab }) => {
  return (
    <div className="mb-6">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue focus:outline-none focus:ring-blue sm:text-sm"
          defaultValue={tabs.find((tab) => tab.id == currentTab).name}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                onClick={() => setCurrentTab(tab.id)}
                className={classNames(
                  tab.id == currentTab
                    ? 'border-blue text-black'
                    : 'border-transparent text-black hover:border-gray-300 hover:text-gray-700',
                  'whitespace-nowrap border-b-[3px] py-4 px-1 font-medium cursor-pointer'
                )}
                aria-current={tab.id == currentTab ? 'page' : undefined}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
