import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center justify-center space-y-6 md:space-y-8 text-center mb-8 md:mb-12">
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary/10">
          <Shield className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight sm:text-5xl">
          🛡️ Smart & Secure: Quantum-Powered Fraud Detection for Indian Transactions
        </h1>
        <p className="max-w-[800px] text-lg text-muted-foreground">
          With the rise of UPI, Paytm, and card-based payments across India, detecting fraud in digital transactions is
          more important than ever. Our hybrid Quantum + Classical AI system helps financial institutions identify
          suspicious activities before they cause harm.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/detect">
            <Button size="lg" className="gap-2">
              Start Simulation <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">🧠 What is This Project About?</h2>
            <p className="mb-4">
              Fraudulent transactions often hide within massive datasets and complex behavioral patterns. Traditional ML
              models struggle to detect subtle correlations across variables like credit score, income, and transaction
              flags.
            </p>
            <p className="mb-4">
              Our project uses Quantum Machine Learning (QML) to enhance fraud detection accuracy by modeling complex,
              high-dimensional patterns that classical ML models may miss.
            </p>
            <p>We've implemented a hybrid system that combines:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Classical models like SVM, Random Forest, and Logistic Regression</li>
              <li>
                A Quantum Kernel Model (QKM) built using IBM Qiskit, simulating quantum circuits on classical machines
              </li>
              <li>A simulation frontend to show how this system could integrate with Indian banking platforms</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">📊 About the Dataset</h2>
            {/* Mobile-friendly feature list (visible on small screens) */}
            <div className="md:hidden space-y-4">
              <p className="mb-4">
                We used a credit card application dataset containing the following features (A1–A14):
              </p>
              {[
                { id: "A1", desc: "Gender (0 = Male, 1 = Female)" },
                { id: "A2", desc: "Applicant's Age" },
                { id: "A3", desc: "Applicant's Credit Score" },
                { id: "A4", desc: "Employment Type (Salaried / Self-employed / Govt. Employee)" },
                { id: "A5", desc: "Marital Status" },
                { id: "A6", desc: "Number of Credit Cards owned" },
                { id: "A7", desc: "Monthly Income (in ₹)" },
                { id: "A8", desc: "Has defaulted before?" },
                { id: "A9", desc: "Has bounced cheque before?" },
                { id: "A10", desc: "Number of Loan Accounts" },
                { id: "A11", desc: "Has UPI fraud reported before?" },
                { id: "A12", desc: "Number of dependents" },
                { id: "A13", desc: "Average monthly spends" },
                { id: "A14", desc: "Total existing loan amount" },
              ].map((feature) => (
                <div key={feature.id} className="border-b pb-2">
                  <div className="font-medium">{feature.id}</div>
                  <div className="text-sm text-muted-foreground">{feature.desc}</div>
                </div>
              ))}
              <p className="mt-4 text-sm italic">
                📌 Note: These features were anonymized in the original dataset but mapped here with real-world banking
                relevance for better explainability in India.
              </p>
            </div>

            {/* Desktop table (hidden on mobile) */}
            <div className="hidden md:block overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 pr-4">Feature</th>
                    <th className="text-left py-2">Description (Adjusted for India)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 pr-4">A1</td>
                    <td>Gender (0 = Male, 1 = Female)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4">A2</td>
                    <td>Applicant's Age</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4">A3</td>
                    <td>Applicant's Credit Score</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4">A4</td>
                    <td>Employment Type (Salaried / Self-employed / Govt. Employee)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4">A5</td>
                    <td>Marital Status</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4">A6</td>
                    <td>Number of Credit Cards owned</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4">A7</td>
                    <td>Monthly Income (in ₹)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4">A8</td>
                    <td>Has defaulted before?</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4">A9</td>
                    <td>Has bounced cheque before?</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4">A10</td>
                    <td>Number of Loan Accounts</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4">A11</td>
                    <td>Has UPI fraud reported before?</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4">A12</td>
                    <td>Number of dependents</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4">A13</td>
                    <td>Average monthly spends</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4">A14</td>
                    <td>Total existing loan amount</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm italic">
              📌 Note: These features were anonymized in the original dataset but mapped here with real-world banking
              relevance for better explainability in India.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">🧮 How Do We Score the Risk of Fraud?</h2>
            <p className="mb-4">
              We use trained ML and QML models to compute a fraud likelihood score between 0% (Safe) and 100% (Fraud
              Likely) based on transaction inputs.
            </p>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">🎯 Sample Risk Scoring Rule:</h3>
              <div className="bg-muted p-4 rounded-md font-mono text-sm">
                <p>If Credit Score &lt; 20 and Income &gt; ₹1,00,000 → Fraud Risk: High (Score: 90%)</p>
                <p>If Applicant has previous fraud flags + &gt;3 active loans → Medium Risk</p>
                <p>If Credit Score &gt; 70 and all flags clear → Safe Transaction</p>
              </div>
            </div>
            <p className="mb-4">
              The scoring logic combines multiple inputs into a prediction that is generated either by:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>A Classical Model (SVM or RF)</li>
              <li>A Quantum Kernel Model (QKM) that uses quantum feature maps for improved pattern learning</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">🇮🇳 Why This Matters in the Indian Context</h2>
            <p className="mb-4">
              With India's rapid adoption of digital payments like UPI, Rupay, BHIM, and Paytm Wallets, fraud cases are
              also rising—particularly in:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>QR code scams</li>
              <li>Fake payment portals</li>
              <li>Identity misuse in applications for instant loans</li>
            </ul>
            <p>
              This system could be integrated into the banking server, running fraud detection in real-time as users
              initiate transactions. The frontend you see here is a simulation of what such a system might look like to
              bank staff or for internal audit/demo.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="max-w-6xl mx-auto mb-16">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">🧪 How to Use This Simulation</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Click on Detect Fraud</li>
              <li>Enter sample transaction details (age, gender, credit score, income, etc.)</li>
              <li>Click Check</li>
              <li>
                The model will simulate a prediction:
                <ul className="list-disc pl-6 mt-2">
                  <li>✅ Legitimate Transaction or ⚠️ Fraud Risk Detected</li>
                </ul>
              </li>
              <li>Try changing values like income and credit score to see how risk levels change.</li>
            </ol>
          </CardContent>
        </Card>
      </div>

      <div className="max-w-6xl mx-auto">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">📈 Future Plans</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Integrate actual quantum backend using IBM Qiskit Runtime</li>
              <li>Expand to detect real-time fraud in UPI transfers</li>
              <li>Build alert dashboards for Indian bank branches</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col gap-8 mt-12 md:mt-16">
        <h2 className="text-2xl font-bold text-center">Project Links</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="flex flex-col items-center w-full md:w-auto">
            <h3 className="text-lg font-semibold mb-2">GitHub Repository</h3>
            <div className="mb-2">
              <Link
                href="https://github.com/dheeraj5988/qml_project"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:underline"
              >
                github.com/dheeraj5988/qml_project
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
            <div className="border rounded-md p-2 bg-white">
              <img src="/github-repo-qr-code.png" alt="GitHub QR Code" className="h-[120px] w-[120px]" />
            </div>
          </div>

          <div className="flex flex-col items-center w-full md:w-auto">
            <h3 className="text-lg font-semibold mb-2">Colab Notebook</h3>
            <div className="mb-2">
              <Link
                href="https://colab.research.google.com/drive/1aDJXvFp9l_xq4NUEm_KeF3tUKD77WZWO?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:underline"
              >
                Open in Google Colab
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
            <div className="border rounded-md p-2 bg-white">
              <img src="/placeholder.svg?key=uy0kv" alt="Colab QR Code" className="h-[120px] w-[120px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
