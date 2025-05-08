import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">About the Project</h1>
          <p className="text-xl text-muted-foreground">
            The Quantum-Enhanced Fraud Detection System is a cutting-edge demonstration of how quantum computing
            principles can revolutionize financial security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Classical vs Quantum Models</CardTitle>
              <CardDescription>How quantum computing enhances fraud detection</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Traditional fraud detection systems rely on classical machine learning algorithms that analyze patterns
                in transaction data. While effective, they have limitations when dealing with complex, high-dimensional
                data.
              </p>
              <p>
                Quantum machine learning leverages quantum computing principles to process complex patterns
                simultaneously, potentially offering exponential speedups for certain types of problems.
              </p>
              <p>
                Our system demonstrates how quantum algorithms could analyze multiple transaction features (A1-A14)
                simultaneously to identify fraud patterns that might be missed by classical systems.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Technical Implementation</CardTitle>
              <CardDescription>How our system works</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>This demonstration simulates a quantum-enhanced fraud detection system using:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>React and Next.js for the frontend interface</li>
                <li>Tailwind CSS for responsive design</li>
                <li>Client-side logic to simulate quantum algorithm behavior</li>
                <li>LocalStorage for transaction history persistence</li>
              </ul>
              <p>
                In a production environment, this would connect to actual quantum computing resources through cloud
                providers or specialized hardware.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Project Details</CardTitle>
            <CardDescription>Learn more about this project</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Features</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Transaction risk assessment based on multiple features</li>
                <li>Real-time fraud detection simulation</li>
                <li>Transaction history tracking</li>
                <li>Responsive design for all devices</li>
                <li>Dark mode support</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium">Team</h3>
              <p>This project was developed by Dheeraj Sharma and Saket Bisnu under the guidance of Dr. Nalini S.</p>
            </div>

            <div className="flex flex-col items-center gap-4 mt-8">
              <Link href="https://github.com/dheeraj5988/qml_project" target="_blank" rel="noopener noreferrer">
                <Button className="gap-2">
                  <Github className="h-5 w-5" />
                  View on GitHub
                </Button>
              </Link>
              <Link
                href="https://colab.research.google.com/drive/1aDJXvFp9l_xq4NUEm_KeF3tUKD77WZWO?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="gap-2">
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
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v1h-3v-1a3 3 0 0 0-3-3h-2" />
                    <rect x="2" y="8" width="12" height="12" rx="2" />
                    <path d="M8 2v6" />
                    <path d="M2 8h12" />
                  </svg>
                  Open in Google Colab
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
