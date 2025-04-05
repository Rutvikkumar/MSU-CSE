export type Program = {
    id: string;
    title: string;
    duration: string;
    degree: string;
    description: string;
    link: string;
  };
  
  // Type for detailed program information (used on individual program pages)
  export type ProgramDetails = {
    id: string;
    title: string;
    overview: string;
    curriculum: {
      semesters: {
        semester: number;
        subjects: string[];
      }[];
    };
    admissions: {
      eligibility: string;
      intake: number;
      selection: string;
    };
    syllabus: {
      link: string;
      description: string;
    };
  };

  export type AboutSection = {
    id: string;
    title: string;
    description: string;
    link: string;
    icon?: React.ReactNode;
  };
  
  export type DepartmentInfo = {
    established: number;
    location: string;
    facilities: string[];
    achievements: string[];
  };