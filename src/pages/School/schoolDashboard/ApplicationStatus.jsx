import React from 'react'
import { useParams } from 'react-router-dom'
import { AcceptedApplication, PendingApplication,UnderProcess, RejectedApplication,Accepted,JoinAccepted } from '../../../components/School/application';

const ApplicationStatus = () => {
  const {id} = useParams();

  if (id === 'accepted') {
    return(
      <Accepted />
    )
  }
  if (id === 'rejected') {
    return(
      <RejectedApplication />
    )
  }
  return (
    <>
      {/* <PendingApplication /> */ }
      <UnderProcess />
      {/* <Accepted /> */}
    </>
  )
}

export default ApplicationStatus