import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src='https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/b37c442831427017f009d6a925c536e8~c5_100x100.jpeg?x-expires=1690880400&x-signature=U21NaV%2BLlPjCKS8TBUsTlIpfYD0%3D' alt='avatar' />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Đặng Hữu Thịnh</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>edric_dang</span>
            </div>
        </div>
     );
}

export default AccountItem;