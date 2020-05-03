import React, {useContext, useState, createContext} from 'react'

import {projects} from "../constants/projects";

const ProjectContext = createContext(null);

export const ProjectProvider = ({ children }) => {
  const [projectIdx, setProjectIdx] = useState(0)

  return (
    <ProjectContext.Provider
      value={{
        currentProject: projects[projectIdx],
        setProjectIdx
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

ProjectProvider.displayName = 'ProjectProvider';

export const useProjectContext = () => useContext(ProjectContext)
