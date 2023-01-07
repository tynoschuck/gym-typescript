import { SelectedPage } from "@/shared/types";
import { motion } from 'framer-motion';
import HText from "@/shared/HText";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section
      id="benefits"
      className="mx-auto min-h-full w-5/6 py-20"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits) }
      >
        {/* header */}
        <div className="md:my-5 md:w-3/5">
          <HText>
            MORE THAN JUST A GYM.
          </HText>
          <p className="my-5 text-sm">
          We provide world class fitness equipment trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.
          </p>
        </div>
        {/* benefits */}
        <div className="md:flex items-center justify-between gap-8 mt-5s">
          {benefits.map((benefit) => (
            <Benefit />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Benefits