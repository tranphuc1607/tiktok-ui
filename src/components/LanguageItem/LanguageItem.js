import classNames from 'classnames/bind';
import style from './LanguageItem.module.scss';

const cx = classNames.bind(style);

function LanguageItem({ content, onClick, itemFirst }) {
    const className = cx('wraper', { itemFirst });

    const handlOnlick = (e) => {
        onClick();
        window.location.reload();
    };
    return (
        <div onClick={handlOnlick} className={className}>
            {content}
        </div>
    );
}

export default LanguageItem;
