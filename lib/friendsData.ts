export interface Friend {
  name: string;
  role: string;
  description: string;
  url?: string;
  avatar?: string;
}

export const friends: Friend[] = [
  {
    name: "Rizky Fauzan",
    role: "Frontend Developer",
    description: "Teman satu perjuangan di dunia frontend. Sering diskusi soal React dan UI/UX.",
    url: "https://rizkyfauzan.dev",
  },
  {
    name: "Dinda Ayu",
    role: "UI/UX Designer",
    description: "Desainer berbakat dengan selera visual yang bersih dan modern. Banyak proyek bareng.",
    url: "https://dindaayu.design",
  },
  {
    name: "Bagas Pratama",
    role: "Backend Developer",
    description: "Master of API dan database. Partner ngoding backend untuk beberapa project.",
    url: "https://github.com/bagaspratama",
  },
  {
    name: "Sari Indah",
    role: "Mobile Developer",
    description: "Ahli Flutter dan React Native. Sering sharing insight seputar mobile development.",
  },
  {
    name: "Aditya Saputra",
    role: "DevOps Engineer",
    description: "Jago urusan deployment, CI/CD, dan infrastruktur. Kalau server bermasalah, dia solusinya.",
    url: "https://adityasaputra.dev",
  },
  {
    name: "Naura Rahman",
    role: "Full Stack Developer",
    description: "Teman diskusi paling seru soal tech stack dan arsitektur aplikasi.",
  },
];
