/* eslint-disable max-len */
/* eslint-disable i18next/no-literal-string */
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => setIsAuthModal((prevState) => !prevState), []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR} className={cls.links} onClick={onToggleModal}>
                {t('Войти')}
            </Button>

            <Portal>
                <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                    Это не финальное состояние модального окна, в ходе всего курса мы будем его менять\рефакторить. Также прошу заметить, что переопределение переменных из темы это АНТИПАТЕРН! Так делать не стоит. Пока оставьте так, а через 1-2 урока мы это пофиксим.
                </Modal>
            </Portal>
        </div>
    );
};
