import axios from "axios";

const API = axios.create({
  baseURL: "http://ec2-34-227-15-84.compute-1.amazonaws.com/api/school",
});

export default API;


// // dev routes
// export const ROOT_API = "http://localhost:3001/";

// // SCHOOL AUTH APIs
// export const SCHOOL_REG_API = "http://localhost:3001/school/register";
// export const SCHOOL_LOGIN_API = "http://localhost:3001/school/login";
// export const SCHOOL_FORGOT_PASSWORD_API =
//   "http://localhost:3001/school/forgot-password";
// export const SCHOOL_POST_OTP_API = "http://localhost:3001/school/post-otp";

// // SCHOOL DASHBOARD APIs
// export const SCHOOL_DASHBOARD_API = "http://localhost:3001/school/dashboard";
// export const SCHOOL_DASHBOARD_PROFILE_API =
//   "http://localhost:3001/school/dashboard/:schoolID";
// export const SCHOOL_DASHBOARD_UPDATE_API =
//   "http://localhost:3001/school/dashboard/:schoolID";
// export const SCHOOL_DASHBOARD_DELETE_API =
//   "http://localhost:3001/school/dashboard/:schoolID";
// export const SCHOOL_DASHBOARD_UPDATE_PASSWORD_API =
//   "http://localhost:3001/school/dashboard/:schoolID/update-password";

// // SCHOOL APPLICATION API
// export const SCHOOL_APPLICATIONS_API =
//   "http://localhost:3001/school/dashboard/applications";
// export const SCHOOL_GET_ONE_APPLICATION_API =
//   "http://localhost:3001/school/dashboard/applications/:applicationID";
// export const SCHOOL_CREATE_APPLICATION_API =
//   "http://localhost:3001/school/dashboard/applications";
// export const SCHOOL_DELETE_APPLICATION_API =
//   "http://localhost:3001/school/dashboard/applications/:applicationID";

// // SCHOOL STUDENT API
// export const SCHOOL_STUDENTS_API =
//   "http://localhost:3001/school/dashboard/students/";
// export const SCHOOL_GET_ONE_STUDENT_API =
//   "http://localhost:3001/school/dashboard/students/:studentID";
// export const SCHOOL_CREATE_STUDENT_API =
//   "http://localhost:3001/school/dashboard/students";
// export const SCHOOL_UPDATE_STUDENT_API =
//   "http://localhost:3001/school/dashboard/students/:studentID";
// export const SCHOOL_DELETE_STUDENT_API =
//   "http://localhost:3001/school/dashboard/students/:studentID";

// // SCHOOL UNIVERSITY API
// export const SCHOOL_UNIVERSITY_API =
//   "http://localhost:3001/school/dashboard/universities";
// export const SCHOOL_GET_ONE_UNIVERSITY_API =
//   "http://localhost:3001/school/dashboard/universities/:universityID";

// // export default route
// export default ROOT_API;
