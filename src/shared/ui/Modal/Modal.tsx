import React, {
    useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';

interface IModalProps {
    className?: string
    isOpen?: boolean
    onClose?: ()=> void
    children?: React.ReactNode
}

export const Modal = ({
    isOpen, className, children, onClose,
}:IModalProps) => {
    const [isClosing, setIsClosing] = useState(false);

    // записываю ссылку на текущий таймаут для того чтобы при случайном демонтировании
    // он не вызвал функции изменения состояния несуществующих компонентов
    const timerRed = useRef<ReturnType<typeof setTimeout>>();

    const mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRed.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, 300);
        }
    }, [onClose]);

    const onContentClick = (event: React.MouseEvent) => {
        event?.stopPropagation();
    };

    const onKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        } else {
            return () => {
                clearTimeout(timerRed.current);

                window.removeEventListener('keydown', onKeyDown);
            };
        }
    }, [isOpen, onKeyDown]);

    return (
        <div className={classNames(cls.root, mods, [className])}>

            <div className={cls.overlay} onClick={closeHandler}>
                <div
                    className={cls.content}
                    onClick={onContentClick}
                >

                    {children}

                </div>
            </div>
        </div>
    );
};
