import React, { useEffect } from 'react'
import '../ComponentsCss/CustomCursor.css'

const CustomCursor = () => {

    useEffect(() => {
        const cursor = document.createElement('div')
        cursor.classList.add('custom-cursor')
        document.body.appendChild(cursor)

        const moveCursor = (e) => {
            cursor.style.left = `${e.pageX}px`;
            cursor.style.top = `${e.pageY}px`;

            
            const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
            if (elementUnderCursor && elementUnderCursor.tagName !== 'BODY' && elementUnderCursor.tagName !== 'HTML') {
                elementUnderCursor.classList.add('invert-text');
            }
        }

        const removeInvertClass = (e) => {
            const elements = document.querySelectorAll('.invert-text');
            console.log("as", elements);
            elements.forEach((el) => {
                el.classList.remove('invert-text');
            });
        };

        document.addEventListener('mousemove', moveCursor)
        document.addEventListener('mouseout', removeInvertClass)

        return () => {
            document.removeEventListener('mousemove', moveCursor)
            document.removeEventListener('mouseout', removeInvertClass)
            document.body.removeChild(cursor)
        }
    }, [])
    return null;
}

export default CustomCursor
