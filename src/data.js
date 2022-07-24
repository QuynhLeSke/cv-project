import { nanoid } from "nanoid";

let exampleData = {
  generalInformation: {
    firstName: "Quynh",
    lastName: "Le",
    occupation: "Fullstack Developer",
    phone: "012939139",
    email: "quynh.le@skedulo.com",
    image: "",
    description:
      "A Software Developer is a professional who is charged with designing and coding software for businesses and consumers alike. ",
  },
  education: [
    {
      school: "HCM Open University",
      subject: "Computer Science Bachelors",
      yearStarted: "2018",
      yearFinished: "2022",
      id: "X9_hvzk0znc7KxMiuvXRr",
    },
    {
      school: "HCM Open University",
      subject: "Computer Science Bachelors",
      yearStarted: "2018",
      yearFinished: "2022",
      id: "c7Qk8KVBLGZ0VomUBE6uC",
    },
  ],
  workExperience: [
    {
      company: "Skedulo",
      position: "Fullstack Developer",
      yearStarted: "2022",
      yearFinished: "~",
      id: "8N0I1NgyV31vTuvsbe5Lv",
    },
    {
      company: "Skedulo",
      position: "Fullstack Developer",
      yearStarted: "2022",
      yearFinished: "~",
      id: "hpcaaMo0MvBy5WfS0ofFi",
    },
    {
      company: "Skedulo",
      position: "Fullstack Developer",
      yearStarted: "2022",
      yearFinished: "~",
      id: "c3ve90Ac5IjV_QOCFiHuA",
    },
  ],
  skills: [
    {
      skill: "Javascript",
      id: "UTPcyBvqEdEx2S7tTj3vq",
    },
    {
      skill: "React",
      id: "UTPcyBvqEdEx2S7tTj3vq",
    },
    {
      skill: "Node",
      id: "hTqT9Z2cBJHmQt_DD6WnY",
    },
    {
      skill: "TypeScript",
      id: "KMfaBvRjY2Lm4U_AJYSCw",
    },
    {
      skill: "Java",
      id: "isDmCYJH8XPcuG93kRp7_",
    },
    {
      skill: "MySQL",
      id: "jI8vmc2OaDp-IwwTOWmro",
    },
  ],
};

let resetData = {
  generalInformation: {
    firstName: "",
    lastName: "",
    occupation: "",
    phone: "",
    email: "",
    image: "",
  },
  education: [
    {
      school: "",
      subject: "",
      yearStarted: "",
      yearFinished: "",
      id: nanoid(),
    },
  ],
  workExperience: [
    {
      company: "",
      position: "",
      yearStarted: "",
      yearFinished: "",
      id: nanoid(),
    },
  ],
  skills: [{ skill: "", id: nanoid() }],
};

export { exampleData, resetData };
