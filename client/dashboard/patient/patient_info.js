import PatientInfo from './PatientInfo';

const patient = {
  fullName: 'John Doe',
  dob: '1985-04-23',
  email: 'johndoe@example.com',
  medicalCondition: 'Diabetes',
  notes: 'Patient has been managing diabetes for 10 years.',
  attachments: [
    {
      name: 'medical_report.pdf',
      size: '1.2mb',
      link: '#',
    },
    {
      name: 'prescription.pdf',
      size: '300kb',
      link: '#',
    },
  ],
};

export default function App() {
  return (
    <div>
      <PatientInfo patient={patient} />
    </div>
  );
}
