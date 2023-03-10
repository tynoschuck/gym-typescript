import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({setSelectedPage}: Props) => {
  return (
    <section 
      id="contactus"
      className="mx-auto w-5/6 pt-24 pb-32"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* header */}
        <motion.div
            className="md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x:-80 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <HText>
              <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
            </HText>
            <p className="my-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores dolorem vel eveniet blanditiis eaque dolores quasi recusandae accusantium ipsum.
            </p>
          </motion.div>
      </motion.div>
    </section>
  )
}

export default ContactUs