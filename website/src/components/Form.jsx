import { useState } from "react";

const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    if (age <= 24) {
      document.querySelector(
        ".results"
      ).innerHTML = `<h2>Leading causes of Mortality</h2>
        <ol>
            <li>Accident</li>
            <li>Homicide</li>
            <li>Suicide</li>
            <li>Malignancy</li>
            <li>Heart disease</li>
        </ol>
        <h2>Screening Prevention Interventions to consider for Each specific Population</h2>
        <ul>
            <li>Counseling on routine seat belt use, bicycle/motorcycle/ATV helments</li>
            <li>Counseling on diet and exercise</li>
            <li>Discuss dangers of alcohol use while driving, swimming, boating</li>
            <li>Assess and update vaccination status (tetanus, diphtheria, hepatitis B, MMR, rubella, varicella, meningitis, HPV)</li>
            <li>Ask about gun use and/or gun possession</li>
            <li>Assess for substance abuse history including alcohol</li>
            <li>Screen for domestic violence</li>
            <li>Screen for depression and/or suicidal/homicidal ideation</li>
            <li>Pap smear for cervical cancer screening after age 21</li>
            <li>Discuss skin, breast awareness, and testicular self-examinations</li>
            <li>Recommend UV light avoidance and regular sunscreen use</li>
            <li>Measurement of blood pressure, height, weight, and body mass index</li>
            <li>Discuss health risks of tobacco use, consider emphasis on cosmetic and economic issues to improve quit rates for younger smokers</li>
            <li>Chlamydia and gonnorhea screening and contraceptive counseling for sexually active females, discuss STD prevention</li>
            <li>Hepatitis B, and syphilis testing if there is high-risk sexual behavior(s) or any prior history of sexually transmitted disease</li>
            <li>Hepatitis C screening starting at age 18 to 79</li>
            <li>HIV testing</li>
            <li>Continue annual influenza vaccination</li>
        </ul>
        `;
    } else if (age >= 25 && age <= 44) {
      document.querySelector(
        ".results"
      ).innerHTML = `<h2>Leading causes of Mortality</h2>
        <ol>
            <li>Accident</li>
            <li>Malignancy</li>
            <li>Heart disease</li>
            <li>Homicide</li>
            <li>HIV</li>
        </ol>
        <h2>Screening Prevention Interventions to consider for Each specific Population</h2>
        <ul>
            <li>Readdress smoking status, encourage cessation at every visit</li>
            <li>Obtain detailed family history of malignancies and begin early screening/prevention program if patient is at significant increased risk</li>
            <li>Assess all cardiac risk fctors (including screening for diabetes and hyperlipidemia) and consider primary prevention with aspirin for patients at >3% 5-year risk of a vascular event and statin therapy of higher risk patients</li>
            <li>Asses for chronic alcohol abuse, risk factors for viral hepatitis, or other risks for development of chronic liver disease</li>
            <li>Consider individualized breast cancer screening with mammography at age 40</li>
        </ul>
        `;
    } else if (age >= 45 && age <= 64) {
      document.querySelector(
        ".results"
      ).innerHTML = `<h2>Leading causes of Mortality</h2>
        <ol>
            <li>Malignancy</li>
            <li>Heart disease</li>
            <li>Accident</li>
            <li>Diabetes mellitus</li>
            <li>Cerebrovascular disease</li>
            <li>Chronic lower respiratory disease</li>
            <li>Chronic liver disease and cirrhosis</li>
            <li>Suicide</li>
        </ol>
        <h2>Screening Prevention Interventions to consider for Each specific Population</h2>
        <ul>
            <li>Consider prostate cancer screen with annual PSA and digital rectal examination at age 50 (or possibly earlier in African Americans or patients with family history)</li>
            <li>Begin colorectal cancer screening at age 45 or 50 with fecal occult blood testing, flexible sigmoidoscopy, or colonoscopy</li>
            <li>Reassess and update vaccination status at age 50 and vaccinate all smokers against Streptococcus pneumoniae at age 50 </li>
            <li>Consider screening for coronary disease in higher-risk patients</li>
            <li>Zoster vaccination at age 60</li>
            <li>Begin mammography screening by age 50</li>
            <li>Lung cancer screening at age 50 to 80 years if a 20 pack-year smoking history and currently smoke or have quit within the past 15 years, yearly.</li>
        </ul>
        `;
    } else if (age >= 65) {
      document.querySelector(
        ".results"
      ).innerHTML = `<h2>Leading causes of Mortality</h2>
        <ol>
            <li>Heart disease</li>
            <li>Malignancy</li>
            <li>Cerebrovascular disease</li>
            <li>Chronic lower respiratory disease</li>
            <li>Alzheimer's disease</li>
            <li>Influenza and pneumonia</li>
            <li>Diabetes mellitus</li>
            <li>Kidney disease</li>
            <li>Accidents</li>
            <li>Septicemia</li>
        </ol>
        <h2>Screening Prevention Interventions to consider for Each specific Population</h2>
        <ul>
            <li>Readdress smoking status, encourage cessation at every visit</li>
            <li>One-time ultrasound for AAA in men 65–75 who have ever smoked</li>
            <li>Consider pulmonary function testing for all long-term smokers to assess for development of chronic obstructive pulmonary disease</li>
            <li>Screen all postmenopausal women (and all men with risk factors) for osteoporosis</li>
            <li>Continue annual influenza vaccination and vaccinate against S. pneumoniae at age 65</li>
            <li>Screen for visual and hearing problems, home safety issues, and elder abuse</li>
            <li>Consider fall prevention exercise intervention if at higher risk</li>
        </ul>
        `;
    }
  };

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <div className="container">
      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{ marginBottom: 20 + "px" }}
      >
        <div className="form-group" style={{ marginBottom: 20 + "px" }}>
          <label htmlFor="Name">Name</label>
          <br />
          <input
            placeholder={"Enter name"}
            className="form-control"
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="form-group" style={{ marginBottom: 20 + "px" }}>
          <label htmlFor="Age">Age</label>
          <br />
          <input
            placeholder={"Enter age"}
            className="form-control"
            onChange={(event) => setAge(event.target.value)}
            type="number"
            min="15"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <div className="results"></div>
    </div>
  );
};

export default Form;
