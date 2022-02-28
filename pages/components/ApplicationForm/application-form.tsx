/* eslint-disable react/jsx-key */
import {
  useAccordionButton,
  DropdownButton,
  ButtonGroup,
  Dropdown,
} from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

import classes from "./application-form.module.css";

type AccordionHeaderProps = {
  label: string;
  eventKey: string;
};

const AccordionHeader: React.FC<AccordionHeaderProps> = (props) => {
  const { label, eventKey } = props;

  const accordionToggleHandler = useAccordionButton(eventKey);

  return (
    <header
      onClick={accordionToggleHandler}
      className={classes.accordionheader}
    >
      <h3 className={classes.accordiontitle}>{label}</h3>
    </header>
  );
};

export default function ApplicationForm() {
  return (
    <div className={classes.container}>
      <Accordion
        className={classes.accordioncontainer}
        defaultActiveKey="0"
        flush
      >
        <Accordion.Item className={classes.formcontainer} eventKey="0">
          <AccordionHeader label="Step 1: Your details" eventKey="0" />

          <Accordion.Body className={classes.form}>
            <div className={classes.row}>
              <label className={classes.formlabel}>
                First Name
                <input type="text" name="firstname" className={classes.forminput} />
              </label>

              <label className={classes.formlabel}>
                Surname
                <input type="text" name="lastname" className={classes.forminput} />
              </label>
            </div>
            <div className={classes.row}>
              <label className={classes.formlabel}>
                Email Address:
                <input type="text" name="email" className={classes.forminput} />
              </label>
            </div>
            <div className={classes.rowbottom}>
              <button className={classes.nextbutton}>Next {'>'}</button>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item className={classes.formcontainer} eventKey="1">
          <AccordionHeader label="Step 2: More comments" eventKey="1" />

          <Accordion.Body className={classes.form}>
            <div className={classes.row}>

            <label className={classes.formlabel}>
              Telephone number
              <input type="number" name="telephone" className={classes.forminput} />
            </label>

            <label className={classes.formlabel}>
              Gender
              <select title="Select Gender" className={classes.dropdown}>
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
                <option>Prefer not to say</option>
              </select>
            </label>
            </div>

            <div className={classes.row}>
            <label className={classes.formlabel}>
              Date of Birth
              <div className={classes.dobinput}>
              <input type="number" name="day" className={classes.formdobinput} />
              <input type="number" name="month" className={classes.formdobinput} />
              <input type="number" name="year" className={classes.formdobinput} />
              </div>
            </label>
            </div>
            <div className={classes.rowbottom}>
              <button className={classes.nextbutton}>Next ></button>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item className={classes.formcontainer} eventKey="2">
          <AccordionHeader label="Step 3: Final comments" eventKey="2" />

          <Accordion.Body className={classes.form}>
            <label className={classes.formlabel}>
              Comments
              <input type="text" name="comment" className={classes.commentinput} />
            </label>
            <div className={classes.rowbottom}>
              <button className={classes.nextbutton}>Next ></button>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
