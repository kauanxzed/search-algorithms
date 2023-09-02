import Button from '../button/button';

export function Header() {
  return (
    <div className="border-spacing-1 bg-slate-800 p-10 fixed w-full">
      <Button className="float-right" msg="Do the sorting" />
    </div>
  );
}

export default Header;
