import React from 'react';
import {gridItems} from "@/data";
import {BentoGrid, BentoGridItem} from "@/components/ui/BentoGrid";

const Grid = () => {
    return (
        <section className="pt-20" id="about">
            <BentoGrid>
                {gridItems.map(({id, title, description, img, imgClassName, titleClassName, className, spareImg }) => (
                    <BentoGridItem
                        id={id}
                        key={id}
                        title={title}
                        description={description}
                        className={className}
                        img={img}
                        imgClassName={imgClassName}
                        titleClassName={titleClassName}
                        spareImg={spareImg}
                    />
                ))}
            </BentoGrid>
        </section>
    );
};

export default Grid;