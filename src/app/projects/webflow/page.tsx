"use client";

import ThreeBallLayout from "@/components/layout/ThreeBallLayout";

const webflowProjects = [
  {
    title: "MIT",
    slug: "webflow-project-1",
    image: "/images/MIT.png",
  },
  {
    title: "Affirm",
    slug: "webflow-project-2",
    image: "/images/Affirm.png",
  },
  {
    title: "Sciton",
    slug: "webflow-project-3",
    image: "/images/Sciton.png",
  },
];

export default function WebflowProjectsPage() {
  return <ThreeBallLayout projectList={webflowProjects} topic="webflow" />;
}
