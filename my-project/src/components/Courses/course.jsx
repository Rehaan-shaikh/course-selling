// eslint-disable-next-line no-unused-vars
import React from "react";
import { useParams } from "react-router-dom";

const courseDetailsData = {
  1: {
    course_name: "Real-Time Data Streaming",
    syllabus: "Learn about Kafka Architecture, Use Kafkajs with Node.js",
    instructor_bio: "John Doe is a seasoned Kafka expert...",
    prerequisites: "a little bit of Node.js knowledge, and your laptop, yes, just that..",
    price: 30
  },
  2: {
    course_name: "Create React App with Webpack",
    syllabus: "Enhance your app, advanced state management",
    instructor_bio: "Jane Smith is a leading React developer...",
    prerequisites: "No prerequisites. Let’s just dive in…",
    price: 20
  },
  3: {
    course_name: "Learn about Terraform in detail",
    syllabus: "Learn to Create CI/CD pipelines, Automate the deployment process",
    instructor_bio: "Mike Johnson has over 10 years of Terraform experience...",
    prerequisites: "Just you and your Laptop.",
    price: 20
  },
  4: {
    course_name: "Learn in depth about Kubernetes",
    syllabus: "Create clusters, Learn the intricacies of K8s",
    instructor_bio: "Emily Davis has built numerous full-stack applications...",
    prerequisites: "A basic knowledge of Node.js. Just that.",
    price: 30
  },
  5: {
    course_name: "Create your first serverless web app",
    syllabus: "Use various AWS products like: S3 bucket, EC2, and many more...",
    instructor_bio: "Chris Wilson is an AWS guru...",
    prerequisites: "AWS account…",
    price: 40
  }
};

const Course = () => {
  const { id } = useParams();
  const courseDetails = courseDetailsData[id];

  if (!courseDetails) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#FFDAB3]">
        <h2 className="text-3xl font-bold text-[#574964]">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFDAB3] flex items-center justify-center">
      <div className="w-full max-w-4xl bg-[#C8AAAA] p-8 shadow-lg rounded-lg">
        <h2 className="text-4xl text-[#574964] font-bold mb-6 text-center">
          {courseDetails.course_name}
        </h2>
        <div className="mb-8">
          <h3 className="text-3xl text-[#574964] font-semibold mb-4">What will be Covered?</h3>
          <p className="text-[#574964] leading-relaxed text-lg">
            {courseDetails.syllabus}
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-3xl text-[#574964] font-semibold mb-4">
            Who is the Instructor?
          </h3>
          <p className="text-[#574964] leading-relaxed text-lg">
            {courseDetails.instructor_bio}
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-3xl text-[#574964] font-semibold mb-4">
            What are the Prerequisites?
          </h3>
          <p className="text-[#574964] leading-relaxed text-lg">
            {courseDetails.prerequisites}
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-3xl text-[#574964] font-semibold mb-4">
            Price of course is
          </h3>
          <p className="text-[#574964] leading-relaxed text-lg">
            ${courseDetails.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Course;