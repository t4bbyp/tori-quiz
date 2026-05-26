export default function Input({ ...props }) {
  return (
    <>
      <input {...props} required />
      {props.extra && (
        props.extra
      )}
    </>
  );
}
