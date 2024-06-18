import classNames from 'classnames';
import { Link } from 'react-router-dom';
function ListOptionsItem({ Icon, tital, id, onclick, setCheckOnClickIem }) {
    const classWraper = classNames(
        'flex items-center justify-start w-[224px] h-[48px] bg-[#ffffff] px-[8px] py-[8px] hover:bg-backGround hover:rounded-[5px]',
        { 'text-backGrounColorRed': onclick },
    );

    return (
        <Link to={'/'} onClick={() => setCheckOnClickIem(id)} className={classWraper}>
            <div className="w-[32px] h-full">
                <Icon />
            </div>
            <span className="ml-[8px] text-[17px] font-bold">{tital}</span>
        </Link>
    );
}

export default ListOptionsItem;
