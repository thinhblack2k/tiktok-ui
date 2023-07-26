import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/b37c442831427017f009d6a925c536e8~c5_300x300.webp?x-expires=1690426800&x-signature=3GBTLFDDZQ7ZP1I69klnyvXyC%2Bk%3D" alt="image account" />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Đặng Hữu Thịnh</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')} >edric_dang</span>
            </div>
        </div>
     );
}

export default AccountItem;