import React from "react";
import { notFound } from "next/navigation";
import CourseHero from "../_components/course/courseHero";
import CourseCoverings from "../_components/course/coverings";
import CourseBenifits from "../_components/course/courseBenifits";
import GetStarted from "../_components/course/getStarted";
import { distributeProblemSolvingData } from "@/lib/constants/distributed-problem-solving";

type Props = {
  params: { courseId: string };
};

const Courses = ({ params }: Props) => {
  const { courseId } = params;
  const course = distributeProblemSolvingData.find(
    (course) => course.courseId === courseId
  );
  if (!course) {
    notFound();
  }

  return (
    <section>
      {/* hero */}
      <CourseHero
        imageUrl={course.hero.imgUrl}
        label={course.hero.label}
        spanLabel={course.hero["span-label"]}
        description={course.hero.description}
      />

      {/* course coverings */}
      <CourseCoverings
        subTitle={course.coursecoverings.subTitle}
        description={course.coursecoverings.description}
        points={course.coursecoverings.points}
      />

      {/* benifits */}
      <CourseBenifits
        imgUrl={course.coursecoverings.timelineImage}
        benefits={course.coursecoverings.benefits}
      />

      {/* participation process */}
      <GetStarted />
    </section>
  );
};

export default Courses;

export async function generateStaticParams() {
  return distributeProblemSolvingData.map((courseObj) => ({
    courseId: courseObj.courseId,
  }));
}
