import { tinaField } from "tinacms/dist/react";
import { Hero } from "./hero/hero";
import { Content } from "./content/content";
import { Creation } from "./creation/creation";
import { CTA } from "./cta/cta";
// import { Features } from "./features";
// import { Testimonial } from "./testimonial";

export const Blocks = (props) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block, i) {
            return (
              <div key={i} data-tina-field={tinaField(block)}>
                <Block {...block} />
              </div>
            );
          })
        : null}
    </>
  );
};

const Block = (block) => {
  switch (block.__typename) {
     case "PageBlocksHero":
       return <Hero data={block} />;
    case "PageBlocksContent":
      return <Content data={block} />;
    case "PageBlocksCta":
      return <CTA data={block} />;
    case "PageBlocksCreation":
      return <Creation data={block} />;
    // case "PageBlocksFeatures":
    //   return <Features data={block} />;
    // case "PageBlocksTestimonial":
    //   return <Testimonial data={block} />;
    default:
      return null;
  }
};