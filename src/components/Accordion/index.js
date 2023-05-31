import "./index.scss";
import Accordion from "react-bootstrap/Accordion";

const Accordionl = () => {
  return (
    <Accordion className="w-100" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>How many team members can I invite?</Accordion.Header>
        <Accordion.Body>
          You can invite up to 2 additional users on the Free plan. There is no
          limit on team members for the Premium plan.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>
          What is the maximum file upload size?
        </Accordion.Header>
        <Accordion.Body>
          No more than 2GB. All files in your account must fit your allotted
          storage space.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>How do I reset my password?</Accordion.Header>
        <Accordion.Body>
          Click "Forgot password" from the login page or "Change password" from
          your profile page. A reset link will be emailed to you.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>Can I cancel my subscription?</Accordion.Header>
        <Accordion.Body>
          Yes! Send us a message and we'll process your request no questions
          asked.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>Do you provide additional support?</Accordion.Header>
        <Accordion.Body>Chat and email support is available 24/7. Phone lines are open during normal business hours.</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Accordionl;
