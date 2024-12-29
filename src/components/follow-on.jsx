import {FaGithub, FaLinkedin, FaSlack} from "react-icons/fa6";

const FollowOn = () => {
  return (
    <div
      className="faded-text pt-2" //custom - faded-text
    >
      <span>Follow on:</span>
      <div className="flex gap-4 pt-3">
        <a href="https://www.linkedin.com/in/rehmat-ullah-170159295">
          <FaLinkedin size={20} />
        </a>
        <a href="https://app.slack.com/client/T07P45JTM24">
          <FaSlack size={20} />
        </a>
        <a href="https://github.com/rehmatcodes">
          <FaGithub size={20} />
        </a>
      </div>
    </div>
  );
};

export default FollowOn;
