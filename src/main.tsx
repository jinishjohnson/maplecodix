import React from "react"
import ReactDOM from "react-dom/client"
import App from "./app/App"
import "./index.css"

// In development mode, automatically verify cryptographic encryption integrity and secrets
if (import.meta.env.DEV) {
  import("./utils/cryptoVerification").then(({ runSecurityAudit }) => {
    ;(window as unknown as { runSecurityAudit: typeof runSecurityAudit }).runSecurityAudit =
      runSecurityAudit
    runSecurityAudit().then((report) => {
      console.log("🔒 [MapleCodix Security & Encryption Audit]:", report)
      ;(window as unknown as { __SECURITY_AUDIT_REPORT__?: typeof report }).__SECURITY_AUDIT_REPORT__ =
        report
    })
  })
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

