import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avartar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f430ba037ef643b1b9fc3eb32040861d~c5_100x100.jpeg?x-expires=1691474400&x-signature=rVcm5oBd8gMYqB9ssA%2Bv8DePHEI%3D"
                alt="Hoaa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Tieu_Hy26</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Tiểu Hý</span>
            </div>
        </div>
    );
}

export default AccountItem;
