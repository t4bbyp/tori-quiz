export default function Input({ ...props }) {
  return (
    <>
      <input {...props} />
      {props.extra && (
        <small>
          * Un identificador simple, unico (ej. primer nombre). Solo letras
          latinas, minusculas.
          
          Aseguraos de no haber usado el mismo para otro pj. Si hace falta,
          preguntad a Tori.
        </small>
      )}
    </>
  );
}
