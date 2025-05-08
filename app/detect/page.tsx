"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, CheckCircle, AlertTriangle, ArrowRight, RotateCcw } from "lucide-react"
import ResultsHistory from "@/components/results-history"

interface FormData {
  gender: string
  age: string
  creditScore: string
  employmentType: string
  maritalStatus: string
  educationLevel: string
  income: string
  a8: string
  a9: string
  a10: string
  a11: string
  a12: string
  a13: string
  a14: string
}

interface Result {
  id: string
  timestamp: number
  status: string
  score: number
  recommendation: string
  formData: FormData
}

const initialFormData: FormData = {
  gender: "",
  age: "",
  creditScore: "",
  employmentType: "",
  maritalStatus: "",
  educationLevel: "",
  income: "5000",
  a8: "",
  a9: "",
  a10: "",
  a11: "",
  a12: "",
  a13: "",
  a14: "",
}

export default function DetectFraudPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [result, setResult] = useState<Result | null>(null)
  const [history, setHistory] = useState<Result[]>([])
  const [activeTab, setActiveTab] = useState("form")
  const router = useRouter()

  useEffect(() => {
    // Load history from localStorage
    const savedHistory = localStorage.getItem("fraudDetectionHistory")
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory))
      } catch (error) {
        console.error("Failed to parse history:", error)
      }
    }
  }, [])

  const saveHistory = (newHistory: Result[]) => {
    setHistory(newHistory)
    localStorage.setItem("fraudDetectionHistory", JSON.stringify(newHistory))
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Simulate fraud detection logic
    const creditScore = Number.parseInt(formData.creditScore || "0")
    const income = Number.parseInt(formData.income || "0")
    const age = Number.parseInt(formData.age || "0")

    let status = ""
    let score = 0
    let recommendation = ""

    // Rule 1: Low credit score + high income = fraud risk
    if (creditScore < 20 && income > 1000) {
      status = "⚠️ Likely Fraudulent"
      score = 91
      recommendation = "Decline Transaction"
    }
    // Rule 2: High credit score + low income = legitimate
    else if (creditScore > 60 && income < 1000) {
      status = "✅ Legitimate Transaction"
      score = 75
      recommendation = "Proceed"
    }
    // Rule 3: Young age + high credit score = medium risk
    else if (age < 25 && creditScore > 70) {
      status = "🟡 Medium Risk"
      score = 60
      recommendation = "Additional Verification Required"
    }
    // Rule 4: Unemployed + high income = fraud risk
    else if (formData.employmentType === "unemployed" && income > 3000) {
      status = "⚠️ Likely Fraudulent"
      score = 85
      recommendation = "Decline Transaction"
    }
    // Default case
    else {
      status = "🟡 Medium Risk"
      score = 50
      recommendation = "Additional Verification Required"
    }

    const newResult: Result = {
      id: Date.now().toString(),
      timestamp: Date.now(),
      status,
      score,
      recommendation,
      formData: { ...formData },
    }

    setResult(newResult)
    saveHistory([newResult, ...history].slice(0, 10)) // Keep only the 10 most recent results
    setActiveTab("result")
  }

  const resetForm = () => {
    setFormData(initialFormData)
    setResult(null)
    setActiveTab("form")
  }

  const clearHistory = () => {
    setHistory([])
    localStorage.removeItem("fraudDetectionHistory")
  }

  return (
    <div className="container mx-auto px-4 py-6 md:py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Check Transaction Risk</h1>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="form">Transaction Form</TabsTrigger>
            <TabsTrigger value="result" disabled={!result}>
              Results
            </TabsTrigger>
          </TabsList>

          <TabsContent value="form" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Enter Transaction Details</CardTitle>
                <CardDescription>Fill in the details below to check if a transaction is fraudulent.</CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                    {/* A1: Gender */}
                    <div className="space-y-2">
                      <Label htmlFor="gender">A1: Gender</Label>
                      <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                        <SelectTrigger id="gender">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* A2: Age */}
                    <div className="space-y-2">
                      <Label htmlFor="age">A2: Age</Label>
                      <Input
                        id="age"
                        type="number"
                        placeholder="Enter age"
                        value={formData.age}
                        onChange={(e) => handleInputChange("age", e.target.value)}
                      />
                    </div>

                    {/* A3: Credit Score */}
                    <div className="space-y-2">
                      <Label htmlFor="creditScore">A3: Credit Score (0-100)</Label>
                      <Input
                        id="creditScore"
                        type="number"
                        placeholder="Enter credit score"
                        min="0"
                        max="100"
                        value={formData.creditScore}
                        onChange={(e) => handleInputChange("creditScore", e.target.value)}
                      />
                    </div>

                    {/* A4: Employment Type */}
                    <div className="space-y-2">
                      <Label htmlFor="employmentType">A4: Employment Type</Label>
                      <Select
                        value={formData.employmentType}
                        onValueChange={(value) => handleInputChange("employmentType", value)}
                      >
                        <SelectTrigger id="employmentType">
                          <SelectValue placeholder="Select employment type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="salaried">Salaried</SelectItem>
                          <SelectItem value="self-employed">Self-employed</SelectItem>
                          <SelectItem value="unemployed">Unemployed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* A5: Marital Status */}
                    <div className="space-y-2">
                      <Label htmlFor="maritalStatus">A5: Marital Status</Label>
                      <Select
                        value={formData.maritalStatus}
                        onValueChange={(value) => handleInputChange("maritalStatus", value)}
                      >
                        <SelectTrigger id="maritalStatus">
                          <SelectValue placeholder="Select marital status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="single">Single</SelectItem>
                          <SelectItem value="married">Married</SelectItem>
                          <SelectItem value="divorced">Divorced</SelectItem>
                          <SelectItem value="widowed">Widowed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* A6: Education Level */}
                    <div className="space-y-2">
                      <Label htmlFor="educationLevel">A6: Education Level</Label>
                      <Select
                        value={formData.educationLevel}
                        onValueChange={(value) => handleInputChange("educationLevel", value)}
                      >
                        <SelectTrigger id="educationLevel">
                          <SelectValue placeholder="Select education level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="high-school">High School</SelectItem>
                          <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                          <SelectItem value="masters">Master's Degree</SelectItem>
                          <SelectItem value="phd">PhD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* A7: Income */}
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="income" className="text-sm md:text-base">
                        A7: Income (Annual)
                      </Label>
                      <span className="text-sm font-medium">${formData.income}</span>
                    </div>
                    <Slider
                      id="income"
                      min={0}
                      max={10000}
                      step={100}
                      value={[Number.parseInt(formData.income) || 0]}
                      onValueChange={(value) => handleInputChange("income", value[0].toString())}
                      className="w-full"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* A8-A14: Additional Features */}
                    {[8, 9, 10, 11, 12, 13, 14].map((num) => (
                      <div key={num} className="space-y-2">
                        <Label htmlFor={`a${num}`}>{`A${num}: Transaction Feature ${num}`}</Label>
                        <Input
                          id={`a${num}`}
                          type="number"
                          placeholder={`Enter value for A${num}`}
                          value={formData[`a${num}` as keyof FormData]}
                          onChange={(e) => handleInputChange(`a${num}` as keyof FormData, e.target.value)}
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button type="button" variant="outline" onClick={resetForm}>
                    <RotateCcw className="mr-2 h-4 w-4" /> Reset
                  </Button>
                  <Button type="submit">
                    Check Transaction <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>

          <TabsContent value="result" className="mt-6">
            {result && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Transaction Analysis Result</CardTitle>
                    <CardDescription>Quantum-enhanced fraud detection analysis</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex flex-col items-center justify-center p-4 md:p-6 bg-muted rounded-lg">
                      {result.status.includes("Fraudulent") ? (
                        <AlertCircle className="h-16 w-16 text-destructive mb-4" />
                      ) : result.status.includes("Legitimate") ? (
                        <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                      ) : (
                        <AlertTriangle className="h-16 w-16 text-amber-500 mb-4" />
                      )}

                      <h3 className="text-2xl font-bold mb-2">{result.status}</h3>

                      <div className="w-full max-w-xs md:max-w-md mt-4">
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Risk Score</span>
                          <span className="text-sm font-medium">{result.score}%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2.5">
                          <div
                            className={`h-2.5 rounded-full ${
                              result.score > 70 ? "bg-destructive" : result.score > 40 ? "bg-amber-500" : "bg-green-500"
                            }`}
                            style={{ width: `${result.score}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="mt-6 text-center">
                        <p className="text-lg font-medium mb-1">Recommendation</p>
                        <p
                          className={`text-xl font-bold ${
                            result.recommendation.includes("Decline")
                              ? "text-destructive"
                              : result.recommendation.includes("Additional")
                                ? "text-amber-500"
                                : "text-green-500"
                          }`}
                        >
                          {result.recommendation}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="space-y-1">
                        <p className="font-medium">Gender:</p>
                        <p className="text-muted-foreground capitalize">{result.formData.gender || "Not provided"}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium">Age:</p>
                        <p className="text-muted-foreground">{result.formData.age || "Not provided"}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium">Credit Score:</p>
                        <p className="text-muted-foreground">{result.formData.creditScore || "Not provided"}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium">Employment:</p>
                        <p className="text-muted-foreground capitalize">
                          {result.formData.employmentType || "Not provided"}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium">Income:</p>
                        <p className="text-muted-foreground">${result.formData.income || "Not provided"}</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={() => setActiveTab("form")}>
                      Back to Form
                    </Button>
                    <Button onClick={resetForm}>Check Another Transaction</Button>
                  </CardFooter>
                </Card>

                <ResultsHistory history={history} clearHistory={clearHistory} />
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
