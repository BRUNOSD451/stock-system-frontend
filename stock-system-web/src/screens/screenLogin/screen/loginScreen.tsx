import { useState, useRef, useEffect } from "react";
import "../style/loginStyle.css";
import { useNavigate } from "react-router-dom";


const IconId = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="3" />
    <circle cx="9" cy="11" r="2.5" />
    <path d="M13 9h4M13 13h3M5 17c0-1.7 1.8-3 4-3s4 1.3 4 3" />
  </svg>
);

const IconLock = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    <circle cx="12" cy="16" r="1" fill="currentColor" />
  </svg>
);

const IconEye = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const IconEyeOff = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

const IconAlert = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const IconArrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

// ── CPF mask helper ────────────────────────────────────────────────────────────

function applyCpfMask(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)}.${digits.slice(3)}`;
  if (digits.length <= 9) return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
  return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`;
}

function validateCpf(cpf: string): boolean {
  const digits = cpf.replace(/\D/g, "");
  if (digits.length !== 11 || /^(\d)\1+$/.test(digits)) return false;
  let sum = 0;
  for (let i = 0; i < 9; i++) sum += parseInt(digits[i]) * (10 - i);
  let rest = (sum * 10) % 11;
  if (rest === 10 || rest === 11) rest = 0;
  if (rest !== parseInt(digits[9])) return false;
  sum = 0;
  for (let i = 0; i < 10; i++) sum += parseInt(digits[i]) * (11 - i);
  rest = (sum * 10) % 11;
  if (rest === 10 || rest === 11) rest = 0;
  return rest === parseInt(digits[10]);
}



interface LoginFormState {
  cpf: string;
  senha: string;
  remember: boolean;
}

interface LoginErrors {
  cpf?: string;
  senha?: string;
  general?: string;
}

export default function LoginScreen() {
  const [form, setForm] = useState<LoginFormState>({ cpf: "", senha: "", remember: false });
  const [errors, setErrors] = useState<LoginErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const cpfRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate()


  useEffect(() => {
    cpfRef.current?.focus();
  }, []);

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const masked = applyCpfMask(e.target.value);
    setForm((f) => ({ ...f, cpf: masked }));
    if (errors.cpf) setErrors((err) => ({ ...err, cpf: undefined }));
  };

  const handleSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, senha: e.target.value }));
    if (errors.senha) setErrors((err) => ({ ...err, senha: undefined }));
  };

  const validate = (): boolean => {
    const newErrors: LoginErrors = {};
    const rawCpf = form.cpf.replace(/\D/g, "");

    if (!rawCpf) {
      newErrors.cpf = "CPF é obrigatório.";
    } else if (rawCpf.length < 11) {
      newErrors.cpf = "CPF incompleto.";
    } else if (!validateCpf(form.cpf)) {
      newErrors.cpf = "CPF inválido.";
    }

    if (!form.senha) {
      newErrors.senha = "Senha é obrigatória.";
    } else if (form.senha.length < 6) {
      newErrors.senha = "A senha deve ter ao menos 6 caracteres.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
      navigate("/home")
    if (!validate()) return;

    setLoading(true);
    setErrors({});





    setLoading(false);
  };

  return (
    <div className="login-page">
      {/* Ambient glows */}
      <div className="glow-blob glow-blob--1" />
      <div className="glow-blob glow-blob--2" />
      <div className="glow-blob glow-blob--3" />

      {/* Left — branding */}
      <aside className="login-branding">
        <div className="brand-badge">
          <span className="dot" />
          Sistema Ativo
        </div>

        <h1 className="brand-title">
          Gestão de
          <span>Estoque</span>
        </h1>

        <p className="brand-desc">
          Controle completo do seu inventário em tempo real. Gerencie entradas, saídas e alertas de reposição com precisão.
        </p>


      </aside>


      <main className="login-form-panel">
        <div className="login-card">
          <div className="login-card-header">
            <h2>Bem-vindo de volta</h2>
            <p>Faça login para acessar o painel de controle</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit} noValidate>

            {errors.general && (
              <div className="error-banner">
                <IconAlert />
                {errors.general}
              </div>
            )}

   
            <div className="form-group">
              <label className="form-label" htmlFor="cpf">CPF</label>
              <div className="input-wrapper">
                <span className="input-icon">
                  <IconId />
                </span>
                <input
                  ref={cpfRef}
                  id="cpf"
                  className="form-input"
                  type="text"
                  inputMode="numeric"
                  placeholder="000.000.000-00"
                  value={form.cpf}
                  onChange={handleCpfChange}
                  autoComplete="username"
                  aria-describedby={errors.cpf ? "cpf-error" : undefined}
                  aria-invalid={!!errors.cpf}
                />
              </div>
              {errors.cpf && (
                <span id="cpf-error" style={{ fontSize: 12, color: "var(--error)", marginTop: 2 }}>
                  {errors.cpf}
                </span>
              )}
            </div>

            {/* Password field */}
            <div className="form-group">
              <label className="form-label" htmlFor="senha">Senha</label>
              <div className="input-wrapper">
                <span className="input-icon">
                  <IconLock />
                </span>
                <input
                  id="senha"
                  className="form-input"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={form.senha}
                  onChange={handleSenhaChange}
                  autoComplete="current-password"
                  aria-describedby={errors.senha ? "senha-error" : undefined}
                  aria-invalid={!!errors.senha}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                >
                  {showPassword ? <IconEyeOff /> : <IconEye />}
                </button>
              </div>
              {errors.senha && (
                <span id="senha-error" style={{ fontSize: 12, color: "var(--error)", marginTop: 2 }}>
                  {errors.senha}
                </span>
              )}
            </div>

            {/* Remember + Forgot */}
            <div className="form-options">
              <label className="remember-label">
                <input
                  type="checkbox"
                  className="remember-checkbox"
                  checked={form.remember}
                  onChange={(e) => setForm((f) => ({ ...f, remember: e.target.checked }))}
                />
                Lembrar acesso
              </label>
             
            </div>

            {/* Submit */}
            <button className="btn-login" type="submit" disabled={loading}>
              <span className="btn-login-content">
                {loading ? (
                  <>
                    <span className="spinner" />
                    Entrando…
                  </>
                ) : (
                  <>
                    Entrar no sistema
                    <IconArrow />
                  </>
                )}
              </span>
            </button>
          </form>

       
        </div>
      </main>
    </div>
  );
}