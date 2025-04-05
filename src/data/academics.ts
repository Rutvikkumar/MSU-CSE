export const programs = [
  {
    id: 'be-cse',
    title: 'Bachelor of Engineering (CSE)',
    duration: '4 Years',
    degree: 'B.E. in Computer Science & Engineering',
    description: 'Undergraduate program focusing on core computer science concepts and practical applications.',
    link: '/academics/be-cse',
  },
  {
    id: 'mca',
    title: 'Master of Computer Applications',
    duration: '3 Years',
    degree: 'MCA',
    description: 'Postgraduate program emphasizing application development and advanced computing concepts.',
    link: '/academics/mca',
  },
  {
    id: 'phd-cse',
    title: 'Ph.D. in Computer Science',
    duration: '3-6 Years',
    degree: 'Ph.D.',
    description: 'Research program for in-depth study in specialized areas of computer science.',
    link: '/academics/phd-cse',
  },
]

export const beProgram = {
  id: 'be-cse',
  title: 'Bachelor of Engineering in Computer Science & Engineering',
  overview: `
      The B.E. (CSE) program is a 4-year undergraduate degree that provides 
      students with a strong foundation in computer science fundamentals along 
      with practical skills in software development, algorithms, and system design.
      
      The program is accredited by NBA and follows the curriculum guidelines 
      of AICTE and the university.
    `,
  curriculum: {
    semesters: [
      {
        semester: 1,
        subjects: ['Mathematics-I', 'Physics', 'Basic Electrical Engineering', 'Programming Fundamentals']
      },
      // ... other semesters
    ]
  },
  admissions: {
    eligibility: '10+2 with Physics, Chemistry, and Mathematics with minimum 45% marks',
    intake: 60,
    selection: 'Based on GUJCET/JEE Main scores and counseling'
  },
  syllabus: {
    link: '/student-corner/syllabus',
    description: 'Detailed syllabus for all semesters is available in the Student Corner'
  }
}

export const mcaProgram = {
  id: 'mca',
  title: 'Master of Computer Applications',
  overview: `
      The MCA program is a 3-year postgraduate course designed to provide advanced 
      knowledge in computer applications with emphasis on software development, 
      system design, and emerging technologies. The program includes industry-oriented 
      projects and internships.
    `,
  curriculum: {
    semesters: [
      {
        semester: 1,
        subjects: ['Programming in C', 'Discrete Mathematics', 'Computer Organization', 'Business Systems']
      },
      // ... other semesters
    ]
  },
  admissions: {
    eligibility: 'Bachelor\'s degree with Mathematics at 10+2 or graduation level with minimum 50% marks',
    intake: 30,
    selection: 'Based on university entrance exam and interview'
  },
  syllabus: {
    link: '/student-corner/syllabus',
    description: 'Detailed syllabus for all semesters is available in the Student Corner'
  }
}

// In data/academics.ts
export const phdProgram = {
  id: 'phd-cse',
  title: 'Doctor of Philosophy in Computer Science & Engineering',
  overview: `
    The Ph.D. program offers research opportunities in cutting-edge areas of 
    computer science. Candidates work under the guidance of experienced faculty 
    members and contribute to original research that advances the field.
  `,
  // Add curriculum data (can be simplified for PhD)
  curriculum: {
    semesters: [
      {
        semester: 1,
        subjects: ['Research Methodology', 'Advanced Topics in Computer Science']
      },
      // Other semesters if needed
    ]
  },
  admissions: {
    eligibility: 'Master\'s degree in CSE/IT or related field with minimum 55% marks',
    selection: 'Based on entrance test and interview',
    duration: 'Minimum 3 years',
    intake: 10 // Adding intake for consistency
  },
  // Add syllabus info
  syllabus: {
    link: '/research-consultancy/phd-program',
    description: 'PhD course work and research syllabus'
  },
  // Keep the additional PhD-specific fields
  supervisors: {
    count: 8,
    areas: [
      'Artificial Intelligence',
      'Machine Learning',
      'Data Science',
      'Networking',
      'Cyber Security'
    ]
  },
  scholars: {
    current: 15,
    graduated: 42
  }
}