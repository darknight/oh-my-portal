export interface Service {
  name: string;
  url: string;
  description: string;
  icon: string;
  status: "online" | "limited" | "offline";
  span?: "row-span-2";
}

export interface Project {
  name: string;
  url: string;
  description: string;
  icon: string;
}
