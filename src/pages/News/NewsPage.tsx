import { type FC } from "react";

import { motion } from "framer-motion";

export const NewsPage: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
    >
      <div className="md:container md:mx-auto text-center">
        <div className="pt-4 h-full">
          <h1 className="text-6xl">News will be added soon...</h1>
        </div>
      </div>
    </motion.div>
  );
};
