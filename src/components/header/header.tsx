import Button from '../button/button';
import RangeInput from '../range-input/range-input';
import Select from '../select/select';

export function Header() {
  return (
    <div className="border-spacing-1 bg-slate-800 p-10 fixed w-full">
      <div className="flex justify-between">
        <Select className="w-64" />
        <RangeInput />
        <Button msg="Do the sorting" />
      </div>
    </div>
  );
}

export default Header;
