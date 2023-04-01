import GeneralInput from './components/GeneralInput';
import Currency from './components/Currency';
import Date from './components/Date';
import TextArea from './components/TextArea';
import FileUpload from './components/FileUpload';
import types from './types';

const Input = ({ type, label, ...props }) => {
  let commonClasses = 'border-darkGray rounded-md w-full border p-2 px-3';
  let input;
  if (type === types.CURRENCY)
    input = <Currency commonClasses={commonClasses} {...props} />;
  else if (type === types.FILE)
    input = <FileUpload commonClasses={commonClasses} {...props} />;
  else if (type === types.DATE)
    input = <Date commonClasses={commonClasses} {...props} />;
  else if (type === types.TEXT_AREA)
    input = <TextArea commonClasses={commonClasses} {...props} />;
  else
    input = (
      <GeneralInput type={type} commonClasses={commonClasses} {...props} />
    );

  return (
    <>
      {label && <div className="mb-2">{label}</div>}
      {input}
    </>
  );
};

export default Input;
