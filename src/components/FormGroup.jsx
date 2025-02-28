export default function FormGroup({ labelText, labelFor, children, error }) {
  return (
    <div className="form-group">
      <div className="form-line xl">
        <label htmlFor={labelFor}>{labelText}</label>
        {error}
      </div>
      {children}
    </div>
  );
}
