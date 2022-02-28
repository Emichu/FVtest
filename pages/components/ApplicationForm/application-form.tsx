import { useState } from "react";
import { useAccordionButton } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

import NextButton from "../NextButton/next-button";
import TextInput from "../TextInput/text-input";

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
  const [state, setState] = useState({
    stage1: {
      firstname: "",
      surname: "",
      email: "",
    },
    stage2: {
      telephone: "",
      gender: "",
      dob: ["", "", ""],
    },
    stage3: {
      comments: "",
    },
  });

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
              <TextInput
                label="First Name"
                value={state.stage1.firstname}
                onTextChange={(value) =>
                  setState((prevState) => {
                    return {
                      ...prevState,
                      stage1: {
                        ...prevState.stage1,
                        firstname: value,
                      },
                    };
                  })
                }
              />

              <TextInput
                label="Surname"
                value={state.stage1.surname}
                onTextChange={(value) =>
                  setState((prevState) => {
                    return {
                      ...prevState,
                      stage1: {
                        ...prevState.stage1,
                        surname: value,
                      },
                    };
                  })
                }
              />
            </div>

            <div className={classes.row}>
              <TextInput
                label="Email Address"
                value={state.stage1.email}
                onTextChange={(value) =>
                  setState((prevState) => {
                    return {
                      ...prevState,
                      stage1: {
                        ...prevState.stage1,
                        email: value,
                      },
                    };
                  })
                }
              />
            </div>

            <NextButton stage={1} />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item className={classes.formcontainer} eventKey="1">
          <AccordionHeader label="Step 2: More comments" eventKey="1" />

          <Accordion.Body className={classes.form}>
            <div className={classes.row}>
              <TextInput
                label="Telephone Number"
                value={state.stage2.telephone}
                onTextChange={(value) =>
                  setState((prevState) => {
                    return {
                      ...prevState,
                      stage2: {
                        ...prevState.stage2,
                        telephone: value,
                      },
                    };
                  })
                }
              />

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
                  <input
                    type="number"
                    name="day"
                    className={classes.formdobinput}
                    value={state.stage2.dob[0]}
                    onChange={(e) =>
                      setState((prevState) => {
                        return {
                          ...prevState,
                          stage2: {
                            ...prevState.stage2,
                            dob: [
                              e.target.value,
                              prevState.stage2.dob[1],
                              prevState.stage2.dob[2],
                            ],
                          },
                        };
                      })
                    }
                  />
                  <input
                    type="number"
                    name="month"
                    className={classes.formdobinput}
                    value={state.stage2.dob[1]}
                    onChange={(e) =>
                      setState((prevState) => {
                        return {
                          ...prevState,
                          stage2: {
                            ...prevState.stage2,
                            dob: [
                              prevState.stage2.dob[0],
                              e.target.value,
                              prevState.stage2.dob[2],
                            ],
                          },
                        };
                      })
                    }
                  />
                  <input
                    type="number"
                    name="year"
                    className={classes.formdobinput}
                    value={state.stage2.dob[2]}
                    onChange={(e) =>
                      setState((prevState) => {
                        return {
                          ...prevState,
                          stage2: {
                            ...prevState.stage2,
                            dob: [
                              prevState.stage2.dob[0],
                              prevState.stage2.dob[1],
                              e.target.value,
                            ],
                          },
                        };
                      })
                    }
                  />
                </div>
              </label>
            </div>

            <NextButton stage={2} />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item className={classes.formcontainer} eventKey="2">
          <AccordionHeader label="Step 3: Final comments" eventKey="2" />

          <Accordion.Body className={classes.form}>
            <label className={classes.formlabel}>
              Comments
              <input
                type="text"
                name="comment"
                className={classes.commentinput}
                value={state.stage3.comments}
                onChange={(e) =>
                  setState((prevState) => {
                    return {
                      ...prevState,
                      stage3: {
                        ...prevState.stage3,
                        comments: e.target.value,
                      },
                    };
                  })
                }
              />
            </label>

            <NextButton stage={3} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
