import style from './Button.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

function Button({
    to,
    href,
    buttonLogin,
    Transform,
    buttonDone,
    feedBackBox,
    buttonInSidebar,
    buttonFollow,
    buttonGetApp,
    children,
    onClick,
    ...classProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...classProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }

    const classesWrap = cx('wraper', {
        buttonLogin,
        buttonDone,
        feedBackBox,
        Transform,
        buttonInSidebar,
        buttonFollow,
        buttonGetApp,
    });

    return (
        <Comp className={classesWrap} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
