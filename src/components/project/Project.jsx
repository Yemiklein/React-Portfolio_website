import React, { useState } from "react";
import styles from "./Project.module.css";
import { t } from "i18next";

import { motion } from "framer-motion";
import { ProjectsData } from "../../data/ProjectsData";
import FilterBtn from "./FilterBtn";

import ProjectItem from "./ProjectItem";

const Project = () => {
  const [works] = useState(ProjectsData);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <motion.div
      // layout
      initial={{ opacity: 0, transform: "translateX(-50%)" }}
      animate={{ opacity: 1, transform: "translateX(0%)" }}
      exit={{ opacity: 0, transform: "translateX(0%)" }}
      transition={{ duration: 0.8 }}
      className={`project ${styles.project}`}
    >
      <div>
        <h1>{t("projects")}</h1>

        <div>
          <FilterBtn
            works={works}
            setFilterWork={setFilterWork}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />

          <ProjectItem filterWork={filterWork} />
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
