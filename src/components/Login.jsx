import * as Yup from 'yup';
import { useFormik } from 'formik';
export const signUpSchema = Yup.object({
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});
const styles = {
    wrapper: {
        minHeight: "100vh",
        background: "#eff2f1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 16px",
    },
    card: {
        width: "100%",
        maxWidth: 900,
        background: "#fff",
        borderRadius: 20,
        overflow: "hidden",
        boxShadow: "0 20px 50px rgba(59, 93, 80, 0.15)",
    },
    side: {
        background: "#3b5d50",
        color: "#fff",
        padding: "48px 40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    brand: {
        fontSize: 32,
        fontWeight: 700,
        color: "#fff",
    },
    dot: {
        color: "#f9bf29",
    },
    form: {
        padding: "48px 40px",
    },
    input: {
        borderRadius: 10,
        padding: "12px 16px",
        border: "1px solid #dce5e4",
        background: "#f8faf9",
    },
    button: {
        width: "100%",
        borderRadius: 30,
        padding: "12px 0",
        background: "#3b5d50",
        borderColor: "#3b5d50",
        color: "#fff",
        fontWeight: 600,
    },
    link: {
        color: "#3b5d50",
        fontWeight: 600,
        textDecoration: "none",
    },
    color:{
        color: "red",
    }
};

const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: signUpSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });
    return (
        <div style={styles.wrapper}>
            <div className="row g-0" style={styles.card}>
                <div className="col-md-5" style={styles.side}>
                    <div style={styles.brand}>
                        Furni<span style={styles.dot}>.</span>
                    </div>
                    <h2 className="mt-4 mb-3" style={{ color: "#fff" }}>
                        Welcome back
                    </h2>
                    <p style={{ opacity: 0.8 }}>
                        Sign in to explore modern interior design and furniture
                        crafted for your home.
                    </p>
                </div>

                <div className="col-md-7" style={styles.form}>
                    <h3 className="mb-1" style={{ color: "#2f2f2f" }}>Login</h3>
                    <p className="text-muted mb-4">Please enter your details</p>

                    <form onSubmit={formik.handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                className="form-control"
                                placeholder="you@example.com"
                                style={styles.input}
                            />
                            {formik.errors.email && formik.touched.email && (
                                <div style={styles.color}>{formik.errors.email}</div>
                            )}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} 
                                value={formik.values.password}
                                className="form-control"
                                placeholder="••••••••"
                                style={styles.input}
                            />
                             {formik.errors.password && formik.touched.password && (
                                <div style={styles.color}>{formik.errors.password}</div>
                            )}
                        </div>

                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <div className="form-check">
                                <input type="checkbox" id="remember" className="form-check-input" />
                                <label htmlFor="remember" className="form-check-label">
                                    Remember me
                                </label>
                            </div>
                            <a href="#" style={styles.link}>Forgot password?</a>
                        </div>

                        <button type="submit" className="btn" style={styles.button}>
                            Sign In
                        </button>

                        <p className="text-center mt-4 mb-0 text-muted">
                            Don't have an account?{" "}
                            <a href="#" style={styles.link}>Sign up</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
