export interface FormGroupProps {
  children: React.ReactNode;
  label?: string;
}

export function FormGroup({ label, children }: FormGroupProps) {
  return (
    <div className="my-2 flex flex-col">
      {label && <label className="font-semibold text-sm mb-1">{label}</label>}
      {children}
    </div>
  );
}

export default FormGroup;
