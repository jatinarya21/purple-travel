import React from 'react'
import FaqSection from '../FaqSection';

const AccordionItem = () => {
    const accordionItems = [
        {
            title: 'Enim pretium tincidunt sit mattis rhoncus aliquam? ',
            content: 'Enim pretium tincidunt sit mattis rhoncus aliquam. Nunc massa id euismod amet. Enim eu cras dolor vitae sit euismod. Elementum fringilla elementum vestibulum et adipiscing. ',
        },
        {
            title: 'Donec sagittis fermentum purus nec nulla? ',
            content: 'Enim pretium tincidunt sit mattis rhoncus aliquam. Nunc massa id euismod amet. Enim eu cras dolor vitae sit euismod. Elementum fringilla elementum vestibulum et adipiscing. ',
        },
        {
            title: 'Potenti etiam convallis vitae quis amet odio sagittis libero? ',
            content: 'Enim pretium tincidunt sit mattis rhoncus aliquam. Nunc massa id euismod amet. Enim eu cras dolor vitae sit euismod. Elementum fringilla elementum vestibulum et adipiscing. ',
        },
        {
            title: 'Blandit donec sit pharetra lorem egestas?  ',
            content: 'Enim pretium tincidunt sit mattis rhoncus aliquam. Nunc massa id euismod amet. Enim eu cras dolor vitae sit euismod. Elementum fringilla elementum vestibulum et adipiscing. ',
        },
        {
            title: 'Sed ultrices blandit adipiscing tempor dui arcu id ultrices ut?  ',
            content: 'Enim pretium tincidunt sit mattis rhoncus aliquam. Nunc massa id euismod amet. Enim eu cras dolor vitae sit euismod. Elementum fringilla elementum vestibulum et adipiscing. ',
        },
        {
            title: 'Turpis viverra cras mauris nibh quis volutpat?  ',
            content: 'Enim pretium tincidunt sit mattis rhoncus aliquam. Nunc massa id euismod amet. Enim eu cras dolor vitae sit euismod. Elementum fringilla elementum vestibulum et adipiscing. ',
        },
    ];

    return (
        <div>
            <FaqSection items={accordionItems} />
        </div>
    )
}

export default AccordionItem