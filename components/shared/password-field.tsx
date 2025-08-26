import { Eye, EyeOff } from "lucide-react";

import { Input } from "@/components/ui/input";

interface PasswordFieldProps {
  setShowPassword: (show: boolean) => void;
  showPassword: boolean;
  field: React.InputHTMLAttributes<HTMLInputElement>;
}

export default function PasswordField({
  showPassword,
  setShowPassword,
  field,
}: PasswordFieldProps) {
  return (
    <div className="relative">
      <Input type={showPassword ? "text" : "password"} placeholder="********" {...field} />
      <button
        className="hover:text-primary absolute top-1/2 left-2 -translate-y-1/2 text-gray-500"
        type="button"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>
    </div>
  );
}
