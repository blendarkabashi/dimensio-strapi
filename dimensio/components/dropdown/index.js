import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import ExpandMore from '@mui/icons-material/ExpandMore';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Dropdown = ({ label, className, options, option, setOption }) => {
  return (
    <div className={className}>
      <div className="mb-2">{label}</div>
      <Menu as="div" className="relative inline-block text-left w-full">
        <div>
          <Menu.Button className="border-darkGray rounded-md w-full border p-2 px-3 font-normal text-base flex items-center justify-between">
            {options.find((el) => el.id === option).name}
            <ExpandMore
              className="-mr-1 h-5 w-5 text-darkGray"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 right-0 z-10 mt-2 w-full origin-top rounded-md bg-white border border-darkGray">
            <div className="">
              {options.map((option) => (
                <Menu.Item key={option.id}>
                  {({ active }) => (
                    <a
                      onClick={() => setOption(option.id)}
                      className={classNames(
                        active ? 'text-gray-900 font-medium' : 'text-gray-700',
                        'block px-4 py-2 text-sm rounded-md cursor-pointer'
                      )}
                    >
                      {option.name}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Dropdown;
