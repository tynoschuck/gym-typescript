import { SelectedPage } from "@/shared/types";
import HText from "@/shared/HText";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";

const classes = [
  {
    name: "Weight Training Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tempore repellendus distinctio commodi repellat nostrum id magni explicabo ipsam quasi.",
    image: image1,
  }
  {
    name: "Fitness Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tempore repellendus distinctio commodi repellat nostrum id magni explicabo ipsam quasi.",
    image: image2,
  }
  {
    name: "Weight Lifting Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tempore repellendus distinctio commodi repellat nostrum id magni explicabo ipsam quasi.",
    image: image3,
  }
  {
    name: "Ab Core Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tempore repellendus distinctio commodi repellat nostrum id magni explicabo ipsam quasi.",
    image: image4,
  }
  {
    name: "Spinning Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tempore repellendus distinctio commodi repellat nostrum id magni explicabo ipsam quasi.",
    image: image5,
  }
  {
    name: "Zumba Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tempore repellendus distinctio commodi repellat nostrum id magni explicabo ipsam quasi.",
    image: image6,
  }
]

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div 
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x:-100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, veniam! Incidunt corrupti soluta ullam temporibus eius eveniet, natus fuga saepe.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item, index) => (
              <Class />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}

export default OurClasses