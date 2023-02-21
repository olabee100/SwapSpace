import "./ProfDocuments.css";
import progBar from "../../../assets/School/icons/prog-bar.svg";
import uploadIcon from "../../../assets/School/icons/upload-icon.svg";
import { Link } from "react-router-dom";

const ProfDocuments = () => {
  return (
    <div className="prof-doc">
      <div className="doc-status">
        <div className="left">
          <h1>Document Status</h1>
          <p>
            Documents should be uploaded to help stand a chance of being
            accepted in your dream school
          </p>
        </div>

        <div className="right">
          <span>5 pending actions</span>
          <div className="prog-bar">
            <img src={progBar} alt="progress-bar" />
          </div>
        </div>
      </div>

      <div className="school-cert">
        <div className="head">
          <h2>School Certificate</h2>
          <span>3 documents not added yet</span>
        </div>

        <div className="single-cert-wrap">
          <div className="single-cert">
            <span>10th class Certificate</span>
            <div className="upload-cert">
              <label>
                <span>Upload Document</span>
                <input type="file" />
              </label>
            </div>
            <span className="format">Format Accepted. Pdf, Doc, Docx</span>
          </div>

          <div className="uploaded-cert">
            <div className="top">
              <span>10th class Certificate</span>
              <div className="upload-cert">
                <label>
                  <span>Upload Document</span>
                  <input type="file" />
                </label>
              </div>
            </div>
            <div className="bottom">
              <div>
                <div className="upload-icon">
                  <img src={uploadIcon} alt="upload-icon" />
                </div>
                <span>10th class Certificate Uploaded Successfully</span>
              </div>
              <span className="format">Format Accepted. Pdf, Doc, Docx</span>
            </div>
          </div>
        </div>
        <div className="single-cert-wrap">
          <div className="single-cert">
            <span>10th class marksheet</span>
            <div className="upload-cert">
              <label>
                <span>Upload Document</span>
                <input type="file" />
              </label>
            </div>
            <span className="format">Format Accepted. Pdf, Doc, Docx</span>
          </div>
        </div>
        <div className="single-cert-wrap">
          <div className="single-cert">
            <span>12th class Certificate</span>
            <div className="upload-cert">
              <label>
                <span>Upload Document</span>
                <input type="file" />
              </label>
            </div>
            <span className="format">Format Accepted. Pdf, Doc, Docx</span>
          </div>
        </div>
        <div className="single-cert-wrap">
          <div className="single-cert">
            <span>12th class Marksheet</span>
            <div className="upload-cert">
              <label>
                <span>Upload Document</span>
                <input type="file" />
              </label>
            </div>
            <span className="format">Format Accepted. Pdf, Doc, Docx</span>
          </div>
        </div>
        <div className="single-cert-wrap">
          <div className="single-cert">
            <span>IELTS/TOEFL/PTE/DUOLINGO (Academic)</span>
            <div className="upload-cert">
              <label>
                <span>Upload Document</span>
                <input type="file" />
              </label>
            </div>
            <span className="format">Format Accepted. Pdf, Doc, Docx</span>
          </div>
        </div>
        <div className="single-cert-wrap">
          <div className="single-cert">
            <span>Graduate Certificate</span>
            <div className="upload-cert">
              <label>
                <span>Upload Document</span>
                <input type="file" />
              </label>
            </div>
            <span className="format">Format Accepted. Pdf, Doc, Docx</span>
          </div>
        </div>
        <div className="single-cert-wrap">
          <div className="single-cert">
            <span>
              All Under-gradaute Official Marksheet (Semester-wise or Year-wise)
            </span>
            <div className="upload-cert">
              <label>
                <span>Upload Document</span>
                <input type="file" />
              </label>
            </div>
            <span className="format">Format Accepted. Pdf, Doc, Docx</span>
          </div>
        </div>
        <div className="single-cert-wrap">
          <div className="single-cert">
            <span>Post-Graduation mark sheet</span>
            <div className="upload-cert">
              <label>
                <span>Upload Document</span>
                <input type="file" />
              </label>
            </div>
            <span className="format">Format Accepted. Pdf, Doc, Docx</span>
          </div>
        </div>
        <div className="single-cert-wrap">
          <div className="single-cert">
            <span>Post-Graduation Degree</span>
            <div className="upload-cert">
              <label>
                <span>Upload Document</span>
                <input type="file" />
              </label>
            </div>
            <span className="format">Format Accepted. Pdf, Doc, Docx</span>
          </div>
        </div>
        <div className="single-cert-wrap">
          <div className="single-cert">
            <span>IELTS/TOEFL/PTE/DUOLINGO (Academic)</span>
            <div className="upload-cert">
              <label>
                <span>Upload Document</span>
                <input type="file" />
              </label>
            </div>
            <span className="format">Format Accepted. Pdf, Doc, Docx</span>
          </div>
        </div>
        <div className="single-cert-wrap">
          <div className="single-cert">
            <span>Statement of Purpose (SOP)</span>
            <div className="upload-cert">
              <label>
                <span>Upload Document</span>
                <input type="file" />
              </label>
            </div>
            <span className="format">Format Accepted. Pdf, Doc, Docx</span>
          </div>
        </div>
        <div className="single-cert-wrap">
          <div className="single-cert">
            <span>Letter of Recommendations (LOR)</span>
            <div className="upload-cert">
              <label>
                <span>Upload Document</span>
                <input type="file" />
              </label>
            </div>
            <span className="format">Format Accepted. Pdf, Doc, Docx</span>
          </div>
        </div>
        <div className="single-cert-wrap">
          <div className="single-cert">
            <span>Work experience certificates</span>
            <div className="upload-cert">
              <label>
                <span>Upload Document</span>
                <input type="file" />
              </label>
            </div>
            <span className="format">Format Accepted. Pdf, Doc, Docx</span>
          </div>
        </div>
      </div>

      <div className="addit-wrap">
        <div className="addit-doc">
          <span>Additional Document</span>
          <span>+</span>
        </div>
      </div>

      <div className="school-cert">
        <div className="head">
          <h2>Baackground Certificate</h2>
          <span>1 documents not added yet</span>
        </div>

        <div className="single-cert-wrap">
          <div className="single-cert">
            <span>Current Goverment ID/Passport</span>
            <div className="upload-cert">
              <label>
                <span>Upload Document</span>
                <input type="file" />
              </label>
            </div>
            <span className="format">Format Accepted. Pdf, Doc, Docx</span>
          </div>
        </div>
      </div>
      <Link to="/school/admission/application-status/payment">
        <button className="save">Save Changes</button>
      </Link>
    </div>
  );
};

export default ProfDocuments;
