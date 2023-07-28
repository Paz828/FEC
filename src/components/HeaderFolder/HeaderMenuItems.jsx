import HeaderDropdown from "./HeaderDropdown";

const HeaderMenuItems = ({ items }) => {
  return (
    <li className='menu-items-header'>
      {items.submenu ? (
        <>
          <a href={items.url} aria-haspopup='menu' className='individual-title'>
            {items.title}{" "}
          </a>
          <HeaderDropdown submenus={items.submenu} />
        </>
      ) : (
        <a href={items.url} className='individual-title'>
          {items.title}
        </a>
      )}
    </li>
  );
};

export default HeaderMenuItems;
