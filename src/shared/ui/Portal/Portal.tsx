import React from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps {
    children: React.ReactNode
    container?: HTMLElement
}

export const Portal = ({
    children,
    container = document.body,
}: IPortalProps) => createPortal(children, container);
