import React from "react";
import "./digaster.css";
import image1 from "./1715533091840.jpg";
import image2 from "./438252815_18426895801037659_8426763464601864132_n.jpg";
import image3 from "./408874996_419930400706019_7741203371064168365_n.webp.jpg";
import image4 from "./419327588_705567038423692_6273076140371438013_n.jpg"

const FoodPage = () => {
  return (
    <div className="image-explainer">
      <div className="image-container">
        <img src={image1} alt="Description of Image 1" />
        <div class=" h1-p-img">
          <h1 class="head">
            Early Childhood Care and Education (The foundation of learning)
          </h1>

          <p class="paragraph">
            Over 80% of a child’s cumulative brain development occurs before age
            6, indicating the critical importance of appropriate care and
            stimulation of the brain in the early years to ensure healthy brain
            development and growth. Strong investment in ECCE has the potential
            to give all young children such access, enabling them to participate
            and flourish in the educational system throughout their lives. Bal
            Raksha Bharat through its programmatic interventions is closely
            working with the government to support early learning of children.
          </p>
        </div>
      </div>
      <div className="image-container">
        <img src={image2} alt="Description of Image 2" />
        <div class="h1-p-img">
          <h1 class="head">
            Foundational Literacy and Numeracy (An Urgent & Necessary
            Prerequisite to Learning)
          </h1>

          <p class="paragraph">
            The ability to read and write, and perform basic operations with
            numbers, is a necessary foundation and an indispensable prerequisite
            for all future schooling and lifelong learning. However, various
            government as well as non-governmental surveys indicate that we are
            currently in a learning crisis: a large proportion of children are
            enrolled in primary grades, and attaining foundational literacy and
            numeracy for all children is an urgent mission. We are working with
            3 – 8 age group wherein in Anganwadi Centres, we support children to
            transition to the primary level with school readiness skills and for
            the 6 – 8 age groups we work with schools to further strengthen
            foundational literacy and numeracy skill of children.
          </p>
        </div>
      </div>
      <div className="image-container">
        <img src={image3} alt="Description of Image 2" />
        <div class=" h1-p-img">
          <div class="topic">
            <h1 class="head">
              Equitable and Inclusive Education: Learning for All
            </h1>
          </div>
          <p class="paragraph">
            Education is the single greatest tool for achieving social justice
            and equality. Inclusive and equitable education – an essential goal
            in its own right – is also critical to achieving an inclusive and
            equitable society. While the Indian education system and successive
            government policies have made steady progress towards bridging
            gender and social category gaps in all levels of school education,
            significant disparities remain – especially at the elementary level.
            At Bal Raksha Bharat we bring in programmatic interventions to
            provide an inclusive and equitable environment in which every child
            thrives and no child loses any opportunity to learn.
          </p>
        </div>
      </div>
      <div className="image-container">
        <img src={image4} alt="Description of Image 2" />
        <div class=" h1-p-img">
          <div class="topic">
            <h1 class="head">Safer School Environment</h1>
          </div>
          <p class="paragraph">
            Bal Raksha Bharat has adopted an all hazards approach to keep
            children safe in and around school from natural and everyday
            hazards, and violence. It addresses the full spectrum of risks that
            children face in and around schools by adopting a ’whole school’
            approach engaging stakeholders across all levels of the
            socioecological model (children, caregivers, teachers, school
            management, communities, civil society, and government authorities)
            to make both immediate and lasting improvements for children’s
            safety and protection in and around school. It uses a ‘collective
            impact’ approach to mobilize stakeholders for impacts at scale. Safe
            Schools programming has been adapted for both development and
            humanitarian contexts. We developed the Safe Back to School
            Guidelines for safe return of children in schools post the pandemic.
            We form and strengthen School Safety Committees, conduct mock drills
            and hazard hunt exercise in schools.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodPage;
