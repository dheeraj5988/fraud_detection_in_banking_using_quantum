import Link from "next/link"
import { Github } from "lucide-react"
import QRCode from "@/components/qr-code"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col py-6 md:py-10 gap-4 md:gap-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <div className="flex items-center gap-2 font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              </svg>
              Quantum Fraud Detection
            </div>
            <p className="text-sm text-muted-foreground">
              A banking-grade tool that helps simulate fraud detection using quantum machine learning.
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <p className="text-sm font-medium">Scan for GitHub repo</p>
            <QRCode url="https://github.com/dheeraj5988/qml_project" size={100} />
          </div>
        </div>

        <div className="border-t pt-4 md:pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <p className="font-medium">Project Team</p>
              <p className="text-sm text-muted-foreground">Developed by Dheeraj Sharma and Saket Bisnu</p>
              <p className="text-sm text-muted-foreground">Under the guidance of Dr. Nalini S</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 md:mt-0">
              <Link
                href="https://github.com/dheeraj5988/qml_project"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </Link>

              <Link
                href="https://colab.research.google.com/drive/1aDJXvFp9l_xq4NUEm_KeF3tUKD77WZWO?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v1h-3v-1a3 3 0 0 0-3-3h-2" />
                  <rect x="2" y="8" width="12" height="12" rx="2" />
                  <path d="M8 2v6" />
                  <path d="M2 8h12" />
                </svg>
                <span>Colab</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
