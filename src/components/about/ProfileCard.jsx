import FadeIn from "../FadeIn";
import profileImage from "../../images/profile.jpeg";

const ProfileCard = () => {
  return (
    <FadeIn
      x={-30}
      duration={0.6}
      className="w-full max-w-[340px] mx-auto md:mx-0"
    >
      <div className="relative rounded-3xl overflow-hidden border border-content/[0.09] shadow-[0_32px_64px_rgba(0,0,0,0.6),0_0_0_1px_rgba(99,102,241,0.08)]">
        <img
          src={profileImage}
          alt="Bittu Kumar"
          loading="lazy"
          className="w-full block aspect-[4/5] object-cover"
        />
      </div>
    </FadeIn>
  );
};

export default ProfileCard;
