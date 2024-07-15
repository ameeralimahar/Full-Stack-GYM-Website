import React from "react";


const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Push your limits with our top workout sessions! Achieve your fitness goals with tailored exercises designed to boost your strength, endurance, and overall health. Join us and transform your workout experience today.
        </p>
        <img src={"/img5.jpg"} alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Experience the intensity and camaraderie of our featured bootcamps. Each session is crafted to challenge you and help you reach new heights in your fitness journey. Don’t miss out on the most exciting and effective bootcamp programs.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Strength and Conditioning</h4>
            <p>
              Build muscle and increase endurance with our strength and conditioning bootcamp. Perfect for all fitness levels.
            </p>
          </div>
          <div>
            <h4>Cardio Blast</h4>
            <p>
              Burn calories and improve cardiovascular health with high-energy cardio sessions. Suitable for those looking to get their heart pumping.
            </p>
          </div>
          <div>
            <h4>Yoga Flex</h4>
            <p>
              Enhance your flexibility and reduce stress with our Yoga Flex bootcamp. Ideal for both beginners and experienced practitioners.
            </p>
          </div>
          <div>
            <h4>HIIT Power</h4>
            <p>
              Experience the ultimate high-intensity interval training (HIIT) workout. Quick, intense, and highly effective.
            </p>
          </div>
          <div>
            <h4>Pilates Core</h4>
            <p>
              Strengthen your core and improve your posture with our Pilates Core bootcamp. Suitable for all fitness levels looking to enhance their stability and core strength.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
