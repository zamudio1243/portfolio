export const Categories = {
  All: "All",
  Web: "Web",
  Mobile: "Mobile",
  Backend: "Backend",
  Frontend: "Frontend",
};

export type Category = (typeof Categories)[keyof typeof Categories];
