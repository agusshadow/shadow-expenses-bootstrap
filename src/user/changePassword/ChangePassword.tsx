import { useForm } from "react-hook-form";
import { useChangePassword } from "./useChangePassword";
import { Col, Row } from "react-bootstrap";

type FormData = {
  newPassword: string;
  confirmPassword: string;
};

export default function ChangePassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const { loading, error, changePassword } = useChangePassword();

  const onSubmit = async (data: FormData) => {
    const result = await changePassword(data.newPassword, data.confirmPassword);
    if (result) reset();
  };

  return (
    <Row>
      <Col md={6}>
        <h2 className="mb-4">Cambiar Contraseña</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label>Nueva Contraseña</label>
            <input
              type="password"
              {...register("newPassword", {
                required: "La nueva contraseña es obligatoria",
                minLength: { value: 6, message: "Mínimo 6 caracteres" },
              })}
              className={`form-control ${
                errors.newPassword ? "is-invalid" : ""
              }`}
            />
            {errors.newPassword && (
              <div className="invalid-feedback">
                {errors.newPassword.message}
              </div>
            )}
          </div>

          <div className="mb-3">
            <label>Confirmar Nueva Contraseña</label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Confirma la contraseña",
              })}
              className={`form-control ${
                errors.confirmPassword ? "is-invalid" : ""
              }`}
            />
            {errors.confirmPassword && (
              <div className="invalid-feedback">
                {errors.confirmPassword.message}
              </div>
            )}
          </div>

          <button type="submit" className="btn btn-success" disabled={loading}>
            {loading ? "Guardando..." : "Cambiar Contraseña"}
          </button>

          {error && <div className="mt-3 alert alert-danger">{error}</div>}
        </form>
      </Col>
    </Row>
  );
}
