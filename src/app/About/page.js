import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-white">
      <h1 className="bg-white text-center font-mono text-3xl mb-5 text-Brown font-bold mt-7">About Me</h1>
    <div className="bg-white w-full mt-15 mb-10 grid grid-cols-2 items-center ">
      <div className="justify-center col-span-1">
        <Image
          src="/Portrait2.png"
          alt="Erin"
          width={600}
          height={600}
          style={{
            margin: "auto",
          }}
          className="rounded-xl"

        />
      </div>
      <div className="p-10 bg-white text-center mb-15 col-span-1 items-center">
        <p className="text-lg font-semibold text-Brown" style={{ wordSpacing: '3px', lineHeight: '2' }}>
        <p>Hello! I have a bachelors degree in Biophysics, and have a master's degree in Biological Sciences with a concentration in biomechanics. I have years of experience as a tutor for various math and science subjects. My subject strengths include biology, physics, algebra I, algebra II and geometry! I can most likely help with any college level or below physics and biology material.</p>

<p>I love teaching and being able to contribute to the success of my students. My goal is always to help students understand what they are working on so they can apply their knowledge to succeed. I beleive that an important part of learning is building confidence so I like to center my lessons around continued encouragement. I am based in Hudson County NJ and am happy to have lessons online or in person.
</p>
<p>I have a bachelors degree in Biophysics, where I completed a math heavy curriculum close to that of an applied physics degree. I have experience in calculus I,II and II, differential equations and statistics. I have also been consistently tutoring high school geometry, algebra, physics and chemistry.</p>

<p>After completing my undergraduate courses I continued my education and completed all premedical required courses and a masters degree in biology aiding to my strong background in the sciences. I completed a Master's degree in Biological Sciences, with a GPA of 3.9. This curriculum included computational biology and statistics, anatomy, and neuroscience along with many other courses. I completed my master's thesis on a biomechanics-based project using a machine-learning algorithm.</p>

<p>Some other facts about me are that I played division I soccer in college and still love to remain active. Along with playing pick-up soccer games I enjoy snowboarding and running. I curently work in technology for a financial technology compay. When I am not working I like to send time exploring NYC, or spend time with friends and family.</p>

<p>Please don't hesitate to ask any questions, I am excited to help you in any way that I can!
Pricing will depend on subject material and if the lesson is online or in person.</p>

        </p>
      </div>
    </div>
    </div>
  );
};

export default About;
